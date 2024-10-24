import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Nav = () => {
  return (
    <nav className=" fixed w-full">
      <div className="px-6 py-4 flex justify-between items-center bg-primary">
        <p className="text-secondary text-xl font-semibold">TONYS.CARPET</p>
        <HiOutlineMenuAlt4 className="text-white text-xl font-bold" />
      </div>
    </nav>
  );
};
export default Nav;