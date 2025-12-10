import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CategoryProductCard from "./CategoryProductCard";

interface Product {
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
  imageSource: any;
  isInCart: boolean;
}

interface CategoryProductSectionProps {
  products: Product[];
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const CategoryProductSection: React.FC<CategoryProductSectionProps> = ({
  products,
  isExpanded,
  onToggleExpand,
}) => {
  // Determine which products to display
  const displayedProducts = isExpanded ? products : products.slice(0, 5);
  const hasMoreProducts = products.length > 5;

  // Calculate height based on product count and expanded state
  const getProductSectionHeight = () => {
    if (isExpanded) return undefined;
    return products.length <= 5 ? 560 : 610;
  };

  return (
    <View style={[styles.productSection, { height: getProductSectionHeight() }]}>
      <Text style={styles.productSectionTitle}>All Products</Text>
      <View style={styles.productSectionContent}>
        {displayedProducts.map((product, index) => (
          <CategoryProductCard
            key={index}
            productName={product.productName}
            productDescription={product.productDescription}
            originalPrice={product.originalPrice}
            discountedPrice={product.discountedPrice}
            discount={product.discount}
            rating={product.rating}
            ratingCount={product.ratingCount}
            category={product.category}
            brand={product.brand}
            soldBy={product.soldBy}
            weight={product.weight}
            isWishlisted={product.isWishlisted}
            imageSource={product.imageSource}
            isInCart={product.isInCart}
            onCardPress={() => {console.log("Product Card Pressed")}}
            onAddToCart={() => {console.log("Add to Cart Pressed")}}
            onWishlistPress={() => {console.log("Wishlist Pressed")}}
            onBuyNow={() => {console.log("Buy Now Pressed")}}
          />
        ))}
      </View>
      <View style={{ height: 1, backgroundColor: '#ddd', width: '100%', marginTop: 5, marginBottom: 5 }} />
      {hasMoreProducts && (
        <TouchableOpacity
          onPress={onToggleExpand}
          style={styles.viewMoreButton}
        >
          <Text style={styles.viewMoreText}>
            {isExpanded ? "View Less Products" : "View More Products"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  productSection: {
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
  productSectionTitle: {
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
  productSectionContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 1350,
    flexWrap: "wrap",
    paddingLeft: 5,
    paddingRight: 5,
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

export default CategoryProductSection;