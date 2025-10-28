import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface Category {
  name: string;
  bgColor: string;
  color?: string;
}

interface StoreCardProps {
  imageSource: any;
  storeName: string;
  rating: string;
  ratingCount: string;
  categories: Category[];
  isWishlisted: boolean;
  onCardPress?: () => void;
  onViewMorePress?: () => void;
  onWishlistPress?: () => void;
}

const StoreCard: React.FC<StoreCardProps> = ({
  imageSource,
  storeName,
  rating,
  ratingCount,
  categories,
  isWishlisted = false,
  onCardPress,
  onViewMorePress,
  onWishlistPress,
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
    <TouchableOpacity style={styles.storeCard} onPress={onCardPress}>
      <Image
        source={imageSource}
        style={styles.storeImage}
        resizeMode="contain"
      />
      <View style={styles.storeInfoRow}>
        <Text style={styles.storeName}>{storeName}</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.starsRow}>
            <View style={styles.starsContainer}>
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
            <Text style={[styles.ratingValue, { color }]}>
              {ratingValue.toFixed(1)}
            </Text>
          </View>
          <View style={styles.reviewsRow}>
            <Text style={styles.reviewsText}>({ratingCount} reviews)</Text>
          </View>
        </View>
      </View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesTitle}>Popular Categories</Text>
        <View style={styles.categoriesRow}>
          {categories.map((category, index) => (
            <Text
              key={index}
              style={[
                styles.categoryBadge,
                { backgroundColor: category.bgColor, color: category.color },
              ]}
            >
              {category.name}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.actionRow}>
        <TouchableOpacity
          style={ styles.wishlistButton }
          onPress={onWishlistPress}
        >
          <FontAwesome
            name={isWishlisted ? "heart" : "heart-o"}
            size={30}
            color={isWishlisted ? "red" : "#000"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.actionButton }
          onPress={onViewMorePress}
        >
          <Text style={styles.viewMoreText}>View More</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  storeCard: {
    padding: 10,
    width: 315,
    height: 340,
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: "#fff",
  },
  storeImage: {
    width: "100%",
    height: "60%",
  },
  storeInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  storeName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  ratingContainer: {
    alignItems: "center",
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
    color: "#666",
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
  categoriesContainer: {
    width: "100%",
    height: "17.5%",
  },
  categoriesTitle: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  categoriesRow: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  categoryBadge: {
    textAlign: "center",
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: "500",
  },
  actionRow: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wishlistButton: {
    borderRadius: 5,
    alignItems: "center",
    width: "28%",
  },
  actionButton: {
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
     width: "70%",
            backgroundColor: "#007AFF",
  },
  viewMoreText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default StoreCard;
