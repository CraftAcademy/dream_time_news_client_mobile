import React, { useEffect } from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import { useSelector } from "react-redux";
import Articles from "../modules/Articles";

const ShowArticleScreen = props => {
  const { id } = props.route.params.article;
  const { currentArticle } = useSelector(state => state);

  useEffect(() => {
    Articles.show(id);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: currentArticle.image }} style={styles.image} />
      <Text style={styles.title}>{currentArticle.title}</Text>
      <Text style={[styles.content]}>{currentArticle.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    width: Dimensions.get("window").width,
    padding: 7,
    paddingLeft: 10,
    paddingRight: 8,
    bottom: 8,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  title: {
    padding: 20,
    color: "teal",
    fontSize: 30,
  },
  subtitle: {
    color: "white",
    fontSize: 16,
  },
  body: {
    padding: 20,
    fontSize: 18,
  },
  image: {
    height: 250,
    width: Dimensions.get("window").width,
  },
});

export default ShowArticleScreen;
