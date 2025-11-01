import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface CategoryProductCardProps {
  imageSource: any;
  productName: string;
  productDescription: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
  rating: number;
  ratingCount: number;
  category: string;
  brand: string;
  soldBy: string;
  weight: string;
  isWishlisted: boolean;
  isInCart: boolean;
  onCardPress: () => void;
  onAddToCart: () => void;
  onWishlistPress: () => void;
  onBuyNow: () => void;
}

const CategoryProductCard: React.FC<CategoryProductCardProps> = ({
  imageSource,
  productName,
  originalPrice,
  discountedPrice,
  discount,
  rating,
  ratingCount,
  category,
  brand,
  soldBy,
  weight,
  isWishlisted,
  isInCart,
  onCardPress,
  onAddToCart,
  onWishlistPress,
  onBuyNow,
}) => {
  // Helper functions for star rating
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

  const ratingValue = parseFloat(rating.toString());
  const color = "#000";
  const fills = getStarFills(isNaN(ratingValue) ? 0 : ratingValue);

  return (
    <TouchableOpacity style={styles.categoryProductCard} onPress={onCardPress}>
      <View style={styles.categoryProductImage}>
        <Image source={imageSource} style={styles.imageStyle} />
      </View>
      <View style={styles.productInfoRow}>
        <Text style={styles.categoryProductName}>{productName}</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.starsRow}>
            <View style={styles.starsContainer}>
              {fills.map((fill, i) => (
                <View key={i} style={styles.starWrapper}>
                  <FontAwesome
                    name="star-o"
                    size={16}
                    color="#fff"
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
            <Text style={[styles.ratingValue, { color }]}>
              {ratingValue.toFixed(1)}
            </Text>
          </View>
          <View style={styles.reviewsRow}>
            <Text style={styles.reviewsText}>{ratingCount} reviews</Text>
          </View>
        </View>
      </View>
      <View style={styles.priceRow}>
        <View style={styles.priceLeft}>
          <View style={styles.priceTexts}>
            <Text style={styles.originalPriceText}>${originalPrice}</Text>
            <Text style={styles.discountedPriceText}>${discountedPrice}</Text>
          </View>
          <View style={styles.freeShippingRow}>
            <FontAwesome name="truck" size={12} color="#28a745" style={styles.truckIcon} />
            <Text style={styles.freeShippingText}>Free Shipping</Text>
          </View>
        </View>
        <View style={styles.priceRight}>
          <Text style={styles.discountBadge}>{discount} Off</Text>
          <Text style={styles.timerText}>2 days left</Text>
        </View>
      </View>

      <View style={styles.detailSection}>
        <View style={styles.detailGrid}>
          <View style={styles.detailGridItem}>
            <FontAwesome
              name="tag"
              size={14}
              color="#666"
              style={styles.detailIcon}
            />
            <Text style={styles.detailValue}>{category}</Text>
          </View>
          <View style={styles.detailGridItem}>
            <FontAwesome
              name="building"
              size={14}
              color="#666"
              style={styles.detailIcon}
            />
            <Text style={styles.detailValue}>{brand}</Text>
          </View>
          <View style={styles.detailGridItem}>
            <FontAwesome
              name="user"
              size={14}
              color="#666"
              style={styles.detailIcon}
            />
            <Text style={styles.detailValue}>{soldBy}</Text>
          </View>
          <View style={styles.detailGridItem}>
            <FontAwesome
              name="balance-scale"
              size={14}
              color="#666"
              style={styles.detailIcon}
            />
            <Text style={styles.detailValue}>{weight}</Text>
          </View>
        </View>
      </View>

      <View style={styles.BottomRow}>
        {isWishlisted ? (
          <TouchableOpacity
            style={styles.wishlistedButton}
            onPress={onWishlistPress}
          >
            <FontAwesome name="check" size={18} color="#444" />
            <Text style={styles.wishlistedText}>
              Wishlisted
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.addToWishlistButton}
            onPress={onWishlistPress}
          >
            <Text style={styles.addToWishlistText}>
              Add to Wishlist
            </Text>
          </TouchableOpacity>
        )}
        {isInCart ? (
          <TouchableOpacity
            style={styles.inCartButton}
            onPress={onAddToCart}
          >
            <FontAwesome name="check" size={18} color="#fff" />
            <Text style={styles.addToCartText}>
              In Cart
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={onAddToCart}
          >
            <Text style={styles.addToCartText}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity style={styles.buyNowButton} onPress={onBuyNow}>
        <Text style={styles.buyNowText}>Buy Now</Text>
      </TouchableOpacity>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryProductCard: {
    width: 265,
    height: 490,
    borderRadius: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  categoryProductImage: {
    width: "100%",
    height: "50%",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  categoryProductName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  productInfoRow: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    marginTop: 5,
  },
  detailSection: {
    marginTop: 5,
  },
  detailGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  detailGridItem: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    paddingVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: "#f8f9fa",
    borderRadius: 6,
  },
  detailIcon: {
    marginRight: 6,
  },
  detailValue: {
    fontSize: 12,
    color: "#212529",
    flex: 1,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  priceLeft: {
    width: "40%",
    alignItems: "flex-start",
  },
  priceTexts: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  originalPriceText: {
    textDecorationLine: "line-through",
    color: "#666",
    fontSize: 16,
  },
  discountedPriceText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  freeShippingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  truckIcon: {
    marginRight: 4,
  },
  freeShippingText: {
    fontSize: 14,
    color: "#333",
  },
  priceRight: {
    width: "60%",
    alignItems: "flex-end",
  },
  discountBadge: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFF",
    backgroundColor: "#FF0000",
    padding: 3,
    borderRadius: 3,
  },
  timerText: {
    fontSize: 14,
    color: "#333",
  },
  BottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    // marginTop: 5,
  },
  actionButton: {
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    width: "48%",
  },
  inActionButton: {
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    gap: 5,
    width: "48%",
  },
  addToWishlistButton: {
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    width: "48%",
    backgroundColor: "#fffb00ff",
    height: 30,
  },
  wishlistedButton: {
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    width: "48%",
    backgroundColor: "#FFED63",
    height: 30,
  },
  addToCartButton: {
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    width: "48%",
    backgroundColor: "#0572dfff",
    height: 30,
  },
  inCartButton: {
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    width: "48%",
    backgroundColor: "#72A0FF",
    height: 30,
  },
  addToCartText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  addToWishlistText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
  wishlistedText: {
    fontSize: 14,
    color: "#444",
    fontWeight: "bold",
  },
  buyNowButton: {
    marginTop: 2,
    backgroundColor: "#28a745",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    height: 35,
  },
  buyNowText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  ratingContainer: {
    alignItems: "center",
    backgroundColor: "#faf61fff",
    borderColor: "#ffeb3b",
    borderWidth: 1,
    borderRadius: 8,
    width: "50%",
  },
  starsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingValue: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 6,
  },
  reviewsRow: {
    alignItems: "center",
  },
  reviewsText: {
    fontSize: 12,
    color: "#000",
    textAlign: "center",
  },
  starWrapper: {
    width: 16,
    height: 16,
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
    height: 16,
    overflow: "hidden",
    position: "absolute",
    left: 0,
    top: 0,
  },
});

export default CategoryProductCard;
