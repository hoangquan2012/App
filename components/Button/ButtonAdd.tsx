import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
const ButtonAdd = (props: { onAdd: (value: string) => unknown }) => {
  const { onAdd } = props;
  const [value, setValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => setModalVisible(true)}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        style={{ width: "100%" }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Write your plan</Text>
            <View style={{ width: "100%", height: 50, marginBottom: 30 }}>
              <TextInput
                style={styles.textInput}
                onChangeText={(value) => setValue(value)}
                value={value}
                placeholder={"Write some thing !"}
              />
            </View>
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => {
                onAdd(value);
                setModalVisible(!modalVisible);
                setValue('')
              }}
            >
              <Text style={styles.textStyle}>Add project</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DC143C",
    position: "absolute",
    bottom: 20,
    right: 40,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
    height: "25%",
  },
  button1: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#DC143C",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 16,
  },
  textInput: {
    width: "100%",
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    borderWidth: 2,
    borderRadius: 90,
    color: "#000",
    padding: 10,
  },
});
export default ButtonAdd;
