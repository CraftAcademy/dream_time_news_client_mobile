import React, { useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { styles } from "../styles/styles";
import Auth from "../modules/Auth";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();
  const authenticate = new Auth({
    host: "https://dream-time-news-api.herokuapp.com/api",
  });

  const authenticatedUser = async () => {
    authenticate
      .signIn(email, password)
      .then(resp => {
        props.navigation.navigate("Home");
      })
      .catch(e => {
        setMessage(e.response.data.errors);
      });
  };
  return (
    <View>
      <TextInput
        placeholder="Email"
        style={styles.loginInput}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.loginInput}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <Pressable
        title="Log in"
        onPress={() => authenticatedUser()}
        style={styles.pressableButton}
      >
        <Text style={styles.pressableButton.text}>Login</Text>
      </Pressable>
      {message && (
        <Text style={{ color: "red" }}>
          {message}
        </Text>
      )}
    </View>
  );
};

export default LoginScreen;
