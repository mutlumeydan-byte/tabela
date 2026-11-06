import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  View, Text, TextInput, Pressable, Animated, Easing, StyleSheet, useWindowDimensions, ScrollView, Platform, KeyboardAvoidingView, Modal,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Localization from 'expo-localization';
import * as KeepAwake from 'expo-keep-awake';
import * as Brightness from 'expo-brightness';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as Haptics from 'expo-haptics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { L, LANGS } from './i18n';

const PAL = [
  ['#000000', '#ffe600'], ['#000000', '#ffffff'], ['#000000', '#ff3b30'], ['#000000', '#34c759'],
  ['#000000', '#5ac8fa'], ['#ffffff', '#000000'], ['#ff3b30', '#ffffff'], ['#1e40ff', '#ffffff'],
  ['#000000', '#ff2d95'], ['#000000', '#ff9500'], ['#7c3aed', '#ffffff'], ['#ffe600', '#000000'],
];

// Full color grid for the custom picker: grays + 12 hues x 5 shades
function hsl(h, s, l) {
  s /= 100; l /= 100; const k = n => (n + h / 30) % 12; const a = s * Math.min(l, 1 - l);
  const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return '#' + [f(0), f(8), f(4)].map(x => Math.round(x * 255).toString(16).padStart(2, '0')).join('');
}
const GRID = [
  ['#000000', '#1c1c1e', '#3a3a3c', '#636366', '#8e8e93', '#aeaeb2', '#d1d1d6', '#e5e5ea', '#f2f2f7', '#ffffff', '#ffe600', '#ff2d95'],
  ...[88, 72, 55, 40, 25].map(l => Array.from({ length: 12 }, (_, i) => hsl(i * 30, 100, l))),
];

function deviceLang() {
  try { const c = (Localization.getLocales()[0]?.languageCode || 'en').toLowerCase(); return L[c] ? c : 'en'; } catch { return 'en'; }
}

export default function App() {
  const { width, height } = useWindowDimensions();
  const [lang, setLang] = useState('en');
  const [text, setText] = useState('');
  const [color, setColor] = useState(0);          // index into PAL, or -1 = custom
  const [custom, setCustom] = useState(['#000000', '#ffe600']);
  const [picking, setPicking] = useState(null);     // null | 0 (background) | 1 (text)
  const [mode, setMode] = useState('static');   // static | scroll | blink
  const [rot, setRot] = useState(false);
  const [showing, setShowing] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [textW, setTextW] = useState(0);
  const prevBrightness = useRef(null);
  const anim = useRef(new Animated.Value(0)).current;
  const loop = useRef(null);
  const t = (i) => L[lang][i];
  const [bg, fg] = color >= 0 ? PAL[color] : custom;
  const pick = (c) => {
    const next = [...(color >= 0 ? PAL[color] : custom)]; next[picking] = c;
    setCustom(next); setColor(-1); setPicking(null); save({ color: -1, custom: next });
    try { Haptics.selectionAsync(); } catch {}
  };

  useEffect(() => {
    (async () => {
      try {
        const s = JSON.parse((await AsyncStorage.getItem('tabela')) || '{}');
        setLang(s.lang && L[s.lang] ? s.lang : deviceLang());
        if (s.text) setText(s.text);
        if (Array.isArray(s.custom) && s.custom.length === 2) setCustom(s.custom);
        if (typeof s.color === 'number' && s.color >= -1 && s.color < PAL.length) setColor(s.color);
        if (s.mode) setMode(s.mode);
      } catch { setLang(deviceLang()); }
    })();
  }, []);
  const save = useCallback((patch) => {
    AsyncStorage.getItem('tabela').then(v => AsyncStorage.setItem('tabela', JSON.stringify({ ...(JSON.parse(v || '{}')), ...patch }))).catch(() => {});
  }, []);

  // Display dimensions (rotated means the long side is horizontal for the viewer)
  const dispW = rot ? height : width;
  const dispH = rot ? width : height;

  const begin = async () => {
    const v = text.trim(); if (!v) return;
    try { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); } catch {}
    save({ text: v, color, custom, mode, lang });
    setShowing(true);
    try { KeepAwake.activateKeepAwakeAsync(); } catch {}
    try {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === 'granted') { prevBrightness.current = await Brightness.getBrightnessAsync(); await Brightness.setBrightnessAsync(1); }
    } catch {}
  };
  const end = async () => {
    setShowing(false);
    if (loop.current) { loop.current.stop(); loop.current = null; }
    try { KeepAwake.deactivateKeepAwake(); } catch {}
    try { if (prevBrightness.current != null) await Brightness.setBrightnessAsync(prevBrightness.current); } catch {}
  };

  // Fit text: compute font size so text fits width (static/blink), using measured width at a probe size
  const PROBE = 100;
  const onProbe = (e) => setTextW(e.nativeEvent.layout.width);
  useEffect(() => {
    if (!showing) return;
    if (mode === 'scroll') { setFontSize(dispH * 0.75); return; }
    if (textW > 0) {
      const byW = (dispW * 0.94) / (textW / PROBE);
      setFontSize(Math.max(16, Math.min(byW, dispH * 0.75)));
    }
  }, [showing, textW, mode, dispW, dispH]);

  useEffect(() => {
    if (!showing) return;
    anim.setValue(0);
    if (mode === 'scroll') {
      const run = () => {
        anim.setValue(0);
        loop.current = Animated.timing(anim, { toValue: 1, duration: Math.max(4000, (textW * fontSize / PROBE + dispW) * 6), easing: Easing.linear, useNativeDriver: true });
        loop.current.start(({ finished }) => { if (finished) run(); });
      };
      run();
    } else if (mode === 'blink') {
      loop.current = Animated.loop(Animated.sequence([
        Animated.timing(anim, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(anim, { toValue: 0, duration: 500, useNativeDriver: true }),
      ]));
      loop.current.start();
    }
    return () => { if (loop.current) loop.current.stop(); };
  }, [showing, mode, fontSize, textW, dispW]);

  const scrollDist = textW * fontSize / PROBE + dispW;
  const translateX = anim.interpolate({ inputRange: [0, 1], outputRange: [dispW, -scrollDist + dispW] });
  const opacity = mode === 'blink' ? anim.interpolate({ inputRange: [0, 0.49, 0.5, 1], outputRange: [1, 1, 0, 0] }) : 1;

  const cycleLang = () => { const n = LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length]; setLang(n); save({ lang: n }); };

  if (showing) {
    return (
      <Pressable style={[styles.show, { backgroundColor: bg }]} onPress={end}>
        <StatusBar hidden />
        {/* probe for measuring */}
        <Text onLayout={onProbe} style={[styles.probe, { fontSize: PROBE }]} numberOfLines={1}>{text.trim()}</Text>
        <View style={{ width: dispW, height: dispH, alignItems: 'center', justifyContent: 'center', transform: rot ? [{ rotate: '90deg' }] : [] }}>
          <Animated.Text
            numberOfLines={1}
            style={[styles.big, { color: fg, fontSize, opacity, transform: mode === 'scroll' ? [{ translateX }] : [] }, mode === 'scroll' && { position: 'absolute', left: 0 }]}>
            {text.trim()}
          </Animated.Text>
          <Text style={[styles.hint, { color: fg }]}>{t(6)}</Text>
        </View>
      </Pressable>
    );
  }

  return (
    <KeyboardAvoidingView style={styles.root} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <StatusBar style="light" />
      <Pressable onPress={cycleLang} style={styles.lang} hitSlop={10}><Text style={styles.langText}>{lang.toUpperCase()}</Text></Pressable>
      <ScrollView contentContainerStyle={styles.setup} keyboardShouldPersistTaps="handled">
        <Text style={styles.h1}>TABELA</Text>
        <TextInput
          style={styles.input} value={text} onChangeText={setText} placeholder={t(0)} placeholderTextColor="#555"
          maxLength={60} multiline autoCapitalize="characters" returnKeyType="done" blurOnSubmit
        />
        <View style={styles.row}>
          {PAL.map((p, i) => (
            <Pressable key={i} onPress={() => setColor(i)} style={[styles.sw, i === color && styles.swOn]}>
              <View style={[styles.swHalf, { backgroundColor: p[0] }]} /><View style={[styles.swHalf, { backgroundColor: p[1] }]} />
            </Pressable>
          ))}
        </View>
        <View style={styles.opt}>
          {[0, 1].map(k => (
            <Pressable key={k} onPress={() => setPicking(k)} style={[styles.btn, styles.pickBtn, color === -1 && styles.pickOn]}>
              <View style={[styles.pickDot, { backgroundColor: k === 0 ? bg : fg }]} />
              <Text style={styles.btnText}>{t(k === 0 ? 7 : 8)}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.opt}>
          {[['static', 1], ['scroll', 2], ['blink', 3]].map(([m, i]) => (
            <Pressable key={m} onPress={() => setMode(m)} style={[styles.btn, mode === m && styles.btnOn]}>
              <Text style={[styles.btnText, mode === m && styles.btnTextOn]}>{t(i)}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.opt}>
          <Pressable onPress={() => setRot(!rot)} style={[styles.btn, rot && styles.btnOn]}><Text style={[styles.btnText, rot && styles.btnTextOn]}>{t(4)}</Text></Pressable>
        </View>
        <Pressable onPress={begin} style={[styles.go, { backgroundColor: fg === '#000000' ? '#ffe600' : fg }]}>
          <Text style={styles.goText}>{t(5)}</Text>
        </Pressable>
        <View style={styles.preview}>
          <View style={[styles.previewBox, { backgroundColor: bg }]}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={[styles.previewText, { color: fg }]}>{text.trim() || t(0)}</Text>
          </View>
        </View>
      </ScrollView>
      <Modal visible={picking !== null} transparent animationType="fade" onRequestClose={() => setPicking(null)}>
        <Pressable style={styles.modalBg} onPress={() => setPicking(null)}>
          <Pressable style={styles.modalCard} onPress={() => {}}>
            <Text style={styles.modalTitle}>{picking !== null ? t(picking === 0 ? 7 : 8) : ''}</Text>
            {GRID.map((row, r) => (
              <View key={r} style={styles.gridRow}>
                {row.map(c => {
                  const cur = picking === 0 ? bg : fg;
                  return <Pressable key={c + r} onPress={() => pick(c)} style={[styles.cell, { backgroundColor: c }, cur.toLowerCase() === c && styles.cellOn]} />;
                })}
              </View>
            ))}
            <View style={[styles.previewBox, { backgroundColor: bg, marginTop: 14 }]}>
              <Text numberOfLines={1} adjustsFontSizeToFit style={[styles.previewText, { color: fg }]}>{text.trim() || 'ABC'}</Text>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0b0b0b' },
  setup: { flexGrow: 1, justifyContent: 'center', padding: 22, paddingTop: 70, gap: 18 },
  h1: { color: '#777', fontSize: 13, letterSpacing: 6, textAlign: 'center', fontWeight: '600' },
  input: { backgroundColor: '#161616', color: '#fff', borderWidth: 1, borderColor: '#2a2a2a', borderRadius: 18, padding: 18, fontSize: 26, fontWeight: '800', textAlign: 'center', minHeight: 110, textAlignVertical: 'center' },
  row: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 12 },
  sw: { width: 38, height: 38, borderRadius: 19, overflow: 'hidden', flexDirection: 'row', borderWidth: 3, borderColor: 'transparent', transform: [{ rotate: '45deg' }] },
  swOn: { borderColor: '#fff', transform: [{ rotate: '45deg' }, { scale: 1.15 }] },
  swHalf: { flex: 1 },
  opt: { flexDirection: 'row', justifyContent: 'center', gap: 10, flexWrap: 'wrap' },
  btn: { backgroundColor: '#161616', borderWidth: 1, borderColor: '#2a2a2a', borderRadius: 999, paddingVertical: 10, paddingHorizontal: 16 },
  btnOn: { backgroundColor: '#fff', borderColor: '#fff' },
  btnText: { color: '#ddd', fontSize: 13, letterSpacing: 1.5, fontWeight: '600' },
  btnTextOn: { color: '#000' },
  go: { borderRadius: 999, paddingVertical: 18, alignItems: 'center', marginTop: 4 },
  goText: { color: '#000', fontSize: 18, fontWeight: '900', letterSpacing: 4 },
  preview: { alignItems: 'center', marginTop: 4 },
  previewBox: { width: '100%', height: 70, borderRadius: 14, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#2a2a2a', paddingHorizontal: 12 },
  previewText: { fontSize: 32, fontWeight: '900', letterSpacing: 1 },
  pickBtn: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  pickOn: { borderColor: '#fff' },
  pickDot: { width: 18, height: 18, borderRadius: 9, borderWidth: 1, borderColor: '#555' },
  modalBg: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', alignItems: 'center', justifyContent: 'center', padding: 16 },
  modalCard: { backgroundColor: '#161616', borderRadius: 22, padding: 16, width: '100%', maxWidth: 440, borderWidth: 1, borderColor: '#2a2a2a' },
  modalTitle: { color: '#aaa', fontSize: 12, letterSpacing: 3, textAlign: 'center', marginBottom: 12, fontWeight: '700' },
  gridRow: { flexDirection: 'row' },
  cell: { flex: 1, aspectRatio: 1, margin: 1.5, borderRadius: 6 },
  cellOn: { borderWidth: 3, borderColor: '#fff' },
  lang: { position: 'absolute', top: 54, right: 18, zIndex: 2, borderWidth: 1, borderColor: '#333', borderRadius: 999, paddingVertical: 7, paddingHorizontal: 10 },
  langText: { color: '#aaa', fontSize: 12, letterSpacing: 2 },
  show: { flex: 1, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  probe: { position: 'absolute', opacity: 0, top: -9999, fontWeight: '900', letterSpacing: 1 },
  big: { fontWeight: '900', letterSpacing: 1, textAlign: 'center', includeFontPadding: false },
  hint: { position: 'absolute', bottom: 18, fontSize: 11, letterSpacing: 4, opacity: 0.35 },
});
