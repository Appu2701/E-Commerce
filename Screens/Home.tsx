import {
  View,
  StyleSheet,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
import PageHeading from "../ComponentsWeb/PageHeading";
import ProductCategory from "../ComponentsWeb/ProductCategory";
import DealsPage from "./WebHomeComponents/DealsPage";
import PopularStore from "./WebHomeComponents/PopularStore";
import PopularProduct from "./WebHomeComponents/PopularProduct";
import TrendingStore from "./WebHomeComponents/TrendingStore";
import TrendingProduct from "./WebHomeComponents/TrendingProduct";
import Banner from "./WebHomeComponents/Banner";
import Footer from "../ComponentsWeb/Footer";
import MobileLayout from "../ComponentsMobile/MobileLayout";
import MobileBanner from "./MobileHomeComponents/MobileBanner";
import MobileDealsPage from "./MobileHomeComponents/MobileDealsPage";

const Home = () => {
  return (
    <>
      {Platform.OS === "android" || Platform.OS === "ios" ? (
        <MobileLayout>
          <MobileBanner />
          <MobileDealsPage />
        </MobileLayout>
      ) : (
        <View style={webStyles.container}>
          <PageHeading />
          <ScrollView
            style={webStyles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <ProductCategory />
            <Banner />
            <DealsPage />
            <TrendingStore />
            <TrendingProduct />
            <PopularStore />
            <PopularProduct />
            <Footer />
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default Home;

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
  }
});
