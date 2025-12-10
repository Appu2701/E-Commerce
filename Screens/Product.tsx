import {
  View,
  StyleSheet,
  Platform,
  ScrollView,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import PageHeading from "../ComponentsWeb/PageHeading";
import Footer from "../ComponentsWeb/Footer";
import RecommandedProduct from "../ComponentsWeb/RecommandedProduct";
import MobileLayout from "../ComponentsMobile/MobileLayout";

const Product = () => {
  const getStarFills = (value: number) => {
    const v = Math.max(0, Math.min(5, value));
    const fills: number[] = [];
    for (let i = 0; i < 5; i++) {
      const remaining = v - i;
      if (remaining >= 1) {
        fills.push(1);
      } else if (remaining > 0) {
        fills.push(Math.round(remaining * 10) / 10);
      } else {
        fills.push(0);
      }
    }
    return fills;
  };

  const getStarColor = (rating: number) => {
    if (rating >= 4) return "#FFD700";
    if (rating >= 3) return "#FFA500";
    if (rating >= 2) return "#FFFF00";
    return "#FF0000";
  };

  const ratingValue = 3.4;
  const color = getStarColor(ratingValue);
  const fills = getStarFills(ratingValue);

  // Seller rating
  const sellerRatingValue = 4.2;
  const sellerColor = getStarColor(sellerRatingValue);
  const sellerFills = getStarFills(sellerRatingValue);

  const product = {
    highlights: [
      "12GB RAM | 256GB ROM",
      "17.27 cm (6.8 inch) Quad HD+ Display",
      "200MP + 10MP + 12MP + 10MP | 12MP Front Camera",
      "5000 mAh Lithium Ion Battery",
      "Qualcomm Snapdragon 8 Gen 2 Processor",
    ],
    description:
      "Experience the power of innovation with the Samsung Galaxy S23 Ultra. Featuring a stunning 17.27 cm (6.8 inch) Quad HD+ display, this smartphone delivers crystal-clear visuals for an immersive viewing experience. The 200MP quad camera system captures professional-quality photos and videos, while the 12MP front camera ensures your selfies are picture-perfect. Powered by the Qualcomm Snapdragon 8 Gen 2 processor and equipped with 12GB RAM, it handles multitasking effortlessly. The 5000 mAh battery keeps you connected throughout the day, and the IP68 rating makes it dust and water resistant.",
    specifications: {
      "General": {
        "In The Box": "Handset, USB Cable, SIM Ejection Pin, User Manual",
        "Model Number": "SM-S918B",
        "Model Name": "Galaxy S23 Ultra",
        "Color": "Phantom Black",
        "Browse Type": "Smartphones",
        "SIM Type": "Dual Sim (Nano + eSIM)",
        "Hybrid Sim Slot": "No",
        "Touchscreen": "Yes",
        "OTG Compatible": "Yes",
      },
      "Display Features": {
        "Display Size": "17.27 cm (6.8 inch)",
        "Resolution": "3088 x 1440 Pixels",
        "Resolution Type": "Quad HD+",
        "GPU": "Adreno 740",
        "Display Type": "Dynamic AMOLED 2X",
        "Display Colors": "16M Colors",
        "Other Display Features": "120Hz Adaptive Refresh Rate, HDR10+, 1750 nits Peak Brightness, Corning Gorilla Glass Victus 2",
      },
      "OS & Processor Features": {
        "Operating System": "Android 13",
        "Processor Brand": "Qualcomm",
        "Processor Type": "Snapdragon 8 Gen 2",
        "Processor Core": "Octa Core",
        "Primary Clock Speed": "3.36 GHz",
        "Secondary Clock Speed": "2.8 GHz",
        "Operating Frequency": "2G: GSM 850/900/1800/1900, 3G: UMTS B1/2/4/5/8, 4G: LTE, 5G: SA/NSA/Sub6",
      },
      "Memory & Storage Features": {
        "Internal Storage": "256 GB",
        "RAM": "12 GB",
        "Expandable Storage": "No",
        "Supported Memory Card Type": "Not Applicable",
      },
      "Camera Features": {
        "Primary Camera Available": "Yes",
        "Primary Camera": "200MP + 10MP + 12MP + 10MP",
        "Primary Camera Features": "200MP Wide Angle (f/1.7), 10MP Periscope Telephoto (f/4.9, 10x Optical Zoom), 10MP Telephoto (f/2.4, 3x Optical Zoom), 12MP Ultra Wide (f/2.2), OIS, Laser AF, Super Steady Video, 8K Video Recording",
        "Optical Zoom": "Yes",
        "Secondary Camera Available": "Yes",
        "Secondary Camera": "12MP Front Camera",
        "Secondary Camera Features": "12MP (f/2.2), Dual Pixel AF, 4K Video Recording",
        "Flash": "LED Flash",
        "Video Recording": "Yes",
        "Video Recording Resolution": "8K @ 24/30 fps, 4K @ 30/60 fps, 1080p @ 30/60/240 fps",
      },
      "Connectivity Features": {
        "Network Type": "5G, 4G VoLTE, 4G, 3G, 2G",
        "Supported Networks": "5G, 4G VoLTE, 4G LTE, UMTS, GSM",
        "Internet Connectivity": "5G, 4G, 3G, Wi-Fi, EDGE",
        "3G": "Yes",
        "GPRS": "Yes",
        "Pre-installed Browser": "Samsung Internet",
        "Bluetooth Support": "Yes",
        "Bluetooth Version": "v5.3",
        "Wi-Fi": "Yes",
        "Wi-Fi Version": "Wi-Fi 6E (802.11 a/b/g/n/ac/ax)",
        "Wi-Fi Hotspot": "Yes",
        "NFC": "Yes",
        "USB Connectivity": "Yes",
        "Audio Jack": "No",
        "Map Support": "Google Maps",
        "GPS Support": "Yes",
      },
      "Battery & Power Features": {
        "Battery Capacity": "5000 mAh",
        "Battery Type": "Lithium Ion",
        "Wireless Charging": "Yes",
        "Quick Charging": "Yes (45W Super Fast Charging)",
      },
      "Dimensions": {
        "Width": "78.1 mm",
        "Height": "163.4 mm",
        "Depth": "8.9 mm",
        "Weight": "234 g",
      },
      "Additional Features": {
        "IP Rating": "IP68 (Water and Dust Resistant)",
        "Fingerprint Sensor": "Yes (Ultrasonic, Under Display)",
        "Face Unlock": "Yes",
        "S Pen Support": "Yes (Built-in)",
        "Samsung DeX": "Yes",
        "Dolby Atmos": "Yes",
        "Stereo Speakers": "Yes (AKG Tuned)",
      },
      "Warranty": {
        "Warranty Summary": "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-Box Accessories",
        "Domestic Warranty": "1 Year",
      },
    },
    reviews: {
      totalReviews: 1247,
      averageRating: 4.3,
      ratingBreakdown: {
        5: 687,
        4: 312,
        3: 156,
        2: 62,
        1: 30,
      },
      userReviews: [
        {
          id: 1,
          userName: "Rajesh Kumar",
          rating: 5,
          date: "15 Nov, 2024",
          verified: true,
          reviewTitle: "Excellent phone with amazing camera!",
          reviewText: "The camera quality is outstanding. The 200MP sensor captures incredible detail. Battery life is great, easily lasts a full day with heavy usage. The S Pen is a bonus feature that I use daily. Highly recommended!",
          helpful: 234,
          images: 3,
        },
        {
          id: 2,
          userName: "Priya Sharma",
          rating: 4,
          date: "10 Nov, 2024",
          verified: true,
          reviewTitle: "Great performance but pricey",
          reviewText: "Performance is top-notch. The Snapdragon 8 Gen 2 handles everything smoothly. Display is gorgeous with 120Hz refresh rate. Only downside is the price, but you get what you pay for.",
          helpful: 156,
          images: 0,
        },
        {
          id: 3,
          userName: "Amit Patel",
          rating: 5,
          date: "5 Nov, 2024",
          verified: true,
          reviewTitle: "Best flagship phone in the market",
          reviewText: "Switched from iPhone and couldn't be happier. The customization options, S Pen functionality, and camera system are unmatched. Build quality is premium. Worth every penny!",
          helpful: 189,
          images: 2,
        },
        {
          id: 4,
          userName: "Sneha Reddy",
          rating: 3,
          date: "1 Nov, 2024",
          verified: false,
          reviewTitle: "Good but has heating issues",
          reviewText: "Phone is good overall but tends to heat up during gaming and video recording. Camera is excellent in daylight but struggles a bit in low light. Battery backup is decent.",
          helpful: 78,
          images: 1,
        },
        {
          id: 5,
          userName: "Vikram Singh",
          rating: 5,
          date: "28 Oct, 2024",
          verified: true,
          reviewTitle: "Premium experience all around",
          reviewText: "The display quality is phenomenal. Colors are vibrant and the brightness is excellent even in direct sunlight. Fast charging is really fast. The S Pen makes note-taking so convenient.",
          helpful: 203,
          images: 4,
        },
      ],
    },
  };

  return (
    <>
      {Platform.OS === "android" || Platform.OS === "ios" ? (
        <MobileLayout>
          <Text>Product Page - Coming Soon</Text>
        </MobileLayout>
        // <View style={mobStyles.container}>
        //   <Text>Product Page - Coming Soon</Text>
        // </View>
      ) : (
        <View style={webStyles.container}>
          <PageHeading />
          <ScrollView
            style={webStyles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <View style={webStyles.contentContainer}>
              <View style={webStyles.topDetailsContainer}>
                <View style={webStyles.imageContainer}>
                  <View style={webStyles.imageWrapper}>
                    <Image
                      source={require("../assets/img2.jpg")}
                      style={webStyles.productImage}
                      resizeMode="contain"
                      onError={(error) => console.log('Image load error:', error)}
                      onLoad={() => console.log('Image loaded successfully')}
                    />
                  </View>
                  <View style={webStyles.thumbnailContainer}>
                    <Text style={webStyles.thumbnailText}>Thumbnail 1</Text>
                    <Text style={webStyles.thumbnailText}>Thumbnail 2</Text>
                    <Text style={webStyles.thumbnailText}>Thumbnail 3</Text>
                  </View>
                </View>
                <View style={webStyles.detailsContainer}>
                  <View style={webStyles.titleRow}>
                    <View style={webStyles.titleContainer}>
                      <Text style={webStyles.titleText}>Product Title</Text>
                      <Text style={webStyles.brandText}>
                        Brand Name &gt; Category{" "}
                      </Text>
                    </View>
                    <View style={webStyles.ratingContainer}>
                      <View style={webStyles.ratingRow}>
                        {fills.map((fill, index) => (
                          <View key={index} style={webStyles.starWrapper}>
                            <FontAwesome name="star" size={30} color="#ccc" />
                            {fill > 0 && (
                              <View
                                style={[
                                  webStyles.filledStarOverlay,
                                  { width: Math.round(fill * 26) },
                                ]}
                              >
                                <FontAwesome
                                  name="star"
                                  size={30}
                                  color={color}
                                />
                              </View>
                            )}
                          </View>
                        ))}
                        <Text style={webStyles.ratingNumber}>
                          {ratingValue.toFixed(1)}
                        </Text>
                      </View>
                      <Text style={webStyles.reviewsText}>
                        ({Math.floor(Math.random() * 1000)}) Reviews
                      </Text>
                    </View>
                  </View>

                  <View style={webStyles.priceSellerContainer}>
                    <View>
                      <View style={webStyles.priceSection}>
                        <Text style={webStyles.currentPrice}>₹100</Text>
                        <Text style={webStyles.originalPrice}>₹140</Text>
                        <Text style={webStyles.discountText}>14%</Text>
                      </View>
                      <Text style={webStyles.limitedOfferText}>
                        Limited time offer! Hurry up!
                      </Text>
                    </View>
                    <View>
                      <View style={webStyles.soldByContainer}>
                        <Text style={webStyles.soldByLabel}>Sold By:</Text>
                        <Text style={webStyles.sellerName}>Seller Name</Text>
                      </View>
                      <View style={webStyles.sellerRatingContainer}>
                        {sellerFills.map((fill, index) => (
                          <View key={index} style={webStyles.starWrapper}>
                            <FontAwesome name="star" size={16} color="#ccc" />
                            {fill > 0 && (
                              <View
                                style={[
                                  webStyles.filledStarOverlay,
                                  { width: Math.round(fill * 16) },
                                ]}
                              >
                                <FontAwesome
                                  name="star"
                                  size={16}
                                  color={sellerColor}
                                />
                              </View>
                            )}
                          </View>
                        ))}
                        <Text style={webStyles.sellerRatingText}>
                          ({sellerRatingValue.toFixed(1)}) 200 Reviews
                        </Text>
                      </View>
                    </View>
                  </View>

                  {/* Product Highlights */}
                  <View style={webStyles.section}>
                    <Text style={webStyles.sectionTitle}>Highlights</Text>
                    <View style={webStyles.highlightsList}>
                      {product.highlights.map((highlight, index) => (
                        <View key={index} style={webStyles.highlightItem}>
                          <MaterialIcons
                            name="check-circle"
                            size={16}
                            color="#28a745"
                          />
                          <Text style={webStyles.highlightText}>
                            {highlight}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>

                  {/* Product Description */}
                  <View style={webStyles.section}>
                    <Text style={webStyles.sectionTitle}>Description</Text>
                    <Text style={webStyles.descriptionText}>
                      {product.description}
                    </Text>
                  </View>

                  <View style={webStyles.buttonContainer}>
                    <View style={webStyles.buttonRow}>
                      <TouchableOpacity style={webStyles.addToCartButton}>
                        <Text style={webStyles.addToCartText}>Add To Cart</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={webStyles.addToWishlistButton}>
                        <Text style={webStyles.addToWishlistText}>
                          Add To Wishlist
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={webStyles.buyNowButton}>
                      <Text style={webStyles.buyNowText}>Buy Now</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            {/* Specifications Section */}
            <View style={webStyles.specificationsContainer}>
              <Text style={webStyles.specificationsTitle}>Specifications</Text>

              {Object.entries(product.specifications).map(([category, specs], categoryIndex) => (
                <View key={categoryIndex} style={webStyles.specCategory}>
                  <Text style={webStyles.specCategoryTitle}>{category}</Text>
                  <View style={webStyles.specTable}>
                    {Object.entries(specs as Record<string, string>).map(([label, value], index) => (
                      <View
                        key={index}
                        style={[
                          webStyles.specRow,
                          index % 2 === 0 ? webStyles.specRowEven : webStyles.specRowOdd
                        ]}
                      >
                        <Text style={webStyles.specLabel}>{label}</Text>
                        <Text style={webStyles.specValue}>{value}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </View>
            {/* Ratings and Reviews Section */}
            <View style={webStyles.reviewsContainer}>
              <Text style={webStyles.reviewsMainTitle}>Ratings & Reviews</Text>

              {/* Rating Summary */}
              <View style={webStyles.ratingSummaryContainer}>
                <View style={webStyles.overallRatingBox}>
                  <Text style={webStyles.overallRatingNumber}>
                    {product.reviews.averageRating}
                    <FontAwesome name="star" size={24} color="#FFD700" />
                  </Text>
                  <Text style={webStyles.totalReviewsText}>
                    {product.reviews.totalReviews.toLocaleString()} Ratings &
                  </Text>
                  <Text style={webStyles.totalReviewsText}>
                    {product.reviews.userReviews.length} Reviews
                  </Text>
                </View>

                {/* Rating Breakdown */}
                <View style={webStyles.ratingBreakdownContainer}>
                  {[5, 4, 3, 2, 1].map((star) => {
                    const count = product.reviews.ratingBreakdown[star as keyof typeof product.reviews.ratingBreakdown];
                    const percentage = (count / product.reviews.totalReviews) * 100;
                    return (
                      <View key={star} style={webStyles.ratingBreakdownRow}>
                        <Text style={webStyles.starLabel}>{star}</Text>
                        <FontAwesome name="star" size={14} color="#FFD700" />
                        <View style={webStyles.progressBarContainer}>
                          <View
                            style={[
                              webStyles.progressBarFill,
                              { width: `${percentage}%` }
                            ]}
                          />
                        </View>
                        <Text style={webStyles.ratingCount}>{count}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>

              {/* Review Filters */}
              <View style={webStyles.reviewFiltersContainer}>
                <TouchableOpacity style={webStyles.filterButton}>
                  <Text style={webStyles.filterButtonText}>All Reviews</Text>
                </TouchableOpacity>
                <TouchableOpacity style={webStyles.filterButtonOutline}>
                  <Text style={webStyles.filterButtonOutlineText}>With Images</Text>
                </TouchableOpacity>
                <TouchableOpacity style={webStyles.filterButtonOutline}>
                  <Text style={webStyles.filterButtonOutlineText}>Verified</Text>
                </TouchableOpacity>
              </View>

              {/* Individual Reviews */}
              <View style={webStyles.reviewsList}>
                {product.reviews.userReviews.map((review) => (
                  <View key={review.id} style={webStyles.reviewCard}>
                    {/* Review Header */}
                    <View style={webStyles.reviewHeader}>
                      <View style={webStyles.reviewerInfo}>
                        <View style={webStyles.avatarCircle}>
                          <Text style={webStyles.avatarText}>
                            {review.userName.charAt(0)}
                          </Text>
                        </View>
                        <View>
                          <Text style={webStyles.reviewerName}>{review.userName}</Text>
                          {review.verified && (
                            <View style={webStyles.verifiedBadge}>
                              <MaterialIcons name="verified" size={14} color="#28a745" />
                              <Text style={webStyles.verifiedText}>Verified Purchase</Text>
                            </View>
                          )}
                        </View>
                      </View>
                      <View style={webStyles.reviewRatingDate}>
                        <View style={webStyles.reviewRatingBox}>
                          <Text style={webStyles.reviewRatingText}>{review.rating}</Text>
                          <FontAwesome name="star" size={12} color="#fff" />
                        </View>
                        <Text style={webStyles.reviewDate}>{review.date}</Text>
                      </View>
                    </View>

                    {/* Review Content */}
                    <Text style={webStyles.reviewTitle}>{review.reviewTitle}</Text>
                    <Text style={webStyles.reviewText}>{review.reviewText}</Text>

                    {/* Review Images Indicator */}
                    {review.images > 0 && (
                      <View style={webStyles.reviewImagesIndicator}>
                        <MaterialIcons name="image" size={16} color="#666" />
                        <Text style={webStyles.reviewImagesText}>
                          {review.images} {review.images === 1 ? 'Image' : 'Images'}
                        </Text>
                      </View>
                    )}

                    {/* Review Footer */}
                    <View style={webStyles.reviewFooter}>
                      <TouchableOpacity style={webStyles.helpfulButton}>
                        <MaterialIcons name="thumb-up" size={16} color="#666" />
                        <Text style={webStyles.helpfulText}>
                          Helpful ({review.helpful})
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <MaterialIcons name="flag" size={16} color="#666" />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>

              {/* View All Reviews Button */}
              <TouchableOpacity style={webStyles.viewAllReviewsButton}>
                <Text style={webStyles.viewAllReviewsText}>
                  View All {product.reviews.totalReviews} Reviews
                </Text>
                <MaterialIcons name="arrow-forward" size={20} color="#2874f0" />
              </TouchableOpacity>
            </View>
            <RecommandedProduct />
            <Footer />
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default Product;

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
  contentContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  topDetailsContainer: {
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  imageContainer: { width: "50%" },
  imageWrapper: {
    width: "100%",
    height: "80%",
    // justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    backgroundColor: "#red",
    borderRadius: 10,
    margin: 10,
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  thumbnailContainer: {
    width: "100%",
    height: "18%",
    backgroundColor: "#e9ecef",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    padding: 10,

  },
  thumbnailText: {
    fontSize: 12,
    color: "#666",
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  detailsContainer: { width: "49%", },
  titleRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 5,
    // backgroundColor: "#fff",
    // margin: 10,
    // borderRadius: 10,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 3,
    // padding: 10,
  },
  titleContainer: { justifyContent: "flex-start", flex: 1 },
  titleText: { fontSize: 28, fontWeight: "bold" },
  brandText: { fontSize: 16, fontWeight: "600" },
  ratingContainer: {
    justifyContent: "flex-end",
    width: "40%",
    backgroundColor: "#d4f4dd",
    padding: 10,
    borderRadius: 5,
    borderColor: "#90EE90",
    borderWidth: 1,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,

    // marginBottom: 5,
    // marginTop: 5,
    // width: "100%",
  },
  reviewsText: { fontSize: 16, fontWeight: "600", textAlign: "center" },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#bd1414ff",
    borderRadius: 5,
    marginTop: 20,
  },

  priceSection: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 10,
  },
  currentPrice: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginRight: 10,
  },
  originalPrice: {
    fontSize: 18,
    color: "#888",
    textDecorationLine: "line-through",
    marginRight: 10,
  },
  discountText: {
    fontSize: 16,
    color: "#e74c3c",
    fontWeight: "bold",
  },
  starWrapper: {
    position: "relative",
  },
  filledStarOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  ratingNumber: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#FFD700",
    padding: 5,
    borderRadius: 5,
  },
  priceSellerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 5,
    // backgroundColor: "#fff",
    // margin: 10,
    // borderRadius: 10,
    // padding: 10,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 3,
  },
  limitedOfferText: {
    fontSize: 12,
    color: "red",
  },
  soldByContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  soldByLabel: {
    fontWeight: "bold",
    fontSize: 20,
  },
  sellerName: {
    fontWeight: "bold",
    fontSize: 20,
  },
  sellerRatingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  sellerRatingText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 5,
  },
  section: {
    backgroundColor: "#fff",
    // margin: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  highlightsList: {
    // marginTop: 10,
  },
  highlightItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  highlightText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#555",
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    gap: 10,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  addToCartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  addToWishlistButton: {
    flex: 1,
    backgroundColor: "#28a745",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  addToWishlistText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buyNowButton: {
    width: "100%",
    backgroundColor: "#dc3545",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buyNowText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  specificationsContainer: {
    backgroundColor: "#fff",
    marginTop: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  specificationsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    borderBottomWidth: 2,
    borderBottomColor: "#2874f0",
    paddingBottom: 10,
  },
  specCategory: {
    marginBottom: 20,
  },
  specCategoryTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#212121",
    marginBottom: 10,
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 5,
  },
  specTable: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 5,
    overflow: "hidden",
  },
  specRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    minHeight: 40,
  },
  specRowEven: {
    backgroundColor: "#fafafa",
  },
  specRowOdd: {
    backgroundColor: "#ffffff",
  },
  specLabel: {
    flex: 0.4,
    fontSize: 14,
    color: "#878787",
    padding: 12,
    fontWeight: "500",
  },
  specValue: {
    flex: 0.6,
    fontSize: 14,
    color: "#212121",
    padding: 12,
    borderLeftWidth: 1,
    borderLeftColor: "#e0e0e0",
  },
  reviewsContainer: {
    backgroundColor: "#fff",
    marginTop: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  reviewsMainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    borderBottomWidth: 2,
    borderBottomColor: "#2874f0",
    paddingBottom: 10,
  },
  ratingSummaryContainer: {
    flexDirection: "row",
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  overallRatingBox: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 15,
  },
  overallRatingNumber: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  totalReviewsText: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  ratingBreakdownContainer: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: "center",
  },
  ratingBreakdownRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  starLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginRight: 5,
    width: 15,
  },
  progressBarContainer: {
    flex: 1,
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#FFD700",
    borderRadius: 4,
  },
  ratingCount: {
    fontSize: 14,
    color: "#666",
    width: 50,
    textAlign: "right",
  },
  reviewFiltersContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: "#2874f0",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  filterButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  filterButtonOutline: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#2874f0",
  },
  filterButtonOutlineText: {
    color: "#2874f0",
    fontSize: 14,
    fontWeight: "600",
  },
  reviewsList: {
    gap: 15,
  },
  reviewCard: {
    backgroundColor: "#fafafa",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  reviewerInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2874f0",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  verifiedBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 2,
  },
  verifiedText: {
    fontSize: 12,
    color: "#28a745",
    fontWeight: "500",
  },
  reviewRatingDate: {
    alignItems: "flex-end",
  },
  reviewRatingBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#28a745",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    gap: 4,
    marginBottom: 4,
  },
  reviewRatingText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  reviewDate: {
    fontSize: 12,
    color: "#666",
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  reviewText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
    marginBottom: 10,
  },
  reviewImagesIndicator: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 10,
  },
  reviewImagesText: {
    fontSize: 13,
    color: "#666",
  },
  reviewFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  helpfulButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  helpfulText: {
    fontSize: 14,
    color: "#666",
  },
  viewAllReviewsButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 20,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#2874f0",
    borderRadius: 5,
  },
  viewAllReviewsText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2874f0",
  },
});
