import { useState } from "react";
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
import PageHeading from "../ComponentsWeb/PageHeading";
import OrderCard from "../ComponentsWeb/OrderCard";
import Footer from "../ComponentsWeb/Footer";
import { FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const Orders = () => {
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
              <Text style={webStyles.screenHeaderText}>My Orders</Text>
              <View style={webStyles.separatorLine}></View>

              {/* Single Row Layout */}
              <View style={webStyles.singleRowContainer}>
                {/* Left Side - Filter Buttons */}
                <View style={webStyles.leftFilterContainer}>
                  <TouchableOpacity
                    onPress={() => handleFilterPress("all")}
                    style={getStatusButtonStyle(
                      "all",
                      selectedFilter === "all"
                    )}
                  >
                    <Text
                      style={[
                        webStyles.filterText,
                        selectedFilter === "all" && { color: "#fff" },
                      ]}
                    >
                      ALL
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleFilterPress("delivered")}
                    style={getStatusButtonStyle(
                      "delivered",
                      selectedFilter === "delivered"
                    )}
                  >
                    <Text
                      style={[
                        webStyles.filterText,
                        selectedFilter === "delivered" && { color: "#fff" },
                      ]}
                    >
                      Delivered
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleFilterPress("inprogress")}
                    style={getStatusButtonStyle(
                      "inprogress",
                      selectedFilter === "inprogress"
                    )}
                  >
                    <Text
                      style={[
                        webStyles.filterText,
                        selectedFilter === "inprogress" && { color: "#fff" },
                      ]}
                    >
                      In Progress
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleFilterPress("cancelled")}
                    style={getStatusButtonStyle(
                      "cancelled",
                      selectedFilter === "cancelled"
                    )}
                  >
                    <Text
                      style={[
                        webStyles.filterText,
                        selectedFilter === "cancelled" && { color: "#fff" },
                      ]}
                    >
                      Cancelled
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleFilterPress("returned")}
                    style={getStatusButtonStyle(
                      "returned",
                      selectedFilter === "returned"
                    )}
                  >
                    <Text
                      style={[
                        webStyles.filterText,
                        selectedFilter === "returned" && { color: "#fff" },
                      ]}
                    >
                      Returned
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Center - Search Bar */}
                <View style={webStyles.centerSearchContainer}>
                  <FontAwesome name="search" size={20} color="#666" />
                  <TextInput
                    placeholder="Search orders..."
                    style={webStyles.searchInput}
                  />
                </View>

                {/* Right Side - Sort Dropdown */}
                <View style={webStyles.rightDropdownContainer}>
                  <Text style={webStyles.dropdownLabel}>Sort by:</Text>
                  <Picker
                    selectedValue={selectedFilter}
                    style={webStyles.dropdown}
                    onValueChange={(itemValue) => {
                      setSelectedFilter(itemValue);
                      console.log(itemValue);
                    }}
                  >
                    <Picker.Item
                      label="Default"
                      value="all"
                      style={{ color: "#000", fontSize: 16 }}
                    />
                    <Picker.Item
                      label="A-Z"
                      value="sortAZ"
                      style={{ color: "#000", fontSize: 16 }}
                    />
                    <Picker.Item
                      label="Z-A"
                      value="sortZA"
                      style={{ color: "#000", fontSize: 16 }}
                    />
                    <Picker.Item
                      label="Newest First"
                      value="sortNewest"
                      style={{ color: "#000", fontSize: 16 }}
                    />
                    <Picker.Item
                      label="Oldest First"
                      value="sortOldest"
                      style={{ color: "#000", fontSize: 16 }}
                    />
                    <Picker.Item
                      label="Price: Low to High"
                      value="priceLowHigh"
                      style={{ color: "#000", fontSize: 16 }}
                    />
                    <Picker.Item
                      label="Price: High to Low"
                      value="priceHighLow"
                      style={{ color: "#000", fontSize: 16 }}
                    />
                  </Picker>
                </View>
              </View>
            </View>
            <OrderCard
              orderName="Sample Product"
              orderId="#123456"
              amount="$100"
              paymentType="Credit Card"
              deliveredTo="John Doe"
              deliveryAddress="123 Main St, Anytown, USA"
              orderedOn="2023-01-01"
              deliveredOn="2023-01-02"
              status="delivered"
              imageSource={require("../assets/img3.jpg")}
              onPress={handleOrders}
            />
            <OrderCard
              orderName="Sample Product"
              orderId="#123457"
              amount="$120"
              paymentType="Debit Card"
              deliveredTo="Jane Smith"
              deliveryAddress="456 Oak Ave, Somewhere, USA"
              orderedOn="2023-01-05"
              expectedDelivery="2023-01-10"
              status="inprogress"
              imageSource={require("../assets/img3.jpg")}
              onPress={handleOrders}
            />
            <OrderCard
              orderName="Sample Product"
              orderId="#123458"
              amount="$150"
              paymentType="PayPal"
              deliveredTo="Bob Johnson"
              deliveryAddress="789 Pine St, Elsewhere, USA"
              orderedOn="2023-01-08"
              deliveredOn="2023-01-09"
              status="returned"
              imageSource={require("../assets/img3.jpg")}
              onPress={handleOrders}
            />
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
            <OrderCard
              orderName="Sample Product"
              orderId="#123460"
              amount="$250"
              paymentType="Net Banking"
              deliveredTo="Charlie Davis"
              deliveryAddress="654 Maple St, Anywhere, USA"
              orderedOn="2023-01-12"
              expectedDelivery="2023-01-15"
              status="inprogress"
              imageSource={require("../assets/img3.jpg")}
              onPress={handleOrders}
            />
            <OrderCard
              orderName="Sample Product"
              orderId="#123461"
              amount="$300"
              paymentType="Credit Card"
              deliveredTo="David Wilson"
              deliveryAddress="987 Cedar St, Anywhere, USA"
              orderedOn="2023-01-15"
              expectedDelivery="2023-01-20"
              status="inprogress"
              imageSource={require("../assets/img3.jpg")}
              onPress={handleOrders}
            />
            <OrderCard
              orderName="Sample Product"
              orderId="#123462"
              amount="$350"
              paymentType="Debit Card"
              deliveredTo="Eva Green"
              deliveryAddress="159 Spruce St, Everywhere, USA"
              orderedOn="2023-01-18"
              expectedDelivery="2023-01-22"
              status="inprogress"
              imageSource={require("../assets/img3.jpg")}
              onPress={handleOrders}
            />
            <Footer />
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default Orders;

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
  screenHeaderCard: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
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
  filterText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    textAlignVertical: "center",
  },
  centerSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#8b8c8dff",
    flex: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    marginLeft: 8,
    paddingVertical: 10,
  },
  rightDropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    justifyContent: "flex-end",
    width: "19%",
  },
  dropdownLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  dropdown: {
    height: 40,
    width: 160,
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#8b8c8dff",
  },
});
