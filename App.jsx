import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen";

const Stack = createStackNavigator();

const App = () => {
  const { appTitle } = useSelector(state => state);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: appTitle,
            headerStyle: {
              backgroundColor: "teal",
            },
            headerTitleStyle: {
              color: "white",
              fontSize: 30,
              fontFamily: "AmericanTypewriter-Bold",
              fontWeight: "bold",
              textAlign: "center"
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
