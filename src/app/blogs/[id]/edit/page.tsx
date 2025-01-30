'use client'
import useEditeBlog from "@/hooks/useEditeBlog";
import { useParams } from "next/navigation";
import BlogForm from "@/components/blogForm";
import { useMyContext } from "@/context/context";
import { TData } from "@/components/types";
import Error from "@/components/error/error";
const EditeBlog = () => {
  const param=useParams()
  const id=param.id
  ; 
  console.log(id)
  const { setIsSending, formDefaultValue} = useMyContext();
  const { mutate,isError,error } = useEditeBlog();
  // Handle the edit operation
  const handleEdit = (data:TData) => {
    setIsSending(true);
    mutate({ data,id});
  };
  if (isError)return <Error error={error}/>
  return (
    <BlogForm onSubmit={handleEdit} defaultValues={formDefaultValue} />
  );
};

export default EditeBlog;
