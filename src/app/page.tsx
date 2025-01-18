import Link from "next/link";
import Image from "next/image";
export default async function Home() {
  const response = await fetch("http://localhost:3000/api/blogs");
  const data = await response.json();
  return (
    <main className='container mx-auto px-5 md:px-8 lg:px-32 mt-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-5 w-full'>
        {data.map((d: any) => {
          return (
            <div
              className='border-2 bg-slate-400 rounded-sm shadow-md border-white p-3'
              key={d.id}>
              <img   src="https://i.redd.it/nhk8jg3psng71.jpg " alt="blog-image" loading="lazy" />
              <h1 className='line-clamp-1 my-3 text-zinc-900 text-lg sm:text-base'>{d.title}</h1>
              <div className='flex items-center justify-between'>
                <h2 className='text-zinc-800'>{d.category}</h2>
                <div className='flex items-center gap-x-2 child:p-1 child:font-mono child:text-lg child:text-white child:rounded-md'>
                  <button className='bg-red-700 active:bg-red-500'>Delete</button>
                  <button className='bg-blue-700 active:bg-blue-500'>Edite</button>
                </div>
              </div>
              <Link href=''>
                <div className='w-full rounded-sm mt-3 bg-slate-200 active:bg-blue-400 text-zinc-800 font-semibold text-lg text-center'>
                  More
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
