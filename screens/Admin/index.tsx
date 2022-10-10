import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  ImageBackground,
  View,
  Button,
  Text,
  Image,
} from "react-native";
import ButtonAdmin from "../../components/Button/ButtonAdmin";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const Admin = ({ navigation }: any) => {
  const image = {
    uri: "https://inkythuatso.com/uploads/thumbnails/800/2022/05/10-hinh-nen-dien-thoai-mau-xanh-la-cay-inkythuatso-17-15-24-33.jpg",
  };
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <Image source={require("./logo.png")} style={styles.tinyLogo} />
        </View>
        <View style={styles.container_item}>
          <FontAwesome
            name="user-circle-o"
            size={24}
            color="black"
            style={styles.icon}
          />
          <TextInput style={styles.input} placeholder="Username" />
        </View>
        <View style={styles.container_item}>
          <Entypo name="lock" size={24} color="black" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Password" />
        </View>
        <View>
          <ButtonAdmin />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    borderRadius: 100,
    marginRight: 50,
    marginLeft: 50,
    backgroundColor: "#fff",
    borderColor: "#fff",
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  icon: {
    color: "green",
    position: "absolute",
    top: 20,
    left: 60,
    zIndex: 99,
    width: "100%",
  },
  container_item: {
    position: "relative",
  },
  logo: {
    width: 300,
    height: 100,
    marginLeft: 90,
  },
  tinyLogo: {
    width: 200,
    height: 80,
  },
});

export default Admin;
