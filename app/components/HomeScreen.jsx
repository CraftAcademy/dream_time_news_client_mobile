import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import { StyleSheet, View, FlatList } from "react-native";
import Articles from "../modules/Articles";
import { styles } from '../styles/styles'
import ArticleIndexDetails from "./ArticleIndexDetails";

const HomeScreen = ({navigation}) => {
  const { articles } = useSelector(state => state);

  useEffect(() => {
    Articles.index();
  }, []);

  return (
    <View style={styles.homeContainer}>
      <StatusBar style="light" />
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ArticleIndexDetails navigation={navigation} article={item} />}
      />
    </View>
  );
};

export default HomeScreen;
