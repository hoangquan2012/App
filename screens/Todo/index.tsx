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
import Task from "../../components/Task/TaskToday";
import ButtonAdd from "../../components/Button/ButtonAdd";

const Todo = ({ navigation }: any) => {
  const image = {
    uri: "https://mondaycareer.com/wp-content/uploads/2020/11/Background-th%C3%A0nh-ph%E1%BB%91-%C4%91%E1%BA%B9p-hi%E1%BB%87n-%C4%91%E1%BA%A1i-minh-ho%E1%BA%A1.jpg",
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Join friend birthday Party",
      checked: false,
    },
    {
      id: 2,
      text: "Doing house work",
      checked: false,
    },
    {
      id: 3,
      text: "Make study plan",
      checked: false,
    },
  ]);

  const handleDelete = (id: any) => {
    setTodos((values) => {
      return values.filter((todo) => {
        if (todo.id !== id) return true;
      });
    });
  };

  const handleChecked = (id: any) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.checked = !todo.checked;
        return todo;
      })
    );
  };

  const [titleText, setTitleText] = useState("");
  return (
    <ImageBackground source={image}>
      <View style={{ height: "100%" }}>
        <Text>{titleText}</Text>
        {todos.map((task, index) => (
          <Task
            key={index}
            text={task.text}
            id={task.id}
            checked={task.checked}
            delete={(value: any) => handleDelete(value)}
            setChecked={() => handleChecked(task.id)}
          />
        ))}
        <ButtonAdd
          onAdd={(value: string) => {
            console.log(value);

            if (value.length > 0) {
              setTodos([
                ...todos,
                {
                  id: todos.length + 1,
                  text: value,
                  checked: false,
                },
              ]);
            }
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Todo;
