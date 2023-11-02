import Login from './src/pages/Login';
import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Login />
    </View>
  );
}
