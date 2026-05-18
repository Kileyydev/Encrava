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

  const [visible, setVisible] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const links = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Services", icon: Settings, href: "/services" },
    { name: "Resources", icon: BookOpen, href: "/resources" },
    { name: "About Us", icon: Info, href: "/about" },
    { name: "Contact Us", icon: Mail, href: "/contact" },
  ];

  useEffect(() => {
    const reveal = () => setVisible(true);

    const handleScroll = () => {
      reveal();
    };

    const handleMove = () => reveal();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchstart", handleMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchstart", handleMove);
    };
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

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkStyle =
    "relative flex items-center gap-2 text-[13px] xl:text-[14px] font-medium transition whitespace-nowrap after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#166b5f] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header
      ref={wrapperRef}
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500 ease-out

        ${
          visible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }
      `}
    >
      <div
        className="
          w-full
          px-3 sm:px-4 md:px-6 lg:px-8
          py-3
          flex items-center justify-between
          gap-3 lg:gap-6
        "
      >
        {/* LOGO */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logos/logo.png"
            alt="Logo"
            width={100}
            height={100}
            priority
            className="
              object-contain
              w-18
              sm:w-20.5
              md:w-23.75
              lg:w-26.25
              h-auto
            "
          />
        </Link>

        {/* CENTER NAV */}
        <div
          className="
            hidden md:flex
            flex-1
            min-w-0
            justify-center
          "
        >
          <div
            className="
              relative

              backdrop-blur-xl
              bg-white/70
              border border-black/10
              shadow-lg

              flex items-center justify-center
              overflow-visible
              max-w-full

              rounded-full

              px-4 lg:px-6 xl:px-8
              py-4 lg:py-5

              transition-all duration-500
            "
          >
            <nav
              className="
                flex items-center
                gap-4 lg:gap-5 xl:gap-8
                whitespace-nowrap
              "
            >
              {links.slice(0, 2).map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={linkStyle}
                  >
                    <Icon
                      size={16}
                      className="hidden lg:block shrink-0"
                    />
                    {item.name}
                  </Link>
                );
              })}

              {/* PRODUCTS */}
              <div className="relative flex items-center gap-1 shrink-0">
                <Link href="/products" className={linkStyle}>
                  <Boxes
                    size={16}
                    className="hidden lg:block shrink-0"
                  />
                  Products
                </Link>

                <button
                  onClick={() => setProductOpen(!productOpen)}
                  className="
                    flex items-center justify-center
                    w-5 h-5
                    rounded-full
                    hover:bg-black/5
                    transition
                  "
                >
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      productOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {productOpen && (
                  <div
                    className="
                      absolute
                      top-11
                      left-1/2
                      -translate-x-1/2

                      z-50
                      w-52

                      bg-white/95
                      backdrop-blur-xl
                      border border-black/10
                      shadow-2xl
                      rounded-2xl

                      overflow-hidden
                      py-2
                    "
                  >
                    <Link
                      href="/products/shield"
                      className="
                        block
                        px-4 py-3
                        text-[13px]
                        hover:bg-[#7BE09C]/10
                        transition
                      "
                      onClick={() => setProductOpen(false)}
                    >
                      Encrava Shield
                    </Link>

                    <Link
                      href="/products/intel"
                      className="
                        block
                        px-4 py-3
                        text-[13px]
                        hover:bg-[#7BE09C]/10
                        transition
                      "
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
                    className={linkStyle}
                  >
                    <Icon
                      size={16}
                      className="hidden lg:block shrink-0"
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/consultation"
          className="
            hidden md:flex
            shrink-0

            items-center justify-center

            px-4 lg:px-5 xl:px-6
            py-2.5

            text-[12px] xl:text-[13px]
            font-medium
            text-white

            bg-[#166b5f]
            rounded-full
            shadow-md

            hover:bg-[#0f5c52]
            transition
          "
        >
          Book Consultation
        </Link>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="
            md:hidden
            shrink-0

            w-10 h-10
            rounded-full

            bg-white/80
            backdrop-blur-xl
            border border-black/10
            shadow-md

            flex items-center justify-center

            text-2xl
          "
        >
          {mobileOpen ? "−" : "+"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          className="
            md:hidden

            mx-3 sm:mx-4
            mt-1

            bg-white/90
            backdrop-blur-2xl

            border border-black/10
            shadow-2xl

            rounded-3xl
            p-5
          "
        >
          <div className="flex flex-col gap-1">
            {links.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    flex items-center gap-3
                    px-4 py-3
                    rounded-xl
                    hover:bg-black/5
                    transition
                  "
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}

            {/* MOBILE PRODUCTS */}
            <div className="mt-1">
              <button
                onClick={() => setProductOpen(!productOpen)}
                className="
                  w-full
                  flex items-center justify-between

                  px-4 py-3
                  rounded-xl

                  hover:bg-black/5
                  transition
                "
              >
                <div className="flex items-center gap-3">
                  <Boxes size={18} />
                  Products
                </div>

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    productOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {productOpen && (
                <div className="ml-5 mt-2 flex flex-col gap-1">
                  <Link
                    href="/products/shield"
                    className="
                      px-4 py-3
                      rounded-xl
                      text-[14px]
                      hover:bg-[#7BE09C]/10
                      transition
                    "
                    onClick={() => {
                      setMobileOpen(false);
                      setProductOpen(false);
                    }}
                  >
                    Encrava Shield
                  </Link>

                  <Link
                    href="/products/intel"
                    className="
                      px-4 py-3
                      rounded-xl
                      text-[14px]
                      hover:bg-[#7BE09C]/10
                      transition
                    "
                    onClick={() => {
                      setMobileOpen(false);
                      setProductOpen(false);
                    }}
                  >
                    Encrava Intel
                  </Link>
                </div>
              )}
            </div>

            {/* CTA */}
            <Link
              href="/consultation"
              className="
                mt-4
                py-3.5

                bg-[#166b5f]
                text-white
                text-center
                font-medium

                rounded-2xl

                hover:bg-[#0f5c52]
                transition
              "
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