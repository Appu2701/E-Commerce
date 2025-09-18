import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

interface Category {
  name: string;
  color: string;
}

interface StoreCardProps {
  imageSource: any;
  storeName: string;
  rating: string;
  ratingCount: string;
  categories: Category[];
  onCardPress?: () => void;
  onViewMorePress?: () => void;
}

const StoreCard: React.FC<StoreCardProps> = ({
  imageSource,
  storeName,
  rating,
  ratingCount,
  categories,
  onCardPress,
  onViewMorePress,
}) => {
  return (
    <TouchableOpacity style={styles.storeCard} onPress={onCardPress}>
      <Image
        source={imageSource}
        style={styles.storeImage}
        resizeMode="cover"
      />
      <View style={styles.storeInfoRow}>
        <Text style={styles.storeName}>{storeName}</Text>
        <View style={styles.ratingBadge}>
          <Text style={styles.ratingText}>{rating} ★</Text>
          <Text style={styles.ratingCount}>({ratingCount})</Text>
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
                { backgroundColor: category.color }
              ]}
            >
              {category.name}
            </Text>
          ))}
        </View>
      </View>
      <TouchableOpacity
        style={styles.viewMoreButton}
        onPress={onViewMorePress}
      >
        <Text style={styles.viewMoreText}>View More</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  storeCard: {
    padding: 20,
    width: 315,
    height: 350,
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: "#fff",
  },
  storeImage: {
    width: "80%",
    height: "50%",
  },
  storeInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  storeName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  ratingBadge: {
    backgroundColor: "#28a745",
    width: "65%",
    justifyContent: "center",
    padding: 3,
    borderRadius: 5,
    alignItems: "center",
  },
  ratingText: {
    color: "#fff",
    fontWeight: "bold",
    marginRight: 5,
  },
  ratingCount: {
    color: "#fff",
    fontSize: 12,
  },
  categoriesContainer: {
    width: "100%",
    marginTop: 10,
    height: "20%",
  },
  categoriesTitle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  categoriesRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 5,
    justifyContent: "center",
  },
  categoryBadge: {
    textAlign: "center",
    color: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: "500",
  },
  viewMoreButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 5,
  },
  viewMoreText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default StoreCard;