
import Link from "next/link";
const Navigation = () => {
  return (
    <nav className='px-14 py-7 flex justify-between'>
      <div className="flex items-center gap-x-5 child:text-2xl child:text-zinc-900 child:border child:p-2 child:border-gray-700 child:rounded-md">
        <Link  href={"/"}>Home</Link>
        <Link href={"/createPost"}>Create Posts</Link>
      </div>
      <Link className="text-white bg-slate-700 p-2 rounded-md text-4xl active:bg-slate-400" href={"/logIn"}>Login</Link>
    </nav>
  );
};

export default Navigation;
