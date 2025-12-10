import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../types/navigation';

type NavProp = StackNavigationProp<RootStackParamList>;

const MobileProductCategory = () => {
  const navigation = useNavigation<NavProp>();

  const groceryClicked = () => {
    navigation.navigate('Grocery');
  };

  const electronicsClicked = () => {
    navigation.navigate('Electronics');
  };

  const fashionClicked = () => {
    navigation.navigate('Fashion');
  };

  const mobilesClicked = () => {
    navigation.navigate('Mobiles');
  };

  const furnitureClicked = () => {
    navigation.navigate('Furniture');
  };

  const booksClicked = () => {
    navigation.navigate('Books');
  };

  const toysClicked = () => {
    navigation.navigate('Toys');
  };

  const sportsClicked = () => {
    navigation.navigate('Sports');
  };

  const categories = [
    {
      id: 'grocery',
      title: 'Grocery',
      image: require("../assets/shopping-cart.gif"),
      onPress: groceryClicked,
    },
    {
      id: 'electronics',
      title: 'Electronics',
      image: require("../assets/electronics.gif"),
      onPress: electronicsClicked,
    },
    {
      id: 'fashion',
      title: 'Fashion',
      image: require("../assets/clothing.gif"),
      onPress: fashionClicked,
    },
    {
      id: 'mobiles',
      title: 'Mobiles',
      image: require("../assets/mobiles.gif"),
      onPress: mobilesClicked,
    },
    {
      id: 'furniture',
      title: 'Furniture',
      image: require("../assets/furniture.gif"),
      onPress: furnitureClicked,
    },
    {
      id: 'books',
      title: 'Books',
      image: require("../assets/books.gif"),
      onPress: booksClicked,
    },
    {
      id: 'toys',
      title: 'Toys',
      image: require("../assets/toys.gif"),
      onPress: toysClicked,
    },
    {
      id: 'sports',
      title: 'Sports',
      image: require("../assets/sports.gif"),
      onPress: sportsClicked,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Shop by Category</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.card}
            onPress={category.onPress}
          >
            <Image style={styles.images} source={category.image} />
            <Text style={styles.title}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default MobileProductCategory;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  scrollContainer: {
    height: 120,
  },
  scrollContent: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    width: 100,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    marginRight: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  images: {
    width: 50,
    height: 50,
    marginBottom: 8,
    resizeMode: "contain",
  },
  title: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    backgroundColor: "#faf61fff",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 8,
    overflow: "hidden",
  },
});