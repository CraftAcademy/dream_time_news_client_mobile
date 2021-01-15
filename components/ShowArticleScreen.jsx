import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ShowArticleScreen = (props) => {
  const { article } = props.route.params
  return (
    <View>
      <Text>{article.title}</Text>
    </View>
  )
}

export default ShowArticleScreen

const styles = StyleSheet.create({})
