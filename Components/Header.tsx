import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
 const session = false;
  return (
    <header className="sticky top-0 flex justify-between w-full items-center p-4 bg-[#E7ECEE] z-30">
      <div className="flex justify-center items-center  md:w-1/5 ">
        <Link href={"/"} passHref>
          <div className="relative h-10 w-5 cursor-pointer opacity-80 transition hover:opacity-100">
            <Image
              src="https://rb.gy/vsvv2o"
              placeholder="blur"
              blurDataURL="/Apple_logo_black.png"
              alt="apple"
              width={500}
              height={500}
              className="object-cover w-auto h-auto"
            />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 justify-center items-center md:flex">
        {/*flex-1 => Allow a flex items to grow and shrink as nedded, ignoring its initial size*/}
        <Link href={"/product"} passHref className="headerLinks">
          Product
        </Link>
        <Link href={"/explore"} passHref className="headerLinks">
          Explore
        </Link>
        <Link href={"/support"} passHref className="headerLinks">
          Support
        </Link>
        <Link href={"/business"} passHref className="headerLinks">
          Business
        </Link>
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="headerIcon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
        </svg>
        <Link href={'/checkout'} passHref>
        <div>
          <div className="relative cursor-pointer">
            <span className="absolute rounded-full -right-2 w-5 h-5  -top-2 flex items-center justify-center bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold">
              6
            </span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"     />
          </svg>
        </div>
        </Link>
        {session?(
            <p>User</p>
        ):<>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        </>}
      </div>
    </header>
  );
}
