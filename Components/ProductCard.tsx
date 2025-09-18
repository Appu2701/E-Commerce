import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

interface ProductCardProps {
  imageSource: any;
  productName: string;
  discount: string;
  originalPrice: string;
  discountedPrice: string;
  timer: string;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  onCardPress?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSource,
  productName,
  discount,
  originalPrice,
  discountedPrice,
  timer,
  onAddToCart,
  onBuyNow,
  onCardPress,
}) => {
  return (
    <TouchableOpacity style={styles.sectionCard} onPress={onCardPress}>
      <Image
        source={imageSource}
        style={styles.productImage}
        resizeMode="contain"
      />
      <View style={styles.productInfoRow}>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.discountBadge}>{discount}</Text>
      </View>
      <View style={styles.priceRow}>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>{originalPrice}</Text>
          <Text style={styles.discountedPrice}>{discountedPrice}</Text>
        </View>
        <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCart}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buyNowButton} onPress={onBuyNow}>
        <Text style={styles.buyNowText}>Buy Now</Text>
      </TouchableOpacity>
      <Text style={styles.timerText}>
        <Text style={styles.timerHighlight}>{timer}</Text> Times left
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sectionCard: {
    padding: 20,
    width: 250,
    height: 300,
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 200,
    height: 150,
  },
  productInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    alignItems: "center",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  discountBadge: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#e41212ff",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",
    gap: 5,
    width: "45%",
  },
  originalPrice: {
    fontSize: 14,
    color: "#888",
    textDecorationLine: "line-through",
  },
  discountedPrice: {
    fontSize: 14,
    color: "#000",
  },
  addToCartButton: {
    backgroundColor: "#007AFF",
    padding: 5,
    borderRadius: 5,
  },
  addToCartText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  buyNowButton: {
    marginTop: 10,
    backgroundColor: "#28a745",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  buyNowText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  timerText: {
    fontSize: 14,
    color: "#000",
    marginTop: 5,
    textAlign: "center",
  },
  timerHighlight: {
    fontWeight: "bold",
    color: "#d40808c5",
  },
});

export default ProductCard;