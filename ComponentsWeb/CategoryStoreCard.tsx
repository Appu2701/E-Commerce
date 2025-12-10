import React, { act } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

interface Category {
  name: string;
  bgColor: string;
  color?: string;
}

interface CategoryStoreCardProps {
  imageSource: any;
  storeName: string;
  storeDescription: string;
  rating: number;
  ratingCount: number;
  owner: string;
  contact: string;
  address: string;
  categories: Category[];
  isWishlisted: boolean;
  onCardPress: () => void;
  onViewMorePress: () => void;
  onWishlistPress: () => void;
}

const CategoryStoreCard: React.FC<CategoryStoreCardProps> = ({
  imageSource,
  storeName,
  storeDescription,
  rating,
  ratingCount,
  owner,
  contact,
  address,
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

  const ratingValue = parseFloat(rating.toString());
  const color = "#000";
  const fills = getStarFills(isNaN(ratingValue) ? 0 : ratingValue);

  return (
    <TouchableOpacity style={styles.categoryStoreCard} onPress={() => navigation.navigate('Store')}>
      <View style={styles.categoryStoreImage}>
        <Image source={imageSource} style={{ width: "100%", height: "100%" }} />
        <TouchableOpacity style={styles.overlay} onPress={onWishlistPress}>
          <FontAwesome
            name={isWishlisted ? "heart" : "heart-o"}
            size={30}
            color={isWishlisted ? "red" : "#000"}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.categoryStoreName}>{storeName}</Text>
      <Text style={styles.categoryStoreDescription}>{storeDescription}</Text>

      <View style={styles.detailRow}>
        <View style={styles.detailItem}>
          <FontAwesome
            name="user"
            size={14}
            color="#666"
            style={styles.detailIcon}
          />
          <Text style={styles.detailLabel}>Owner:</Text>
          <Text style={styles.detailValue}>{owner}</Text>
        </View>
        <View style={styles.detailItem}>
          <FontAwesome
            name="phone"
            size={14}
            color="#666"
            style={styles.detailIcon}
          />
          <Text style={styles.detailLabel}>Contact:</Text>
          <Text style={styles.detailValue}>{contact}</Text>
        </View>
        <View style={{ ...styles.detailItem, marginBottom: 0 }}>
          <FontAwesome
            name="map-marker"
            size={14}
            color="#666"
            style={styles.detailIcon}
          />
          <Text style={styles.detailLabel}>Address:</Text>
          <Text style={styles.detailValue}>{address}</Text>
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
      <View style={styles.BottomRow}>
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
        <TouchableOpacity
          style={{ ...styles.actionButton, backgroundColor: "#007AFF" }}
          onPress={onViewMorePress}
        >
          <Text style={styles.viewMoreText}>View More</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryStoreCard: {
    width: 325,
    height: 535,
    borderRadius: 10,
    // margin: 5,
    padding: 5,
    // marginTop: 0,
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
  categoryStoreImage: {
    width: "100%",
    height: "50%",
    position: "relative",
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 10,
    zIndex: 2,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  categoryStoreName: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "yellow",
    borderRadius: 50,
    alignSelf: "center",
  },
  categoryStoreDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  categoriesContainer: {
    width: "100%",
    // marginTop: 4,
    // marginBottom: 4,
    // backgroundColor: "#d1ecf1",
    borderRadius: 8,
    // borderColor: "#bee5eb",
    // borderWidth: 1,
    justifyContent: "center",
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
    padding: 5,
    // borderTopColor: "#bee5eb",
    // borderTopWidth: 1,
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
  detailRow: {
    // marginTop: 5,
    padding: 5,
    // backgroundColor: "#e8f5e9",
    borderRadius: 8,
    // borderWidth: 1,
    // borderColor: "#c8e6c9",
    justifyContent: "center",
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
    marginBottom: 4,
  },
  detailIcon: {
    marginRight: 6,
  },
  detailLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#495057",
    marginRight: 4,
  },
  detailValue: {
    fontSize: 12,
    color: "#212529",
    flex: 1,
  },
  BottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    marginTop: 5,
  },
  viewMoreText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  actionButton: {
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    width: "38%",
  },
  ratingContainer: {
    alignItems: "center",
    backgroundColor: "#faf61fff",
    borderColor: "#ffeb3b",
    borderWidth: 1,
    // marginTop: 5,
    // padding: 5,
    borderRadius: 8,
    width: "60%",
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

export default CategoryStoreCard;
