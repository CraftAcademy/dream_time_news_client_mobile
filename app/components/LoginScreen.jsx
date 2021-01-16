import React from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { styles } from "../styles/styles";
import Auth from '../modules/authentication'

const LoginScreen = () => {

  const authentication = new Auth ({ host: "https://dream-time-news-api.herokuapp.com/api" })

  const authenicatedUser = () => {
    authentication
    .signIn()
    .then(() => {
    })
    .catch(() => {

    })
  }
  return (
    <View>
      <TextInput placeholder="Email" style={styles.loginInput} />
      <TextInput placeholder="Password" style={styles.loginInput} />
      <Pressable 
      title="Log in" 
      onPress={() => authenicatedUser()}
      style={{
        alignSelf:"center",
        backgroundColor: "teal",
        padding: 10,
        borderRadius: 20,
        margin: 10
      }}
      />
      <Text
      style={{ 
        fontSize: 20,
        padding: 10,
        textAlign: "center",
        color: "white"
      }}
      >Login</Text>
    </View>
  );
};

export default LoginScreen;
