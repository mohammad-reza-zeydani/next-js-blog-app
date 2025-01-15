import Button from "./button";
import Link from "next/link";
const Navigation = () => {
  return (
    <nav className='px-14 py-7 flex justify-between'>
      <Button/>
      <Link className="text-white bg-slate-700 p-2 rounded-md text-4xl active:bg-slate-400" href={"/logIn"}>Login</Link>
    </nav>
  );
};

export default Navigation;
