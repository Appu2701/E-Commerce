import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Dimensions,
} from "react-native";
import PageHeading from "../../Components/PageHeading";
import Footer from "../../Components/Footer";
import CategoryHeaderSection from "../../Components/CategoryHeaderSection";
import CategoryStoreSection from "../../Components/CategoryStoreSection";
import CategoryProductSection from "../../Components/CategoryProductSection";

const Grocery = () => {
  const [isStoreExpanded, setIsStoreExpanded] = useState(false);
  const [isProductExpanded, setIsProductExpanded] = useState(false);
  
  // Array of category images
  const categoryImages = [
    require("../../assets/Groceries1.jpg"),
    require("../../assets/Groceries2.jpg"),
    require("../../assets/Groceries3.jpg"),
    require("../../assets/Groceries4.jpg"),
    require("../../assets/Groceries5.jpg"),
    require("../../assets/Groceries6.jpg"),
  ];

  // Store all stores data in an array
  const allStores = [
    {
      storeName: "Store Name 1",
      storeDescription: "Store Description Fresh Products and maintaining hygiene standards. with Affordable Prices",
      rating: 4.5,
      owner: "John Doe",
      contact: "(123) 456-7890",
      address: "123 Main St, City, District, State, Pin",
      ratingCount: 25,
      categories: [
        { name: "Fruits", bgColor: "#FF6347", color: "#fff" },
        { name: "Vegetables", bgColor: "#32CD32", color: "#fff" },
        { name: "Dairy", bgColor: "#1E90FF", color: "#fff" },
        { name: "Bakery", bgColor: "#FFD700", color: "#000" },
      ],
      isWishlisted: true,
      imageSource: require("../../assets/Groceries1.jpg"),
    },
    {
      storeName: "Store Name 2",
      storeDescription: "Store Description Fresh Products and maintaining hygiene standards. with Affordable Prices",
      rating: 4.2,
      owner: "Jane Smith",
      contact: "(987) 654-3210",
      address: "456 Market St, City, District, State, Pin",
      ratingCount: 40,
      categories: [
        { name: "Electronics", bgColor: "#FF6347", color: "#fff" },
        { name: "Home Appliances", bgColor: "#32CD32", color: "#fff" },
        { name: "Audio", bgColor: "#1E90FF", color: "#fff" },
        { name: "Video", bgColor: "#FFD700", color: "#000" },
      ],
      isWishlisted: true,
      imageSource: require("../../assets/Groceries2.jpg"),
    },
    {
      storeName: "Store Name 3",
      storeDescription: "Store Description Fresh Products and maintaining hygiene standards. with Affordable Prices",
      rating: 4.0,
      owner: "Alice Johnson",
      contact: "(555) 123-4567",
      address: "789 Grocery St, City, District, State, Pin",
      ratingCount: 30,
      categories: [
        { name: "Fruits", bgColor: "#FF6347", color: "#fff" },
        { name: "Vegetables", bgColor: "#32CD32", color: "#fff" },
        { name: "Dairy", bgColor: "#1E90FF", color: "#fff" },
        { name: "Bakery", bgColor: "#FFD700", color: "#000" },
      ],
      isWishlisted: false,
      imageSource: require("../../assets/Groceries3.jpg"),
    },
    {
      storeName: "Store Name 4",
      storeDescription: "Store Description Fresh Products and maintaining hygiene standards. with Affordable Prices",
      rating: 4.0,
      owner: "Alice Johnson",
      contact: "(555) 123-4567",
      address: "789 Grocery St, City, District, State, Pin",
      ratingCount: 30,
      categories: [
        { name: "Fruits", bgColor: "#FF6347", color: "#fff" },
        { name: "Vegetables", bgColor: "#32CD32", color: "#fff" },
        { name: "Dairy", bgColor: "#1E90FF", color: "#fff" },
        { name: "Bakery", bgColor: "#FFD700", color: "#000" },
      ],
      isWishlisted: true,
      imageSource: require("../../assets/Groceries3.jpg"),
    },
    {
      storeName: "Store Name 5",
      storeDescription: "Store Description Fresh Products and maintaining hygiene standards. with Affordable Prices",
      rating: 4.0,
      owner: "Alice Johnson",
      contact: "(555) 123-4567",
      address: "789 Grocery St, City, District, State, Pin",
      ratingCount: 30,
      categories: [
        { name: "Fruits", bgColor: "#FF6347", color: "#fff" },
        { name: "Vegetables", bgColor: "#32CD32", color: "#fff" },
        { name: "Dairy", bgColor: "#1E90FF", color: "#fff" },
        { name: "Bakery", bgColor: "#FFD700", color: "#000" },
      ],
      isWishlisted: false,
      imageSource: require("../../assets/Groceries4.jpg"),
    },
  ];

  const allProducts = [
    {
      productName: "Product 1",
      productDescription: "Description for Product 1",
      originalPrice: "100",
      discountedPrice: "80",
      discount: "20%",
      rating: 4.5,
      ratingCount: 10,
      category: "Fruits",
      brand: "Brand A",
      isWishlisted: true,
      soldBy: "Seller A",
      weight: "1kg",
      isInCart: false,
      imageSource: require("../../assets/img2.jpg"),
    },
    {
      productName: "Product 2",
      productDescription: "Description for Product 2",
      originalPrice: "200",
      discountedPrice: "150",
      discount: "25%",
      rating: 4.0,
      ratingCount: 20,
      category: "Vegetables",
      brand: "Brand B",
      isWishlisted: false,
      soldBy: "Seller B",
      weight: "500g",
      isInCart: true,
      imageSource: require("../../assets/img3.jpg"),
    },
    {
      productName: "Product 3",
      productDescription: "Description for Product 3",
      originalPrice: "150",
      discountedPrice: "120",
      discount: "20%",
      rating: 3.5,
      ratingCount: 15,
      category: "Dairy",
      brand: "Brand C",
      isWishlisted: true,
      soldBy: "Seller C",
      weight: "1L",
      origin: "Local",
      isInCart: false,
      imageSource: require("../../assets/img4.jpg"),
    },
    {
      productName: "Product 4",
      productDescription: "Description for Product 4",
      originalPrice: "120",
      discountedPrice: "100",
      discount: "17%",
      rating: 4.2,
      ratingCount: 12,
      category: "Bakery",
      brand: "Brand D",
      isWishlisted: false,
      soldBy: "Seller D",
      weight: "300g",
      origin: "Local",
      isInCart: true,
      imageSource: require("../../assets/img5.jpg"),
    },
    {
      productName: "Product 5",
      productDescription: "Description for Product 5",
      originalPrice: "180",
      discountedPrice: "150",
      discount: "17%",
      rating: 4.5,
      ratingCount: 10,
      category: "Bakery",
      brand: "Brand E",
      isWishlisted: false,
      soldBy: "Seller E",
      weight: "500g",
      origin: "Imported",
      isInCart: true,
      imageSource: require("../../assets/img6.jpg"),
    },
    {
      productName: "Product 6",
      productDescription: "Description for Product 6",
      originalPrice: "220",
      discountedPrice: "180",
      discount: "18%",
      rating: 4.8,
      ratingCount: 22,
      category: "Fruits",
      brand: "Brand F",
      isWishlisted: true,
      soldBy: "Seller F",
      weight: "1.5kg",
      isInCart: false,
      imageSource: require("../../assets/img7.jpg"),
    }
  ];

  return (
    <>
      {Platform.OS === "android" || Platform.OS === "ios" ? (
        <View style={mobStyles.container}>
          <Text>Grocery Category - Coming Soon</Text>
        </View>
      ) : (
        <View style={webStyles.container}>
          <PageHeading />
          <ScrollView
            style={webStyles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <CategoryHeaderSection
              title="Largest Grocery Store"
              subtitle="Get everything you need under one roof. Fresh produce, daily essentials, and more! | Affordable prices guaranteed. | Fast delivery options available."
              description="Explore our wide range of grocery products and enjoy seamless shopping experience. Fresh, high-quality groceries delivered fast — from everyday staples to seasonal produce and pantry essentials. Carefully sourced, affordably priced items with strict freshness checks and convenient packaging. Easy reordering, flexible delivery slots, and helpful offers make shopping simple and budget-friendly. Shop confidently for your weekly needs — fresh picks, great value, and fast doorstep delivery."
              categoryImages={categoryImages}
            />
            <CategoryStoreSection
              stores={allStores}
              isExpanded={isStoreExpanded}
              onToggleExpand={() => setIsStoreExpanded(!isStoreExpanded)}
            />

            <CategoryProductSection
              products={allProducts}
              isExpanded={isProductExpanded}
              onToggleExpand={() => setIsProductExpanded(!isProductExpanded)}
            />
            <Footer />
          </ScrollView>
        </View>
      )}
    </>
  );
};

const mobStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const { height: screenHeight } = Dimensions.get("window");
  const webStyles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      height: screenHeight,
      maxHeight: 535,
    },
    scrollView: {
      flex: 1,
      backgroundColor: "#ddd",
      height: screenHeight - 100,
      overflow: "hidden",
      padding: 5,
    },
  });

export default Grocery;