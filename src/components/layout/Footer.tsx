"use client";

import Link from "next/link";
const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "New In", href: "/collections/new-in" },
        { name: "Main Collection SS26", href: "/collections/main-ss26" },
        {
          name: "Travel Capsule SS26",
          href: "/collections/travel-capsule-ss26",
        },
        { name: "Archive", href: "/collections/archive" },
      ],
    },
    {
      title: "Customer Care",
      links: [
        { name: "Shipping & Returns", href: "/pages/shipping-returns" },
        { name: "Size Guide", href: "/pages/size-guide" },
        { name: "FAQ", href: "/pages/faq" },
        { name: "Contact Us", href: "/pages/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/pages/about" },
        { name: "Careers", href: "/pages/careers" },
        { name: "Press", href: "/pages/press" },
      ],
    },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-lg font-bold uppercase tracking-[0.2em] mb-3">
              Newsletter
            </h3>
            <p className="text-sm text-neutral-400 mb-6">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black font-medium uppercase text-xs tracking-[0.15em] hover:bg-neutral-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-[0.25em] uppercase mb-4">
              S&D
            </h2>
            <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
              Italian women&apos;s fashion since 2009. S&D, Everywhere it&apos;s 8pm.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                className="w-10 h-10 flex items-center justify-center border border-neutral-700 hover:border-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
                className="w-10 h-10 flex items-center justify-center border border-neutral-700 hover:border-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://twitter.com"
                className="w-10 h-10 flex items-center justify-center border border-neutral-700 hover:border-white transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold uppercase tracking-[0.15em] text-xs mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>© 2024 S&D. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
