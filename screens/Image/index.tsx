import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  ImageBackground,
  View,
  Button,
  Text,
  Alert,
  Image
} from "react-native";
import ButtonCamera from "../../components/Button/ButtonCamera";
import { useDispatch, useSelector } from "react-redux";

const ImageComponent = ({ navigation }: any) => {
  const image = {
    uri: "https://mondaycareer.com/wp-content/uploads/2020/11/Background-th%C3%A0nh-ph%E1%BB%91-%C4%91%E1%BA%B9p-hi%E1%BB%87n-%C4%91%E1%BA%A1i-minh-ho%E1%BA%A1.jpg",
  };
  const dispatch = useDispatch();
  const [imgs, setImgs]: any[] = useState([]);

  const renderImages = (images: any[] = []) => {
    return images.map((img: any) => {
        return <Image source={{uri: img.uri, width: 200, height: 200}}  />
      })
  }
  return (
    <ImageBackground source={image}>
      <SafeAreaView>
        <View
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
            {renderImages(imgs)}
          <ButtonCamera
            onSave={(value: any) =>
              setImgs((values: any) => {
                let newValues = values ? [...values] : [];
                newValues.push(value);
                console.log(newValues.length)
                return newValues
            })
            }
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ImageComponent;