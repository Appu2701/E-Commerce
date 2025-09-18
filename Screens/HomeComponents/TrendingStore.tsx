import { useState, useRef, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import StoreCard from "../../Components/StoreCard";

const TrendingStore = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const totalCards = 4; // Updated to match actual number of cards
  const cardWidth = 330; // Card width + margin (315 + 15)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % totalCards;
        const scrollPosition = nextIndex * cardWidth;

        scrollViewRef.current?.scrollTo({
          x: scrollPosition,
          animated: true,
        });

        return nextIndex;
      });
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <View style={webStyles.section}>
      <Text style={webStyles.sectionTitle}>Trending Stores</Text>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={webStyles.sectionContent}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        decelerationRate="fast"
        snapToInterval={cardWidth}
        snapToAlignment="start"
        onMomentumScrollEnd={(event) => {
          const scrollPosition = event.nativeEvent.contentOffset.x;
          const index = Math.round(scrollPosition / cardWidth);
          setCurrentIndex(index % totalCards);
        }}
      >
        <StoreCard
          imageSource={require("../../assets/store1.jpg")}
          storeName="Store1"
          rating="4.5"
          ratingCount="100+ ratings"
          categories={[
            { name: "Electronics", color: "red" },
            { name: "Fashion", color: "blue" },
            { name: "Home", color: "green" },
            { name: "Beauty", color: "yellow" },
          ]}
          onCardPress={() => console.log("Store 1 pressed")}
          onViewMorePress={() => console.log("View more for Store 1")}
        />
        <StoreCard
          imageSource={require("../../assets/store2.png")}
          storeName="Store2"
          rating="4.0"
          ratingCount="80+ ratings"
          categories={[
            { name: "Electronics", color: "red" },
            { name: "Fashion", color: "blue" },
            { name: "Home", color: "green" },
            { name: "Beauty", color: "yellow" },
          ]}
          onCardPress={() => console.log("Store 2 pressed")}
          onViewMorePress={() => console.log("View more for Store 2")}
        />
        <StoreCard
          imageSource={require("../../assets/store3.png")}
          storeName="Store3"
          rating="4.2"
          ratingCount="90+ ratings"
          categories={[
            { name: "Electronics", color: "red" },
            { name: "Fashion", color: "blue" },
            { name: "Home", color: "green" },
            { name: "Beauty", color: "yellow" },
          ]}
          onCardPress={() => console.log("Store 3 pressed")}
          onViewMorePress={() => console.log("View more for Store 3")}
        />
        <StoreCard
          imageSource={require("../../assets/store4.png")}
          storeName="Store4"
          rating="4.3"
          ratingCount="95+ ratings"
          categories={[
            { name: "Electronics", color: "red" },
            { name: "Fashion", color: "blue" },
            { name: "Home", color: "green" },
            { name: "Beauty", color: "yellow" },
          ]}
          onCardPress={() => console.log("Store 4 pressed")}
          onViewMorePress={() => console.log("View more for Store 4")}
        />
        <StoreCard
          imageSource={require("../../assets/store6.jpg")}
          storeName="Store5"
          rating="4.6"
          ratingCount="110+ ratings"
          categories={[
            { name: "Electronics", color: "red" },
            { name: "Fashion", color: "blue" },
            { name: "Home", color: "green" },
            { name: "Beauty", color: "yellow" },
          ]}
          onCardPress={() => console.log("Store 5 pressed")}
          onViewMorePress={() => console.log("View more for Store 5")}
        />
        <StoreCard
          imageSource={require("../../assets/store1.jpg")}
          storeName="Store1"
          rating="4.5"
          ratingCount="100+ ratings"
          categories={[
            { name: "Electronics", color: "red" },
            { name: "Fashion", color: "blue" },
            { name: "Home", color: "green" },
            { name: "Beauty", color: "yellow" },
          ]}
          onCardPress={() => console.log("Store 1 pressed")}
          onViewMorePress={() => console.log("View more for Store 1")}
        />
        <StoreCard
          imageSource={require("../../assets/store3.png")}
          storeName="Store3"
          rating="4.2"
          ratingCount="90+ ratings"
          categories={[
            { name: "Electronics", color: "red" },
            { name: "Fashion", color: "blue" },
            { name: "Home", color: "green" },
            { name: "Beauty", color: "yellow" },
          ]}
          onCardPress={() => console.log("Store 3 pressed")}
          onViewMorePress={() => console.log("View more for Store 3")}
        />
      </ScrollView>
      <View style={webStyles.indicatorContainer}>
        {Array.from({ length: totalCards }, (_, index) => (
          <View
            key={index}
            style={[
              webStyles.indicator,
              currentIndex === index && webStyles.activeIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default TrendingStore;

const webStyles = StyleSheet.create({
  section: {
    width: "100%",
    alignItems: "center",
    height: 450,
    backgroundColor: "#fff",
    marginTop: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    width: "100%",
    height: 45,
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#faf61fff",
    color: "#000",
    textAlign: "center",
    paddingTop: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
  },
  sectionContent: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 1350,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ddd",
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: "#007AFF",
  },
});
