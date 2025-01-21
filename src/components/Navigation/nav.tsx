import Button from "./button";
import Link from "next/link";
const Navigation = () => {
  return (
    <nav className=' px-1 sm:px-14 py-7 flex justify-between'>
      <Button/>
      {/* link to login page */}
      <Link className="text-white bg-slate-700 p-1 sm:p-2 rounded-md text-lg sm:text-4xl active:bg-slate-400" href={"/logIn"}>Login</Link>
    </nav>
  );
};

export default Navigation;
