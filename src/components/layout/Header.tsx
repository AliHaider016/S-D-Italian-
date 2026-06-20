"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { X, ChevronDown, Search } from "lucide-react";

const collections = [
  {
    name: "Travel Capsule SS26",
    href: "/collections/travel-capsule-ss26",
    items: [
      { name: "Dresses", href: "/collections/abiti-travel-new-in" },
      { name: "Shirts", href: "/collections/camicie-travel-new-in" },
      { name: "Jackets", href: "/collections/giacche-travel-new-in" },
      { name: "Skirts", href: "/collections/gonne-travel-new-in" },
      { name: "Pants", href: "/collections/pantaloni-travel-new-in" },
      { name: "Shorts", href: "/collections/shorts-travel-new-in" },
      { name: "Tops", href: "/collections/top-travel-new-in" },
      { name: "T-Shirts", href: "/collections/t-shirts-travel-new-in" },
      { name: "Accessories", href: "/collections/accessori-travel-new-in" },
    ],
  },
  {
    name: "Main Collection SS26",
    href: "/collections/main-ss26",
    items: [
      { name: "Dresses", href: "/collections/abiti-new-in" },
      { name: "Blouses", href: "/collections/bluse-new-in" },
      { name: "Shirts", href: "/collections/camicie-new-in" },
      { name: "Cardigans", href: "/collections/cardigans-new-in" },
      { name: "Sweatshirts", href: "/collections/felpe-new-in" },
      { name: "Jackets", href: "/collections/giacche-new-in" },
      { name: "Vests", href: "/collections/gilet-new-in" },
      { name: "Puffer Jackets", href: "/collections/giubbotti-new-in" },
      { name: "Skirts", href: "/collections/gonne-new-in" },
      { name: "Pants", href: "/collections/pantaloni-new-in" },
      { name: "Tops", href: "/collections/top-new-in" },
      { name: "T-Shirts", href: "/collections/t-shirts-new-in" },
      { name: "Suits", href: "/collections/tute-new-in" },
      { name: "Shorts", href: "/collections/shorts-new-in" },
    ],
  },
];

/* ─── S&D Text Logo ─── */
function Logo() {
  return (
    <span className="text-xl font-bold tracking-[0.15em] uppercase">
      S&D
    </span>
  );
}

/* ─── Desktop Dropdown ─── */
function Dropdown() {
  const [activeCollection, setActiveCollection] = useState<string | null>(null);

  return (
    <div
      className="absolute left-0 top-full z-50 w-full border-t border-black/10 bg-white shadow-lg"
      onMouseEnter={() => setActiveCollection(collections[0].name)}
      onMouseLeave={() => setActiveCollection(null)}
    >
      <div className="mx-auto flex max-w-7xl gap-16 px-[26px] py-10">
        {/* Collection links */}
        <div className="flex gap-16">
          {collections.map((col) => (
            <div
              key={col.name}
              className="min-w-[160px]"
              onMouseEnter={() => setActiveCollection(col.name)}
            >
              <Link
                href={col.href}
                className="mb-4 block text-[13px] font-medium uppercase tracking-[-0.1px] text-black hover:underline"
              >
                {col.name}
              </Link>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-neutral-500 transition-colors hover:text-black"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured / highlight — optional */}
        <div className="ml-auto hidden lg:block">
          <p className="mb-2 text-[13px] font-medium uppercase tracking-[-0.1px] text-black">
            Featured
          </p>
          <Link
            href="/collections/main-ss26"
            className="block text-[13px] text-neutral-500 hover:text-black transition-colors"
          >
            View All Collections →
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile Overlay Menu ─── */
function MobileMenu({ onClose }: { onClose: () => void }) {
  const [expandedCol, setExpandedCol] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-50 flex bg-white lg:hidden">
      {/* Close button */}
      <div className="absolute right-4 top-[14px] z-10">
        <button
          onClick={onClose}
          className="flex items-center gap-1 text-[13px] font-medium uppercase tracking-[-0.1px]"
          aria-label="Close menu"
        >
          <X size={16} />
        </button>
      </div>

      <nav className="flex w-full flex-col px-[26px] pt-20">
        {/* Primary links */}
        <div className="flex flex-col gap-5 border-b border-black/10 pb-8">
          <Link
            href="/collections/new-in"
            className="text-sm font-medium uppercase tracking-[-0.1px]"
            onClick={onClose}
          >
            NEW IN
          </Link>

          {/* Shop with sub-collections */}
          <div>
            <button
              onClick={() =>
                setExpandedCol(expandedCol === "shop" ? null : "shop")
              }
              className="flex items-center gap-2 text-sm font-medium uppercase tracking-[-0.1px]"
            >
              Shop
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${
                  expandedCol === "shop" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedCol === "shop" && (
              <div className="mt-4 space-y-4 pl-4">
                {collections.map((col) => (
                  <div key={col.name}>
                    <Link
                      href={col.href}
                      className="text-[13px] font-medium uppercase tracking-[-0.1px]"
                      onClick={onClose}
                    >
                      {col.name}
                    </Link>
                    <ul className="mt-2 space-y-2">
                      {col.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="text-[13px] text-neutral-500"
                            onClick={onClose}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/collections/archive"
            className="text-sm font-medium uppercase tracking-[-0.1px]"
            onClick={onClose}
          >
            ARCHIVE
          </Link>
        </div>

        {/* Secondary links */}
        <div className="mt-6 flex flex-col gap-4">
          <Link
            href="/search"
            className="text-[13px] font-medium uppercase tracking-[-0.1px]"
            onClick={onClose}
          >
            CERCA
          </Link>
          <Link
            href="/account"
            className="text-[13px] font-medium uppercase tracking-[-0.1px]"
            onClick={onClose}
          >
            ACCOUNT
          </Link>
          <Link
            href="/pages/wishlist"
            className="text-[13px] font-medium uppercase tracking-[-0.1px]"
            onClick={onClose}
          >
            WISHLIST
          </Link>
        </div>
      </nav>
    </div>
  );
}

/* ─── Main Header ─── */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isNewInDropdownOpen, setIsNewInDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { totalQuantity, openCart } = useCartStore();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleDropdownEnter = (setter: (v: boolean) => void) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setter(true);
  };

  const handleDropdownLeave = (setter: (v: boolean) => void) => {
    dropdownTimeoutRef.current = setTimeout(() => setter(false), 150);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white">
      <div
        className="flex items-center justify-between px-[26px]"
        style={{
          paddingTop: "14px",
          paddingBottom: "13px",
        }}
      >
        {/* ─── Left: Menu Toggle + Desktop Nav ─── */}
        <div className="flex items-center gap-6">
          {/* Menu toggle */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-1 text-[13px] font-medium uppercase tracking-[-0.1px] lg:cursor-pointer"
            aria-label="Open menu"
          >
            <span className="text-lg leading-none">☰</span>
            <span className="hidden sm:inline">MENU</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {/* NEW IN — with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter(setIsNewInDropdownOpen)}
              onMouseLeave={() => handleDropdownLeave(setIsNewInDropdownOpen)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-[13px] font-medium uppercase tracking-[-0.1px] hover:opacity-60 transition-opacity"
                aria-expanded={isNewInDropdownOpen}
              >
                NEW IN
                <ChevronDown size={12} />
              </button>

              {isNewInDropdownOpen && (
                <div className="absolute left-0 top-full z-50 min-w-[200px] border border-black/10 bg-white py-3 shadow-lg">
                  <Link
                    href="/collections/new-in"
                    className="block px-5 py-2 text-[13px] font-medium uppercase tracking-[-0.1px] hover:bg-neutral-50"
                  >
                    View All New In
                  </Link>
                  <Link
                    href="/collections/main-ss26"
                    className="block px-5 py-2 text-[13px] font-medium uppercase tracking-[-0.1px] hover:bg-neutral-50"
                  >
                    Main SS26
                  </Link>
                  <Link
                    href="/collections/travel-capsule-ss26"
                    className="block px-5 py-2 text-[13px] font-medium uppercase tracking-[-0.1px] hover:bg-neutral-50"
                  >
                    Travel Capsule SS26
                  </Link>
                </div>
              )}
            </div>

            {/* Shop — with mega dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter(setIsShopDropdownOpen)}
              onMouseLeave={() => handleDropdownLeave(setIsShopDropdownOpen)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-[13px] font-medium uppercase tracking-[-0.1px] hover:opacity-60 transition-opacity"
                aria-expanded={isShopDropdownOpen}
              >
                Shop
                <ChevronDown size={12} />
              </button>

              {isShopDropdownOpen && <Dropdown />}
            </div>

            {/* ARCHIVE — simple link */}
            <Link
              href="/collections/archive"
              className="text-[13px] font-medium uppercase tracking-[-0.1px] hover:opacity-60 transition-opacity"
            >
              ARCHIVE
            </Link>
          </nav>
        </div>

        {/* ─── Center: Logo ─── */}
        <Link href="/" className="flex-shrink-0" aria-label="S&D Home">
          <Logo />
        </Link>

        {/* ─── Right: Actions ─── */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search */}
          <div className="hidden md:block">
            <form action="/search" method="get">
              <label htmlFor="header-search" className="sr-only">
                Cosa stai cercando?
              </label>
              <input
                readOnly
                type="search"
                name="q"
                id="header-search"
                value=""
                placeholder="CERCA"
                className="w-24 cursor-pointer bg-transparent text-[13px] font-medium uppercase tracking-[-0.1px] outline-none placeholder:text-black/40 focus:w-40 transition-all"
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setIsSearchOpen(false)}
              />
            </form>
          </div>
          <button
            className="text-[13px] font-medium uppercase tracking-[-0.1px] hover:opacity-60 transition-opacity md:hidden"
            aria-label="Search"
          >
            <Search size={16} />
          </button>

          {/* Account */}
          <Link
            href="/account"
            className="hidden text-[13px] font-medium uppercase tracking-[-0.1px] hover:opacity-60 transition-opacity sm:block"
            aria-label="Account"
          >
            ACCOUNT
          </Link>

          {/* Wishlist */}
          <Link
            href="/pages/wishlist"
            className="hidden text-[13px] font-medium uppercase tracking-[-0.1px] hover:opacity-60 transition-opacity md:block"
            aria-label="Wishlist"
          >
            WISHLIST
          </Link>

          {/* Cart */}
          <button
            onClick={openCart}
            className="flex items-center gap-1 text-[13px] font-medium uppercase tracking-[-0.1px] hover:opacity-60 transition-opacity"
            aria-label="Cart"
          >
            <span className="hidden sm:inline">CARRELLO</span>
            <span className="sm:hidden">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </span>
            <span
              className="inline-flex items-center justify-center text-[13px] font-medium"
              id="header-cart-count"
            >
              {totalQuantity > 0 ? totalQuantity : ""}
            </span>
          </button>
        </div>
      </div>

      {/* ─── Mobile / Tablet Menu Overlay ─── */}
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
}
