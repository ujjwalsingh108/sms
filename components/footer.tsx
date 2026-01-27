import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const userLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Why Smart School ERP", href: "/features" },
    { name: "Features", href: "/features" },
    { name: "Modules", href: "/modules" },
    { name: "Query Management", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Terms and Conditions", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Overview", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-gray-300 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">SE</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-heading">
                Smart School ERP
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
              Proper functioning of any institution depends upon the effective
              workflow of each department. Smart School ERP incorporates
              benefits that helps institutions to manage & perform their work
              efficiently.
            </p>
          </div>

          {/* User Links */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg font-heading">
              USERLINKS
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {userLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg font-heading">
              LEGAL
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://admin.smartschoolerp.xyz/sales/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                >
                  Sales Login
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg font-heading">
              CONTACTS
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-600 dark:text-gray-400">
                  HSR Layout, Sector 2, Bengaluru-560102.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 shrink-0" />
                <div className="text-xs sm:text-sm text-slate-600 dark:text-gray-400">
                  <div>Tel: +91 7355957231</div>
                  <div>Mob: +91 9044329229</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 shrink-0" />
                <a
                  href="mailto:info@schoolerp.com"
                  className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                >
                  info@schoolerp.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-4 sm:mt-6">
              <h4 className="text-slate-900 dark:text-white font-semibold mb-2 sm:mb-3 text-xs sm:text-sm font-heading">
                FOLLOW US
              </h4>
              <div className="flex gap-2 sm:gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                      aria-label={social.name}
                    >
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-center text-xs sm:text-sm text-slate-500 dark:text-gray-500">
            © {new Date().getFullYear()} Smart School ERP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
