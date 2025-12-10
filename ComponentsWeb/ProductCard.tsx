import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
interface ProductCardProps {
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

const ProductCard: React.FC<ProductCardProps> = ({
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
    <TouchableOpacity style={styles.sectionCard} onPress={() => navigation.navigate('Product')}>
      <Image
        source={imageSource}
        style={styles.productImage}
        resizeMode="contain"
      />
      <View style={styles.productInfoRow}>
        <Text style={styles.productName}>{productName}</Text>
        <View style={{ width: "45%", alignItems: "flex-end" }}>
          <Text style={styles.discountBadge}>{discount}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.originalPrice}>{originalPrice}</Text>
            <Text style={styles.discountedPrice}>{discountedPrice}</Text>
          </View>
        </View>
      </View>
      <View style={styles.priceRow}>
        {isWishlisted ? (
          <TouchableOpacity
            style={{ ...styles.inActionButton, backgroundColor: "#FFED63" }}
            onPress={onAddToWishlist}
          >
            <FontAwesome name="check" size={18} color="#444" />
            <Text style={{ ...styles.addToCartText, color: "#444" }}>
              Wishlisted
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ ...styles.actionButton, backgroundColor: "#fffb00ff" }}
            onPress={onAddToWishlist}
          >
            <Text style={{ ...styles.addToCartText, color: "#000"}}>
              Add to Wishlist
            </Text>
          </TouchableOpacity>
        )}
        {isInCart ? (
          <TouchableOpacity
            style={{ ...styles.inActionButton, backgroundColor: "#72A0FF" }}
            onPress={onAddToCart}
          >
            <FontAwesome name="check" size={18} color="#fff" />
            <Text style={ styles.addToCartText }>
              In Cart
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ ...styles.actionButton, backgroundColor: "#0572dfff" }}
            onPress={onAddToCart}
          >
            <Text style={ styles.addToCartText }>
              Add to Cart
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity style={styles.buyNowButton} onPress={onBuyNow}>
        <Text style={styles.buyNowText}>Buy Now</Text>
      </TouchableOpacity>
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
      <Text style={styles.timerText}>
        <Text style={styles.timerHighlight}>{timer}</Text> Times left
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sectionCard: {
    padding: 10,
    width: 250,
    height: 330,
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: "100%",
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
    fontSize: 12,
    color: "#e41212ff",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    alignItems: "center",
  },
  priceContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
    gap: 5,
    width: "100%",
  },
  originalPrice: {
    fontSize: 14,
    color: "#888",
    textDecorationLine: "line-through",
  },
  discountedPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  actionButton: {
      padding: 5,
      borderRadius: 5,
  },
  inActionButton: {
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5
  },
  addToCartText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  buyNowButton: {
    marginTop: 5,
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
  timerText: {
    fontSize: 14,
    color: "#000",
    marginTop: 5,
    marginBottom: 5,
    textAlign: "center",
  },
  timerHighlight: {
    fontWeight: "bold",
    color: "#d40808c5",
  }
});

export default ProductCard;
