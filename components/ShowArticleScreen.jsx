import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ShowArticleScreen = ({article}) => {
  return (
    <View>
      <Text>{article.title}</Text>
    </View>
  )
}

export default ShowArticleScreen

const styles = StyleSheet.create({})
