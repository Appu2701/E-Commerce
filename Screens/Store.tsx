import { useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
  ScrollView,
  Dimensions,
  Text,
} from "react-native";
import PageHeading from "../Components/PageHeading";
import StorePageHeader from "../Components/StorePageHeader";
import ProductCard from "../Components/ProductCard";
import CategoryProductSection from "../Components/CategoryProductSection";
import Footer from "../Components/Footer";

const Store = () => {
  const [isProductExpanded, setIsProductExpanded] = useState(false);
  // Sample data in JSON format
  const storeData = {
    storeName: "Store Name",
    rating: "4.5",
    ratingCount: "120+",
    categories: [
      { name: "Electronics", bgColor: "red" },
      { name: "Fashion", bgColor: "blue" },
      { name: "Home", bgColor: "green" },
      { name: "Beauty", bgColor: "yellow", color: "#000" },
    ],
    storeImage: require("../assets/img8.jpg"),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit incidunt pariatur architecto sed, hic sequi obcaecati cumque eius accusantium tempore asperiores velit! Veritatis recusandae possimus vel ad deserunt, soluta similique nam, eius reiciendis quod molestias nostrum non fuga.Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit incidunt pariatur architecto sed, hic sequi obcaecati cumque eius accusantium tempore asperiores velit! Veritatis recusandae possimus vel ad deserunt, soluta similique nam, eius reiciendis quod molestias nostrum non fuga.",
    ownerName: "John Doe",
    ownerPhone: "+1 234 567 890",
    ownerEmail: "john.doe@example.com",
    storeAddress: [
      "123 Main St, Anytown, USA",
      "Suite 100",
      "Anytown, USA",
      "12345",
    ],
    storeTimings: [
      "Monday to Friday 9:00 AM - 9:00 PM",
      "Saturday 10 AM - 4 PM",
      "Sunday Closed",
    ],
  };

  const allProducts = [
    {
      productName: "Product 1",
      productDescription: "Description for Product 1",
      originalPrice: "100",
      discountedPrice: "80",
      discount: "20%",
      rating: 4.5,
      ratingCount: 10,
      category: "Fruits",
      brand: "Brand A",
      isWishlisted: true,
      soldBy: "Seller A",
      weight: "1kg",
      isInCart: false,
      imageSource: require("../assets/img2.jpg"),
    },
    {
      productName: "Product 2",
      productDescription: "Description for Product 2",
      originalPrice: "200",
      discountedPrice: "150",
      discount: "25%",
      rating: 4.0,
      ratingCount: 20,
      category: "Vegetables",
      brand: "Brand B",
      isWishlisted: false,
      soldBy: "Seller B",
      weight: "500g",
      isInCart: true,
      imageSource: require("../assets/img3.jpg"),
    },
    {
      productName: "Product 3",
      productDescription: "Description for Product 3",
      originalPrice: "150",
      discountedPrice: "120",
      discount: "20%",
      rating: 3.5,
      ratingCount: 15,
      category: "Dairy",
      brand: "Brand C",
      isWishlisted: true,
      soldBy: "Seller C",
      weight: "1L",
      origin: "Local",
      isInCart: false,
      imageSource: require("../assets/img4.jpg"),
    },
    {
      productName: "Product 4",
      productDescription: "Description for Product 4",
      originalPrice: "120",
      discountedPrice: "100",
      discount: "17%",
      rating: 4.2,
      ratingCount: 12,
      category: "Bakery",
      brand: "Brand D",
      isWishlisted: false,
      soldBy: "Seller D",
      weight: "300g",
      origin: "Local",
      isInCart: true,
      imageSource: require("../assets/img5.jpg"),
    },
    {
      productName: "Product 5",
      productDescription: "Description for Product 5",
      originalPrice: "180",
      discountedPrice: "150",
      discount: "17%",
      rating: 4.5,
      ratingCount: 10,
      category: "Bakery",
      brand: "Brand E",
      isWishlisted: false,
      soldBy: "Seller E",
      weight: "500g",
      origin: "Imported",
      isInCart: true,
      imageSource: require("../assets/img6.jpg"),
    },
    {
      productName: "Product 6",
      productDescription: "Description for Product 6",
      originalPrice: "220",
      discountedPrice: "180",
      discount: "18%",
      rating: 4.8,
      ratingCount: 22,
      category: "Fruits",
      brand: "Brand F",
      isWishlisted: true,
      soldBy: "Seller F",
      weight: "1.5kg",
      isInCart: false,
      imageSource: require("../assets/img7.jpg"),
    },
  ];

  return (
    <>
      {Platform.OS === "android" || Platform.OS === "ios" ? (
        <View style={mobStyles.container}>
          <Text>Mobile Store - Coming Soon</Text>
        </View>
      ) : (
        <View style={webStyles.container}>
          <PageHeading />
          <ScrollView
            style={webStyles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <StorePageHeader
              storeName={storeData.storeName}
              rating={storeData.rating}
              ratingCount={storeData.ratingCount}
              categories={storeData.categories}
              storeImage={storeData.storeImage}
              description={storeData.description}
              ownerName={storeData.ownerName}
              ownerPhone={storeData.ownerPhone}
              ownerEmail={storeData.ownerEmail}
              storeAddress={storeData.storeAddress}
              storeTimings={storeData.storeTimings}
            />

            <View style={webStyles.section}>
              <Text style={webStyles.sectionTitle}>Deals Of the day</Text>
              <ScrollView
                contentContainerStyle={webStyles.sectionContent}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={false}
              >
                <ProductCard
                  imageSource={require("../assets/img2.jpg")}
                  productName="Product 1"
                  discount="50% Off"
                  originalPrice="$99.99"
                  discountedPrice="$49.99"
                  timer="03:00"
                  rating="4.5"
                  reviewCount="100"
                  isWishlisted={true}
                  isInCart={true}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 1")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 1")}
                  onBuyNow={() => console.log("Buy now - Product 1")}
                  onCardPress={() => console.log("Card pressed - Product 1")}
                />
                <ProductCard
                  imageSource={require("../assets/img3.jpg")}
                  productName="Product 2"
                  discount="30% Off"
                  originalPrice="$79.99"
                  discountedPrice="$55.99"
                  timer="02:30"
                  rating="4.0"
                  reviewCount="80"
                  isWishlisted={true}
                  isInCart={true}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 2")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 2")}
                  onBuyNow={() => console.log("Buy now - Product 2")}
                  onCardPress={() => console.log("Card pressed - Product 2")}
                />
                <ProductCard
                  imageSource={require("../assets/img4.jpg")}
                  productName="Product 3"
                  discount="20% Off"
                  originalPrice="$59.99"
                  discountedPrice="$47.99"
                  timer="01:45"
                  rating="3.5"
                  reviewCount="50"
                  isWishlisted={true}
                  isInCart={false}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 3")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 3")}
                  onBuyNow={() => console.log("Buy now - Product 3")}
                  onCardPress={() => console.log("Card pressed - Product 3")}
                />
                <ProductCard
                  imageSource={require("../assets/img5.jpg")}
                  productName="Product 4"
                  discount="40% Off"
                  originalPrice="$59.99"
                  discountedPrice="$35.99"
                  timer="02:45"
                  rating="4.0"
                  reviewCount="80"
                  isWishlisted={true}
                  isInCart={false}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 4")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 4")}
                  onBuyNow={() => console.log("Buy now - Product 4")}
                  onCardPress={() => console.log("Card pressed - Product 4")}
                />
                <ProductCard
                  imageSource={require("../assets/img6.jpg")}
                  productName="Product 5"
                  discount="25% Off"
                  originalPrice="$89.99"
                  discountedPrice="$67.49"
                  timer="01:30"
                  rating="4.0"
                  reviewCount="80"
                  isWishlisted={false}
                  isInCart={false}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 5")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 5")}
                  onBuyNow={() => console.log("Buy now - Product 5")}
                  onCardPress={() => console.log("Card pressed - Product 5")}
                />
                <ProductCard
                  imageSource={require("../assets/img7.jpg")}
                  productName="Product 6"
                  discount="15% Off"
                  originalPrice="$49.99"
                  discountedPrice="$42.49"
                  timer="00:50"
                  rating="4.5"
                  reviewCount="100"
                  isWishlisted={true}
                  isInCart={false}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 6")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 6")}
                  onBuyNow={() => console.log("Buy now - Product 6")}
                  onCardPress={() => console.log("Card pressed - Product 6")}
                />
                <ProductCard
                  imageSource={require("../assets/img8.jpg")}
                  productName="Product 7"
                  discount="35% Off"
                  originalPrice="$69.99"
                  discountedPrice="$45.49"
                  timer="02:15"
                  rating="4.3"
                  reviewCount="90"
                  isWishlisted={false}
                  isInCart={false}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 7")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 7")}
                  onBuyNow={() => console.log("Buy now - Product 7")}
                  onCardPress={() => console.log("Card pressed - Product 7")}
                />
                <ProductCard
                  imageSource={require("../assets/img9.jpg")}
                  productName="Product 8"
                  discount="45% Off"
                  originalPrice="$109.99"
                  discountedPrice="$60.49"
                  timer="03:30"
                  rating="4.0"
                  reviewCount="80"
                  isWishlisted={true}
                  isInCart={false}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 8")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 8")}
                  onBuyNow={() => console.log("Buy now - Product 8")}
                  onCardPress={() => console.log("Card pressed - Product 8")}
                />
                <ProductCard
                  imageSource={require("../assets/img10.jpg")}
                  productName="Product 9"
                  discount="55% Off"
                  originalPrice="$119.99"
                  discountedPrice="$53.99"
                  timer="04:00"
                  rating="4.6"
                  reviewCount="110"
                  isWishlisted={false}
                  isInCart={false}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 9")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 9")}
                  onBuyNow={() => console.log("Buy now - Product 9")}
                  onCardPress={() => console.log("Card pressed - Product 9")}
                />
                <ProductCard
                  imageSource={require("../assets/img1.jpg")}
                  productName="Product 10"
                  discount="60% Off"
                  originalPrice="$129.99"
                  discountedPrice="$51.99"
                  timer="05:00"
                  rating="4.0"
                  reviewCount="80"
                  isWishlisted={true}
                  isInCart={false}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 10")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 10")}
                  onBuyNow={() => console.log("Buy now - Product 10")}
                  onCardPress={() => console.log("Card pressed - Product 10")}
                />
                {/* Add more product cards as needed */}
              </ScrollView>
            </View>

            <View style={webStyles.section}>
              <Text style={webStyles.sectionTitle}>Popular Products</Text>
              <ScrollView
                contentContainerStyle={webStyles.sectionContent}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={false}
              >
                <ProductCard
                  imageSource={require("../assets/img2.jpg")}
                  productName="Product 1"
                  discount="50% Off"
                  originalPrice="$99.99"
                  discountedPrice="$49.99"
                  rating="4.5"
                  reviewCount="100"
                  timer="03:00"
                  isInCart={true}
                  isWishlisted={true}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 1")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 1")}
                  onBuyNow={() => console.log("Buy now - Product 1")}
                  onCardPress={() => console.log("Card pressed - Product 1")}
                />
                <ProductCard
                  imageSource={require("../assets/img3.jpg")}
                  productName="Product 2"
                  discount="30% Off"
                  originalPrice="$79.99"
                  discountedPrice="$55.99"
                  rating="4.0"
                  reviewCount="80"
                  timer="02:30"
                  isInCart={true}
                  isWishlisted={true}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 2")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 2")}
                  onBuyNow={() => console.log("Buy now - Product 2")}
                  onCardPress={() => console.log("Card pressed - Product 2")}
                />
                <ProductCard
                  imageSource={require("../assets/img4.jpg")}
                  productName="Product 3"
                  discount="20% Off"
                  originalPrice="$59.99"
                  discountedPrice="$47.99"
                  timer="01:45"
                  rating="3.5"
                  reviewCount="50"
                  isInCart={false}
                  isWishlisted={false}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 3")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 3")}
                  onBuyNow={() => console.log("Buy now - Product 3")}
                  onCardPress={() => console.log("Card pressed - Product 3")}
                />
                <ProductCard
                  imageSource={require("../assets/img5.jpg")}
                  productName="Product 4"
                  discount="40% Off"
                  originalPrice="$59.99"
                  discountedPrice="$35.99"
                  timer="02:45"
                  rating="4.0"
                  reviewCount="80"
                  isInCart={false}
                  isWishlisted={true}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 4")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 4")}
                  onBuyNow={() => console.log("Buy now - Product 4")}
                  onCardPress={() => console.log("Card pressed - Product 4")}
                />
                <ProductCard
                  imageSource={require("../assets/img6.jpg")}
                  productName="Product 5"
                  discount="25% Off"
                  originalPrice="$89.99"
                  discountedPrice="$67.49"
                  timer="01:30"
                  rating="4.2"
                  reviewCount="90"
                  isInCart={false}
                  isWishlisted={false}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 5")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 5")}
                  onBuyNow={() => console.log("Buy now - Product 5")}
                  onCardPress={() => console.log("Card pressed - Product 5")}
                />
                <ProductCard
                  imageSource={require("../assets/img5.jpg")}
                  productName="Product 6"
                  discount="15% Off"
                  originalPrice="$49.99"
                  discountedPrice="$42.49"
                  timer="00:50"
                  rating="4.0"
                  reviewCount="70"
                  isInCart={false}
                  isWishlisted={false}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 6")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 6")}
                  onBuyNow={() => console.log("Buy now - Product 6")}
                  onCardPress={() => console.log("Card pressed - Product 6")}
                />
                <ProductCard
                  imageSource={require("../assets/img4.jpg")}
                  productName="Product 7"
                  discount="35% Off"
                  originalPrice="$69.99"
                  discountedPrice="$45.49"
                  timer="02:15"
                  rating="4.3"
                  reviewCount="85"
                  isInCart={false}
                  isWishlisted={false}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 7")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 7")}
                  onBuyNow={() => console.log("Buy now - Product 7")}
                  onCardPress={() => console.log("Card pressed - Product 7")}
                />
                <ProductCard
                  imageSource={require("../assets/img3.jpg")}
                  productName="Product 8"
                  discount="45% Off"
                  originalPrice="$109.99"
                  discountedPrice="$60.49"
                  timer="03:30"
                  rating="4.1"
                  reviewCount="75"
                  isInCart={false}
                  isWishlisted={true}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 8")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 8")}
                  onBuyNow={() => console.log("Buy now - Product 8")}
                  onCardPress={() => console.log("Card pressed - Product 8")}
                />
                <ProductCard
                  imageSource={require("../assets/img2.jpg")}
                  productName="Product 9"
                  discount="55% Off"
                  originalPrice="$119.99"
                  discountedPrice="$53.99"
                  timer="04:00"
                  rating="4.6"
                  reviewCount="110"
                  isInCart={false}
                  isWishlisted={false}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 9")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 9")}
                  onBuyNow={() => console.log("Buy now - Product 9")}
                  onCardPress={() => console.log("Card pressed - Product 9")}
                />
                <ProductCard
                  imageSource={require("../assets/img10.jpg")}
                  productName="Product 10"
                  discount="60% Off"
                  originalPrice="$129.99"
                  discountedPrice="$51.99"
                  timer="05:00"
                  rating="4.7"
                  reviewCount="120"
                  isInCart={false}
                  isWishlisted={false}
                  onAddToWishlist={() =>
                    console.log("Add to wishlist - Product 10")
                  }
                  onAddToCart={() => console.log("Add to cart - Product 10")}
                  onBuyNow={() => console.log("Buy now - Product 10")}
                  onCardPress={() => console.log("Card pressed - Product 10")}
                />
                {/* Add more product cards as needed */}
              </ScrollView>
            </View>

            <CategoryProductSection
              products={allProducts}
              isExpanded={isProductExpanded}
              onToggleExpand={() => setIsProductExpanded(!isProductExpanded)}
            />
            <Footer />
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default Store;

const mobStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const { height: screenHeight } = Dimensions.get("window");
const webStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: screenHeight,
    maxHeight: 535,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#ddd",
    height: screenHeight - 100,
    overflow: "hidden",
    padding: 5,
  },
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
});
