//Liam Jimenez 2022-0818

import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      source={{ uri: 'https://www.youtube.com/embed/4QfCyTNg0B0' }}
      allowsFullscreenVideo={true}
    />
  );
}








