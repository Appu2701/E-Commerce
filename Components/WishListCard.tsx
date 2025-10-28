import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface WishListCardProps {
  onCardClick?: () => void;
  imageSource: ImageSourcePropType;
  productName: string;
  originalPrice: string;
  discountedPrice: string;
  discountPercentage: string;
  timeLeft: string;
  rating: string;
  reviewCount: string;
  isInCart: boolean;
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
  reviewCount,
  isInCart,
  onMoveToCart,
  onRemove,
  onBuyNow,
}) => {
  const getStarFills = (value: number) => {
    const v = Math.max(0, Math.min(5, value));
    const fills: number[] = [];
    for (let i = 0; i < 5; i++) {
      const remaining = v - i;
      if (remaining >= 1) {
        fills.push(1); // Full star
      } else if (remaining > 0) {
        fills.push(Math.round(remaining * 10) / 10); // Partial star rounded to 0.1
      } else {
        fills.push(0); // Empty star
      }
    }
    return fills;
  };

  const getStarColor = (rating: number) => {
    if (rating >= 4) return "#FFD700"; // gold for high ratings
    if (rating >= 3) return "#FFA500"; // orange for medium-high
    if (rating >= 2) return "#FFFF00"; // yellow for medium
    return "#FF0000"; // red for low ratings
  };

  const ratingValue = parseFloat(rating);
  const color = getStarColor(ratingValue);
  const fills = getStarFills(isNaN(ratingValue) ? 0 : ratingValue);
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onCardClick}>
      <Image
        source={imageSource}
        style={styles.productImage}
        resizeMode="contain"
      />
      <Text style={styles.productName}>{productName}</Text>
      <View style={styles.priceDiscountRow}>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>{originalPrice}</Text>
          <Text style={styles.discountedPrice}>{discountedPrice}</Text>
        </View>
        <View>
          <Text style={styles.discountText}>{discountPercentage}</Text>
          <Text style={styles.timeLeftText}>{timeLeft}</Text>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <View style={styles.ratingStars}>
          {fills.map((fill, i) => (
            <View key={i} style={styles.starWrapper}>
              <FontAwesome
                name="star-o"
                size={16}
                color="#ccc"
                style={styles.emptyStar}
              />
              <View
                style={[
                  styles.filledStarOverlay,
                  { width: Math.round(fill * 16) },
                ]}
              >
                <FontAwesome name="star" size={16} color={color} />
              </View>
            </View>
          ))}
        </View>
        <Text style={styles.ratingText}>
          ({ratingValue.toFixed(1)}) {reviewCount} reviews
        </Text>
      </View>
      <View style={styles.actionButtonsRow}>
        {isInCart ? (
          <TouchableOpacity style={styles.inCartButton} onPress={onMoveToCart}>
            <FontAwesome name="check" size={18} color="#fff" />
            <Text style={styles.actionButtonText}>In Cart</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ ...styles.actionButton, backgroundColor: "#0572dfff" }}
            onPress={onMoveToCart}
          >
            <Text style={styles.actionButtonText}>Move to Cart</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={{ ...styles.actionButton, backgroundColor: "#dc3545" }}
          onPress={onRemove}
        >
          <Text style={styles.actionButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buyNowButton} onPress={onBuyNow}>
        <Text style={{ ...styles.actionButtonText, fontSize: 16 }}>
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
    height: 325,
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: 150,
  },
  productName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  priceDiscountRow: {
    padding: 5,
    width: "100%",
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceContainer: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: "line-through",
    color: "#888",
  },
  discountedPrice: {
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
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ratingStars: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 14,
    color: "#666",
  },
  starWrapper: {
    width: 16,
    height: 16,
    marginRight: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyStar: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  filledStarOverlay: {
    height: 16,
    overflow: "hidden",
    position: "absolute",
    left: 0,
    top: 0,
  },
  actionButtonsRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
    width: "100%",
  },
  actionButton: {
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
  },
  actionButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  inCartButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    padding: 5,
    borderRadius: 5,
    flex: 1,
    backgroundColor: "#72A0FF",
  },
  buyNowButton: {
    marginTop: 5,
    backgroundColor: "#28a745",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
});

export default WishListCard;
