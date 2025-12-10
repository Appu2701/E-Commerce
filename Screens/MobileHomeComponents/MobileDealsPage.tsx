import { useRef, useEffect, useState } from "react";
import {
  View,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
} from "react-native";

const MobileDealsPage = () => {
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
        <Text style={styles.headerText}>Deals Of The Day</Text>
      </View>
      <View style={styles.content}></View>
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
    height: 480,
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
    height: "15%",
    backgroundColor: "yellow",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
  },
  content: {
    width: "97%",
    height: "75%",
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#ccc",
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

export default MobileDealsPage;
