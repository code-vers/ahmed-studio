"use client";
import { useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "./Nagivation";
import SigninSignup from "./SigninSignup";

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className=" sticky top-0 z-50 bg-white border-b">
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
							{ name: "Home", active: true },
							{ name: "About Us" },
							{ name: "Order" },
							{ name: "Consultant" },
							{ name: "Cloud Storage" },
							{ name: "Subscription" },
							{ name: "Our Lab" },
						].map((item) => (
							<a
								key={item.name}
								href="#"
								className={`text-lg ${item.active ? "text-main font-bold" : "text-black/70"}`}
								onClick={() => setIsOpen(false)}
							>
								{item.name}
							</a>
						))}
					</nav>
				</div>
			)}
		</header>
	);
}
