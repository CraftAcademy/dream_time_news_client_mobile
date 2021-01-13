import React from "react";
import { View, Text } from "react-native";
import { Appbar } from "react-native-paper";
import { useSelector } from "react-redux";

const ApplicationHeader = () => {
  const { appTitle } = useSelector((state) => state);
  return (
    <Appbar.Header>
      <App.Appbar.Content title={appTitle} />
    </Appbar.Header>
  );
};

export default ApplicationHeader;
