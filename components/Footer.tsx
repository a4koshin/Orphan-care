import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGoogle,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Navigations } from "@/lib/navigation";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavs = [
    {
      title: "Company",
      items: Navigations.slice(0, 4),
    },
    {
      title: "Support",
      items: Navigations.slice(4, 8),
    },
  ];

  return (
    <footer className="bg-[#f6f7fb] text-slate-700">
      <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 pb-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4">
            <div className="flex items-center space-x-3">
              <div className="relative h-12 w-12 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Orphan Care"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <span className="text-3xl font-semibold tracking-tight text-slate-900">
                Orphan Care
              </span>
            </div>

            <p className="max-w-sm text-base leading-relaxed text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis.
            </p>

            <div className="flex items-center gap-5 text-slate-900">
              <a
                href="https://www.facebook.com/InnvandreriOstfold"
                className="transition hover:text-green-600"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="transition hover:text-green-600"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/innvandrerforumostfold/"
                className="transition hover:text-green-600"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="transition hover:text-green-600"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a href="#" className="transition hover:text-green-600" aria-label="Google">
                <FaGoogle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-4">
            {footerNavs.map((group) => (
              <div key={group.title}>
                <h3 className="mb-5 text-xl font-semibold text-slate-900">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="text-base text-slate-700 transition hover:text-green-600"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-5 lg:col-span-4">
            <h3 className="text-xl font-semibold text-slate-900">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-green-700">
                  <FaPhoneAlt className="h-4 w-4" />
                </span>
                <a
                  href="tel:98765432154"
                  className="text-base text-slate-700 transition hover:text-green-600"
                >
                  (+91) 98765 4321 54
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-green-700">
                  <FaEnvelope className="h-4 w-4" />
                </span>
                <a
                  href="mailto:support@mail.com"
                  className="text-base text-slate-700 transition hover:text-green-600"
                >
                  support@mail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-sm text-slate-500">
            © {currentYear} Orphan Care. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/privacy" className="text-slate-500 transition hover:text-green-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-500 transition hover:text-green-600">
              Terms of Use
            </Link>
            <Link href="/legal" className="text-slate-500 transition hover:text-green-600">
              Legal
            </Link>
            <Link href="/sitemap" className="text-slate-500 transition hover:text-green-600">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
