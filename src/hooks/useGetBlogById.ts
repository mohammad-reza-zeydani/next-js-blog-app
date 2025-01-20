import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useGetBlogById = (id:string) => {
    const {data,isError,isLoading,error}=useQuery({
        queryKey:['blogs'],
        queryFn:async()=>{
            const response=await axios.get(`/api/blogs/${id}`)
            return response.data
        }
    })
    return {data,isError,isLoading,error}
}
 
export default useGetBlogById;