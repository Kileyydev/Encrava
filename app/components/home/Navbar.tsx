"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Home,
  Settings,
  Boxes,
  BookOpen,
  Mail,
  Info,
  ChevronDown,
} from "lucide-react";

export default function TopNavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // ORDER UPDATED HERE 👇
  const links = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Services", icon: Settings, href: "/services" },
    { name: "Resources", icon: BookOpen, href: "/resources" },
    { name: "About Us", icon: Info, href: "/about" },
    { name: "Contact Us", icon: Mail, href: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
        setProductOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50" ref={wrapperRef}>

      <div className="backdrop-blur-xl bg-transparent border-b border-black/10 shadow-md">

        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* LEFT LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 border border-black flex items-center justify-center text-[10px] font-medium">
              E
            </div>
            <span className="text-sm font-medium text-black">
              Encrava
            </span>
          </Link>

          {/* CENTER NAV */}
          <nav className="hidden md:flex items-center gap-8">

            {/* Home + Services */}
            {links.slice(0, 2).map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-[13px] font-normal text-black hover:opacity-60 transition"
                >
                  <Icon size={16} />
                  {item.name}
                </Link>
              );
            })}

            {/* PRODUCTS (NOW AFTER SERVICES) */}
            <div className="relative">
              <Link
                href="/products"
                className="flex items-center gap-1 text-[13px] font-normal text-black hover:opacity-60 transition"
              >
                <Boxes size={16} />
                Products
                <ChevronDown size={14} />
              </Link>

              {productOpen && (
                <div className="absolute top-9 left-0 bg-[#166b5f]/20 border border-black/10 shadow-lg w-48 py-1 rounded-lg">

                
                  {/* Shield Link */}
                  <Link
                    href="/products/shield"
                    className="block px-4 py-2 text-[13px] text-black hover:bg-[#7BE09C]/20"
                    onClick={() => setProductOpen(false)}
                  >
                    Encrava Shield
                  </Link>
                 {/* Intel Link */}
                  <Link
                    href="/products/intel"
                    className="block px-4 py-2 text-[13px] text-black hover:bg-[#7BE09C]/20"
                    onClick={() => setProductOpen(false)}
                  >
                     Encrava Intel
                  </Link>
                </div>
              )}
            </div>

            {/* Remaining links */}
            {links.slice(2).map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-[13px] font-normal text-black hover:opacity-60 transition"
                >
                  <Icon size={16} />
                  {item.name}
                </Link>
              );
            })}

          </nav>

          {/* RIGHT CTA */}
          <Link
            href="/consultation"
            className="hidden md:block px-4 py-1.5 text-[12px] font-medium text-white bg-[#166b5f] hover:opacity-80 transition rounded-full"
          >
            Book Consultation
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white text-xl"
          >
            {mobileOpen ? "−" : "+"}
          </button>

        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden px-6 pb-4 border-t border-black/10 bg-white/40 backdrop-blur-xl">

            <div className="flex flex-col gap-3 pt-3">

              {links.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-[13px] text-black font-normal"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Icon size={16} />
                    {item.name}
                  </Link>
                );
              })}

              {/* PRODUCTS */}
              <Link
                href="/products"
                className="flex items-center gap-2 text-[13px] text-black font-normal w-full text-left"
              >
                <Boxes size={16} />
                Products
                <ChevronDown size={14} className={`transition-transform ${productOpen ? "rotate-180" : ""}`} />
              </Link>

              {productOpen && (
                <div className="ml-6 flex flex-col gap-2">
                    <Link
                    href="/products/shield"
                    className="px-3 py-2 text-[13px] text-black hover:bg-[#7BE09C]/20 rounded"
                    onClick={() => {
                      setMobileOpen(false);
                      setProductOpen(false);
                    }}
                  >
                    Encrava Shield
                  </Link>
                  <Link
                    href="/products/intel"
                    className="px-3 py-2 text-[13px] text-black hover:bg-[#7BE09C]/20 rounded"
                    onClick={() => {
                      setMobileOpen(false);
                      setProductOpen(false);
                    }}
                  >
                    Encrava Intel
                  </Link>
                </div>
              )}

              {/* CTA */}
              <Link
                href="/consultation"
                className="mt-2 px-4 py-2 text-[12px] font-medium bg-[#166b5f] text-white text-center rounded-full"
                onClick={() => setMobileOpen(false)}
              >
                Book Consultation
              </Link>

            </div>
          </div>
        )}

      </div>
    </header>
  );
}