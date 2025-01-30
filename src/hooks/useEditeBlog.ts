'use client'

import { useMutation } from "@tanstack/react-query";  // Importing useMutation from React Query for handling mutations
import axios from "axios";  // Importing axios for making HTTP requests
import { useMyContext } from "@/context/context";  // Importing custom context to manage global state
import { TData } from "@/components/types";  // Importing the type for the blog data

const useEditBlog = () => {
    // Accessing global state through context
    const { setIsSending } = useMyContext();  // Destructure setIsSending function to manage sending state

    // Setting up the mutation to edit a blog
    const { mutate,isError,error } = useMutation({
        mutationFn: async ({ id, data }: { id: string | string[] | undefined, data: TData }) => {
            // Sending a PUT request to update the blog by its ID
            const response = await axios.put(`/api/blogs/${id}`, data);
            return response.data;  // Returning the response data from the API
        },
        onSuccess: () => {
            // If the mutation is successful, reset the sending state and show success message
            setIsSending(false);
            alert("The blog was edited successfully.");
        },
        onError: (error: any) => {
            // If there is an error during the mutation, handle different error scenarios

            // Reset sending state to false after error
            setIsSending(false);

            // Check if the error is a network issue
            if (error.message === "Network Error") {
                alert("There was an issue connecting to the server. Please try again.");
            } 
            else if (error.response) {
                // Handle different HTTP status codes from the response
                if (error.response.status === 400) {
                    alert("Bad request. Please check the data and try again.");
                } else if (error.response.status === 404) {
                    alert("Blog not found. It might have already been deleted.");
                } else if (error.response.status === 500) {
                    alert("Internal server error. Please try again later.");
                } else {
                    alert(`An unknown error occurred with status code ${error.response.status}.`);
                }
            } 
            else if (error.request) {
                // If the request was made but no response was received
                alert("The request was made but no response was received from the server.");
            } 
            else {
                // Catch other unexpected errors
                alert(`An unexpected error occurred: ${error.message || 'Unknown error'}`);
            }

            // Log the error to the console for debugging
            console.error("Error editing blog:", error);
        }
    });

    // Return the mutate function so it can be called to edit the blog
    return { mutate,error,isError };
};

export default useEditBlog;
