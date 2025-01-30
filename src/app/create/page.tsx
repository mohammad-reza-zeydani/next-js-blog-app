'use client'
import useCreateBlog from "@/hooks/useCreateBlog";
import BlogForm from "@/components/blogForm";
import { useMyContext } from "@/context/context";
import { TData } from "@/components/types";
import Error from "@/components/error/error";
const CreateBlog = () => {
  // mutate data to create new one
    const {mutate,isError,error}=useCreateBlog()
    const {setIsSending}=useMyContext()
    // BlogForm props
    const handleCreate = (data:TData) => {
      // while sending data it must be true
      setIsSending(true) 
        mutate(data);
      };
      if (isError)return <Error error={error}/>
    return ( 
       <div>
        <BlogForm onSubmit={handleCreate}/>
       </div>
     );
}
 
export default CreateBlog;