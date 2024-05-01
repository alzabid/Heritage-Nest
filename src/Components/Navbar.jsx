import { useState } from "react";
import { RiMenuAddLine } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="sticky z-20 top-0 bg-[#ECF5FF]">
      <div className="flex items-center justify-between max-w-[1350px] mx-auto px-10">
        {/* 1st part */}
        <ul
          className={`md:flex md:items-center absolute md:static bg-[#a0c1e7] md:bg-transparent left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${
            open ? "top-[64px] left-0 " : "top-[64px] left-[-490px]"
          }`}
        >
          <li className="md:my-0 my-7">
            <Link to="/buy" className=" hover:text-green-500 duration-500">
              Buy
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7">
            <Link to="/" className=" hover:text-green-500 duration-500">
              Sell
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7">
            <Link to="/about" className=" hover:text-green-500 duration-500">
              Service
            </Link>
          </li>
        </ul>

        {/* 2nd part */}
        <Link to="/">
          <img
            className=" cursor-pointer w-8 py-2"
            src="/icon/logo.png"
            alt=""
          />
        </Link>

        {/* 3rd part */}
        <ul
          className={`md:flex md:items-center absolute md:static bg-[#a0c1e7] md:bg-transparent left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${
            open ? "top-[225px] left-0 " : "top-[225px] left-[-490px]"
          }`}
        >
          <li className="md:ml-8 md:my-0 my-7">
            <Link to="/" className=" hover:text-green-500 duration-500">
              Manage Rentals
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7">
            <Link to="/" className=" hover:text-green-500 duration-500">
              Sign In
            </Link>
          </li>
        </ul>

        {/* open or close icon */}
        <div
          onClick={() => setOpen(!open)}
          className="text-xl cursor-pointer md:hidden"
        >
          {open ? <CgMenuMotion /> : <RiMenuAddLine />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
