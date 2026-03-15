"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// All navigation items
const navItems = [
  { name: "Home", goTo: "/" },
  { name: "About Us", goTo: "/about-us" },
  { name: "Order", goTo: "/order" },
  { name: "Consultant", goTo: "/consultant" },
  { name: "Cloud Storage", goTo: "/cloud-storage" },
  { name: "Subscription", goTo: "/subscription" },
  { name: "Our Lab", goTo: "/our-lab" },
];

export default function Navigation() {
  // Get current route pathname
  const pathname = usePathname();

  return (
    <nav className='hidden lg:flex space-x-6 text-black/50 text-lg'>
      {navItems.map((item) => {
        // Check if this nav item matches the current route
        const isActive = pathname === item.goTo;

        return (
          <Link
            key={item.name}
            href={item.goTo}
            // Apply active style if route matches
            className={`
							relative inline-flex flex-col items-center justify-center
							transition-colors duration-300
							${isActive ? "text-main font-bold" : "hover:text-main"}
							group
						`}>
            {/* Visible text */}
            <span className='group-hover:font-bold transition-all'>
              {item.name}
            </span>

            {/* Hidden bold text to prevent layout shift */}
            <span
              className='invisible block h-0 overflow-hidden font-bold'
              aria-hidden='true'>
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
