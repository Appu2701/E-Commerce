import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

interface Category {
  name: string;
  bgColor: string;
  color?: string;
}

interface MobileStoreCardProps {
  imageSource: any;
  storeName: string;
  rating: number;
  ratingCount: number;
  categories: Category[];
  isWishlisted: boolean;
  onCardPress?: () => void;
  onViewMorePress?: () => void;
  onWishlistPress?: () => void;
}

const MobileStoreCard: React.FC<MobileStoreCardProps> = ({
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
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

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

  // Safely convert rating to number
  const ratingValue = typeof rating === 'number' ? rating : parseFloat(String(rating)) || 0;
  const color = getStarColor(ratingValue);
  const fills = getStarFills(isNaN(ratingValue) ? 0 : ratingValue);

  return (
    <TouchableOpacity
      style={styles.storeCard}
      onPress={() => navigation.navigate('Store')}
    >
      <Image
        source={imageSource}
        style={styles.storeImage}
        resizeMode="contain"
      />

      <View style={styles.storeInfo}>
        <Text style={styles.storeName} numberOfLines={1}>
          {storeName}
        </Text>

        <View style={styles.ratingContainer}>
          <View style={styles.starsRow}>
            <View style={styles.starsContainer}>
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
            <Text style={[styles.ratingValue, { color }]}>
              {ratingValue.toFixed(1)}
            </Text>
          </View>
          <Text style={styles.reviewsText}>
            ({ratingCount}+ ratings)
          </Text>
        </View>
      </View>

      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <View style={styles.categoriesRow}>
          {categories.slice(0, 3).map((category, index) => (
            <Text
              key={index}
              style={[
                styles.categoryBadge,
                { backgroundColor: category.bgColor, color: category.color || '#fff' },
              ]}
              numberOfLines={1}
            >
              {category.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.actionRow}>
        <TouchableOpacity
          style={styles.wishlistButton}
          onPress={onWishlistPress}
        >
          <FontAwesome
            name={isWishlisted ? "heart" : "heart-o"}
            size={20}
            color={isWishlisted ? "#e74c3c" : "#000"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.viewMoreButton}
          onPress={onViewMorePress}
        >
          <Text style={styles.viewMoreText}>View Store</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  storeCard: {
    width: Dimensions.get('window').width * 0.45,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    margin: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignSelf: "center",
  },
  storeImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  storeInfo: {
    marginBottom: 8,
  },
  storeName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  ratingContainer: {
    alignItems: "flex-start",
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
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 4,
  },
  reviewsText: {
    fontSize: 10,
    color: "#666",
  },
  starWrapper: {
    width: 14,
    height: 14,
    marginRight: 1,
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
  categoriesContainer: {
    marginBottom: 8,
  },
  categoriesTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
    marginBottom: 4,
  },
  categoriesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  categoryBadge: {
    fontSize: 10,
    fontWeight: "500",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    textAlign: "center",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  wishlistButton: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#f8f9fa",
    borderWidth: 1,
    borderColor: "#e9ecef",
  },
  viewMoreButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: "#007AFF",
    alignItems: "center",
  },
  viewMoreText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
  },
});

export default MobileStoreCard;