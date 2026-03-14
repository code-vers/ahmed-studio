"use client";
import { useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "./Nagivation";
import SigninSignup from "./SigninSignup";
import Link from "next/link";

interface NavbarProps {
  onMenuToggle: () => void;
}

export function Navbar({ onMenuToggle}: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="w-[90%] mx-auto sticky top-0 z-50 bg-white">
			<div className="flex h-16 items-center justify-between px-4 lg:px-10">
				{/* Mobile Menu Button */}
				<Button
					variant="ghost"
					size="icon"
					onClick={() => setIsOpen(!isOpen)}
					className="lg:hidden text-black"
				>
					{isOpen ? <X /> : <Menu />}
				</Button>

				{/* Logo - hide in mobil */}
				<div className={`${isOpen ? "hidden" : "block"} lg:block`}>
					<Logo />
				</div>

				{/* Desktop Navigation */}
				<Navigation />

				{/* SigninSignup - altime visible */}
				<SigninSignup />
			</div>

			{/* Mobile Dropdown Menu */}
			{isOpen && (
				<div className="lg:hidden bg-white border-t absolute top-16 left-0 w-full shadow-lg transition-all duration-300">
					<nav className="flex flex-col p-4 space-y-4">
						{[
							{ name: "Home", goTo:"#", active: true },
							{ name: "About Us", goTo:"#"},
							{ name: "Order", goTo:"#" },
							{ name: "Consultant", goTo:"#"},
							{ name: "Cloud Storage", goTo:"#" },
							{ name: "Subscription", goTo:"#" },
							{ name: "Our Lab", goTo:"website/our-lab" },
						].map((item) => (
							<Link
								key={item.name}
								href={item.goTo}
								className={`text-lg ${item.active ? "text-main font-bold" : "text-black/70"}`}
								onClick={() => setIsOpen(false)}
							>
								{item.name}
							</Link>
						))}
					</nav>
				</div>
			)}
		</header>
	);
}
