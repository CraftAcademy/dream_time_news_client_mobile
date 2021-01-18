import React, { useState } from "react";
import { Text, View, TextInput, Pressable, Image } from "react-native";
import { styles } from "../styles/styles";
import Auth from "../modules/Auth";
import { showMessage } from "react-native-flash-message";

const LoginScreen = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();
  const authenticate = new Auth({
    host: "https://dream-time-news-api.herokuapp.com/api",
  });

  const authenticatedUser = async () => {
    await authenticate
      .signIn(email, password)
      .then(resp => {
        props.navigation.navigate("Home");
      })
      .catch(e => {
        setMessage(e.response.data.errors);
      });
  };
  return (
    <View style={styles.loginView.container}>
      <Image
        style={styles.loginView.image}
        source={require("../../assets/dreamtimesnews.png")}
      />
      {/* <View style={styles.loginView.input}> */}
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
          onPress={() => {
            authenticatedUser();
            {
              !message &&
                showMessage({
                  message: "Hello!",
                  type: "success",
                  autoHide: true,
                  icon: "auto",
                  duration: 2000,
                });
            }
          }}
          style={styles.pressableButton}
        >
          <Text style={styles.pressableButton.text}>Login</Text>
        </Pressable>
        {message &&
          showMessage({
            message: message,
            type: "warning",
            autoHide: true,
            duration: 6000,
            hideOnPress: true,
          })}
      {/* </View> */}
    </View>
  );
};

export default LoginScreen;
