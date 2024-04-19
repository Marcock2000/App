import React, { useState } from "react";
import { trpc } from "../utils/trpc";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";

const CreateListing = () => {
  const router = useRouter()
  const utils = trpc.useContext();
  const {mutate}  = trpc.listing.create.useMutation({
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
    router.push('/')
    


  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-md p-6 bg-white shadow rounded">
        <h1 className="text-2xl font-semibold mb-4">Create Listing</h1>
        <input
          className="mb-2 p-2 border rounded w-full"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="mb-2 p-2 border rounded w-full"
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <textarea
          className="mb-2 p-2 border rounded w-full"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="bg-purple-500 text-white font-semibold py-2 px-4 rounded"
          onClick={handleCreateListing}
        >
          Create Listing
        </button>
      </div>
    </div>
  );
};

export default CreateListing;
