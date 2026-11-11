# Manii

AI-powered manifestation companion — calm, premium, personal. Built with Expo (React Native) and TypeScript.

This repo currently ships a **welcome screen only** (no auth, tabs, or Supabase yet). Open it on a phone with **Expo Go**.

## Prerequisites

- Node.js 20+ (LTS recommended)
- [Expo Go](https://expo.dev/go) on your iPhone or Android device
- Same Wi‑Fi as this machine for LAN mode (or use tunnel — see below)

## Run with Expo Go

```bash
npm install
npm start
```

Then:

1. Wait for the Metro bundler QR code in the terminal (or browser Dev Tools).
2. **iOS:** open the Camera app and scan the QR code → open in Expo Go.
3. **Android:** open Expo Go and use Scan QR code.

Equivalent scripts:

| Script | Command |
| --- | --- |
| Start (LAN) | `npm start` / `npx expo start` |
| Tunnel | `npm run tunnel` / `npx expo start --tunnel` |
| Web preview | `npm run web` |

## LAN vs tunnel

- **LAN (default):** fastest. Phone and computer must be on the same network. Corporate/guest Wi‑Fi or VPNs often block device discovery — if the QR opens Expo Go but the bundle never loads, switch to tunnel.
- **Tunnel:** `npm run tunnel` routes through Expo’s relay so the phone does not need LAN reachability. Slightly slower; use when LAN fails.

If Expo asks to install `@expo/ngrok` for tunnel mode, accept the install once.

## Project layout

- `app/` — Expo Router screens (`index` = welcome)
- `components/` — UI pieces (welcome atmosphere)
- `constants/theme.ts` — dark palette (`#000000` / `#212121` / `#fcf9fb`, teal accent)
- Context docs at repo root: `manii_vision`, `manii_technical_overview`, `manii_ui_and_ux_inspiration_guidelines`

## App identity

| Field | Value |
| --- | --- |
| Name | Manii |
| Slug | `manii` |
| Scheme | `manii` |
| iOS bundle ID | `com.optixengine.manii` |
| Android package | `com.optixengine.manii` |
