'use client'
import { useForm } from "react-hook-form"
interface BlogFormProps {
    defaultValues?: { title: string; description: string; imageUrl: string };
    onSubmit: (data: { title: string; description: string; imageUrl: string }) => void;
  }
const BlogForm: React.FC<BlogFormProps>= ({defaultValues,onSubmit}) => {
    const {register,formState:{errors},handleSubmit}=useForm(
        {
            defaultValues,
        }
    )
    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
        </form>
     );
}
 
export default BlogForm;