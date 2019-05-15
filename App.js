import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ComponentUnderTest } from './src/ComponentUnderTest';

export default () => (
  <View style={styles.container}>
    <ComponentUnderTest />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
