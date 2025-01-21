'use client'

import useDeleteBtn from "@/hooks/useDeleteBlogs";  // Custom hook to handle blog deletion
import { useMyContext } from "@/context/context";  // Custom hook to manage context (e.g., global state)
import Link from "next/link";
import { TData } from "./types";  // Importing the type for the blog data

const BlogsBtn = ({ id, data }: { id: string, data: TData }) => {
    const { isSending, setIsSending, setFormDefaultValue } = useMyContext();  // Destructure context values
    const { mutate } = useDeleteBtn();  // Destructure mutate function from custom hook for deletion

    return (
        <div className='flex items-center gap-x-2 child:p-1 child:font-mono child:text-lg child:text-white child:rounded-md'>
            {/* Delete button */}
            <button
                onClick={() => handleDelete(id)} // Call handleDelete function when clicked
                className={`${isSending ? "bg-red-500 cursor-not-allowed" : "bg-red-700"} bg-red-700 active:bg-red-500`}>
                Delete
            </button>

            {/* Edit button */}
            <Link
                onClick={() => setFormDefaultValue(data)} // Set form default value with the blog data when clicked
                href={`/blogs/${id}/edit`} // Navigate to the edit page for this blog
                className='bg-blue-700 active:bg-blue-500'>
                Edit
            </Link>
        </div>
    );

    // Function to handle the deletion of the blog
    function handleDelete(id: string) {
        mutate(id);  // Call the mutate function to delete the blog
        setIsSending(true);  // Set the sending state to true, to disable UI elements while sending the request
    }
}

export default BlogsBtn;
