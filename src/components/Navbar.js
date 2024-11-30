"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { FiPlusSquare } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { GiWeightLiftingUp } from "react-icons/gi";

export default function Navbar() {
  const currentRoute = usePathname();
  const current = "text-red-500 font-bold";
  const [open, setOpen] = useState(false);

  const hamburgerClick = () => {
    setOpen(!open);
  };

  return (
    <div className="z-50 min-h-[81px] fixed top-0 flex justify-between items-center px-5 py-4 w-full bg-black text-white">
      {/* Logo Section */}
      <div>
        <h3 className="flex gap-2 font-bold text-2xl text-red-500 items-center justify-center">
          fi<span className="text-white">T</span>bd <GiWeightLiftingUp />
        </h3>
      </div>

      {/* Desktop Navigation Links */}
      <div>
        <ul className="flex gap-5 navlink">
          <Link
            className={currentRoute === "/" ? current : "hover:font-bold hover:text-red-500"}
            href={"/"}
          >
            Home
          </Link>
          <Link
            className={currentRoute === "/about" ? current : "hover:font-bold hover:text-red-500"}
            href={"/about"}
          >
            About
          </Link>
          <Link
            className={currentRoute === "/pricing" ? current : "hover:font-bold hover:text-red-500"}
            href={"/pricing"}
          >
            Pricing
          </Link>
          <Link
            className={currentRoute === "/schedule" ? current : "hover:font-bold hover:text-red-500"}
            href={"/schedule"}
          >
            Schedule
          </Link>
          <Link
            className={currentRoute === "/contact" ? current : "hover:font-bold hover:text-red-500"}
            href={"/contact"}
          >
            Contact
          </Link>
          <Link
            className={currentRoute === "/admin" ? current : "hover:font-bold hover:text-red-500"}
            href={"/admin"}
          >
            Admin
          </Link>
          <Link
            className={currentRoute === "/trainee" ? current : "hover:font-bold hover:text-red-500"}
            href={"/trainee"}
          >
            Trainee
          </Link>
          <Link
            className={currentRoute === "/registration" ? current : "hover:font-bold hover:text-red-500"}
            href={"/registration"}
          >
            Registration
          </Link>
          <Link
            className={currentRoute === "/login" ? current : "hover:font-bold hover:text-red-500"}
            href={"/login"}
          >
            Login
          </Link>
        </ul>
      </div>

      {/* Join Class Button */}
      <div className="join-btn">
        <Link
          href={"/contact"}
          className="p-2 border-2 hover:bg-red-500 hover:text-white flex gap-3 items-center justify-center"
        >
          <FiPlusSquare className="text-3xl hover:text-red-500 hover:bg-white" />
          Join Class Now
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <HiOutlineMenuAlt1
        className="hamburger text-3xl cursor-pointer"
        onClick={hamburgerClick}
      />

      {/* Mobile Hamburger Menu */}
      {open && (
        <div className="absolute z-50 bg-black top-0 right-0 left-0">
          <span
            className="text-2xl absolute right-3 top-3 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            X
          </span>
          <ul className="flex flex-col items-center justify-center gap-5 h-[100vh]">
            <Link
              className="hover:font-bold hover:text-red-500"
              href={"/"}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              className="hover:font-bold hover:text-red-500"
              href={"/about"}
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              className="hover:font-bold hover:text-red-500"
              href={"/pricing"}
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>
            <Link
              className="hover:font-bold hover:text-red-500"
              href={"/schedule"}
              onClick={() => setOpen(false)}
            >
              Schedule
            </Link>
            <Link
              className="hover:font-bold hover:text-red-500"
              href={"/contact"}
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <Link
              className="hover:font-bold hover:text-red-500"
              href={"/admin"}
              onClick={() => setOpen(false)}
            >
              Admin
            </Link>
            <Link
              className="hover:font-bold hover:text-red-500"
              href={"/trainee"}
              onClick={() => setOpen(false)}
            >
              Trainee
            </Link>
            <Link
              className="hover:font-bold hover:text-red-500"
              href={"/registration"}
              onClick={() => setOpen(false)}
            >
              Registration
            </Link>
            <Link
              className="hover:font-bold hover:text-red-500"
              href={"/login"}
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <Link
              href={"/contact"}
              className="p-2 border-2 hover:bg-red-500 hover:text-white flex gap-3 items-center justify-center"
              onClick={() => setOpen(false)}
            >
              <FiPlusSquare className="text-3xl hover:text-red-500 hover:bg-white" />
              Join Class Now
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}
