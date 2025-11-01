import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

interface CategoryHeaderSectionProps {
  title: string;
  subtitle: string;
  description: string;
  categoryImages: any[];
  autoSlideInterval?: number; // in milliseconds, default 4000
}

const CategoryHeaderSection: React.FC<CategoryHeaderSectionProps> = ({
  title,
  subtitle,
  description,
  categoryImages,
  autoSlideInterval = 4000,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (categoryImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % categoryImages.length
        );
      }, autoSlideInterval);

      return () => clearInterval(interval);
    }
  }, [categoryImages.length, autoSlideInterval]);

  return (
    <View style={styles.categoryContainer}>
      <View style={styles.categoryHeaderSection}>
        <Text style={styles.categoryTitle}>{title}</Text>
        <Text style={styles.categorySubtitle}>{subtitle}</Text>
        <Text style={styles.categoryDescription}>{description}</Text>
      </View>
      <View style={styles.categoryImageContainer}>
        <Image
          source={categoryImages[currentImageIndex]}
          style={styles.categoryImage}
          resizeMode="cover"
        />
      </View>
      {/* Image Indicators - Only show if there are multiple images */}
      {categoryImages.length > 1 && (
        <View style={styles.imageIndicators}>
          {categoryImages.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.indicator,
                currentImageIndex === index && styles.activeIndicator,
              ]}
              onPress={() => setCurrentImageIndex(index)}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    width: "100%",
    height: 450,
    backgroundColor: "#fff",
    // marginBottom: 10,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
    // elevation: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // padding: 10,
  },
  categoryHeaderSection: {
    width: "100%",
    height: "28%",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryTitle: {
    width: "100%",
    height: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#faf61fff",
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  categorySubtitle: {
    fontSize: 16,
    // marginTop: 5,
    // marginBottom: 5,
    fontWeight: "600",
    color: "#555",
    textAlign: "center",
  },
  categoryDescription: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  categoryImageContainer: {
    width: "100%",
    height: "72%",
    flexDirection: "row",
    padding: 5,
  },
  categoryImage: {
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

export default CategoryHeaderSection;