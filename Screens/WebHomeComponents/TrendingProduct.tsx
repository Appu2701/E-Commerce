import { useState, useRef, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, Animated } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ProductCard from "../../ComponentsWeb/ProductCard";
import { NGROK_API } from "../../config/api";

export interface TrendingProduct {
  dealId: number;
  imageSource: any; // Can be require() statement or network URL
  productName: string;
  discount: string;
  originalPrice: number;
  discountedPrice: number;
  rating: number;
  reviewCount: number;
  timer: string;
  wishlisted: boolean;
  inCart: boolean;
}

const TrendingProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const [trendingProducts, setTrendingProducts] = useState<TrendingProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const spinValue = useRef(new Animated.Value(0)).current;

  // Loading dots animation
  const dot1Opacity = useRef(new Animated.Value(0.3)).current;
  const dot2Opacity = useRef(new Animated.Value(0.3)).current;
  const dot3Opacity = useRef(new Animated.Value(0.3)).current;

  const cardWidth = 260; // Card width + margin (250 + 10)
  const totalCards = trendingProducts.length;

  // Helper function to convert base64 image data to URI
  const convertBase64ToImageSource = (base64String: string | null | undefined) => {
    // If value is null, undefined, or empty, return default image
    if (!base64String || base64String.trim() === '') {
      return require('../../assets/img1.jpg');
    }

    // Check if the string already has the data URI prefix
    if (base64String.startsWith('data:image')) {
      return { uri: base64String };
    }

    // If it's just the base64 code without prefix, add it
    // Assuming JPEG format, adjust if your API uses different formats
    const imagePrefix = 'data:image/jpeg;base64,';
    return { uri: `${imagePrefix}${base64String}` };
  };

  // Loading animation effect for spinner
  useEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        })
      ).start();
    } else {
      spinValue.setValue(0);
    }
  }, [isLoading]);

  // Loading dots animation effect
  useEffect(() => {
    if (isLoading) {
      const createDotAnimation = (dotOpacity: Animated.Value, delay: number) => {
        return Animated.sequence([
          Animated.delay(delay),
          Animated.timing(dotOpacity, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(dotOpacity, {
            toValue: 0.3,
            duration: 400,
            useNativeDriver: true,
          }),
        ]);
      };

      Animated.loop(
        Animated.parallel([
          createDotAnimation(dot1Opacity, 0),
          createDotAnimation(dot2Opacity, 200),
          createDotAnimation(dot3Opacity, 400),
        ])
      ).start();
    } else {
      dot1Opacity.setValue(0.3);
      dot2Opacity.setValue(0.3);
      dot3Opacity.setValue(0.3);
    }
  }, [isLoading]);

  useEffect(() => {
    // Only set up auto-scroll if there are cards to scroll
    if (totalCards === 0) return;

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
  }, [totalCards]); // Add totalCards as dependency

  // To Fetch the data from API
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setIsEmpty(false);

    fetch(`${NGROK_API}/springboot/security/getTrendingProducts`, {
      headers: {
        'ngrok-skip-browser-warning': 'true',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log('API response status:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('API data received:', data);

        // Check if data is empty
        if (!data || data.length === 0) {
          setIsEmpty(true);
          setTrendingProducts([]);
          setIsLoading(false);
          return;
        }

        // Process the data to convert base64 images
        const processedData = data.map((product: any) => ({
          ...product,
          imageSource: convertBase64ToImageSource(product.imageSource)
        }));

        console.log('Processed data with base64 images:', processedData);
        setTrendingProducts(processedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching deals products:", error);
        setError(error.message || 'Failed to load deals. Please try again later.');
        setIsLoading(false);
      });
  }, []);

  return (
    <View style={webStyles.section}>
      <Text style={webStyles.sectionTitle}>Trending Products</Text>

      {/* Loading State */}
      {isLoading && (
        <View style={webStyles.messageContainer}>
          <View style={webStyles.loadingDotsContainer}>
            <Animated.Text style={[webStyles.loadingDot, { opacity: dot1Opacity }]}>
              ●
            </Animated.Text>
            <Animated.Text style={[webStyles.loadingDot, { opacity: dot2Opacity }]}>
              ●
            </Animated.Text>
            <Animated.Text style={[webStyles.loadingDot, { opacity: dot3Opacity }]}>
              ●
            </Animated.Text>
          </View>
          <Text style={webStyles.messageText}>Loading...</Text>
        </View>
      )}

      {/* Error State */}
      {!isLoading && error && (
        <View style={webStyles.messageContainer}>
          <MaterialIcons name="error-outline" size={48} color="#d32f2f" style={webStyles.errorIcon} />
          <Text style={webStyles.errorText}>{error}</Text>
          <Text style={webStyles.errorSubText}>Please check your connection and try again</Text>
        </View>
      )}

      {/* Empty State */}
      {!isLoading && !error && isEmpty && (
        <View style={webStyles.messageContainer}>
          <MaterialIcons name="inbox" size={48} color="#999" style={webStyles.emptyIcon} />
          <Text style={webStyles.emptyText}>No deals available right now</Text>
          <Text style={webStyles.emptySubText}>Check back soon for exciting offers!</Text>
        </View>
      )}

      {/* Success State - Show Products */}
      {!isLoading && !error && !isEmpty && trendingProducts.length > 0 && (
        <>
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
            {trendingProducts.map((product, index) => (
              <ProductCard
                key={product.dealId || index}
                imageSource={product.imageSource}
                productName={product.productName}
                discount={product.discount}
                originalPrice={`$${product.originalPrice}`}
                discountedPrice={`$${product.discountedPrice}`}
                rating={product.rating.toString()}
                reviewCount={product.reviewCount.toString()}
                timer={product.timer}
                isWishlisted={product.wishlisted}
                isInCart={product.inCart}
                onAddToWishlist={() =>
                  console.log(`Add to wishlist - ${product.productName}`)
                }
                onAddToCart={() =>
                  console.log(`Add to cart - ${product.productName}`)
                }
                onBuyNow={() => console.log(`Buy now - ${product.productName}`)}
                onCardPress={() =>
                  console.log(`Card pressed - ${product.productName}`)
                }
              />
            ))}
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
        </>
      )}
    </View>
  );
};

export default TrendingProduct;

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
  messageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  loadingDotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  loadingDot: {
    fontSize: 32,
    color: "#007AFF",
  },
  messageText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  errorIcon: {
    marginBottom: 16,
  },
  errorText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#d32f2f",
    textAlign: "center",
    marginBottom: 8,
  },
  errorSubText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  emptyIcon: {
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});
