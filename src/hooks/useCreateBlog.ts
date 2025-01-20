'use client'
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { useMyContext } from "@/context/context";
import axios from "axios";
import { TData } from "@/components/types";
const useCreateBlog = () => {
    const {setIsSending}=useMyContext()
    const client=useQueryClient()
    const {mutate}=useMutation({
        mutationFn:async(data:TData)=>{
            const response=await axios.post("/api/blogs",data)
            return response.data
        },
        onSuccess:()=>{
            setIsSending(false)
            client.invalidateQueries({queryKey:['blogs']})
            alert("your blog created successfully")
        },
        onError: (error:Error | null) => {
            setIsSending(false);
            alert(`An error occurred: ${error?.message || 'Unknown error'}`);
            console.error("Error creating blog:", error);
          }
    })
    return {mutate}
}
 
export default useCreateBlog;