# Yapılacaklar (Tabela + Nefes + Piti Piti)

Son güncelleme: 6 Kasım 2026

## Durum
- **Tabela 1.0** — App Store'da "Waiting for Review" (App ID 6831715080)
- **Nefes 1.0** — App Store'da "Waiting for Review" (App ID 6831660925, mağaza adı "Nefes - One Minute")

## Tabela 1.1
- [ ] **Serbest renk seçici (Zemin / Yazı)** — kullanıcı en başta istemişti, 1.0'a girmedi.
      Kod `renk-secici` dalında, henüz test edilmedi. Test → main'e al → `eas build` + `eas submit`.
- [ ] Meksika İspanyolcası (es-MX) için farklı bir uygulama adı (İspanya ile aynı olamıyor).
- [ ] Android / Google Play (`eas build -p android`; görseller `store/screenshots/*-android*` hazır).

## Nefes
- [ ] Apple Watch sürümü (bilekte titreşimle nefes).
- [ ] Android / Google Play.
- [ ] GitHub'daki ASC_PRIVATE_KEY secret'ını AuthKey_74T2T6F3L2.p8 ile güncelle (eskisi Apple tarafından reddediliyor).
- [ ] Mağaza metinlerini ve görselleri 14 dile çıkar (Tabela'daki gibi; `scripts/upload-*.mjs` iş akışları kopyalanabilir).

## Piti Piti 1.0
- [ ] `eas build --auto-submit` (kullanıcı, PowerShell) → App Store'da uygulama kaydı oluşur.
- [ ] Actions → metin + görsel yükle (folder = `piti`, app_id = yeni ID).
- [ ] Fiyat $0.99, yaş sınırı, gizlilik "veri toplanmıyor", Submit for Review.
- [ ] Android / Google Play.

## Tesbih 1.0
- [ ] `eas build --auto-submit` (kullanıcı) → App Store kaydı.
- [ ] Actions → metin + görsel (folder = `tesbih`), fiyat/gizlilik/yaş/içerik hakları, Submit.
- [ ] İleride: ses tuşlarıyla sayma (native modül gerekir), Apple Watch.

## Fikir havuzu
- **Park / AVM otopark bulucu (Mutlu'nun fikri):** kolondaki QR → "Mavi asansör, B2, C14, çıkınca sağa" kartı + eşe gönder. Uygulama değil B2B (AVM). Önce QR + web sayfası demosu.
- Sessiz Sınıf (gürültü lambası) — pazar küçük, ücretsiz web rakipleri var.
- Skor tabelası, Kaç Gün? (widget), Çivi (tablo asma).

## Nasıl güncellenir (her iki uygulama)
PowerShell, proje klasöründe:
```
$env:EAS_NO_VCS = "1"
npx.cmd eas-cli build -p ios --profile production
npx.cmd eas-cli submit -p ios --latest
```
Metin / görsel değişince: GitHub → Actions → "Upload App Store texts" / "Upload App Store screenshots" → app_id gir → Run.
