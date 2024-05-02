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
          className={`md:flex md:items-center absolute md:static bg-[#a0c1e7] md:bg-transparent left-0 w-full md:w-auto px-8 md:px-0 md:pl-0  transition-all ease-in  ${
            open
              ? "top-[64px] left-0 duration-500 "
              : "top-[64px] left-[-490px] duration-300"
          }`}
        >
          <li className="md:ml-8 md:my-0 my-5">
            <Link to="/buy" className=" hover:text-green-500 duration-500">
              <p
                onClick={() => setOpen(!open)}
                className=" p-1 md:p-0 rounded-md"
              >
                Buy
              </p>
              <hr className="md:hidden" />
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-5">
            <Link to="/" className=" hover:text-green-500 duration-500">
              <p
                onClick={() => setOpen(!open)}
                className=" p-1 md:p-0 rounded-md"
              >
                Sell
              </p>
              <hr className="md:hidden" />
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-5">
            <Link to="/about" className=" hover:text-green-500 duration-500">
              <p
                onClick={() => setOpen(!open)}
                className=" p-1 md:p-0 rounded-md"
              >
                Service
              </p>
              <hr className="md:hidden" />
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
          className={`md:flex md:items-center absolute md:static bg-[#a0c1e7] md:bg-transparent left-0 w-full md:w-auto px-8 md:px-0 md:pl-0  transition-all  ease-in  ${
            open
              ? "top-[225px] left-0 duration-500 "
              : "top-[225px] left-[-490px] duration-300"
          }`}
        >
          <li className="md:ml-8 md:my-0 my-5">
            <Link to="/" className=" hover:text-green-500 duration-500">
              <p
                onClick={() => setOpen(!open)}
                className=" p-1 md:p-0 rounded-md"
              >
                Manage Rentals
              </p>
              <hr className="md:hidden" />
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-5">
            <Link to="/" className=" hover:text-green-500 duration-500">
              <p
                onClick={() => setOpen(!open)}
                className=" p-1 md:p-0 rounded-md"
              >
                Sign In
              </p>
              <hr className="md:hidden" />
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
