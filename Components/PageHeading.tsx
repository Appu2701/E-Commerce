import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ProfileScreenNavigationProp } from "../types/navigation";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
import { useUser } from "../context/UserContext";

const PageHeading = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { userData } = useUser();

    // Get user's display name
  const displayName = userData?.data ? `${userData.data.firstName} ${userData.data.lastName}` : "User";

  const handleProfile = () => {
    console.log("Profile Clicked");
    navigation.navigate("Profile"); // Navigate to Profile screen
  };

  const handleMyOrders = () => {
    console.log("My Orders Clicked");
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={require("../assets/E-Commerce Logo.jpg")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.text}>E-Commerce App</Text>
      </View>
      <View style={styles.centerContainer}>
        <FontAwesome name="search" size={24} color="black" />
        <TextInput
          placeholder="Search"
          style={{ flex: 1, fontSize: 16, padding: 10 }}
        />
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("../assets/Cart.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("../assets/Wishlist.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleProfile();
          }}
        >
          <Image
            source={require("../assets/Profile.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {displayName}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleMyOrders();
          }}
        >
          <Image
            source={require("../assets/shopping-cart.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            My Orders
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PageHeading;

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: "#faf61fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
    gap: 10,
  },
  leftContainer: {
    // backgroundColor: "#fff",
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  text: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    width: 40,
    height: 40,
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  rightContainer: {
    flexDirection: "row",
    gap: 20,
  },
  button: {
    backgroundColor: "#fff",
    paddingLeft: 5,
    padding: 20,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
