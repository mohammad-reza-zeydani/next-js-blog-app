'use client'
import useEditeBlog from "@/hooks/useEditeBlog";
import { useParams } from "next/navigation";
import BlogForm from "@/components/blogForm";
import { useMyContext } from "@/context/context";
import { TData } from "@/components/types";
const EditeBlog = () => {
  const param=useParams()
  const id=param.id
  ; 
  console.log(id)
  const { setIsSending, formDefaultValue} = useMyContext();
  const { mutate } = useEditeBlog();
  // Fetch the blog data using the projectId
  // Handle the edit operation
  const handleEdit = (data:TData) => {
    setIsSending(true);
    // Pass projectId with the form data to mutate function
    mutate({ data,id});
  };
  return (
    <BlogForm onSubmit={handleEdit} defaultValues={formDefaultValue} />
  );
};

export default EditeBlog;
