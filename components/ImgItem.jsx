import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ImgItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Image", { url: item.urls.regular })}
    >
      <View style={styles.description}>
        <Text style={styles.author}>
          <FontAwesome name="user-circle" size={16} color="black">
            {" "}
          </FontAwesome>
          {item.user.name}
        </Text>
        <Text style={styles.text} numberOfLines={1}>
          {item.alt_description ??
            item.description ??
            "Alternative description"}
        </Text>
      </View>

      <Image source={{ uri: item.urls.small }} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 6,
  },
  image: {
    width: "auto",
    height: 320,
    objectFit: "cover",
  },
  description: {
    height: "auto",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  text: {
    textTransform: "capitalize",
    fontSize: 12,
    opacity: 0.6,
  },
  author: {
    textTransform: "capitalize",
    fontSize: 16,
  },
});

export default ImgItem;
