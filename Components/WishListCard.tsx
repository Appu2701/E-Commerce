import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

interface WishListCardProps {
    onCardClick?: () => void;
  imageSource: ImageSourcePropType;
  productName: string;
  originalPrice: string;
  discountedPrice: string;
  discountPercentage: string;
  timeLeft: string;
  rating: string;
  ratingStars: string;
  reviewCount: string;
  onMoveToCart?: () => void;
  onRemove?: () => void;
  onBuyNow?: () => void;
}

const WishListCard: React.FC<WishListCardProps> = ({
    onCardClick,
  imageSource,
  productName,
  originalPrice,
  discountedPrice,
  discountPercentage,
  timeLeft,
  rating,
  ratingStars,
  reviewCount,
  onMoveToCart,
  onRemove,
  onBuyNow,
}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onCardClick}>
      <Image
        source={imageSource}
        style={styles.productImage}
        resizeMode="contain"
      />
      <Text style={styles.productName}>
        {productName}
      </Text>
      <View style={styles.priceDiscountRow}>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>
            {originalPrice}
          </Text>
          <Text style={styles.discountedPrice}>
            {discountedPrice}
          </Text>
        </View>
        <View>
          <Text style={styles.discountText}>
            {discountPercentage}
          </Text>
          <Text style={styles.timeLeftText}>
            {timeLeft}
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingStars}>
            {ratingStars}
          </Text>
          <Text style={styles.ratingText}>
            ({rating}) {reviewCount} reviews
          </Text>
        </View>
      </View>
      <View style={styles.actionButtonsRow}>
        <TouchableOpacity
          style={[styles.actionButton, styles.moveToCartButton]}
          onPress={onMoveToCart}
        >
          <Text style={styles.actionButtonText}>
            Move To Cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.removeButton]}
          onPress={onRemove}
        >
          <Text style={styles.actionButtonText}>
            Remove
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.buyNowButton}
        onPress={onBuyNow}
      >
        <Text style={styles.buyNowText}>
          Buy Now
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    width: "19.5%",
    height: 350,
    alignItems: "center",
  },
  productImage: {
    width: 250,
    height: 150,
  },
  productName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  priceDiscountRow: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
    gap: 40,
    justifyContent: "space-between",
  },
  priceContainer: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 20,
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: "line-through",
    color: "#888",
  },
  discountedPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  discountText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#e41212ff",
  },
  timeLeftText: {
    fontSize: 12,
    color: "#ef4121ff",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ratingStars: {
    fontSize: 16,
    color: "#FFD700",
    marginRight: 5,
  },
  ratingText: {
    fontSize: 14,
    color: "#666",
  },
  actionButtonsRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 5,
    width: "100%",
    paddingHorizontal: 5,
  },
  actionButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
  },
  moveToCartButton: {
    backgroundColor: "#007BFF",
  },
  removeButton: {
    backgroundColor: "#dc3545",
  },
  actionButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buyNowButton: {
    marginTop: 5,
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 5,
  },
  buyNowText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default WishListCard;