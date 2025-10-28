
import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";  

import ProductCard from "../../Components/ProductCard";
const TrendingProduct = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
      const scrollViewRef = useRef<ScrollView>(null);
      const totalCards = 10; // Updated to match actual number of cards
      const cardWidth = 270; // Card width + margin (250 + 20)
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % totalCards;
            const scrollPosition = nextIndex * cardWidth;
    
            scrollViewRef.current?.scrollTo({
              x: scrollPosition,
              animated: true,
            });
    
            return nextIndex;
          });
        }, 3000); // Auto-scroll every 3 seconds
    
        return () => clearInterval(interval);
      }, []);
  return (
    <View style={webStyles.section}>
        <Text style={webStyles.sectionTitle}>Trending Products</Text>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={webStyles.sectionContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={false}
          decelerationRate="fast"
          snapToInterval={cardWidth}
          snapToAlignment="start"
          onMomentumScrollEnd={(event) => {
            const scrollPosition = event.nativeEvent.contentOffset.x;
            const index = Math.round(scrollPosition / cardWidth);
            setCurrentIndex(index % totalCards);
          }}
        >
          <ProductCard
            imageSource={require("../../assets/img1.jpg")}
            productName="Product 1"
            discount="50% Off"
            originalPrice="$99.99"
            discountedPrice="$49.99"
            timer="03:00"
            rating="4.5"
            reviewCount="100"
            isWishlisted={true}
            isInCart={true}
            onAddToWishlist={() => console.log("Add to wishlist - Product 1")}
            onAddToCart={() => console.log("Add to cart - Product 1")}
            onBuyNow={() => console.log("Buy now - Product 1")}
            onCardPress={() => console.log("Card pressed - Product 1")}
          />
          <ProductCard
            imageSource={require("../../assets/img2.jpg")}
            productName="Product 2"
            discount="30% Off"
            originalPrice="$79.99"
            discountedPrice="$55.99"
            timer="02:30"
            rating="4.0"
            reviewCount="80"
            isWishlisted={true}
            isInCart={true}
            onAddToWishlist={() => console.log("Add to wishlist - Product 2")}
            onAddToCart={() => console.log("Add to cart - Product 2")}
            onBuyNow={() => console.log("Buy now - Product 2")}
            onCardPress={() => console.log("Card pressed - Product 2")}
          />
          <ProductCard
            imageSource={require("../../assets/img3.jpg")}
            productName="Product 3"
            discount="20% Off"
            originalPrice="$59.99"
            discountedPrice="$47.99"
            timer="01:45"
            rating="3.5"
            reviewCount="50"
            isWishlisted={false}
            isInCart={false}
            onAddToWishlist={() => console.log("Add to wishlist - Product 3")}
            onAddToCart={() => console.log("Add to cart - Product 3")}
            onBuyNow={() => console.log("Buy now - Product 3")}
            onCardPress={() => console.log("Card pressed - Product 3")}
          />
          <ProductCard
            imageSource={require("../../assets/img4.jpg")}
            productName="Product 4"
            discount="40% Off"
            originalPrice="$59.99"
            discountedPrice="$35.99"
            timer="02:45"
            rating="4.0"
            reviewCount="80"
            isWishlisted={true}
            isInCart={false}
            onAddToWishlist={() => console.log("Add to wishlist - Product 4")}
            onAddToCart={() => console.log("Add to cart - Product 4")}
            onBuyNow={() => console.log("Buy now - Product 4")}
            onCardPress={() => console.log("Card pressed - Product 4")}
          />
          <ProductCard
            imageSource={require("../../assets/img5.jpg")}
            productName="Product 5"
            discount="25% Off"
            originalPrice="$89.99"
            discountedPrice="$67.49"
            timer="01:30"
            rating="4.0"
            reviewCount="70"
            isWishlisted={false}
            isInCart={false}
            onAddToWishlist={() => console.log("Add to wishlist - Product 5")}
            onAddToCart={() => console.log("Add to cart - Product 5")}
            onBuyNow={() => console.log("Buy now - Product 5")}
            onCardPress={() => console.log("Card pressed - Product 5")}
          />
          <ProductCard
            imageSource={require("../../assets/img6.jpg")}
            productName="Product 6"
            discount="15% Off"
            originalPrice="$49.99"
            discountedPrice="$42.49"
            timer="00:50"
            rating="4.0"
            reviewCount="70"
            isWishlisted={false}
            isInCart={false}
            onAddToWishlist={() => console.log("Add to wishlist - Product 6")}
            onAddToCart={() => console.log("Add to cart - Product 6")}
            onBuyNow={() => console.log("Buy now - Product 6")}
            onCardPress={() => console.log("Card pressed - Product 6")}
          />
          <ProductCard
            imageSource={require("../../assets/img7.jpg")}
            productName="Product 7"
            discount="35% Off"
            originalPrice="$69.99"
            discountedPrice="$45.49"
            timer="02:15"
            rating="4.3"
            reviewCount="85"
            isWishlisted={false}
            isInCart={true}
            onAddToWishlist={() => console.log("Add to wishlist - Product 7")}
            onAddToCart={() => console.log("Add to cart - Product 7")}
            onBuyNow={() => console.log("Buy now - Product 7")}
            onCardPress={() => console.log("Card pressed - Product 7")}
          />
          <ProductCard
            imageSource={require("../../assets/img8.jpg")}
            productName="Product 8"
            discount="45% Off"
            originalPrice="$109.99"
            discountedPrice="$60.49"
            timer="03:30"
            rating="4.1"
            reviewCount="75"
            isWishlisted={true}
            isInCart={false}
            onAddToWishlist={() => console.log("Add to wishlist - Product 8")}
            onAddToCart={() => console.log("Add to cart - Product 8")}
            onBuyNow={() => console.log("Buy now - Product 8")}
            onCardPress={() => console.log("Card pressed - Product 8")}
          />
          <ProductCard
            imageSource={require("../../assets/img9.jpg")}
            productName="Product 9"
            discount="55% Off"
            originalPrice="$119.99"
            discountedPrice="$53.99"
            timer="04:00"
            rating="4.6"
            reviewCount="90"
            isWishlisted={false}
            isInCart={false}
            onAddToWishlist={() => console.log("Add to wishlist - Product 9")}
            onAddToCart={() => console.log("Add to cart - Product 9")}
            onBuyNow={() => console.log("Buy now - Product 9")}
            onCardPress={() => console.log("Card pressed - Product 9")}
          />
          <ProductCard
            imageSource={require("../../assets/img10.jpg")}
            productName="Product 10"
            discount="60% Off"
            originalPrice="$129.99"
            discountedPrice="$51.99"
            timer="05:00"
            rating="4.7"
            reviewCount="95"
            isWishlisted={false}
            isInCart={false}
            onAddToWishlist={() => console.log("Add to wishlist - Product 10")}
            onAddToCart={() => console.log("Add to cart - Product 10")}
            onBuyNow={() => console.log("Buy now - Product 10")}
            onCardPress={() => console.log("Card pressed - Product 10")}
          />
          {/* Add more product cards as needed */}
        </ScrollView>
        <View style={webStyles.indicatorContainer}>
          {Array.from({ length: totalCards }, (_, index) => (
            <View
              key={index}
              style={[
                webStyles.indicator,
                currentIndex === index && webStyles.activeIndicator,
              ]}
            />
          ))}
        </View>
      </View>
  )
}

export default TrendingProduct

const webStyles = StyleSheet.create({
  section: {
    width: "100%",
    alignItems: "center",
    height: 420,
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
  sectionTitle: {
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
  sectionContent: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 1350,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ddd",
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: "#007AFF",
  },
});