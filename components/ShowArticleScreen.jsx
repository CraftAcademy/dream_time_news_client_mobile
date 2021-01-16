import React, { useEffect } from "react";
import { Dimensions, Image, StyleSheet, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Articles from "../modules/Articles";

const ShowArticleScreen = props => {
  const { id } = props.route.params.article;
  const { currentArticle } = useSelector(state => state);

  useEffect(() => {
    Articles.show(id);
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image source={{ uri: currentArticle.image }} style={styles.image} />
      <Text style={styles.title}>{currentArticle.title}</Text>
      <Text style={styles.sub_title}>{currentArticle.sub_title}</Text>
      <Text style={styles.content}>{currentArticle.content}</Text>
      <Text style={styles.author}>{currentArticle.author}</Text>
      <Text style={styles.created_at}>{currentArticle.created_at}</Text>
    </ScrollView>
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
    padding: 25,
    color: "#38302f",
    fontSize: 40,
  },
  sub_title: {
    color: "#4a4443",
    fontSize: 23,
    bottom: 8,
    paddingLeft: 25,
    paddingRight: 20,
  },
  content: {
    color: "#343940",
    padding: 7,
    paddingLeft: 25,
    paddingRight: 20,
    paddingBottom: 20,
    bottom: 8,
    fontSize: 18,
  },
  author: {
    color: "#9c0ee8",
    fontSize: 15,
    bottom: 15,
    paddingLeft: 25,
    paddingRight: 20,
    paddingBottom: 20,
  },
  created_at: {
    color: "#9c0ee8",
    fontSize: 15,
    bottom: 15,
    paddingLeft: 25,
    paddingRight: 20,
    paddingBottom: 40,
  },
  image: {
    height: 350,
    width: Dimensions.get("window").width,
  },
});

export default ShowArticleScreen;
