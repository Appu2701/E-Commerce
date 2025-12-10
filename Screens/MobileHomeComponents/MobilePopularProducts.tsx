import { useRef, useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import MobileProductCard from "../../ComponentsMobile/MobileProductCard";

const MobilePopularProducts = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: "1",
      imageSource: require("../../assets/img2.jpg"),
      productName: "Sample Product 1",
      discount: "20% OFF",
      originalPrice: "$100",
      discountedPrice: "$80",
      rating: "0.5",
      reviewCount: "150",
      timer: "02:15:30",
      isWishlisted: false,
      isInCart: false,
    },
    {
      id: "2",
      imageSource: require("../../assets/img3.jpg"),
      productName: "Sample Product 2",
      discount: "20% OFF",
      originalPrice: "$100",
      discountedPrice: "$80",
      rating: "1.5",
      reviewCount: "150",
      timer: "02:15:30",
      isWishlisted: true,
      isInCart: false,
    },
    {
      id: "3",
      imageSource: require("../../assets/img4.jpg"),
      productName: "Sample Product 3",
      discount: "20% OFF",
      originalPrice: "$100",
      discountedPrice: "$80",
      rating: "2.5",
      reviewCount: "150",
      timer: "02:15:30",
      isWishlisted: false,
      isInCart: true,
    },
    {
      id: "4",
      imageSource: require("../../assets/img5.jpg"),
      productName: "Sample Product 4",
      discount: "20% OFF",
      originalPrice: "$100",
      discountedPrice: "$80",
      rating: "3.5",
      reviewCount: "150",
      timer: "02:15:30",
      isWishlisted: true,
      isInCart: true,
    },
    {
      id: "5",
      imageSource: require("../../assets/img6.jpg"),
      productName: "Sample Product 5",
      discount: "20% OFF",
      originalPrice: "$100",
      discountedPrice: "$80",
      rating: "4.5",
      reviewCount: "150",
      timer: "02:15:30",
      isWishlisted: false,
      isInCart: false,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % products.length;
        flatListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Popular Products</Text>
      </View>
      <FlatList
        ref={flatListRef}
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MobileProductCard
            imageSource={item.imageSource}
            productName={item.productName}
            discount={item.discount}
            originalPrice={item.originalPrice}
            discountedPrice={item.discountedPrice}
            rating={item.rating}
            reviewCount={item.reviewCount}
            timer={item.timer}
            isWishlisted={item.isWishlisted}
            isInCart={item.isInCart}
          />
        )}
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      />
      <View style={styles.indicatorsContainer}>
        {products.map((_, index) => (
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
    height: 450,
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

export default MobilePopularProducts;
