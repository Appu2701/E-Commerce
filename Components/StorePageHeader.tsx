import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface Category {
  name: string;
  bgColor: string;
  color?: string;
}

interface StorePageHeaderProps {
  storeName: string;
  rating: string;
  ratingCount: string;
  categories: Category[];
  storeImage: any;
  description: string;
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  storeAddress: string[];
  storeTimings: string[];
}

const StorePageHeader: React.FC<StorePageHeaderProps> = ({
  storeName,
  rating,
  ratingCount,
  categories,
  storeImage,
  description,
  ownerName,
  ownerPhone,
  ownerEmail,
  storeAddress,
  storeTimings,
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
    <View style={styles.mainCard}>
      <View style={styles.headerContainer}>
        <Text style={styles.storeNameText}>{storeName}</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.starsRow}>
            {fills.map((fill, i) => (
              <View key={i} style={styles.starWrapper}>
                <FontAwesome
                  name="star-o"
                  size={30}
                  color="#ccc"
                  style={styles.emptyStar}
                />
                <View
                  style={[
                    styles.filledStarOverlay,
                    { width: Math.round(fill * 30) },
                  ]}
                >
                  <FontAwesome name="star" size={30} color={color} />
                </View>
              </View>
            ))}
            <Text
              style={{
                ...styles.ratingValue,
                backgroundColor: color,
              }}
            >
              {ratingValue.toFixed(1)}
            </Text>
          </View>
          <Text style={styles.reviewsText}>{ratingCount} reviews</Text>
        </View>
      </View>
      {/* <Text style={styles.tagline}>
        Welcome to our store! Explore a wide range of products across
        various categories.
      </Text> */}
      <View style={styles.middleContainer}>
        <View style={{ width: "58%", height: "100%" }}>
          <Image
            source={storeImage}
            style={styles.storeImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.cardHeader}>
              <FontAwesome
                name="info-circle"
                size={18}
                color="#2563eb"
              />
              <Text style={styles.cardTitle}>About Store</Text>
            </View>
            <Text style={styles.descriptionText}>
              {description}
            </Text>
          </View>
          <View
            style={{
              ...styles.innerContainer,
              backgroundColor: "#eff6ff",
              borderColor: "#e2e8f0",
            }}
          >
            <View style={styles.cardHeader}>
              <FontAwesome name="tags" size={18} color="#2563eb" />
              <Text style={styles.cardTitle}>All Categories</Text>
            </View>
            <View style={styles.categoriesRow}>
              {categories.map((category, index) => (
                <View
                  key={index}
                  style={[
                    styles.categoryChip,
                    { backgroundColor: category.bgColor },
                  ]}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      { color: category.color || "#fff" },
                    ]}
                  >
                    {category.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomCard}>
          <View style={styles.cardHeader}>
            <FontAwesome name="address-card-o" size={18} color="#2563eb" />
            <Text style={styles.cardTitle}>Owner Details</Text>
          </View>
          <View style={{marginTop: 8}}>
            <View style={{ marginBottom: 4, flexDirection: "row", gap: 6 }}>
              <FontAwesome name="user" size={14} color="#666" />
              <Text style={{color: "#475569", fontWeight: "bold", fontSize: 14}}>Owner Name:</Text>
              <Text style={{color: "#475569", fontSize: 14, marginLeft: 6}}>{ownerName}</Text>
            </View>
            <View style={{ marginBottom: 4, flexDirection: "row",gap: 6 }}>
              <FontAwesome name="phone" size={14} color="#666" />
              <Text style={{color: "#475569", fontWeight: "bold", fontSize: 14}}>Owner Phone:</Text>
              <Text style={{color: "#475569", fontSize: 14, marginLeft: 6}}>{ownerPhone}</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 6 }}>
              <FontAwesome name="envelope" size={14} color="#666" />
              <Text style={{color: "#475569", fontWeight: "bold", fontSize: 14}}>Owner Email:</Text>
              <Text style={{color: "#475569", fontSize: 14, marginLeft: 6}}>{ownerEmail}</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomCard}>
          <View style={styles.cardHeader}>
            <FontAwesome name="map-marker" size={18} color="#2563eb" />
            <Text style={styles.cardTitle}>Store Address</Text>
          </View>
          <View style={{ padding: 8 }}>
            {storeAddress.map((line, index) => (
              <Text key={index} style={styles.storeAddressText}>
                {line}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.bottomCard}>
          <View style={styles.cardHeader}>
            <FontAwesome name="clock-o" size={18} color="#2563eb" />
            <Text style={styles.cardTitle}>Store Timings</Text>
          </View>
          <View style={{ padding: 8 }}>
            {storeTimings.map((timing, index) => (
              <Text key={index} style={styles.storeTimingsText}>
                {timing}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    height: 700,
    gap: 6,
  },
  headerContainer: {
    width: "100%",
    height: "11%",
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  storeNameText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
    justifyContent: "flex-start",
    width: "75%",
  },
  ratingContainer: {
    backgroundColor: "#fef3c7",
    borderWidth: 1,
    borderColor: "#fcd34d",
    padding: 10,
    borderRadius: 8,
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    height: "90%",
  },
  starsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    borderColor: "black",
  },
  starWrapper: {
    width: 30,
    height: 30,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyStar: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  filledStarOverlay: {
    height: 30,
    overflow: "hidden",
    position: "absolute",
    left: 0,
    top: 0,
  },
  ratingValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 3,
    marginLeft: 20,
  },
  reviewsText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    fontWeight: "600",
  },
  tagline: {
    fontSize: 20,
    color: "#64748b",
    // marginBottom: 24,
    textAlign: "center",
    fontWeight: "500",
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
    paddingBottom: 10,
  },
  middleContainer: {
    // backgroundColor: "red",
    width: "100%",
    height: "65%",
    justifyContent: "space-between",
    // padding: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  storeImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  rightContainer: {
    // backgroundColor: "green",
    width: "41%",
    height: "100%",
    // gap: 10,
    // padding: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    // alignItems: "flex-start",
  },
  innerContainer: {
    // backgroundColor: "lightgreen",
    height: "49%",
    borderRadius: 10,
    width: "100%",
    padding: 10,
    backgroundColor: "#f8fafc",
    // padding: 16,
    // borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    paddingBottom: 4,
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1e293b",
  },
  descriptionText: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 22,
    textAlign: "justify",
  },
  categoriesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 10,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "600",
  },
  bottomContainer: {
    // backgroundColor: "blue",
    width: "100%",
    height: "23%",
    // padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomCard: {
    backgroundColor: "#f1f5f9",
    width: "33%",
    height: "95%",
    borderRadius: 10,
    padding: 10,
  },
  storeAddressText: {
    fontSize: 14,
    color: "#475569",
    marginTop: 4,
  },
  storeTimingsText: {
    fontSize: 14,
    color: "#475569",
    marginTop: 4,
  },
});

export default StorePageHeader;