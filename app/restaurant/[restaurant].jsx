import React, { useEffect, useRef, useState } from "react";
import { 
  View, Text, Platform, ScrollView, FlatList, Dimensions, Image, Linking 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

import DatePickerComponent from "../../components/restaurant/DatePickerComponent";
import GuestPickerComponent from "../../components/restaurant/GuestPickerComponent";
import FindSlots from "../../components/restaurant/FindSlots";

export default function Restaurant() {
  const { restaurant } = useLocalSearchParams();
  const flatListRef = useRef(null);
  const windowWidth = Dimensions.get("window").width;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [restaurantData, setRestaurantData] = useState({});
  const [carouselData, setCarouselData] = useState([]);
  const [slotsData, setSlotsData] = useState([]);

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(2);
  const [date, setDate] = useState(new Date());

  // NEXT IMAGE
  const handleNextImage = () => {
    const carouselLength = carouselData[0]?.images.length;
    if (!carouselLength) return;

    const next = currentIndex === carouselLength - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(next);
    flatListRef.current.scrollToIndex({ index: next, animated: true });
  };

  // PREVIOUS IMAGE
  const handlePrevImage = () => {
    const carouselLength = carouselData[0]?.images.length;
    if (!carouselLength) return;

    const prev = currentIndex === 0 ? carouselLength - 1 : currentIndex - 1;
    setCurrentIndex(prev);
    flatListRef.current.scrollToIndex({ index: prev, animated: true });
  };

  // CAROUSEL ITEM
  const carouselItem = ({ item }) => (
    <View style={{ width: windowWidth - 2 }} className="h-64 relative">
      {/* Next Arrow */}
      <View style={{
        position: "absolute", top: "50%", backgroundColor: "rgba(0,0,0,0.6)",
        borderRadius: 50, padding: 5, zIndex: 10, right: "6%"
      }}>
        <Ionicons onPress={handleNextImage} name="arrow-forward" size={24} color="white" />
      </View>

      {/* Previous Arrow */}
      <View style={{
        position: "absolute", top: "50%", backgroundColor: "rgba(0,0,0,0.6)",
        borderRadius: 50, padding: 5, zIndex: 10, left: "2%"
      }}>
        <Ionicons onPress={handlePrevImage} name="arrow-back" size={24} color="white" />
      </View>

      {/* Dots */}
      <View style={{
        position: "absolute", flexDirection: "row", left: "50%",
        transform: [{ translateX: -50 }], zIndex: 10, bottom: 15
      }}>
        {carouselData[0]?.images?.map((_, i) => (
          <View
            key={i}
            className={`bg-white h-2 w-2 ${i === currentIndex ? "h-3 w-3" : ""} p-1 mx-1 rounded-full`}
          />
        ))}
      </View>

      {/* Image */}
      <Image
        source={{ uri: item }}
        className="h-64"
        style={{
          opacity: 0.5,
          backgroundColor: "black",
          marginRight: 20,
          marginLeft: 5,
          borderRadius: 25,
        }}
      />
    </View>
  );

  // FETCH RESTAURANT & CAROUSEL
  const getRestaurantData = async () => {
    try {
      const restaurantQuery = query(
        collection(db, "restaurants"),
        where("name", "==", restaurant)
      );
      const restaurantSnapshot = await getDocs(restaurantQuery);

      if (restaurantSnapshot.empty) {
        console.log("No restaurant found");
        return;
      }

      for (const docSnap of restaurantSnapshot.docs) {
        const data = docSnap.data();
        setRestaurantData(data);

        // Fetch carousel images using document reference
        const carouselQuery = query(
          collection(db, "carousel"),
          where("res_id", "==", docSnap.ref)
        );
        const carouselSnapshot = await getDocs(carouselQuery);

        const carousels = [];
        carouselSnapshot.forEach(doc => carousels.push(doc.data()));
        setCarouselData(carousels);

        // Fetch slots
        const slotsQuery = query(
          collection(db, "slots"),
          where("ref_id", "==", docSnap.ref)
        );
        const slotsSnapshot = await getDocs(slotsQuery);

        const slotsArr = [];
        slotsSnapshot.forEach(doc => slotsArr.push(doc.data()));
        setSlotsData(slotsArr[0]?.slot || []);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  // OPEN LOCATION
  const handleLocation = async () => {
    const url = restaurantData?.mapUrl;
    if (!url) return console.log("No map URL");

    const supported = await Linking.canOpenURL(url);
    if (supported) Linking.openURL(url);
    else console.log("Cannot open URL:", url);
  };

  useEffect(() => {
    getRestaurantData();
  }, []);

  return (
    <SafeAreaView
      style={[
        { backgroundColor: "#2b2b2b" },
        Platform.OS === "android" && { paddingBottom: 55 },
        Platform.OS === "ios" && { paddingBottom: 20 },
      ]}
    >
      <ScrollView className="h-full">
        {/* Restaurant Name */}
        <View className="flex-1 my-2 p-2">
          <Text className="text-xl text-[#f49b33] mr-2 font-semibold">{restaurant}</Text>
          <View className="border-b border-[#f49b33]" />
        </View>

        {/* CAROUSEL */}
        <View className="h-64 max-w-[98%] mx-2 rounded-[25px]">
          <FlatList
            ref={flatListRef}
            data={carouselData[0]?.images}
            renderItem={carouselItem}
            horizontal
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* ADDRESS + DIRECTION */}
        <View className="flex-1 flex-row mt-2 p-2">
          <Ionicons name="location-sharp" size={24} color="#f49b33" />
          <Text className="max-w-[75%] text-white">
            {restaurantData?.address} |{" "}
            <Text onPress={handleLocation} className="underline text-[#f49b33] italic font-semibold">
              Get Direction
            </Text>
          </Text>
        </View>

        {/* TIME */}
        <View className="flex-1 flex-row p-2">
          <Ionicons name="time" size={20} color="#f49b33" />
          <Text className="max-w-[75%] mx-2 font-semibold text-white">
            {restaurantData?.opening} - {restaurantData?.closing}
          </Text>
        </View>

        {/* DATE + GUESTS */}
        <View className="flex-1 border m-2 p-2 border-[#f49b33] rounded-lg">
          <View className="flex-1 flex-row m-2 p-2 justify-end items-center">
            <View className="flex-1 flex-row">
              <Ionicons name="calendar" size={20} color="#f49b33" />
              <Text className="text-white mx-2">Select booking date</Text>
            </View>
            <DatePickerComponent date={date} setDate={setDate} />
          </View>

          <View className="flex-1 flex-row bg-[#474747] rounded-lg m-2 p-2 items-center">
            <View className="flex-1 flex-row">
              <Ionicons name="people" size={20} color="#f49b33" />
              <Text className="text-white mx-2">Select number of guests</Text>
            </View>
            <GuestPickerComponent
              selectedNumber={selectedNumber}
              setSelectedNumber={setSelectedNumber}
            />
          </View>
        </View>

        {/* SLOTS */}
        <FindSlots
          restaurant={restaurant}
          date={date}
          selectedNumber={selectedNumber}
          slots={slotsData}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
