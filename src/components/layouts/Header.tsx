"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { SimpleDetailDown } from "../Animation";
import Menu from "../Menu";

const Header = () => {
  return (
    <motion.ul
      variants={SimpleDetailDown}
      className="flex justify-between h-16 items-center headerstyle"
    >
      <div className="w-auto pl-6 hover:cursor-pointer">
        <li className="text-xl font-medium">
          <Link href={`/`}>Blog</Link>
        </li>
      </div>
      <div className="md:hidden pr-4 hover:cursor-pointer">
        <Menu />
      </div>
      <div className="hidden md:flex justify-around w-full">
        <li>
          <Link href={"#author"}>Author</Link>
        </li>
        <li>
          <Link href={"#overview"}>Overview</Link>
        </li>
        <li>
          <Link href={"#description"}>Description</Link>{" "}
        </li>
        <li>
          <Link href={"#conclusion"}>Conclusion</Link>
        </li>
      </div>
    </motion.ul>
  );
};
export default Header;
