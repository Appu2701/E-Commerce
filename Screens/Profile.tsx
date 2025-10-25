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
import { useNavigation } from "@react-navigation/native";
import { ProfileScreenNavigationProp } from "../types/navigation";
import { useUser } from "../context/UserContext";
import { useEffect } from "react";
import PageHeading from "../Components/PageHeading";
import OrderCard from "../Components/OrderCard";
import AddressCard from "../Components/AddressCard";
import PaymentCard from "../Components/PaymentCard";

const Profile = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { userData, logout } = useUser();

  const profileInfo = userData?.data;

  const handleLogout = async () => {
    await logout();
    console.log("Logout Clicked");
    navigation.navigate("Login"); // Navigate to Login screen
  };

  const handleEdit = () => {
    console.log("Edit Clicked");
    // navigation.navigate("EditProfile"); // Navigate to EditProfile screen
  };

  const handleOrders = () => {
    console.log("Orders Clicked");
    navigation.navigate("Orders"); // Navigate to Orders screen
  };

  const handleAddress = () => {
    console.log("Address Clicked");
    navigation.navigate("Address"); // Navigate to Address screen
  };

  const handlePayment = () => {
    console.log("Payment Clicked");
    // navigation.navigate("PaymentMethods"); // Navigate to PaymentMethods screen
  };

  useEffect(() => {
    console.log("Profile mounted");
    console.log("User Data:", userData?.data);
  }, []);

  return (
    <>
      {Platform.OS === "android" || Platform.OS === "ios" ? (
        <View style={mobStyles.container}></View>
      ) : (
        <View style={webStyles.container}>
          <PageHeading />
          <ScrollView
            style={webStyles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            {/* Profile Content Goes Here */}
            <View style={webStyles.profileHeaderCard}>
              <Text style={webStyles.profileText}>Profile</Text>
            </View>

            {/* Personal Information Section */}
            <View style={webStyles.sectionCard}>
              <View style={webStyles.titleRow}>
                <Text style={webStyles.cardTitleNoBorder}>
                  Personal Information
                </Text>
                <TouchableOpacity
                  onPress={handleEdit}
                  style={webStyles.editButton}
                >
                  <Text style={webStyles.editButtonText}>Edit</Text>
                </TouchableOpacity>
              </View>
              <View style={webStyles.profileInfoRow}>
                <View style={{ flex: 1, marginHorizontal: 10 }}>
                  <Text style={webStyles.nameText}>
                    {profileInfo
                      ? `${profileInfo.firstName} ${profileInfo.lastName}`
                      : "N/A"}
                  </Text>
                  <Text style={webStyles.infoText}>
                    {profileInfo ? `${profileInfo.phone}` : "N/A"}
                  </Text>
                  <Text style={webStyles.infoText}>
                    {profileInfo ? `${profileInfo.email}` : "N/A"}
                  </Text>
                </View>
                <View style={{ alignItems: "center", marginHorizontal: 10 }}>
                  <Image
                    source={require("../assets/img2.jpg")}
                    style={webStyles.avatar}
                  />
                </View>
              </View>
            </View>

            {/* Orders Section */}
            <View style={webStyles.sectionCard}>
              <View style={webStyles.titleRow}>
                <Text style={webStyles.cardTitleNoBorder}>My Orders</Text>
                <TouchableOpacity
                  onPress={handleOrders}
                  style={webStyles.editButton}
                >
                  <Text style={webStyles.editButtonText}>View All</Text>
                </TouchableOpacity>
              </View>
              <OrderCard
                orderName="Sample Product"
                orderId="#123459"
                amount="$200"
                paymentType="Cash on Delivery"
                deliveredTo="Alice Brown"
                deliveryAddress="321 Elm St, Nowhere, USA"
                orderedOn="2023-01-10"
                cancelledOn="2023-01-11"
                status="cancelled"
                imageSource={require("../assets/img3.jpg")}
                onPress={handleOrders}
              />
            </View>

            {/* Address Section */}
            <View style={webStyles.sectionCard}>
              <View style={webStyles.titleRow}>
                <Text style={webStyles.cardTitleNoBorder}>My Address</Text>
                <TouchableOpacity
                  onPress={handleAddress}
                  style={webStyles.editButton}
                >
                  <Text style={webStyles.editButtonText}>View All</Text>
                </TouchableOpacity>
              </View>
              <AddressCard
                name="John Doe"
                primaryNumber="1234567890"
                alternativeNumber="0987654321"
                houseNo="123"
                street="Main St"
                village="Sample Village"
                district="Sample District"
                state="Sample State"
                pincode="123456"
                addressType="home"
              />
            </View>

            {/* Payment Section */}
            <View style={webStyles.sectionCard}>
              <View style={webStyles.titleRow}>
                <Text style={webStyles.cardTitleNoBorder}>
                  My Payment Methods
                </Text>
                <TouchableOpacity
                  onPress={handlePayment}
                  style={webStyles.editButton}
                >
                  <Text style={webStyles.editButtonText}>Add New</Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                style={{ flexDirection: "row" }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <PaymentCard
                  cardType="credit"
                  cardNumber="**** **** **** 1234"
                  cardHolderName="John Doe"
                  expiryDate="12/25"
                  brand="Visa"
                  bankName="SBI Bank"
                />
                <PaymentCard
                  cardType="credit"
                  cardNumber="**** **** **** 1234"
                  cardHolderName="John Doe"
                  expiryDate="12/25"
                  brand="Visa"
                  bankName="Axis Bank"
                />
                <PaymentCard
                  cardType="credit"
                  cardNumber="**** **** **** 1234"
                  cardHolderName="John Doe"
                  expiryDate="12/25"
                  brand="Visa"
                  bankName="HDFC Bank"
                />
                <PaymentCard
                  cardType="credit"
                  cardNumber="**** **** **** 1234"
                  cardHolderName="John Doe"
                  expiryDate="12/25"
                  brand="Visa"
                  bankName="ICICI Bank"
                />

                <PaymentCard
                  cardType="debit"
                  cardNumber="**** **** **** 1234"
                  cardHolderName="John Doe"
                  expiryDate="12/25"
                  brand="Visa"
                  bankName="Indian Bank"
                />

                <PaymentCard
                  cardType="debit"
                  cardNumber="**** **** **** 1234"
                  cardHolderName="John Doe"
                  expiryDate="12/25"
                  brand="Visa"
                  bankName="Kotak Mahindra Bank"
                />
              </ScrollView>
            </View>

            {/* Logout Button */}
            <TouchableOpacity
              onPress={handleLogout}
              style={webStyles.logoutButton}
            >
              <Text style={webStyles.logoutButtonText}>Log Out</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default Profile;

const mobStyles = StyleSheet.create({
  container: {
    flex: 1,
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
  profileHeaderCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
  },
  profileText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  sectionCard: {
    marginTop: 5,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 5,
    marginBottom: 5,
  },
  cardTitleNoBorder: {
    fontSize: 24,
    fontWeight: "bold",
    borderBottomWidth: 0,
  },
  editButton: {
    width: 100,
    height: 40,
    backgroundColor: "#684dffff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  profileInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameText: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "bold",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    padding: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#000",
  },

  ordersContainer: {
    // backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderImageContainer: {
    width: "10%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  orderImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  orderDetailsContainer: {
    width: "88%",
    height: 100,
    flexDirection: "column",
  },
  orderTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "35%",
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  orderText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  orderBottomRow: {
    height: "65%",
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  statusText: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "green",
    color: "white",
    width: "50%",
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 5,
    paddingVertical: 8,
  },
  separatorLine: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
    width: "100%",
  },
  logoutButton: {
    marginTop: 20,
    width: "100%",
    height: 50,
    backgroundColor: "#ff4d4dff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
});
