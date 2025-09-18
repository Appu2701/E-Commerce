import { View, Text, StyleSheet } from "react-native";
const MobileHome = () => {
  return (
    <View style={mobStyles.container}>
      <Text style={mobStyles.title}>Welcome to Home!</Text>
    </View>
  );
};

export default MobileHome;

const mobStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
