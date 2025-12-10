import {
  View,
  StyleSheet,
  Platform,
  ScrollView,
  Dimensions,
  Text,
} from "react-native";
import PageHeading from "../ComponentsWeb/PageHeading";
import AddressCard from "../ComponentsWeb/AddressCard";
import Footer from "../ComponentsWeb/Footer";

const MyAddress = () => {
  return (
    <>
      {Platform.OS === "android" || Platform.OS === "ios" ? (
        <View style={mobStyles.container}>
          <Text>Mobile Cart - Coming Soon</Text>
        </View>
      ) : (
        <View style={webStyles.container}>
          <PageHeading />
          <ScrollView
            style={webStyles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            {/* Profile Content Goes Here */}
            <View style={webStyles.screenHeaderCard}>
              <Text style={webStyles.screenHeaderText}>My Addresses</Text>
              <View style={webStyles.separatorLine}></View>
            </View>
            <AddressCard
              name="Jane Smith"
              primaryNumber="2345678901"
              alternativeNumber="1098765432"
              houseNo="456"
              street="Second St"
              village="Another Village"
              district="Another District"
              state="Another State"
              pincode="234567"
              addressType="work"
            />
            <AddressCard
              name="John Doe"
              primaryNumber="1234567890"
              alternativeNumber="0987654321"
              houseNo="123"
              street="Main St"
              village="Some Village"
              district="Some District"
              state="Some State"
              pincode="123456"
              addressType="home"
            />
            <AddressCard
              name="Alice Johnson"
              primaryNumber="3456789012"
              alternativeNumber="2109876543"
              houseNo="789"
              street="Third St"
              village="Different Village"
              district="Different District"
              state="Different State"
              pincode="345678"
              addressType="home"
            />
            <AddressCard
              name="Bob Brown"
              primaryNumber="4567890123"
              alternativeNumber="3210987654"
              houseNo="101"
              street="Fourth St"
              village="New Village"
              district="New District"
              state="New State"
              pincode="456789"
              addressType="work"
            />
            <AddressCard
              name="Charlie Davis"
              primaryNumber="5678901234"
              alternativeNumber="4321098765"
              houseNo="202"
              street="Fifth St"
              village="Old Village"
              district="Old District"
              state="Old State"
              pincode="567890"
              addressType="home"
            />
            <AddressCard
              name="Diana Evans"
              primaryNumber="6789012345"
              alternativeNumber="5432109876"
              houseNo="303"
              street="Sixth St"
              village="East Village"
              district="East District"
              state="East State"
              pincode="678901"
              addressType="work"
            />
            {/* Add more AddressCard components as needed */}
            <Footer />
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default MyAddress;

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
  screenHeaderCard: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  screenHeaderText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  separatorLine: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 3,
    width: "100%",
  },
});
