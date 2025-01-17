'use client'
import useCreateBlog from "@/hooks/useCreateBlog";
import BlogForm from "@/components/blogForm";
import { useMyContext } from "@/context/context";
const CreateBlog = () => {
  // mutate data to create new one
    const {mutate}=useCreateBlog()
    const {setIsSending}=useMyContext()
    // BlogForm props
    const handleCreate = (data: { title: string; description: string; imageUrl: string;category:string }) => {
      // while sending data it must be true
      setIsSending(true) 
        mutate(data);
      };
    return ( 
       <div>
        <BlogForm onSubmit={handleCreate}/>
       </div>
     );
}
 
export default CreateBlog;