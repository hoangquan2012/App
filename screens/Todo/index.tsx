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
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../redux/action";
import { todoListSelector } from "../../redux/selectors";
const Todo = ({ navigation }: any) => {
  const image = {
    uri: "https://mondaycareer.com/wp-content/uploads/2020/11/Background-th%C3%A0nh-ph%E1%BB%91-%C4%91%E1%BA%B9p-hi%E1%BB%87n-%C4%91%E1%BA%A1i-minh-ho%E1%BA%A1.jpg",
  };
  const dispatch = useDispatch();
  const todoList = useSelector(todoListSelector);


  const handleDelete = (id: any) => {
    // setTodos((values) => {
    //   return values.filter((todo) => {
    //     if (todo.id !== id) return true;
    //   });
    // });
    console.log("click delete", id);
    dispatch(
      deleteTodo(id)
    );
  };

  const [titleText, setTitleText] = useState("");
  return (
    <ImageBackground source={image}>
      <View style={{ height: "100%" }}>
        <Text>{titleText}</Text>
        {todoList.map((task: any, index: any) => (
          <Task
            key={index}
            text={task.text}
            id={task.id}
            checked={task.checked}
            delete={(value: any) => handleDelete(value)}
          />
        ))}
        <ButtonAdd
          onAdd={(value: string) => {
            console.log(value);
            if (value.length > 0) {
              dispatch(
                addTodo({
                  id: todoList.length + 1,
                  text: value,
                  checked: false,
                })
              );
            }

            // if (value.length > 0) {
            //   setTodos([
            //     ...todos,
            //     {
            //       id: todos.length + 1,
            //       text: value,
            //       checked: false,
            //     },
            //   ]);
            // }
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Todo;
