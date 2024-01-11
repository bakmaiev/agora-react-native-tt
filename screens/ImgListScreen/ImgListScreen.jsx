import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ImgItem from "../../components/ImgItem";
import { fetchImages } from "../../services/operations";
import { selectImages } from "../../services/selectors";
import { useDispatch, useSelector } from "react-redux";

const ImgListScreen = ({ navigation }) => {
  const images = useSelector(selectImages);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const loadMoreImages = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(fetchImages(page));
  }, [page]);

  return (
    <FlatList
      data={images}
      renderItem={({ item }) => <ImgItem navigation={navigation} item={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      onEndReached={loadMoreImages}
      onEndReachedThreshold={0.5}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    display: "flex",
    gap: 8,
  },
});

export default ImgListScreen;
