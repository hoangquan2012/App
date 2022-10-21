import React, { useEffect, useState } from "react";
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
import { todoRemainingSelector } from "../../redux/selectors";
import TodoSlice from "../../redux/slice/TodoSlice";
import FilterSlice from "../../redux/slice/FilterSlice";
const Todo = ({ navigation }: any) => {
  const image = {
    uri: "https://mondaycareer.com/wp-content/uploads/2020/11/Background-th%C3%A0nh-ph%E1%BB%91-%C4%91%E1%BA%B9p-hi%E1%BB%87n-%C4%91%E1%BA%A1i-minh-ho%E1%BA%A1.jpg",
  };
  const dispatch = useDispatch();
  const todoList = useSelector(todoRemainingSelector);

  const [searchText, setSeatchText] = useState("");

  const handleDelete = (id: any) => {
    console.log("click delete", id);
    dispatch(TodoSlice.actions.deleteTodo(id));
  };

  const handSearch = (value: any) => {
    setSeatchText(value);
  };

  useEffect(() => {
    dispatch(FilterSlice.actions.searchFilter(searchText));
    console.log(searchText);
  }, [searchText]);

  return (
    <SafeAreaView>
      <ImageBackground source={image}>
        <View style={{ height: "100%", paddingLeft: 10, paddingRight: 10 }}>
          <TextInput
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
            }}
            inlineImageLeft="user"
            placeholder="Search Project"
            onChangeText={handSearch}
            value={searchText}
          />
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
                  TodoSlice.actions.addTodo({
                    id: todoList.length + 1,
                    text: value,
                    checked: false,
                  })
                );
              }
            }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Todo;
