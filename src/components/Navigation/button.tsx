'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
const Button = () => {
    const pathName=usePathname()
    const links=[
        {
            id:'1',
            name:"Home",
            path:"/"
        },
        {
            id:'2',
            name:"Create Posts",
            path:"/create"
        }
    ]
    return ( 
    <div className="flex items-center gap-x-5">
       {links.map((link)=>{
        return(
            <Link key={link.id} href={link.path} className={` text-base sm:text-2xl text-zinc-900 border p-[2px] sm:p-2 border-gray-700 rounded-md ${pathName===link.path ? "bg-zinc-500":"bg-none"}`}>{link.name}</Link>
        )
       })}
    </div>
     );
}
 
export default Button;