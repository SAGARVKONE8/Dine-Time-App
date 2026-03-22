# Dine-Time-App 🥘

## Overview
Dine-Time is a modern React Native mobile app for restaurant discovery and booking. Built with Expo Router, TailwindCSS (NativeWind), Firebase, and smooth animations with Reanimated. Features tab navigation, authentication, restaurant details, date/guest pickers, and slot finder.

![Screenshot](assets/images/homeBanner.png)

## ✨ Features
- Expo Router file-based navigation (tabs, auth, restaurant/[id], testing)
- TailwindCSS styling with NativeWind
- Firebase integration (auth/firestore?)
- Date & Guest picker components for bookings
- Smooth UI with blur effects, haptics, splash screen
- Cross-platform: iOS, Android, Web

## 📱 Prerequisites
- [Node.js](https://nodejs.org) (v20+)
- [Expo CLI](https://docs.expo.dev/get-started/installation/): `npm install -g expo-cli` or use `npx`
- Expo Go app (mobile testing)
- Android Studio / Xcode (native builds)
- Firebase project (if using auth/firestore - update config/firebaseConfig.js)

## 🚀 Quick Start

1. **Clone the repo**
   ```bash
   git clone <your-repo-url>
   cd Dine-Time-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   - Press `a` → Android emulator/device
   - Press `i` → iOS simulator/device
   - Press `w` → Web browser

4. **Open in Expo Go** (scan QR code from terminal)

## 📂 Project Structure
```
Dine-Time-App/
├── app/              # Expo Router screens & layouts
│   ├── (tabs)/       # Main tab navigation
│   ├── (auth)/       # Auth screens
│   ├── restaurant/   # Restaurant details & booking
│   └── testing/      # Test screens
├── components/       # Reusable UI (DatePicker, GuestPicker, FindSlots)
├── assets/           # Images, fonts, icons
├── config/           # Firebase config
├── store/            # Zustand stores (restaurants)
├── utils/            # Schemas (auth, guest form)
├── global.css        # Tailwind styles
└── package.json      # Expo 54, React Native 0.81
```

## 🔧 Scripts
| Command | Description |
|---------|-------------|
| `npm start` | Start dev server |
| `npm run android` | Android |
| `npm run ios` | iOS |
| `npm run web` | Web |
| `npm run lint` | ESLint |

## 📱 Building for Production
```bash
# Install EAS CLI
npm install -g eas-cli

# Login
eas login

# Build (uses eas.json)
eas build --platform android  # or ios
```

## 🔍 Troubleshooting
- **Metro bundler issues**: `npm start --clear` or delete `.expo/`
- **Fonts not loading**: Check `expo-font` usage
- **Firebase**: Update `config/firebaseConfig.js` with your project creds
- **Animations**: Ensure `babel.config.js` has Reanimated plugin
- **Tailwind**: `npx tailwindcss init` if needed

## 🤝 Contributing
1. Fork & clone
2. `npm install`
3. Create branch: `git checkout -b feature/xyz`
4. Commit: `git commit -m 'feat: add xyz'`
5. Push & PR

## 📄 License
MIT

---

Built with ❤️ using Expo, React Native, TailwindCSS & Firebase

[Expo Docs](https://docs.expo.dev) | [NativeWind](https://www.nativewind.dev) | [Firebase](https://firebase.google.com)
