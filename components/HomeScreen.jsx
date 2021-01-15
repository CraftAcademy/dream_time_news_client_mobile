import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import { StyleSheet, View, FlatList } from "react-native";
import Articles from "../modules/Articles";
import ArticleIndexDetails from "./ArticleIndexDetails";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const HomeScreen = () => {
  const { articles } = useSelector(state => state);

  useEffect(() => {
    Articles.index();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ArticleIndexDetails article={item} />}
      />
    </View>
  );
};

export default HomeScreen;
