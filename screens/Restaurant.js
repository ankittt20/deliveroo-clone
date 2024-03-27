import { Text, ScrollView, View, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import {
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";

const Restaurant = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      lat,
      long,
    },
  } = useRoute();
  const navigator = useNavigation();

  useLayoutEffect(() => {
    navigator.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={navigator.goBack}
          className="absolute top-8 left-4 p-2 bg-slate-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row space-x-2 items-center">
              <StarIcon size={20} opacity={0.5} color="green" />
              <Text className="text-md text-gray-500">
                <Text className="text-green-500">{rating}</Text> • {genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon size={20} opacity={0.4} color="gray" />
              <Text className="text-xs text-gray-500">Nearby • {address}</Text>
            </View>
          </View>
          <Text className="text-gray-500 pb-4 mt-2">{short_description}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon size={20} color="gray" opacity={0.6} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
          <ChevronRightIcon size={20} color="#00BBCC" />
        </TouchableOpacity>
      </View>

      <View>
        <Text className="text-xl mb-3 font-bold pt-6 px-4">Menu</Text>
        <View>
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Restaurant;
