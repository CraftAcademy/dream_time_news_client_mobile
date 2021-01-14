import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Articles from '../modules/Articles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = () => {
  const { articles } = useSelector((state) => state);

  useEffect(() => {
    Articles.index();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      {articles && (
        <FlatList
          data={articles}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      )}
    </View>
  );
};

export default HomeScreen;
