'use client'
import useGetBlogs from "@/hooks/useGetBlogs";
const BlogList = () => {
    const {data}=useGetBlogs()
    console.log(data,'data')
    return ( 
        <h1>
            {
                data && data.map((data:any)=>{
                   return(
                    <h1>{data}</h1>
                   )
                })
            }
        </h1>
     );
}
 
export default BlogList;