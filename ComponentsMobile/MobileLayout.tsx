import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

interface MobileLayoutProps {
  children: React.ReactNode;
  scrollTopBar?: boolean;
  scrollBottomBar?: boolean;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children, scrollTopBar = false, scrollBottomBar = false }) => {
  const scrollTop = scrollTopBar;
  const scrollBottom = scrollBottomBar;

  if (scrollTop && scrollBottom) {
    // Both scroll
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.topBarScrollable}>
            <View style={styles.logoSection}>
              <Image
                source={require("../assets/E-Commerce Logo.jpg")}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
            <View style={styles.searchSection}>
              <TextInput placeholder="Search..." />
            </View>
            <View style={styles.topBarSection}>
              <FontAwesome name="shopping-bag" size={24} color="black" />
              <Text>Cart</Text>
            </View>
          </View>
          <View style={styles.contentArea}>
            {children}
          </View>
          <View style={styles.bottomBarScrollable}>
            <View style={styles.bottomBarSection}>
              <FontAwesome name="home" size={24} color="black" />
              <Text>Home</Text>
            </View>
            <View style={styles.bottomBarSection}>
              <FontAwesome name="shopping-bag" size={24} color="black" />
              <Text>Orders</Text>
            </View>
            <View style={styles.bottomBarSection}>
              <FontAwesome name="th-large" size={24} color="black" />
              <Text style={{ fontSize: 12 }}>Categories</Text>
            </View>
            <View style={styles.bottomBarSection}>
              <FontAwesome name="heart" size={24} color="black" />
              <Text>Wishlist</Text>
            </View>
            <View style={styles.bottomBarSection}>
              <FontAwesome name="user" size={24} color="black" />
              <Text>Profile</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  } else if (scrollTop && !scrollBottom) {
    // Only top scrolls
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.topBarScrollable}>
            <View style={styles.logoSection}>
              <Image
                source={require("../assets/E-Commerce Logo.jpg")}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
            <View style={styles.searchSection}>
              <TextInput placeholder="Search..." />
            </View>
            <View style={styles.topBarSection}>
              <FontAwesome name="shopping-bag" size={24} color="black" />
              <Text>Cart</Text>
            </View>
          </View>
          <View style={styles.contentArea}>
            {children}
          </View>
        </ScrollView>
        <View style={styles.bottomBar}>
          <View style={styles.bottomBarSection}>
            <FontAwesome name="home" size={24} color="black" />
            <Text>Home</Text>
          </View>
          <View style={styles.bottomBarSection}>
            <FontAwesome name="shopping-bag" size={24} color="black" />
            <Text>Orders</Text>
          </View>
          <View style={styles.bottomBarSection}>
            <FontAwesome name="th-large" size={24} color="black" />
            <Text style={{ fontSize: 12 }}>Categories</Text>
          </View>
          <View style={styles.bottomBarSection}>
            <FontAwesome name="heart" size={24} color="black" />
            <Text>Wishlist</Text>
          </View>
          <View style={styles.bottomBarSection}>
            <FontAwesome name="user" size={24} color="black" />
            <Text>Profile</Text>
          </View>
        </View>
      </View>
    );
  } else if (!scrollTop && scrollBottom) {
    // Only bottom scrolls
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View style={styles.logoSection}>
            <Image
              source={require("../assets/E-Commerce Logo.jpg")}
              style={styles.logo}
                resizeMode="contain"
              />
            </View>
            <View style={styles.searchSection}>
              <TextInput placeholder="Search..." />
            </View>
            <View style={styles.topBarSection}>
              <FontAwesome name="shopping-bag" size={24} color="black" />
              <Text>Cart</Text>
            </View>
          </View>
          <ScrollView style={styles.scrollView}>
            <View style={styles.contentArea}>
              {children}
            </View>
            <View style={styles.bottomBarScrollable}>
              <View style={styles.bottomBarSection}>
                <FontAwesome name="home" size={24} color="black" />
                <Text>Home</Text>
              </View>
              <View style={styles.bottomBarSection}>
                <FontAwesome name="shopping-bag" size={24} color="black" />
                <Text>Orders</Text>
              </View>
              <View style={styles.bottomBarSection}>
                <FontAwesome name="th-large" size={24} color="black" />
                <Text style={{ fontSize: 12 }}>Categories</Text>
              </View>
              <View style={styles.bottomBarSection}>
                <FontAwesome name="heart" size={24} color="black" />
                <Text>Wishlist</Text>
              </View>
              <View style={styles.bottomBarSection}>
                <FontAwesome name="user" size={24} color="black" />
                <Text>Profile</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      );
  } else {
    // Both fixed (default)
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View style={styles.logoSection}>
            <Image
              source={require("../assets/E-Commerce Logo.jpg")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <View style={styles.searchSection}>
            <TextInput placeholder="Search..." />
          </View>
          <View style={styles.topBarSection}>
            <FontAwesome name="shopping-bag" size={24} color="black" />
            <Text>Cart</Text>
          </View>
        </View>
        <ScrollView style={styles.content}>
          <View style={styles.contentContainer}>
            {children}
          </View>
        </ScrollView>
        <View style={styles.bottomBar}>
          <View style={styles.bottomBarSection}>
            <FontAwesome name="home" size={24} color="black" />
            <Text>Home</Text>
          </View>
          <View style={styles.bottomBarSection}>
            <FontAwesome name="shopping-bag" size={24} color="black" />
            <Text>Orders</Text>
          </View>
          <View style={styles.bottomBarSection}>
            <FontAwesome name="th-large" size={24} color="black" />
            <Text style={{ fontSize: 12 }}>Categories</Text>
          </View>
          <View style={styles.bottomBarSection}>
            <FontAwesome name="heart" size={24} color="black" />
            <Text>Wishlist</Text>
          </View>
          <View style={styles.bottomBarSection}>
            <FontAwesome name="user" size={24} color="black" />
            <Text>Profile</Text>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 70,
    backgroundColor: "#a5ce10ff",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "space-around",
    zIndex: 10,
  },
  topBarSection: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: 60,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  logoSection: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  searchSection: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 8,
    width: "60%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 35,
  },
  content: {
    flex: 1,
    backgroundColor: 'lightgray', // Temporary to check visibility
  },
  contentContainer: {
    paddingTop: 80,
    paddingBottom: 70,
    paddingHorizontal: 10,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 80,
    backgroundColor: "#ce1010ff",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "space-around",
    zIndex: 10,
  },
  bottomBarSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    margin: 5,
    padding: 5,
    borderRadius: 8,
    height: "90%",
  },
  scrollView: {
    flex: 1,
  },
  topBarScrollable: {
    width: "100%",
    height: 70,
    backgroundColor: "#a5ce10ff",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "space-around",
  },
  contentArea: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  bottomBarScrollable: {
    width: "100%",
    height: 80,
    backgroundColor: "#ce1010ff",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default MobileLayout;