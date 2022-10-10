import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const Task = (props: any) => (
  <View style={styles.taskWrapper}>
    <View>
      <TouchableOpacity>
        <AntDesign
          name="checkcircleo"
          size={24}
          color={props.checked ? "green" : "black"}
          style={{ position: "absolute", top: 15, left: 15 }}
        />
      </TouchableOpacity>
    </View>

    <View style={{ alignItems: "center", width: "100%" }}>
      {props.checked && <View style={styles.verticalLine}></View>}
      <View style={styles.color}></View>
      <View>
        <Text style={styles.task}>{props.text}</Text>
      </View>
      <TouchableOpacity style={{ width: "100%" }}>
        <Entypo
          name="trash"
          size={24}
          color="red"
          style={{ position: "absolute", right: 10, bottom: 15 }}
          onPress={() => {
            console.log("click delete");
            props.delete(props.id);
          }}
        />
      </TouchableOpacity>
    </View>

    {/* <Icon
      name="trash-2"
      size={30}
      color="#900"
      style={{ marginLeft: "auto" }}
      onPress={props.delete}
    /> */}
  </View>
);

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
});
