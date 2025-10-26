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
import CartProductCard from "../Components/CartProductCard";
import Footer from "../Components/Footer";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 'p1',
      productName: 'Wireless Bluetooth Headphones',
      productBrand: 'AudioTech',
      productCategory: 'Electronics',
      price: 10,
      quantity: 1,
      productImage: require('../assets/img2.jpg'),
    },
    {
      id: 'p2',
      productName: 'Wireless Bluetooth Headphones',
      productBrand: 'AudioTech',
      productCategory: 'Audio',
      price: 10,
      quantity: 1,
      productImage: require('../assets/img2.jpg'),
    },
  ]);

  const handleQuantityIncrease = (id: string) => {
    setCartItems(prev => prev.map(it => (it.id === id ? { ...it, quantity: it.quantity + 1 } : it)));
  };

  const handleQuantityDecrease = (id: string) => {
    setCartItems(prev =>
      prev.map(it => (it.id === id ? { ...it, quantity: Math.max(1, it.quantity - 1) } : it))
    );
  };

  const handleSaveForLater = () => {
    console.log("Save for later clicked");
  };

  const handleRemoveFromCart = () => {
    console.log("Remove from cart clicked");
  };

  const handleBuyNow = () => {
    console.log("Buy Now clicked");
  };
  // derived totals
  const subtotal = cartItems.reduce((sum, it) => sum + it.price * it.quantity, 0);
  const productCount = cartItems.reduce((sum, it) => sum + it.quantity, 0);
  const categoryCount = new Set(cartItems.map(it => it.productCategory)).size;
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
            <View style={webStyles.sectionHeaderCard}>
              <Text style={webStyles.sectionHeaderText}>My Cart</Text>
            </View>
            
            {cartItems.map((item) => (
              <CartProductCard
                key={item.id}
                onCardClick={() => console.log("Card clicked")}
                productImage={item.productImage}
                productName={item.productName}
                productBrand={item.productBrand}
                productCategory={item.productCategory}
                originalPrice={`$${(item.price + 2).toFixed(2)}`}
                currentPrice={`$${item.price.toFixed(2)}`}
                discountPercentage={`20% OFF`}
                offerEndsIn={`2 days`}
                quantity={item.quantity}
                totalPrice={`$${(item.price * item.quantity).toFixed(2)}`}
                onQuantityIncrease={() => handleQuantityIncrease(item.id)}
                onQuantityDecrease={() => handleQuantityDecrease(item.id)}
                onSaveForLater={handleSaveForLater}
                onRemoveFromCart={handleRemoveFromCart}
                onBuyNow={handleBuyNow}
              />
            ))}
            {/* Total summary: subtotal, tax, shipping and total + actions */}
            <View style={webStyles.totalCard}>
              <Text style={webStyles.totalTitle}>Order Summary</Text>
              <View style={webStyles.totalsRow}>
                <Text style={webStyles.totalLabel}>Items</Text>
                <Text style={webStyles.totalValue}>{productCount}</Text>
              </View>
              <View style={webStyles.totalsRow}>
                <Text style={webStyles.totalLabel}>Categories</Text>
                <Text style={webStyles.totalValue}>{categoryCount}</Text>
              </View>
              <View style={webStyles.totalsRow}>
                <Text style={webStyles.totalLabel}>Subtotal</Text>
                <Text style={webStyles.totalValue}>{`$${subtotal.toFixed(2)}`}</Text>
              </View>
              <View style={webStyles.totalsRow}>
                <Text style={webStyles.totalLabel}>Tax</Text>
                <Text style={webStyles.totalValue}>$0.00</Text>
              </View>
              <View style={webStyles.totalsRow}>
                <Text style={webStyles.totalLabel}>Shipping</Text>
                <Text style={webStyles.totalValue}>$0.00</Text>
              </View>
              <View style={[webStyles.totalsRow, webStyles.orderTotalRow]}>
                <Text style={[webStyles.totalLabel, { fontWeight: 'bold' }]}>Total</Text>
                <Text style={[webStyles.totalValue, { fontWeight: 'bold', color: '#007bff' }]}>{`$${subtotal.toFixed(2)}`}</Text>
              </View>
              <View style={webStyles.totalButtonsRow}>
                <TouchableOpacity onPress={handleBuyNow} style={[webStyles.actionButton, webStyles.actionPrimary]}>
                  <Text style={webStyles.actionButtonText}>Buy All</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRemoveFromCart} style={[webStyles.actionButton, webStyles.actionSecondary]}>
                  <Text style={webStyles.actionButtonText}>Remove All</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={webStyles.sectionHeaderCard}>
              <Text style={webStyles.sectionHeaderText}>Save For Later</Text>
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
  sectionHeaderCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
  },
  sectionHeaderText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  // Order summary / total card
  totalCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  totalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  totalsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  orderTotalRow: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 6,
    paddingTop: 8,
  },
  totalLabel: {
    fontSize: 14,
    color: '#666',
  },
  totalValue: {
    fontSize: 16,
    color: '#333',
  },
  // new full-width action buttons
  totalButtonsRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionPrimary: {
    backgroundColor: '#007bff',
    marginRight: 8,
  },
  actionSecondary: {
    backgroundColor: '#dc3545',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default Cart;
