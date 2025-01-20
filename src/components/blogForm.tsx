"use client";
import { useForm } from "react-hook-form";
import { useMyContext } from "@/context/context";
import { TBlogFormProps } from "./types";
const BlogForm: React.FC<TBlogFormProps> = ({ defaultValues, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });
  //manage sending status with this context
  const {isSending}=useMyContext()
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4 max-w-md mx-auto">
      {/* the blog title input */}
      <input
        type="text"
        {...register("title", { required: "Title is required",
          minLength: {
            value: 10,
            message: 'Title must be at least 12 characters'    
          },
          maxLength: {
            value: 50,
            message: 'Title must be less than or equal to 50 characters'    
          }
        })}
        placeholder="Title"
        className="input"
      />
      {/* title error */}
      {errors.title && <p className="text-red-700 text-lg">{errors.title.message}</p>}
      {/* the blog description input */}
      <textarea
        {...register("description", { required: "Description is required",
          minLength:{
            value:20,
            message:"Description must be at least 12 characters"
          }
         })}
        placeholder="Description"
        className="input "
      />
      {/* description error */}
      {errors.description && <p className="text-red-700 text-lg">{errors.description.message}</p>}
      {/* add image link input */}
      <input
      {
        ...register("imageUrl")
      }
        type="text"
        placeholder="Image URL (optional)"
        className="input"
      />
      {/* select category of your blog */}
      <select {...register("category")} id="category" name="category" className="w-full p-3 border border-gray-300 rounded-md">
        <option value="sports">Sports</option>
        <option value="programming">Programming</option>
        <option value="technology">Technology</option>
        <option value="health">Health</option>
      </select>
      {/* submit button */}
      <button type="submit" className={`bg-zinc-700 text-slate-300 text-xl p-3 rounded-sm ${isSending ? "cursor-not-allowed":"cursor-pointer"}`}>
        {/* while sending is true,it most be Submiting */}
        {!isSending ?"Submit":"Submiting..."}
      </button>
    </form>
  );
};

export default BlogForm;
