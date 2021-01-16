import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  indexCard: {
    position: "absolute",
    width: Dimensions.get("window").width,
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    bottom: 3,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 2,
  },
  indexTitle: {
    color: "white",
    fontSize: 23,
    fontFamily: "American Typewriter",
  },
  indexSubtitle: {
    color: "white",
    fontSize: 16,
  },
  indexImage: {
    height: 270,
    width: Dimensions.get("window").width,
  },
  showTitle: {
    padding: 25,
    color: "#38302f",
    fontSize: 40,
  },
  showSubtitle: {
    color: "#4a4443",
    fontSize: 23,
    bottom: 8,
    paddingLeft: 25,
    paddingRight: 20,
  },
  showContent: {
    color: "#343940",
    padding: 7,
    paddingLeft: 25,
    paddingRight: 20,
    paddingBottom: 20,
    bottom: 8,
    fontSize: 18,
  },
  showAuthor: {
    color: "#9c0ee8",
    fontSize: 15,
    bottom: 15,
    paddingLeft: 25,
    paddingRight: 20,
    paddingBottom: 20,
  },
  showCreated: {
    color: "#9c0ee8",
    fontSize: 15,
    bottom: 15,
    paddingLeft: 25,
    paddingRight: 20,
    paddingBottom: 40,
  },
  showImage: {
    height: 350,
    width: Dimensions.get("window").width,
  },
  loginInput: {
    // marginBottom: 20,
    flex: 1,
    padding: 20,
    height: 50,
    borderColor: "teal",
    // borderWidth: 4,
    // borderRadius: 8,
  },
  pressableButton: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
    text: {
      fontSize: 20,
      padding: 10,
      textAlign: "center",
      color: "white",
    },
  },
  loginView: {
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#fff",
      padding: 20,
      margin: 10,
    },
    input: {
      borderRadius: 20,
      width: "70%",
      height: 45,
      marginBottom: 20,
      backgroundColor: "#F0FFFF",
      alignItems: "center",
    },
    image: {
      marginBottom: 40,
      opacity: 80,
      resizeMode: "contain",
      borderRadius: 6,
    },
  },
});

export { styles };
