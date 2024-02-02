import React from "react";
import Search from "../search";
import Button from "../button";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data";

const Header = () => {
  return (
    <>
      <div className="border-b">
        <div className="container w-full mx-auto">
          <div className="flex justify-between items-center py-4">
            <div className="order-first">
              <Link href="/">
                <Image src="/logo.png" alt="logo" width={100} height={200} />
              </Link>
            </div>
            <div className="w-4/12">
              <Search placeholder="Search for Movies, TV Shows, Themes & Casts" />
            </div>
            <div>
              <Button className="">Log in</Button>
              <Button className="primary">Sign up</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 shadow-md">
        <div className="container w-full mx-auto">
          <div className="flex gap-4">
            {navLinks.map((link, index) => (
              <div className="text-sm font-semibold" key={index}>
                <Link href={link.link}>{link.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
