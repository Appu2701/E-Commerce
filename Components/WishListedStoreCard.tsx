import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

interface Category {
  name: string;
  bgColor: string;
  color?: string;
}

interface WishListedStoreCardProps {
  imageSource: any;
  storeName: string;
  rating: string;
  ratingCount: string;
  categories: Category[];
  onCardPress?: () => void;
  onViewMorePress?: () => void;
  onRemovePress?: () => void;
}

const WishListedStoreCard: React.FC<WishListedStoreCardProps> = ({
  imageSource,
  storeName,
  rating,
  ratingCount,
  categories,
  onCardPress,
  onViewMorePress,
  onRemovePress,
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

  const ratingValue = parseFloat(rating);
  const color = getStarColor(ratingValue);
  const fills = getStarFills(isNaN(ratingValue) ? 0 : ratingValue);

  return (
    <TouchableOpacity style={styles.WishListedStoreCard} onPress={() => navigation.navigate('Store')}>
      <Image
        source={imageSource}
        style={styles.storeImage}
        resizeMode="contain"
      />
      <Text style={styles.storeName}>{storeName}</Text>
      <View style={styles.ratingContainer}>
        <View style={styles.starsRow}>
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
          <Text style={{ ...styles.ratingValue, backgroundColor: color }}>
            {ratingValue.toFixed(1)}
          </Text>
        </View>
        {/* <View style={styles.reviewsRow}> */}
        <Text style={styles.reviewsText}>{ratingCount} reviews</Text>
        {/* </View> */}
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
          style={{ ...styles.actionButton, backgroundColor: "#FF3B30" }}
          onPress={onRemovePress}
        >
          <Text style={styles.actionButtonText}>Remove</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.actionButton, backgroundColor: "#007AFF" }}
          onPress={onViewMorePress}
        >
          <Text style={styles.actionButtonText}>View More</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  WishListedStoreCard: {
    padding: 10,
    width: 323,
    height: 365,
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
    height: "50%",
  },
  storeName: {
    marginTop: 5,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "yellow",
    borderRadius: 50,
    alignSelf: "center",
  },
  ratingContainer: {
    marginTop: 5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  starsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
    borderColor: "black",
    width: "50%",
    justifyContent: "flex-start",
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
  ratingValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 3,
  },
  reviewsText: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    fontWeight: "600",
  },
  categoriesContainer: {
    width: "100%",
    height: "17%",
    // padding: 5,
    // borderColor: "#ddd",
    // borderWidth: 1,
    // borderRadius: 5,
    // marginTop: 5,
  },
  categoriesTitle: {
    fontSize: 16,
    fontWeight: "700",
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
    marginTop: 5,
  },
  actionButton: {
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    width: "49%",
    justifyContent: "center",
  },
  actionButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default WishListedStoreCard;
