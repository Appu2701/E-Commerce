import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CategoryStoreCard from "./CategoryStoreCard";

interface Store {
  storeName: string;
  storeDescription: string;
  rating: number;
  owner: string;
  contact: string;
  address: string;
  ratingCount: number;
  categories: { name: string; bgColor: string; color?: string }[];
  isWishlisted: boolean;
  imageSource: any;
}

interface CategoryStoreSectionProps {
  stores: Store[];
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const CategoryStoreSection: React.FC<CategoryStoreSectionProps> = ({
  stores,
  isExpanded,
  onToggleExpand,
}) => {
  // Determine which stores to display
  const displayedStores = isExpanded ? stores : stores.slice(0, 4);
  const hasMoreStores = stores.length > 4;

  // Calculate height based on store count and expanded state
  const getStoreSectionHeight = () => {
    if (isExpanded) return undefined;
    return stores.length <= 4 ? 600 : 655;
  };

  return (
    <View style={[styles.storeSection, { height: getStoreSectionHeight() }]}>
      <Text style={styles.storeSectionTitle}>All Stores</Text>
      <View style={styles.storeSectionContent}>
        {displayedStores.map((store, index) => (
          <CategoryStoreCard
            key={index}
            storeName={store.storeName}
            storeDescription={store.storeDescription}
            rating={store.rating}
            owner={store.owner}
            contact={store.contact}
            address={store.address}
            ratingCount={store.ratingCount}
            categories={store.categories}
            isWishlisted={store.isWishlisted}
            imageSource={store.imageSource}
            onCardPress={() => {console.log("Card Pressed")}}
            onViewMorePress={() => {console.log("View More Pressed")}}
            onWishlistPress={() => {console.log("Wishlist Pressed")}}
          />
        ))}
      </View>
      <View style={{ height: 1, backgroundColor: '#ddd', width: '100%', marginTop: 5, marginBottom: 5 }} />
      {hasMoreStores && (
        <TouchableOpacity
          onPress={onToggleExpand}
          style={styles.viewMoreButton}
        >
          <Text style={styles.viewMoreText}>
            {isExpanded ? "View Less Stores" : "View More Stores"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  storeSection: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  storeSectionTitle: {
    width: "100%",
    height: 45,
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#faf61fff",
    color: "#000",
    textAlign: "center",
    paddingTop: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
  },
  storeSectionContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 1350,
    flexWrap: "wrap",
    paddingLeft: 10,
    paddingRight: 10,
  },
  viewMoreButton: {
    alignItems: "center",
    width: "15%",
    height: 40,
    marginBottom: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    justifyContent: "center",
    alignSelf: "flex-end",
    marginRight: 10,
    marginTop: 5,
  },
  viewMoreText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CategoryStoreSection;
