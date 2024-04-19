import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { trpc } from "../utils/trpc";
import { useUser } from "@clerk/clerk-expo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#cc66ff",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
});

export const CreateListingScreen = () => {
  const utils = trpc.useContext();
  const { mutate } = trpc.listing.create.useMutation({
    async onSuccess() {
      await utils.listing.all.invalidate();
    },
  });

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const {user} = useUser()

  const handleCreateListing = () => {
    mutate({
        name,
        price: parseFloat(price),
        description,
        userId: user?.id as string,
        imageUrl: ""
    });
    

  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleCreateListing}
      >
        <Text style={styles.buttonText}>Create Listing</Text>
      </TouchableOpacity>
    </View>
  );
};
