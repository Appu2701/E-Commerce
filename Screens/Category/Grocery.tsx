import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Dimensions,
} from "react-native";
import PageHeading from "../../Components/PageHeading";
import Footer from "../../Components/Footer";
import CategoryHeaderSection from "../../Components/CategoryHeaderSection";

const Grocery = () => {
  // Array of category images
  const categoryImages = [
    require("../../assets/Groceries1.jpg"),
    require("../../assets/Groceries2.jpg"),
    require("../../assets/Groceries3.jpg"),
    require("../../assets/Groceries4.jpg"),
    require("../../assets/Groceries5.jpg"),
    require("../../assets/Groceries6.jpg"),
  ];
  return (
    <>
      {Platform.OS === "android" || Platform.OS === "ios" ? (
        <View style={mobStyles.container}>
          <Text>Grocery Category - Coming Soon</Text>
        </View>
      ) : (
        <View style={webStyles.container}>
          <PageHeading />
          <ScrollView
            style={webStyles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <CategoryHeaderSection
              title="Largest Grocery Store"
              subtitle="Get everything you need under one roof. Fresh produce, daily essentials, and more! | Affordable prices guaranteed. | Fast delivery options available."
              description="Explore our wide range of grocery products and enjoy seamless shopping experience. Fresh, high-quality groceries delivered fast — from everyday staples to seasonal produce and pantry essentials. Carefully sourced, affordably priced items with strict freshness checks and convenient packaging. Easy reordering, flexible delivery slots, and helpful offers make shopping simple and budget-friendly. Shop confidently for your weekly needs — fresh picks, great value, and fast doorstep delivery."
              categoryImages={categoryImages}
            />
            <Footer />
          </ScrollView>
        </View>
      )}
    </>
  );
};

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
    height: screenHeight - 100, // Adjust 100 to your header height
    overflow: "hidden",
    padding: 5,
  },
});

export default Grocery;
