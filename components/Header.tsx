"use client";
import { useState } from "react";
import { Navigations } from "@/lib/navigation";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSub, setOpenSub] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-3xl border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-x-2">
            <Image src="/thelogo.png" alt="Logo" width={200} height={200} priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-x-6">
            {Navigations.map((item) => {
              const hasChildren = item.children?.length;

              if (hasChildren) {
                return (
                  <div key={item.id} className="relative group">
                    {/* Parent */}
                    <Link
                      href={item.href}
                      className="flex items-center gap-x-1 text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
                      aria-haspopup="menu"
                    >
                      {item.name}
                      <RiArrowDownSLine className="text-lg transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown */}
                    <div className="invisible absolute left-0 top-full mt-2 w-64 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      {item.children?.map((child) => (
                        <Link
                          key={child.id}
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-green-600"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              if (isOpen) setOpenSub(null);
            }}
            className="md:hidden px-2 py-2 border border-green-200 rounded-lg bg-green-50 text-blue-950"
          >
            {isOpen ? (
              <IoMdClose className="text-xl" />
            ) : (
              <LuMenu className="text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden flex flex-col py-4 border-t border-gray-100">
            {Navigations.map((item) => {
              const hasChildren = item.children?.length;

              if (hasChildren) {
                const isSubOpen = openSub === item.id;

                return (
                  <div key={item.id} className="flex flex-col">
                    {/* Parent */}
                    <div className="flex items-center gap-1">
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex-1 px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setOpenSub(isSubOpen ? null : item.id)}
                        className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                        aria-expanded={isSubOpen}
                        aria-label={`Toggle ${item.name} submenu`}
                      >
                        <RiArrowDownSLine
                          className={`text-lg transition-transform ${
                            isSubOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Submenu */}
                    {isSubOpen && (
                      <div className="ml-4 flex flex-col border-l border-gray-100">
                        {item.children?.map((child) => (
                          <Link
                            key={child.id}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-red-600"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
