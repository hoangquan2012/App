import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Camera } from "expo-camera";
import CameraPreview from "../Camera/CameraPreview";
const ButtonCamera = (props: any) => {
  const navigation = useNavigation();
  const [startCamera, setStartCamera] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState<any>(null);
  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      // start the camera
      setStartCamera(true);
      setPreviewVisible(false);
    } else {
      Alert.alert("We need your permission to show the camera");
    }
  };
  let camera: Camera;
  const __takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    console.log(photo);
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  const __retakePicture = () => {
    setCapturedImage(null)
    setPreviewVisible(false)
    __startCamera()
  }
  const __savePicture = () => {
    props.onSave && props.onSave(capturedImage)
    setStartCamera(false)
  }

  return startCamera ? (
     previewVisible && capturedImage ? (
      <CameraPreview photo={capturedImage} retakePicture={() => __retakePicture()} savePicture= {() => __savePicture()} />
    ) : (
      <Camera
      style={{ flex: 1, width: "100%" }}
      ref={(r) => {
        camera = r;
      }}
    >
      <View
        style={{
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          flex: 1,
          width: "100%",
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            alignSelf: "center",
            flex: 1,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={__takePicture}
            style={{
              width: 70,
              height: 70,
              bottom: 0,
              borderRadius: 50,
              backgroundColor: "#fff",
            }}
          />
        </View>
      </View>
    </Camera>
    )
    
  ) : (
    <TouchableOpacity onPress={__startCamera}>
      <View
        style={{
          width: 200,
          height: 50,
          backgroundColor: "#DC143C",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            lineHeight: 50,
            color: "#fff",
            fontSize: 16,
            fontWeight: "700",
          }}
        >
          Take a photo
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default ButtonCamera;
