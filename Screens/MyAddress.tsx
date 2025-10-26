import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { OrdersScreenNavigationProp } from "../types/navigation";
import PageHeading from "../Components/PageHeading";
import OrderCard from "../Components/OrderCard";
import { FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import AddressCard from "../Components/AddressCard";

const MyAddress = () => {
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleOrders = () => {
    console.log("Orders Clicked");
    navigation.navigate("Orders");
  };

  const handleFilterPress = (filterType: string) => {
    setSelectedFilter(filterType);
    console.log(`Filter selected: ${filterType}`);
  };

  const getStatusButtonStyle = (statusType: string, isActive: boolean) => {
    const baseStyle = {
      padding: 8,
      borderRadius: 5,
      borderWidth: 2,
    };

    switch (statusType) {
      case "all":
        return {
          ...baseStyle,
          borderColor: "#007bff",
          backgroundColor: isActive ? "#007bff" : "transparent",
        };
      case "delivered":
        return {
          ...baseStyle,
          borderColor: "#4CAF50",
          backgroundColor: isActive ? "#4CAF50" : "transparent",
        };
      case "inprogress":
        return {
          ...baseStyle,
          borderColor: "#FF9800",
          backgroundColor: isActive ? "#FF9800" : "transparent",
        };
      case "cancelled":
        return {
          ...baseStyle,
          borderColor: "#F44336",
          backgroundColor: isActive ? "#F44336" : "transparent",
        };
      case "returned":
        return {
          ...baseStyle,
          borderColor: "#9E9E9E",
          backgroundColor: isActive ? "#9E9E9E" : "transparent",
        };
      default:
        return {
          ...baseStyle,
          borderColor: "#007bff",
          backgroundColor: isActive ? "#007bff" : "transparent",
        };
    }
  };

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
  centerContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ddd",
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  filterText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    textAlignVertical: "center",
  },
  statusFilterRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    gap: 10,
  },
  statusFilterButton: {
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "transparent",
  },
  activeStatusFilter: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  activeFilterText: {
    color: "#fff",
  },
  bottomControlsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  sortFilterContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  sortFilterButton: {
    padding: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "transparent",
  },
  activeSortFilter: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  sortFilterText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  activeSortFilterText: {
    color: "#fff",
  },
  filterDropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  singleRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  leftFilterContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "flex-start",
    width: "36%",
  },
  centerSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#e9ecef",
    flex: 1,
    // justifyContent: "center",
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    marginLeft: 8,
    // textAlign: "center",
    // paddingHorizontal: 10,
    paddingVertical: 10,
  },
  rightDropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "flex-end",
    width: "19%",
  },
  dropdownLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  dropdown: {
    height: 40,
    width: 160,
    backgroundColor: "#f8f9fa",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#e9ecef",
  },
});
