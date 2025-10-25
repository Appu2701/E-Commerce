import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import PageHeading from "../Components/PageHeading";
import CartProduct from "../Components/CartProduct";

const Cart = () => {
  const [quantity, setQuantity] = useState(2);

  const handleQuantityIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleSaveForLater = () => {
    console.log("Save for later clicked");
  };

  const handleRemoveFromCart = () => {
    console.log("Remove from cart clicked");
  };
  return (
    <>
      {Platform.OS === "android" || Platform.OS === "ios" ? (
        <View style={mobStyles.container}>
          <Text>Mobile Cart - Coming Soon</Text>
        </View>
      ) : (
        <View style={webStyles.container}>
          <PageHeading />
          <ScrollView
            style={webStyles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <View style={webStyles.profileHeaderCard}>
              <Text style={webStyles.profileText}>My Cart</Text>
            </View>
            
            <CartProduct
              productImage={require("../assets/img2.jpg")}
              productName="Wireless Bluetooth Headphones"
              productBrand="AudioTech"
              productCategory="Electronics > Audio"
              originalPrice="$12.00"
              currentPrice="$10.00"
              discountPercentage="20% OFF"
              offerEndsIn="2 days"
              quantity={quantity}
              totalPrice={`$${(10 * quantity).toFixed(2)}`}
              onQuantityIncrease={handleQuantityIncrease}
              onQuantityDecrease={handleQuantityDecrease}
              onSaveForLater={handleSaveForLater}
              onRemoveFromCart={handleRemoveFromCart}
            />

            <CartProduct
              productImage={require("../assets/img2.jpg")}
              productName="Wireless Bluetooth Headphones"
              productBrand="AudioTech"
              productCategory="Electronics > Audio"
              originalPrice="$12.00"
              currentPrice="$10.00"
              discountPercentage="20% OFF"
              offerEndsIn="2 days"
              quantity={quantity}
              totalPrice={`$${(10 * quantity).toFixed(2)}`}
              onQuantityIncrease={handleQuantityIncrease}
              onQuantityDecrease={handleQuantityDecrease}
              onSaveForLater={handleSaveForLater}
              onRemoveFromCart={handleRemoveFromCart}
            />

            <View style={webStyles.profileHeaderCard}>
              <Text style={webStyles.profileText}>Save For Later</Text>
            </View>
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
  profileHeaderCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
  },
  profileText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Cart;
