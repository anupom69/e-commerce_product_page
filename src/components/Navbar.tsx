"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";

const links = [
  { name: "Collection", href: "/collection" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/women" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({ count, setCount }: {count: number, setCount: (newCount: number) => void}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-5 py-3 bg-white border-b-[1px]">
        <div className="flex justify-between items-center gap-6">
          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-2xl"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            ☰
            {/* Shows X when open, hamburger when closed */}
          </button>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={100}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex gap-4 text-dark-grayish-blue">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="py-2 px-4 hover:text-black border-b-2 border-transparent hover:border-orange transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Cart and Avatar */}
        <div className="flex items-center gap-4">
          <Cart count={count} setCount={setCount}/>
          <button aria-label="Profile">
            <Image
              src="/image-avatar.png"
              alt="Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="text-2xl m-4"
          onClick={toggleSidebar}
          aria-label="Close menu"
        >
          ✖
        </button>
        <ul className="mt-10 space-y-4">
          {links.map((item, index) => (
            <li key={index} className="px-4">
              <Link
                href={item.href}
                onClick={toggleSidebar} // Close the sidebar on click
                className="text-lg text-black hover:text-orange"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
