'use client'
import useDeleteBtn from "@/hooks/useDeleteBlogs";
import { useMyContext } from "@/context/context";
import Link from "next/link";
import { TData } from "./types";
const BlogsBtn = ({id,data}:{id:string,data:TData}) => {
    const {isSending,setIsSending,setFormDefaultValue}=useMyContext()
    const {mutate}=useDeleteBtn()
    return ( 
        <div className='flex items-center gap-x-2 child:p-1 child:font-mono child:text-lg child:text-white child:rounded-md'>
                  <button onClick={()=>handleDelete(id)} className={`${isSending ? "bg-red-500 cursor-not-allowed":("bg-red-700")} bg-red-700 active:bg-red-500`}>Delete</button>
                  <Link onClick={()=>setFormDefaultValue(data)} href={`/blogs/${id}/edit`} className='bg-blue-700 active:bg-blue-500'>Edite</Link>
        </div>
     );
     function handleDelete(id:string){
        mutate(id)
        setIsSending(true)
     }
}
 
export default BlogsBtn;