import { useRef, useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import MobileStoreCard from "../../ComponentsMobile/MobileStoreCard";

const MobilePopularStore = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const stores = [
    {
      id: "1",
      imageSource: require("../../assets/store1.jpg"),
      storeName: "Store 1",
      rating: "0.5",
      reviewCount: "150",
      isWishlisted: false,
      categories: [
        { name: "Grocery", bgColor: "#4CAF50" },
        { name: "Vegetables", bgColor: "#8BC34A" },
        { name: "Fruits", bgColor: "#CDDC39" },
      ],
    },
    {
      id: "2",
      imageSource: require("../../assets/store2.png"),
      storeName: "Store 2",
      rating: "1.5",
      reviewCount: "150",
      isWishlisted: true,
      categories: [
        { name: "Bakery", bgColor: "#FFEB3B" },
        { name: "Vegetables", bgColor: "#8BC34A" },
        { name: "Dairy", bgColor: "#e9e6e6ff", color: "#000000" },
      ],
    },
    {
      id: "3",
      imageSource: require("../../assets/store3.png"),
      storeName: "Store 3",
      rating: "2.5",
      reviewCount: "150",
      isWishlisted: false,
      categories: [
        { name: "Meat", bgColor: "#F44336" },
        { name: "Seafood", bgColor: "#03A9F4" },
        { name: "Beverages", bgColor: "#9C27B0" },
      ],
    },
    {
      id: "4",
      imageSource: require("../../assets/store4.png"),
      storeName: "Store 4",
      rating: "3.5",
      reviewCount: "150",
      isWishlisted: true,
      categories: [
        { name: "Snacks", bgColor: "#FF9800" },
        { name: "Frozen Foods", bgColor: "#00BCD4" },
        { name: "Dairy", bgColor: "#e9e6e6ff", color: "#000000" },
      ],
    },
    {
      id: "5",
      imageSource: require("../../assets/store6.jpg"),
      storeName: "Store 5",
      rating: "4.5",
      reviewCount: "150",
      isWishlisted: false,
      categories: [
        { name: "Bakery", bgColor: "#FFEB3B" },
        { name: "Fruits", bgColor: "#CDDC39" },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % stores.length;
        flatListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [stores.length]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Popular Stores</Text>
      </View>
      <FlatList
        ref={flatListRef}
        data={stores}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MobileStoreCard
            imageSource={item.imageSource}
            storeName={item.storeName}
            rating={item.rating}
            ratingCount={item.reviewCount}
            categories={item.categories}
            isWishlisted={item.isWishlisted}
          />
        )}
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      />
      <View style={styles.indicatorsContainer}>
        {stores.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              {
                backgroundColor: currentIndex === index ? "blue" : "lightblue",
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
    height: 400,
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
    backgroundColor: "#faf61fff",
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
  },
  contentContainer: {
    paddingHorizontal: 5,
    alignItems: "center",
    gap: 10,
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

export default MobilePopularStore;
