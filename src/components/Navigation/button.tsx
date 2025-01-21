'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"; // Importing hook to get the current pathname

const Button = () => {
  // Get the current path of the page
  const pathName = usePathname();

  // Define an array of links that you want to display
  const links = [
    {
      id: '1',
      name: "Home",
      path: "/" // Path for the Home page
    },
    {
      id: '2',
      name: "Create Posts",
      path: "/create" // Path for the Create Posts page
    }
  ];

  return (
    <div className="flex items-center gap-x-5">
      {/* Iterate over each link and display it as a clickable Link component */}
      {links.map((link) => {
        return (
          <Link 
            key={link.id} 
            href={link.path} 
            // Dynamically apply classes based on whether the link's path matches the current path
            className={`text-base sm:text-2xl text-zinc-900 border p-[2px] sm:p-2 border-gray-700 rounded-md ${pathName === link.path ? "bg-zinc-500" : "bg-none"}`}
          >
            {link.name}
          </Link>
        )
      })}
    </div>
  );
}

export default Button;
