"use client";

import { useMutation } from "@tanstack/react-query";  // Importing useMutation from React Query to handle mutations
import { useMyContext } from "@/context/context";  // Importing custom context to manage global state
import axios from "axios";  // Importing axios for making HTTP requests
import { TData } from "@/components/types";  // Importing the type for the blog data

const useCreateBlog = () => {
  // Accessing global state through context
  const { setIsSending } = useMyContext();  // Destructure setIsSending function from the context to control the sending state

  // Setting up the mutation to create a new blog
  const { mutate } = useMutation({
    mutationFn: async (data: TData) => {
      // Sending a POST request to create a new blog
      const response = await axios.post("/api/blogs", data);
      return response.data;  // Returning the response data from the API
    },
    onSuccess: () => {
      // If the mutation is successful, reset the sending state and show a success message
      setIsSending(false);
      alert("Your blog was created successfully.");
    },
    onError: (error: any) => {
      // If there is an error during the mutation, handle various error scenarios

      // Reset sending state to false
      setIsSending(false);

      // Check if the error is a network issue
      if (error.message === "Network Error") {
        alert("There was an issue connecting to the server. Please try again.");
      } else if (error.response) {
        // Handle different HTTP status codes from the response
        if (error.response.status === 400) {
          alert("The data you submitted is invalid. Please check again.");
        } else if (error.response.status === 404) {
          alert("Server not found. Please try again.");
        } else if (error.response.status === 500) {
          alert("Internal server error. Please try again later.");
        } else {
          // Handle other HTTP status codes
          alert(
            `An unknown error occurred with status code ${error.response.status}.`,
          );
        }
      } else if (error.request) {
        // If the request was made but no response was received
        alert(
          "The request was made but no response was received from the server.",
        );
      } else {
        // Catch other unexpected errors
        alert(
          `An unexpected error occurred: ${error.message || "Unknown error"}`,
        );
      }

      // Log the error to the console for debugging
      console.error("Error creating blog:", error);
    },
  });

  // Return the mutate function to trigger the blog creation mutation
  return { mutate };
};

export default useCreateBlog;
