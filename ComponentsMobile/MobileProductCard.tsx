import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

interface MobileProductCardProps {
  imageSource: any;
  productName: string;
  discount: string;
  originalPrice: string;
  discountedPrice: string;
  rating: string;
  reviewCount: string;
  timer: string;
  isWishlisted: boolean;
  isInCart: boolean;
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
  onBuyNow?: () => void;
  onCardPress?: () => void;
}

const MobileProductCard: React.FC<MobileProductCardProps> = ({
  imageSource,
  productName,
  discount,
  originalPrice,
  discountedPrice,
  rating,
  reviewCount,
  timer,
  isWishlisted,
  isInCart,
  onAddToCart,
  onAddToWishlist,
  onBuyNow,
  onCardPress,
}) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

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
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Product')}>
      <Image
        source={imageSource}
        style={styles.productImage}
        resizeMode="contain"
      />

      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {productName}
        </Text>

        <View style={styles.priceSection}>
          <Text style={styles.discountBadge}>{discount}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.originalPrice}>{originalPrice}</Text>
            <Text style={styles.discountedPrice}>{discountedPrice}</Text>
          </View>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={[styles.actionButton, styles.iconButton]}
          onPress={onAddToWishlist}
        >
          <FontAwesome
            name={isWishlisted ? "heart" : "heart-o"}
            size={20}
            color={isWishlisted ? "#e74c3c" : "#000"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.iconButton]}
          onPress={onAddToCart}
        >
          {isInCart ? (
            <MaterialCommunityIcons name="cart-check" size={20} color="#000" />
          ) : (
            <MaterialCommunityIcons name="cart-outline" size={20} color="#000" />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.ratingSection}>
        <View style={styles.ratingStars}>
          {fills.map((fill, i) => (
            <View key={i} style={styles.starWrapper}>
              <FontAwesome
                name="star-o"
                size={14}
                color="#ccc"
                style={styles.emptyStar}
              />
              <View
                style={[
                  styles.filledStarOverlay,
                  { width: Math.round(fill * 14) },
                ]}
              >
                <FontAwesome name="star" size={14} color={color} />
              </View>
            </View>
          ))}
        </View>
        <Text style={styles.ratingText}>
          ({ratingValue.toFixed(1)}) {reviewCount}
        </Text>
      </View>

      <TouchableOpacity style={styles.buyNowButton} onPress={onBuyNow}>
        <Text style={styles.buyNowText}>Buy Now</Text>
      </TouchableOpacity>

      

      <Text style={styles.timerText}>
        <Text style={styles.timerHighlight}>{timer}</Text> left
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width * 0.45, // Responsive width for mobile
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    margin: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignSelf: 'center',
  },
  productImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
  },
  productInfo: {
    marginTop: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    lineHeight: 18,
  },
  priceSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },
  discountBadge: {
    fontSize: 12,
    color: "#e41212ff",
    fontWeight: "600",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  originalPrice: {
    fontSize: 12,
    color: "#888",
    textDecorationLine: "line-through",
  },
  discountedPrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 6,
    marginTop: 8,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  iconButton: {
    backgroundColor: "#f8f9fa",
    borderWidth: 1,
    borderColor: "#e9ecef",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  wishlistButton: {
    backgroundColor: "#fffb00ff",
  },
  wishlistedButton: {
    backgroundColor: "#FFED63",
    flexDirection: 'row',
    gap: 4,
  },
  cartButton: {
    backgroundColor: "#0572dfff",
  },
  inCartButton: {
    backgroundColor: "#72A0FF",
    flexDirection: 'row',
    gap: 4,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
  wishlistedText: {
    color: "#444",
  },
  wishlistText: {
    color: "#000",
  },
  buyNowButton: {
    marginTop: 8,
    backgroundColor: "#28a745",
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  buyNowText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  ratingSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
    gap: 4,
  },
  ratingStars: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 12,
    color: "#666",
  },
  starWrapper: {
    width: 14,
    height: 14,
    marginRight: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyStar: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  filledStarOverlay: {
    height: 14,
    overflow: "hidden",
    position: "absolute",
    left: 0,
    top: 0,
  },
  timerText: {
    fontSize: 12,
    color: "#000",
    marginTop: 6,
    textAlign: "center",
  },
  timerHighlight: {
    fontWeight: "700",
    color: "#d40808c5",
  },
});

export default MobileProductCard;