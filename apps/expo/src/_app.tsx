import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TRPCProvider } from "./utils/trpc";

import { HomeScreen } from "./screens/home";
import { SignInSignUpScreen } from "./screens/signin";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { tokenCache } from "./utils/cache";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CreateListingScreen } from "./screens/createListing";

const Stack = createStackNavigator();

export const App = () => {
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig?.extra?.CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <NavigationContainer>
        <SignedIn>
          <TRPCProvider>
            <Stack.Navigator>
              <Stack.Screen name="GrayHouse" component={HomeScreen} />
              <Stack.Screen name="CreateListing" component={CreateListingScreen} />
            </Stack.Navigator>
            <StatusBar />
          </TRPCProvider>
        </SignedIn>
        <SignedOut>
          <SignInSignUpScreen />
        </SignedOut>
      </NavigationContainer>
    </ClerkProvider>
  );
};