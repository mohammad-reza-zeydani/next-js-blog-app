import Link from "next/link";
import BlogsBtn from "@/components/blogsBtn";
import { TData } from "@/components/types";

export default async function Home() {
  let data: TData[] = [];
  let error = null;

  try {
    // Fetch data from the API endpoint for blogs
    const response = await fetch("http://localhost:3000/api/blogs");

    // Check if the response is OK
    if (!response.ok) {
      throw new Error("Failed to fetch blogs. Please try again later.");
    }

    // Parse the fetched response as JSON
    data = await response.json();
  } catch (err: any) {
    // Catch and store any error that occurs
    error = err.message || "An unexpected error occurred.";
  }

  // Display loading UI if data is not yet fetched
  if (!data.length && !error) {
    return (
      <main className="flex flex-col justify-center items-center gap-y-2">
        <p className="text-gray-700 text-lg">there is no blog yet</p>
        <Link className="bg-slate-600 text-white px-5 py-1 rounded-sm text-xl" href={'/create'}>Click to create your first blog</Link>
      </main>
    );
  }

  // Display error UI if there is an error
  if (error) {
    return (
      <main className="container mx-auto px-5 md:px-8 lg:px-32 mt-10">
        <p className="text-center text text-xl text-red-500 animate-pulse">{error}</p>
      </main>
    );
  }

  // Render blogs if data is successfully fetched
  return (
    <main className="container mx-auto px-5 md:px-8 lg:px-32 mt-10">
      {/* Grid layout to display blog items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-5 w-full">
        {/* Map over the blog data and display each item */}
        {data.map((d) => {
          return (
            <div
              className="border-2 bg-slate-400 rounded-sm shadow-md border-white p-3"
              key={d.id}
            >
              {/* Display blog image with lazy loading */}
              <img
                src={d.imageUrl}
                className="image"
                alt="blog-image"
                loading="lazy"
              />

              {/* Display the blog title with truncation for longer titles */}
              <h1 className="line-clamp-1 my-3 text-zinc-900 text-lg sm:text-base">
                {d.title}
              </h1>

              {/* Blog category and button for additional actions */}
              <div className="flex items-center justify-between">
                <h2 className="text-zinc-800">{d.category}</h2>
                <BlogsBtn id={d.id} data={d} />
              </div>

              {/* Link to the detailed blog page */}
              <Link href={`/blogs/${d.id}`}>
                <div className="w-full rounded-sm mt-3 bg-slate-200 active:bg-blue-400 text-zinc-800 font-semibold text-lg text-center">
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



