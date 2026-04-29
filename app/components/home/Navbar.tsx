"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const [scrolled, setScrolled] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const links = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Services", icon: Settings, href: "/services" },
    { name: "Resources", icon: BookOpen, href: "/resources" },
    { name: "About Us", icon: Info, href: "/about" },
    { name: "Contact Us", icon: Mail, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      ref={wrapperRef}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4"
    >

      {/* 🔥 LEFT: LOGO (OUTSIDE CARD) */}
      <Link href="/" className="shrink-0">
        <Image
          src="/images/logos/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="object-contain"
          priority
        />
      </Link>

      {/* 🔥 CENTER: GLASS NAV (ONLY MENUS) */}
      <div
        className={`
          transition-all duration-500
          flex items-center justify-center
          gap-8
          px-10 py-6
          rounded-full
          ${
            scrolled
              ? "backdrop-blur-xl bg-white/70 border border-black/10 shadow-lg"
              : "bg-transparent"
          }
        `}
      >

        <nav className="hidden md:flex items-center gap-8 whitespace-nowrap">

          {links.slice(0, 2).map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-[14px] hover:text-[#166b5f] transition"
              >
                <Icon size={16} />
                {item.name}
              </Link>
            );
          })}

          {/* PRODUCTS */}
          <div className="relative flex items-center">
            <Link
              href="/products"
              className="flex items-center gap-2 text-[14px] hover:text-[#166b5f] transition"
            >
              <Boxes size={16} />
              Products
            </Link>

            <button onClick={() => setProductOpen(!productOpen)}>
              <ChevronDown
                size={14}
                className={`transition-transform ${
                  productOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {productOpen && (
              <div className="absolute top-9 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl border border-black/10 shadow-xl w-48 py-2 rounded-xl">
                <Link
                  href="/products/shield"
                  className="block px-4 py-2 text-[13px] hover:bg-[#7BE09C]/10"
                  onClick={() => setProductOpen(false)}
                >
                  Encrava Shield
                </Link>
                <Link
                  href="/products/intel"
                  className="block px-4 py-2 text-[13px] hover:bg-[#7BE09C]/10"
                  onClick={() => setProductOpen(false)}
                >
                  Encrava Intel
                </Link>
              </div>
            )}
          </div>

          {links.slice(2).map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-[14px] hover:text-[#166b5f] transition"
              >
                <Icon size={16} />
                {item.name}
              </Link>
            );
          })}

        </nav>
      </div>

      {/* 🔥 RIGHT: CTA (OUTSIDE CARD) */}
      <Link
        href="/consultation"
        className="hidden md:block px-6 py-2 text-[13px] font-medium text-white bg-[#166b5f] rounded-full shadow-md hover:bg-[#0f5c52] transition"
      >
        Book Consultation
      </Link>

      {/* MOBILE */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden text-xl"
      >
        {mobileOpen ? "−" : "+"}
      </button>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white/90 backdrop-blur-xl border border-black/10 shadow-xl rounded-2xl p-6">
          <div className="flex flex-col gap-4">

            {links.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3"
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/consultation"
              className="mt-4 py-3 bg-[#166b5f] text-white text-center rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              Book Consultation
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}