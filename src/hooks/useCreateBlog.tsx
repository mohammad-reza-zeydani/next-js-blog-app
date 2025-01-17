'use client'
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useMyContext } from "@/context/context";
import axios from "axios";
const useCreateBlog = () => {
    const {setIsSending}=useMyContext()
    const client=useQueryClient()
    const {mutate}=useMutation({
        mutationFn:async(data:any)=>{
            const response=await axios.post("/api/blogs",data)
            return response.data
        },
        onSuccess:()=>{
            client.invalidateQueries({queryKey:['blogs']})
            setIsSending(false)
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