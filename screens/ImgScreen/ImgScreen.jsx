import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectImages } from "../../services/selectors";

const ImgScreen = ({ route }) => {
  const { url } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
export default ImgScreen;
