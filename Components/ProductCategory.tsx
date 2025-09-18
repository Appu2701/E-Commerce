import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const ProductCategory = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <Image
          style={styles.images}
          source={require("../assets/shopping-cart.gif")}
        />
        <Text style={styles.title}>Grocery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Image
          style={styles.images}
          source={require("../assets/electronics.gif")}
        />
        <Text style={styles.title}>Electronics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Image
          style={styles.images}
          source={require("../assets/clothing.gif")}
        />
        <Text style={styles.title}>Fashion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Image
          style={styles.images}
          source={require("../assets/mobiles.gif")}
        />
        <Text style={styles.title}>Mobiles </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Image
          style={styles.images}
          source={require("../assets/furniture.gif")}
        />
        <Text style={styles.title}>Furniture</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Image
          style={styles.images}
          source={require("../assets/books.gif")}
        />
        <Text style={styles.title}>Books</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Image
          style={styles.images}
          source={require("../assets/toys.gif")}
        />
        <Text style={styles.title}>Toys</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Image
          style={styles.images}
          source={require("../assets/sports.gif")}
        />
        <Text style={styles.title}>Sports</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCategory;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    width: 130,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    margin: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  images: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    borderRadius: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#faf61fff",
    textAlign: "center",
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
