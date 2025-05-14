import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'dummyApp',
  webDir: 'dist',

  plugins: {
   "StatusBar": {
      "overlaysWebView": false,
      "style": "LIGHT",
      "backgroundColor": "#ffffffff"
    }
}

};

export default config;
