'client'
import {useMutation} from "@tanstack/react-query"
import axios from "axios"
import { useMyContext } from "@/context/context"
const useDeleteBtn = () => {
    const {setIsSending}=useMyContext()
    const {mutate}=useMutation({
        mutationFn:async(id:string)=>{
            const response=await axios.delete(`api/blogs/${id}`)
            return response.data
        },
        onSuccess:()=>{
            setIsSending(false)
            alert("the blog deleted successfully")
                window.location.reload()
        },
        onError:(error:Error | null)=>{
            setIsSending(false)
            alert(`An error occurred: ${error?.message || 'Unknown error'}`);
            console.error("Error creating blog:", error);
        }
    })
    return {mutate};
}
 
export default useDeleteBtn;