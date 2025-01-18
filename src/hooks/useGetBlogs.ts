
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useGetBlogs = () => {
    const {data,isError,isLoading,error}=useQuery({
        queryKey:['blogs'],
        queryFn:async()=>{
            const response=await axios.get("/api/blogs")
            return response.data
        }
    })
    return {data,isError,isLoading,error}
}
 
export default useGetBlogs;