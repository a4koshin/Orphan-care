import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Navigations } from "@/lib/navigation";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Group navigation items for better organization (optional)
  const footerNavs = [
    {
      title: "Organization",
      items: Navigations.slice(0, 3)
    },
    {
      title: "Support",
      items: Navigations.slice(3, 6)
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer - Increased vertical spacing */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            
            {/* Brand Column - Enhanced with better hierarchy */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center space-x-3 group">
                <div className="relative w-12 h-12 flex-shrink-0 transition-transform group-hover:scale-105 duration-300">
                  <Image
                    src="/logo.png"
                    alt="Innvandrerforum Østfold"
                    fill
                    priority
                    className="object-contain "
                    sizes="48px"
                  />
                </div>
                <span className="text-xl font-semibold text-white tracking-tight">
                  Orphan Care
                </span>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                Dedicated to supporting and empowering immigrant communities
                through collaboration, resources, and innovative projects in Østfold.
              </p>
              
              {/* Newsletter Signup - Added for better engagement */}
              <div className="pt-2">
                <h4 className="text-sm font-medium text-white mb-3">Stay updated</h4>
                <div className="flex max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-l-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-shadow"
                  />
                  <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-r-lg text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Columns - Better organized */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                  Organization
                </h3>
                <ul className="space-y-3">
                  {Navigations.slice(0, 4).map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="text-slate-400 hover:text-white transition-colors text-sm inline-flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {item.name}
                        </span>
                        <FaArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                  Support
                </h3>
                <ul className="space-y-3">
                  {Navigations.slice(4, 8).map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="text-slate-400 hover:text-white transition-colors text-sm inline-flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {item.name}
                        </span>
                        <FaArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Column - Enhanced with better visual hierarchy */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                  Get in touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 group">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors">
                      <FaMapMarkerAlt className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <div>
                      <span className="text-slate-400 text-sm block">
                        Underhaugsgata 3
                      </span>
                      <span className="text-slate-400 text-sm">
                        1607 Fredrikstad, Norway
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 group">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors">
                      <FaPhoneAlt className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <a
                      href="tel:+47484860886"
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      +47 484 60 886
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3 group">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors">
                      <FaEnvelope className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <a
                      href="mailto:innvandrerforumiostfold@gmail.com"
                      className="text-slate-400 hover:text-white transition-colors text-sm break-all"
                    >
                      innvandrerforumiostfold@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links - Enhanced */}
              <div>
                <h4 className="text-sm font-medium text-white mb-3">Follow us</h4>
                <div className="flex space-x-3">
                  <a
                    href="https://www.facebook.com/InnvandreriOstfold"
                    className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-200 hover:scale-110"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/innvandrerforumostfold/"
                    className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 transition-all duration-200 hover:scale-110"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Enhanced with better organization */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs text-center md:text-left order-2 md:order-1">
              © {currentYear} Innvandrerforum Østfold. 
              <span className="block sm:inline sm:ml-1">All rights reserved.</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs order-1 md:order-2">
              <Link href="/privacy" className="text-slate-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-slate-500 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="text-slate-500 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;