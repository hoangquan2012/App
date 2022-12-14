import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  Alert,
  Pressable,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { todoListSelector } from "../../redux/selectors";

const Task = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleEdit, setModalVisibleEdit] = useState(false);
  const [text, setText] = useState("NOT FIX YET ");
  const todoList = useSelector(todoListSelector);
  return (
    <View style={styles.taskWrapper}>
      <Modal
        animationType="fade"
        presentationStyle="formSheet"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{props.text}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleEdit}
        onRequestClose={() => {
          setModalVisibleEdit(!modalVisibleEdit);
        }}
        style={{ width: "100%" }}
      >
        <View style={styles.centeredView}>
          <View
            style={{
              width: "100%",
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
            }}
          >
            <Text style={styles.modalText}>Edit your plan</Text>
            <View style={{ width: "100%", height: 50, marginBottom: 30 }}>
              <TextInput
                style={styles.textInput}
                clearButtonMode="while-editing"
                keyboardAppearance="dark"
                value={text}
                editable={false}
                textAlign="center"
              />
            </View>
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => {
                setModalVisibleEdit(!modalVisibleEdit);
              }}
            >
              <Text style={styles.textStyle}>Edit project</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={{ alignItems: "center", width: "100%" }}>
        <View style={{ padding: 20, paddingBottom: 30 }}>
          <Text style={styles.task} numberOfLines={1} ellipsizeMode={"tail"}>
            {props.text}
          </Text>
        </View>
        <View style={{ position: "absolute", bottom: 10, left: 20 }}>
          <Text style={{ textTransform: "uppercase", color: "#B5BCCC" }}>
            Created at : Now{" "}
          </Text>
        </View>

        <TouchableOpacity style={{ width: "100%" }}>
          <AntDesign
            name="edit"
            size={24}
            color="black"
            style={{ position: "absolute", right: 70, bottom: 15 }}
            onPress={() => setModalVisibleEdit(true)}
          />
          <AntDesign
            name="eye"
            size={24}
            color="#adcae6"
            style={{ position: "absolute", right: 40, bottom: 15 }}
            onPress={() => setModalVisible(true)}
          />
          <Entypo
            name="trash"
            size={24}
            color="red"
            style={{ position: "absolute", right: 10, bottom: 15 }}
            onPress={() => {
              // console.log("click delete");
              props.delete(props.id);
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task;
const styles = StyleSheet.create({
  taskWrapper: {
    marginTop: "5%",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    minHeight: 40,
    shadowColor: "#DC143C",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    elevation: 12,
  },
  color: {
    width: 10,
    height: 10,
    color: "#DC143C",
  },
  task: {
    paddingBottom: 20,
    paddingLeft: 10,
    marginTop: 6,
    borderColor: "#000",
    borderBottomWidth: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    alignItems: "center",
  },
  verticalLine: {
    borderBottomColor: "white",
    borderBottomWidth: 4,
    marginLeft: 10,
    width: "100%",
    position: "absolute",
    marginTop: 15,
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
  },
  button: {
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
    marginBottom: 15,
    textAlign: "center",
  },
  button1: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textInput: {
    width: "100%",
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    borderWidth: 2,
    borderRadius: 90,
    color: "red",
    padding: 10,
  },
});
