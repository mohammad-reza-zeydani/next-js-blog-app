'client'
import {useMutation} from "@tanstack/react-query"
import axios from "axios"
import { useMyContext } from "@/context/context"
import { TData } from "@/components/types"
const useEditeBlog = () => {
    const {setIsSending}=useMyContext()
    const {mutate}=useMutation({
        mutationFn:async({id,data}:{id:string|string[]|undefined,data:TData})=>{
            const response=await axios.put(`/api/blogs/${id}`,data)
            return response.data
        },
        onSuccess:()=>{
            setIsSending(false)
            alert("the blog Edited successfully")
        },
        onError:(error:Error | null)=>{
            setIsSending(false)
            alert(`An error occurred: ${error?.message || 'Unknown error'}`);
            console.error("Error creating blog:", error);
        }
    })
    return {mutate};
}
 
export default useEditeBlog;