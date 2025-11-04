import {
  View,
  StyleSheet,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
import PageHeading from "../Components/PageHeading";
import ProductCategory from "../Components/ProductCategory";
import MobileHome from "./MobileHome";
import DealsPage from "./HomeComponents/DealsPage";
import PopularStore from "./HomeComponents/PopularSore";
import PopularProduct from "./HomeComponents/PopularProduct";
import TrendingStore from "./HomeComponents/TrendingStore";
import TrendingProduct from "./HomeComponents/TrendingProduct";
import Banner from "./HomeComponents/Banner";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      {Platform.OS === "android" || Platform.OS === "ios" ? (
        <MobileHome />
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
