import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

//------------------------
const windowWidth = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

//------------
const Navbar = ({ navigation }) => {
  const goBackButton = () => {
    navigation.goBack();
  }
  return (
    <View style={{
      height: 60,
      width: windowWidth,
      padding: 6,
      justifyContent: "center",
      backgroundColor: "#194d33",
    }} >
      {/* <LinearGradient
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={['#4c669f', '#3b5998']}
        style={{
          position: "absolute",
          height: 60,
          width: windowWidth,
          bottom: 0,
          left: 0,
          right: 0,
          top: 0
        }} /> */}
      {/* absolute yap sola yapıltır geri butonunu  */}
      <TouchableOpacity onPress={goBackButton} >
        <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 18 }}>
          Geri Dön
        </Text>
      </TouchableOpacity>

      {/* ikonu ortala   */}

    </View>
  );
};

export default Navbar;


var styles = StyleSheet.create({
  linearGradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  },

});