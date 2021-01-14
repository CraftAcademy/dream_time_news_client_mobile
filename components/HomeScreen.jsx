import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = () => {
  const { appTitle } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <Text>{appTitle}</Text>
      <StatusBar style='light' />
    </View>
  );
};

export default HomeScreen