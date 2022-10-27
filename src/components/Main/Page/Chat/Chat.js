import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//StatusBar.setHidden(true);
export default function Chat() {
  return (
    <View style={styles.container}>
      <Text>Component chat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
