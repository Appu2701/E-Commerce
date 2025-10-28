import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import PageHeading from "../Components/PageHeading";
import Footer from "../Components/Footer";
import WishListedProductCard from "../Components/WishListedProductCard";
import WishListedStoreCard from "../Components/WishListedStoreCard";

const WishList = () => {
  const [activeTab, setActiveTab] = useState<"products" | "stores">("products");
  return (
    <>
      {Platform.OS === "android" || Platform.OS === "ios" ? (
        <View style={mobStyles.container}>
          <Text>Mobile Wishlist - Coming Soon</Text>
        </View>
      ) : (
        <View style={webStyles.container}>
          <PageHeading />

          <ScrollView
            style={webStyles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <View style={webStyles.screenHeaderCard}>
              <Text style={webStyles.screenHeaderText}>My Wishlist</Text>
            </View>
            <View style={webStyles.tabContainer}>
              <TouchableOpacity
                onPress={() => setActiveTab("products")}
                style={[
                  webStyles.tabButton,
                  activeTab === "products"
                    ? webStyles.activeTab
                    : webStyles.inactiveTab,
                ]}
              >
                <Text
                  style={
                    activeTab === "products"
                      ? webStyles.activeTabText
                      : webStyles.inactiveTabText
                  }
                >
                  Wishlisted Products
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setActiveTab("stores")}
                style={[
                  webStyles.tabButton,
                  activeTab === "stores"
                    ? webStyles.activeTab
                    : webStyles.inactiveTab,
                ]}
              >
                <Text
                  style={
                    activeTab === "stores"
                      ? webStyles.activeTabText
                      : webStyles.inactiveTabText
                  }
                >
                  Wishlisted Stores
                </Text>
              </TouchableOpacity>
            </View>
            {activeTab === "products" ? (
              <View style={webStyles.gridContainer}>
                <WishListedProductCard
                  onCardClick={() => console.log("Card clicked")}
                  imageSource={require("../assets/img1.jpg")}
                  productName="Product Title"
                  originalPrice="$20.00"
                  discountedPrice="$16.00"
                  discountPercentage="20% OFF"
                  timeLeft="2d 5h 30m time left"
                  rating="4.5"
                  reviewCount="123"
                  isInCart={false}
                  onMoveToCart={() => console.log("Move to cart clicked")}
                  onRemove={() => console.log("Remove clicked")}
                  onBuyNow={() => console.log("Buy now clicked")}
                />
                <WishListedProductCard
                  onCardClick={() => console.log("Card clicked")}
                  imageSource={require("../assets/img1.jpg")}
                  productName="Product Title"
                  originalPrice="$20.00"
                  discountedPrice="$16.00"
                  discountPercentage="20% OFF"
                  timeLeft="2d 5h 30m time left"
                  rating="4.5"
                  reviewCount="123"
                  isInCart={true}
                  onMoveToCart={() => console.log("Move to cart clicked")}
                  onRemove={() => console.log("Remove clicked")}
                  onBuyNow={() => console.log("Buy now clicked")}
                />
                <WishListedProductCard
                  onCardClick={() => console.log("Card clicked")}
                  imageSource={require("../assets/img1.jpg")}
                  productName="Product Title"
                  originalPrice="$20.00"
                  discountedPrice="$16.00"
                  discountPercentage="20% OFF"
                  timeLeft="2d 5h 30m time left"
                  rating="4.5"
                  reviewCount="123"
                  isInCart={true}
                  onMoveToCart={() => console.log("Move to cart clicked")}
                  onRemove={() => console.log("Remove clicked")}
                  onBuyNow={() => console.log("Buy now clicked")}
                />
                <WishListedProductCard
                  onCardClick={() => console.log("Card clicked")}
                  imageSource={require("../assets/img1.jpg")}
                  productName="Product Title"
                  originalPrice="$20.00"
                  discountedPrice="$16.00"
                  discountPercentage="20% OFF"
                  timeLeft="2d 5h 30m time left"
                  rating="4.5"
                  reviewCount="123"
                  isInCart={false}
                  onMoveToCart={() => console.log("Move to cart clicked")}
                  onRemove={() => console.log("Remove clicked")}
                  onBuyNow={() => console.log("Buy now clicked")}
                />
                <WishListedProductCard
                  imageSource={require("../assets/img1.jpg")}
                  productName="Product Title"
                  originalPrice="$20.00"
                  discountedPrice="$16.00"
                  discountPercentage="20% OFF"
                  timeLeft="2d 5h 30m time left"
                  rating="4.5"
                  reviewCount="123"
                  isInCart={false}
                  onMoveToCart={() => console.log("Move to cart clicked")}
                  onRemove={() => console.log("Remove clicked")}
                  onBuyNow={() => console.log("Buy now clicked")}
                />
                <WishListedProductCard
                  imageSource={require("../assets/img1.jpg")}
                  productName="Product Title"
                  originalPrice="$20.00"
                  discountedPrice="$16.00"
                  discountPercentage="20% OFF"
                  timeLeft="2d 5h 30m time left"
                  rating="4.5"
                  reviewCount="123"
                  isInCart={false}
                  onMoveToCart={() => console.log("Move to cart clicked")}
                  onRemove={() => console.log("Remove clicked")}
                  onBuyNow={() => console.log("Buy now clicked")}
                />
                <WishListedProductCard
                  imageSource={require("../assets/img2.jpg")}
                  productName="Product Title 6"
                  originalPrice="$25.00"
                  discountedPrice="$20.00"
                  discountPercentage="20% OFF"
                  timeLeft="1d 2h 15m time left"
                  rating="4.8"
                  reviewCount="89"
                  isInCart={false}
                  onMoveToCart={() => console.log("Move to cart clicked")}
                  onRemove={() => console.log("Remove clicked")}
                  onBuyNow={() => console.log("Buy now clicked")}
                />
                <WishListedProductCard
                  imageSource={require("../assets/img1.jpg")}
                  productName="Product Title"
                  originalPrice="$20.00"
                  discountedPrice="$16.00"
                  discountPercentage="20% OFF"
                  timeLeft="2d 5h 30m time left"
                  rating="4.5"
                  reviewCount="123"
                  isInCart={false}
                  onMoveToCart={() => console.log("Move to cart clicked")}
                  onRemove={() => console.log("Remove clicked")}
                  onBuyNow={() => console.log("Buy now clicked")}
                />
                <WishListedProductCard
                  imageSource={require("../assets/img1.jpg")}
                  productName="Product Title"
                  originalPrice="$20.00"
                  discountedPrice="$16.00"
                  discountPercentage="20% OFF"
                  timeLeft="2d 5h 30m time left"
                  rating="4.5"
                  reviewCount="123"
                  isInCart={false}
                  onMoveToCart={() => console.log("Move to cart clicked")}
                  onRemove={() => console.log("Remove clicked")}
                  onBuyNow={() => console.log("Buy now clicked")}
                />
              </View>
            ) : (
              <View style={webStyles.gridContainer}>
                <WishListedStoreCard
                  imageSource={require("../assets/store3.png")}
                  storeName="Store3"
                  rating="4.2"
                  ratingCount="90+ ratings"
                  categories={[
                    { name: "Electronics", bgColor: "red" },
                    { name: "Fashion", bgColor: "blue" },
                    { name: "Home", bgColor: "green" },
                    { name: "Beauty", bgColor: "yellow", color: "#000" },
                  ]}
                  onRemovePress={() => console.log("Remove Store 3 from wishlist")}
                  onViewMorePress={() => console.log("View more for Store 3")}
                  onCardPress={() => console.log("Store 3 pressed")}
                />
                <WishListedStoreCard
                  imageSource={require("../assets/store1.jpg")}
                  storeName="Store1"
                  rating="4.5"
                  ratingCount="120+ ratings"
                  categories={[
                    { name: "Electronics", bgColor: "red" },
                    { name: "Fashion", bgColor: "blue" },
                    { name: "Home", bgColor: "green" },
                    { name: "Beauty", bgColor: "yellow", color: "#000" },
                  ]}
                  onRemovePress={() => console.log("Remove Store 1 from wishlist")}
                  onViewMorePress={() => console.log("View more for Store 1")}
                  onCardPress={() => console.log("Store 1 pressed")}
                />
                <WishListedStoreCard
                  imageSource={require("../assets/store2.png")}
                  storeName="Store2"
                  rating="4.2"
                  ratingCount="90+ ratings"
                  categories={[
                    { name: "Electronics", bgColor: "red" },
                    { name: "Fashion", bgColor: "blue" },
                    { name: "Home", bgColor: "green" },
                    { name: "Beauty", bgColor: "yellow", color: "#000" },
                  ]}
                  onRemovePress={() => console.log("Remove Store 2 from wishlist")}
                  onViewMorePress={() => console.log("View more for Store 2")}
                  onCardPress={() => console.log("Store 2 pressed")}
                />
                <WishListedStoreCard
                  imageSource={require("../assets/store4.png")}
                  storeName="Store4"
                  rating="4.2"
                  ratingCount="90+ ratings"
                  categories={[
                    { name: "Electronics", bgColor: "red" },
                    { name: "Fashion", bgColor: "blue" },
                    { name: "Home", bgColor: "green" },
                    { name: "Beauty", bgColor: "yellow", color: "#000" },
                  ]}
                  onRemovePress={() => console.log("Remove Store 4 from wishlist")}
                  onViewMorePress={() => console.log("View more for Store 4")}
                  onCardPress={() => console.log("Store 4 pressed")}
                />
                <WishListedStoreCard
                  imageSource={require("../assets/store6.jpg")}
                  storeName="Store6"
                  rating="4.5"
                  ratingCount="120+ ratings"
                  categories={[
                    { name: "Electronics", bgColor: "red" },
                    { name: "Fashion", bgColor: "blue" },
                    { name: "Home", bgColor: "green" },
                    { name: "Beauty", bgColor: "yellow", color: "#000" },
                  ]}
                  onRemovePress={() => console.log("Remove Store 6 from wishlist")}
                  onViewMorePress={() => console.log("View more for Store 6")}
                  onCardPress={() => console.log("Store 6 pressed")}
                />
                <WishListedStoreCard
                  imageSource={require("../assets/store2.png")}
                  storeName="Store2"
                  rating="4.2"
                  ratingCount="90+ ratings"
                  categories={[
                    { name: "Electronics", bgColor: "red" },
                    { name: "Fashion", bgColor: "blue" },
                    { name: "Home", bgColor: "green" },
                    { name: "Beauty", bgColor: "yellow", color: "#000" },
                  ]}
                  onRemovePress={() => console.log("Remove Store 2 from wishlist")}
                  onViewMorePress={() => console.log("View more for Store 2")}
                  onCardPress={() => console.log("Store 2 pressed")}
                />
                <WishListedStoreCard
                  imageSource={require("../assets/store3.png")}
                  storeName="Store3"
                  rating="4.2"
                  ratingCount="90+ ratings"
                  categories={[
                    { name: "Electronics", bgColor: "red" },
                    { name: "Fashion", bgColor: "blue" },
                    { name: "Home", bgColor: "green" },
                    { name: "Beauty", bgColor: "yellow", color: "#000" },
                  ]}
                  onRemovePress={() => console.log("Remove Store 3 from wishlist")}
                  onViewMorePress={() => console.log("View more for Store 3")}
                  onCardPress={() => console.log("Store 3 pressed")}
                />
              </View>
            )}
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
    height: screenHeight - 100, // Adjust 100 to your header height
    overflow: "hidden",
    padding: 5,
  },
  screenHeaderCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  screenHeaderText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  tabContainer: {
    height: 55,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
    padding: 5,
  },
  tabButton: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    width: "49%",
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  inactiveTab: {
    backgroundColor: "#f8f9fa",
    borderColor: "#dee2e6",
  },
  activeTabText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  inactiveTabText: {
    color: "#6c757d",
    fontSize: 20,
    fontWeight: "bold",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 5,
    // justifyContent: "space-evenly"
  },
});

export default WishList;
