import React from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@clerk/clerk-expo";
import Swiper from 'react-native-deck-swiper';
import { trpc } from "../utils/trpc";


const mockCards = [
  {
      id: 1,
      author: 'John Doe',
      imageUrl: 'https://via.placeholder.com/150',
      createdAt: '2021-09-15T14:48:00.000Z',
      description: 'Exploring the quiet corners of the city.'
  },
  {
      id: 2,
      author: 'Jane Smith',
      imageUrl: 'https://via.placeholder.com/150',
      createdAt: '2021-08-20T16:00:00.000Z',
      description: 'Love this view of the downtown skyline!'
  },
  {
      id: 3,
      author: 'Emma Wilson',
      imageUrl: 'https://via.placeholder.com/150',
      createdAt: '2021-07-22T17:20:00.000Z',
      description: 'Nothing beats a sunset by the lake.'
  },
  {
      id: 4,
      author: 'Oliver Twist',
      imageUrl: 'https://via.placeholder.com/150',
      createdAt: '2021-06-30T18:45:00.000Z',
      description: 'A quiet stroll down the lane.'
  }
];


const SignOut = () => {
  const { signOut } = useAuth();
  return (
    <Pressable onPress= {() => signOut()}  className="flex rounded-xl  p-4 text-black">
      <Text className="text-black"> Log out</Text>
    </Pressable>
  );
};

const Card = ({ card }) => (
  <View className="rounded-lg border shadow-lg p-4 bg-white">

    <Text className="font-bold text-lg text-black">{card.author}</Text>
    <Text className="text-gray-800">{card.description}</Text>
  </View>
);

export const HomeScreen = () => {
  const navigation = useNavigation();

  // Using mock data for demonstration
  const cards = mockCards;

  return (
    <View className="flex flex-col h-full w-full bg-slate-500 items-center">
    <View className="w-full bg-white items-end"><SignOut /></View>
          
      <View className="flex-col w-full h-full bg-slate-100 items-center ">
      <Swiper
        cards={cards}
        renderCard={(card) => <Card card={card} />}
        onSwipedLeft={() => console.log("Swiped left!")}
        onSwipedRight={() => console.log("Swiped right!")}
        onSwipedTop={() => console.log("Swiped up!")}
        onSwipedBottom={() => console.log("Swiped down!")}
        infinite
        backgroundColor="gray"
        cardVerticalMargin={250}
        stackSize={3}  // Shows three cards in stack.
      />
      </View>


    </View>
  );
};
