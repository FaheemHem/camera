import React, { useState } from "react";
import { View, ImageBackground, TouchableOpacity, Text } from "react-native";

const CameraPreview = ({ photo }) => {
  console.log("sdsfds", photo);
  const [angle, setAngle] = useState(0);

  const __rotateCamera = () => {
    setAngle(angle + 90);
  };

  return (
    <View
      style={{
        backgroundColor: "transparent",
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          backgroundColor: "transparent",
          flex: 1,
          position: "absolute",
          zIndex: 1
        }}
      >
        <TouchableOpacity
          onPress={__rotateCamera}
          style={{
            marginTop: 20,
            borderRadius: "50%",
            height: 25,
            left: "50%",
          }}
        >
          <Text
            style={{
              fontSize: 20,
            }}
          >
            {"Rotate"}
          </Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={{ uri: photo && photo.uri }}
        style={{
          flex: 1,
          transform: `rotate(${angle}deg)`,
        }}
      ></ImageBackground>
    </View>
  );
};

export default CameraPreview;
