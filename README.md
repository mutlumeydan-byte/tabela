# Tabela — big text sign

Web: https://tabela-mutlumeydan-bytes-projects.vercel.app
Privacy: https://tabela-mutlumeydan-bytes-projects.vercel.app/privacy.html

## Release (iOS)
PowerShell, in this folder:
```
$env:EAS_NO_VCS = "1"
npm.cmd install
npx.cmd eas-cli init
npx.cmd eas-cli build -p ios --profile production
npx.cmd eas-cli submit -p ios --latest
npx.cmd eas-cli metadata:push
```
- `metadata:push` uploads name/subtitle/description/keywords in 20 App Store locales from `store.config.json`
  (edit texts in `store/listing.js`, then `node store/listing.js`).
- Screenshots (14 languages × iPhone 6.9", iPhone 6.1", iPad 13", Android) are in `store/screenshots/`.
  Upload them with GitHub → Actions → "Upload App Store screenshots" → app_id = the app's Apple ID.
  Regenerate: `cd store && node gen.js` (needs Playwright + @fontsource Noto fonts).

## Android
```
npx.cmd eas-cli build -p android --profile production
```
Upload the AAB to Play Console; use `store/screenshots/*-android-*.jpg` (phone) and `*-androidtab-*.jpg` (tablet).
