'use client'
import useGetBlogs from "@/hooks/useGetBlogs";
const BlogList = () => {
    const {data}=useGetBlogs()
    console.log(data,'data')
    return ( 
        <h1>
          test
        </h1>
     );
}
 
export default BlogList;