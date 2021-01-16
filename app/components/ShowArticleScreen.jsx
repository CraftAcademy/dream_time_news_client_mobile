import React, { useEffect } from "react";
import { Image, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Articles from "../modules/Articles";
import { styles } from '../styles/styles'

const ShowArticleScreen = props => {
  const { id } = props.route.params.article;
  const { currentArticle } = useSelector(state => state);

  useEffect(() => {
    Articles.show(id);
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image source={{ uri: currentArticle.image }} style={styles.showImage} />
      <Text style={styles.showTitle}>{currentArticle.title}</Text>
      <Text style={styles.showSubtitle}>{currentArticle.sub_title}</Text>
      <Text style={styles.showContent}>{currentArticle.content}</Text>
      <Text style={styles.showAuthor}>{currentArticle.author}</Text>
      <Text style={styles.showCreated}>{currentArticle.created_at}</Text>
    </ScrollView>
  );
};

export default ShowArticleScreen;
