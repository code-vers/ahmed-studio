"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

import Navigation from "./Nagivation";
import SigninSignup from "./SigninSignup";

interface NavbarProps {
  onMenuToggle?: () => void;
}

// Shared nav items for mobile menu
const navItems = [
  { name: "Home", goTo: "/" },
  { name: "About Us", goTo: "/about-us" },
  { name: "Order", goTo: "/order" },
  { name: "Consultant", goTo: "/consultant" },
  { name: "Cloud Storage", goTo: "/cloud-storage" },
  { name: "Subscription", goTo: "/subscription" },
  { name: "Our Lab", goTo: "/our-lab" },
];

export function Navbar({ onMenuToggle }: NavbarProps) {
  // Mobile menu open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Get current route
  const pathname = usePathname();

  // Handle menu toggle
  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
    onMenuToggle?.();
  };

  return (
    <header className='w-[90%] mx-auto sticky top-0 z-50 bg-white'>
      {/* Navbar container */}
      <div className='flex h-16 items-center justify-between px-4 lg:px-10'>
        {/* Mobile menu button */}
        <Button
          variant='ghost'
          size='icon'
          onClick={handleMenuToggle}
          className='lg:hidden text-black'>
          {isOpen ? <X /> : <Menu />}
        </Button>

        {/* Logo (hidden when mobile menu open) */}
        <div className={`${isOpen ? "hidden" : "block"} lg:block`}>
          <Logo />
        </div>

        {/* Desktop navigation */}
        <Navigation />

        {/* Sign in / Sign up buttons */}
        <SigninSignup />
      </div>

      {/* Mobile dropdown navigation */}
      {isOpen && (
        <div className='lg:hidden bg-white border-t absolute top-16 left-0 w-full shadow-lg transition-all duration-300'>
          <nav className='flex flex-col p-4 space-y-4'>
            {navItems.map((item) => {
              // Check active route
              const isActive = pathname === item.goTo;

              return (
                <Link
                  key={item.name}
                  href={item.goTo}
                  // Active route style
                  className={`text-lg ${
                    isActive
                      ? "text-main font-bold"
                      : "text-black/70 hover:text-main"
                  }`}
                  // Close menu when clicking link
                  onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
