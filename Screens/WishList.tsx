import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Dimensions,
} from "react-native";
import PageHeading from "../Components/PageHeading";
import Footer from "../Components/Footer";
import WishListCard from "../Components/WishListCard";

const WishList = () => {
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
            
            <View style={webStyles.gridContainer}>
            <WishListCard
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
            <WishListCard
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
            <WishListCard
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
            <WishListCard
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
            <WishListCard
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
            <WishListCard
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
            <WishListCard
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
            <WishListCard
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
            <WishListCard
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
            <WishListCard
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
            <WishListCard
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
            <WishListCard
              imageSource={require("../assets/img2.jpg")}
              productName="Product Title 6"
              originalPrice="$25.00"
              discountedPrice="$20.00"
              discountPercentage="20% OFF"
              timeLeft="1d 2h 15m time left"
              rating="4.8"
              reviewCount="89"
              isInCart={true}
              onMoveToCart={() => console.log("Move to cart clicked")}
              onRemove={() => console.log("Remove clicked")}
              onBuyNow={() => console.log("Buy now clicked")}
            />
            </View>
            
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
    borderRadius: 10,
  },
  screenHeaderText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 5,
  },
});

export default WishList;
