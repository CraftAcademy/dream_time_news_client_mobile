import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from '../styles/styles'


const ArticleIndexDetails = ({ navigation, article }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ShowArticleScreen", {article: article}) 
      }}
    >
      <Image source={{ uri: article.image }} style={styles.indexImage} />
      <View style={styles.indexCard}>
        <Text style={styles.indexTitle}>{article.title}</Text>
        <Text style={styles.indexSubtitle}>{article.subtitle}</Text>
      </View>
      </TouchableOpacity>
  );
};

export default ArticleIndexDetails;

