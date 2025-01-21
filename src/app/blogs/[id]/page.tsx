import { TData } from "@/components/types";
const BlogInformation = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  const response = await fetch(`http://localhost:3000/api/blogs/${id}`);
  const blogData: TData = await response.json();
  return (
    <div className='w-3/4 md:w-1/2 mx-auto space-y-2'>
      <img
        className='w-full sm:h-96'
        src={blogData.imageUrl}
        alt='blog image'
        loading='lazy'
      />
      <div className='space-y-1 child:w-[99%] mt-5'>
        <h1 className='text-lg md:text-2xl lg:text-3xl font-bold  break-words'>
          {blogData.title}({blogData.category})
        </h1>
        <p className='text-base md:text-2xl break-words'>
          {blogData.description}
        </p>
      </div>
    </div>
  );
};

export default BlogInformation;
