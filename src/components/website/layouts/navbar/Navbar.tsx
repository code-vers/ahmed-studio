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
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
    onMenuToggle?.();
  };

  return (
    <header className='sticky top-0 z-50 w-full bg-white border-b border-black/5'>
      <div className='mx-auto w-full max-w-[1440px]'>
        <div className='flex h-16 items-center justify-between px-4 lg:px-10'>
          {/* Mobile left: menu + logo */}
          <div className='flex items-center gap-2 lg:hidden'>
            <Button
              variant='ghost'
              size='icon'
              onClick={handleMenuToggle}
              className='h-10 w-10 text-black hover:bg-black/5'>
              {isOpen ? (
                <X className='h-5 w-5' />
              ) : (
                <Menu className='h-5 w-5' />
              )}
            </Button>

            <div className='flex items-center'>
              <Logo />
            </div>
          </div>

          {/* Desktop logo */}
          <div className='hidden lg:block'>
            <Logo />
          </div>

          {/* Desktop navigation */}
          <Navigation />

          {/* Right side */}
          <div className='flex items-center'>
            <SigninSignup />
          </div>
        </div>
      </div>

      {/* Mobile dropdown navigation */}
      {isOpen && (
        <div className='absolute left-0 top-16 w-full border-t border-black/5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] lg:hidden'>
          <nav className='mx-auto flex w-full max-w-[1440px] flex-col px-4 py-4'>
            {navItems.map((item) => {
              const isActive = pathname === item.goTo;

              return (
                <Link
                  key={item.name}
                  href={item.goTo}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-md px-3 py-3 text-[15px] font-medium transition ${
                    isActive
                      ? "bg-main/10 text-main"
                      : "text-black/75 hover:bg-black/5 hover:text-main"
                  }`}>
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
