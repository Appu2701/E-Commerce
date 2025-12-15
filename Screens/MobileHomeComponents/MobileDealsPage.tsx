import { useRef, useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text, Animated } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MobileProductCard from "../../ComponentsMobile/MobileProductCard";
import { NGROK_API } from "../../config/api";

export interface DealProduct {
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

const MobileDealsPage = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dealsProducts, setDealsProducts] = useState<DealProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const spinValue = useRef(new Animated.Value(0)).current;

  // Loading dots animation
  const dot1Opacity = useRef(new Animated.Value(0.3)).current;
  const dot2Opacity = useRef(new Animated.Value(0.3)).current;
  const dot3Opacity = useRef(new Animated.Value(0.3)).current;

  // Helper function to convert base64 image data to URI
  const convertBase64ToImageSource = (
    base64String: string | null | undefined
  ) => {
    // If value is null, undefined, or empty, return default image
    if (!base64String || base64String.trim() === "") {
      return require("../../assets/img1.jpg");
    }

    // Check if the string already has the data URI prefix
    if (base64String.startsWith("data:image")) {
      return { uri: base64String };
    }

    // If it's just the base64 code without prefix, add it
    // Assuming JPEG format, adjust if your API uses different formats
    const imagePrefix = "data:image/jpeg;base64,";
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
      const createDotAnimation = (
        dotOpacity: Animated.Value,
        delay: number
      ) => {
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

  // To Fetch the data from API
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setIsEmpty(false);

    fetch(`${NGROK_API}/springboot/security/getDealsOfTheDay`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("API response status:", response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("API data received:", data);

        // Check if data is empty
        if (!data || data.length === 0) {
          setIsEmpty(true);
          setDealsProducts([]);
          setIsLoading(false);
          return;
        }

        // Process the data to convert base64 images
        const processedData = data.map((product: any) => ({
          ...product,
          imageSource: convertBase64ToImageSource(product.imageSource),
        }));

        console.log("Processed data with base64 images:", processedData);
        setDealsProducts(processedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching deals products:", error);
        setError(
          error.message || "Failed to load deals. Please try again later."
        );
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    // Only start auto-scroll when we have products
    if (dealsProducts.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % dealsProducts.length;
        if (flatListRef.current) {
          flatListRef.current.scrollToIndex({
            index: nextIndex,
            animated: true,
          });
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [dealsProducts.length]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Deals Of The Day</Text>
      </View>
      {/* Loading State */}
      {isLoading && (
        <View style={styles.messageContainer}>
          <View style={styles.loadingDotsContainer}>
            <Animated.Text
              style={[styles.loadingDot, { opacity: dot1Opacity }]}
            >
              ●
            </Animated.Text>
            <Animated.Text
              style={[styles.loadingDot, { opacity: dot2Opacity }]}
            >
              ●
            </Animated.Text>
            <Animated.Text
              style={[styles.loadingDot, { opacity: dot3Opacity }]}
            >
              ●
            </Animated.Text>
          </View>
          <Text style={styles.messageText}>Loading...</Text>
        </View>
      )}

      {/* Error State */}
      {!isLoading && error && (
        <View style={styles.messageContainer}>
          <MaterialIcons
            name="error-outline"
            size={48}
            color="#d32f2f"
            style={styles.errorIcon}
          />
          <Text style={styles.errorText}>{error}</Text>
          <Text style={styles.errorSubText}>
            Please check your connection and try again
          </Text>
        </View>
      )}

      {/* Empty State */}
      {!isLoading && !error && isEmpty && (
        <View style={styles.messageContainer}>
          <MaterialIcons
            name="inbox"
            size={48}
            color="#999"
            style={styles.emptyIcon}
          />
          <Text style={styles.emptyText}>No deals available right now</Text>
          <Text style={styles.emptySubText}>
            Check back soon for exciting offers!
          </Text>
        </View>
      )}

      {!isLoading && !error && !isEmpty && dealsProducts.length > 0 && (
        <>
          <FlatList
            ref={flatListRef}
            data={dealsProducts}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.dealId?.toString() || Math.random().toString()}
            renderItem={({ item }) => (
              <MobileProductCard
                imageSource={item.imageSource}
                productName={item.productName}
                discount={item.discount}
                originalPrice={item.originalPrice}
                discountedPrice={item.discountedPrice}
                rating={item.rating}
                reviewCount={item.reviewCount}
                timer={item.timer}
                isWishlisted={item.isWishlisted}
                isInCart={item.isInCart}
                onAddToWishlist={() =>
                  console.log(`Add to wishlist - ${item.productName}`)
                }
                onAddToCart={() =>
                  console.log(`Add to cart - ${item.productName}`)
                }
                onBuyNow={() => console.log(`Buy now - ${item.productName}`)}
                onCardPress={() =>
                  console.log(`Card pressed - ${item.productName}`)
                }
              />
            )}
            style={styles.content}
            contentContainerStyle={styles.contentContainer}
          />
          <View style={styles.indicatorsContainer}>
            {dealsProducts.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  {
                    backgroundColor:
                      currentIndex === index ? "blue" : "lightblue",
                  },
                ]}
              />
            ))}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    height: 450,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow for Android
    elevation: 5,
  },
  header: {
    width: "100%",
    height: "15%",
    backgroundColor: "#faf61fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
  },
  content: {
    width: "97%",
    height: "75%",
    marginBottom: 5,
  },
  contentContainer: {
    paddingHorizontal: 5,
    alignItems: "center",
    gap: 10,
  },
  indicatorsContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
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

export default MobileDealsPage;
