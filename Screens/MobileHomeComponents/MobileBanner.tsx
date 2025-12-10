import { useRef, useEffect, useState } from "react";
import {
  View,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
} from "react-native";

const MobileBanner = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerImages = [
    require("../../assets/Diwali1.jpg"),
    require("../../assets/Diwali2.jpg"),
    require("../../assets/Diwali3.jpg"),
    // require("../../assets/Groceries1.jpg"),
    // require("../../assets/Groceries2.jpg"),
    // require("../../assets/Groceries3.jpg"),
    // require("../../assets/Groceries4.jpg"),
    // require("../../assets/Groceries5.jpg"),
    // require("../../assets/Groceries6.jpg"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % bannerImages.length;
        flatListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Big Diwali Sale</Text>
        <Text>Up to 50% off on selected items, Free Shipping, and more!</Text>
      </View>
      <FlatList
        ref={flatListRef}
        data={bannerImages}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={item} style={styles.bannerImage} resizeMode="cover" />
        )}
        style={styles.flatList}
      />
      <View style={styles.indicatorsContainer}>
        {bannerImages.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              {
                backgroundColor: currentIndex === index ? "black" : "gray",
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    height: 280,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow for Android
    elevation: 5,
  },
  header: {
    width: "100%",
    height: "25%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  flatList: {
    width: "97%",
    height: "70%",
    marginBottom: 5,
  },
  bannerImage: {
    width: Dimensions.get("window").width * 0.99,
    height: 250 * 0.7,
    borderRadius: 10,
    marginHorizontal: Dimensions.get("window").width * 0.005,
    marginTop: 5,
  },
  indicatorsContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default MobileBanner;
