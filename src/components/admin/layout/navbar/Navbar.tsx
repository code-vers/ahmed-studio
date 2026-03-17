import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavbarSearch } from "./NavbarSearch";
import Image from "next/image";

interface NavbarProps {
	onMenuToggle: () => void;
}

export function Navbar({ onMenuToggle }: NavbarProps) {
	return (
		<header className="sticky top-0 z-20 flex h-16 items-center justify-between px-4 sm:px-6 bg-normal py-2">
			{/* Left section: hamburger + title */}
			<div className="flex w-1/2 items-center gap-3">
				{/* Mobile hamburger button */}
				<Button
					variant="ghost"
					size="icon"
					className="h-9 w-9 text-foreground/70 hover:text-foreground lg:hidden"
					onClick={onMenuToggle}
					aria-label="Toggle menu"
				>
					<Menu className="h-5 w-5" />
				</Button>

				{/* Search - hidden on very small screens */}
				<div className="hidden w-full sm:flex">
					<NavbarSearch  />
				</div>
			</div>

			{/* Right section */}
			<div className="flex items-center gap-2 sm:gap-4">
				<Image
					src="/images/users/user-avatar.png"
					alt="user"
					width={100}
					height={100}
					className="h-10 w-10 rounded-full"
				/>
			</div>
		</header>
	);
}
