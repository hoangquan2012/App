import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const ButtonAdmin = (props: any) => {
  const navigation = useNavigation();
  const { title = "Login" } = props;
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("MyTabs")}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#DC143C",
    width: "50%",
    height: 50,
    borderRadius: 100,
    marginTop: 30,
    alignItems: "center",
    marginLeft: "25%",
  },
  text: {
    lineHeight: 50,
    color: "#fff",
    fontSize: 18,
  },
});
export default ButtonAdmin;
