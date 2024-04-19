import React from "react";

import { View, SafeAreaView, Text } from "react-native";

import SignInWithOAuth from "../components/SignInWithOAuth";

export const SignInSignUpScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-500 p-5">
      <Text className="text-4xl font-semibold text-gray-100 mb-2 text-center">Gray House</Text>
      <Text className="text-xl text-gray-300 text-center mb-8">
        It's not always black and white, is it?
      </Text>
      <View className="flex  items-center border border-gray-200 rounded-lg mt-32">
        <SignInWithOAuth />
       </View>
    </SafeAreaView>
    );
};


