import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of banner images
  const bannerImages = [
    require("../../assets/Diwali1.jpg"),
    require("../../assets/Diwali2.jpg"),
    require("../../assets/Diwali3.jpg"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <View style={webStyles.bannerSaleContainer}>
      <View style={webStyles.bannerHeader}>
        <Text style={webStyles.bannerTitle}>Big Diwali Sale!</Text>
        <Text style={webStyles.bannerSubtitle}>
          Up to 70% off on selected items. Limited time offer!
        </Text>
      </View>
      <View style={webStyles.bannerImageContainer}>
        <Image
          source={bannerImages[currentImageIndex]}
          style={webStyles.bannerImage}
          resizeMode="cover"
        />
      </View>
      {/* Image Indicators */}
      <View style={webStyles.imageIndicators}>
        {bannerImages.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              webStyles.indicator,
              currentImageIndex === index && webStyles.activeIndicator,
            ]}
            onPress={() => setCurrentImageIndex(index)}
          />
        ))}
      </View>
    </View>
  );
};

export default Banner;

const webStyles = StyleSheet.create({
  bannerSaleContainer: {
    width: "100%",
    height: 420,
    backgroundColor: "#fff",
    position: "relative",
    marginBottom: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bannerHeader: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  bannerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    color: "#000",
    textAlign: "center",
  },
  bannerSubtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
  bannerImageContainer: {
    width: "100%",
    height: "80%",
    flexDirection: "row",
    padding: 5,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  imageIndicators: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: "#fff",
    width: 20,
  },
});
