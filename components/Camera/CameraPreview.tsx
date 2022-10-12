import React from "react";
import { ImageBackground, View, Text } from "react-native";

const CameraPreview = (props : any) => {
  return (
    <View
      style={{
        backgroundColor: "transparent",
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <ImageBackground
        source={{ uri: props.photo && props.photo.uri }}
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            width: '100%',
            height: "100%",
          }}
        >
          <View>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                position: "absolute",
                bottom: 40,
                left: 50,
                fontWeight: '700'
              }}
              onPress={() => props.retakePicture()}
            >
              Re-take
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                position: "absolute",
                bottom: 40,
                left: 300,
                fontWeight: '700'
              }}
              onPress={() => props.savePicture()}
            >
              Save
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CameraPreview;
