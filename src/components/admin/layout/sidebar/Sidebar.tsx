"use client";

import { LogIn, LogOut } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SidebarLogo } from "./SidebarLogo";
import { SidebarNavItem } from "./SidebarNavItem";
import { SIDEBAR_NAV_ITEMS } from "@/components/admin/constants/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface SidebarProps {
	isOpen: boolean;
	onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
	return (
		<>
			{/* Mobile backdrop overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden"
					onClick={onClose}
					aria-hidden="true"
				/>
			)}

			<aside
				className={cn(
					"fixed inset-y-0 left-0 z-50 flex w-60 flex-col bg-white transition-transform duration-300 ease-in-out",
					"lg:z-30 lg:translate-x-0",
					isOpen ? "translate-x-0" : "-translate-x-full",
				)}
			>
				{/* Logo */}
				<SidebarLogo />

				{/* Navigation */}
				<nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4 text-main ">
					{SIDEBAR_NAV_ITEMS.map((item) => (
						<SidebarNavItem key={item.href} item={item} onNavigate={onClose} />
					))}
				</nav>

				<div className="my-4 flex items-center justify-start ml-3 gap-3">
					<Image
						src="/images/users/user-avatar.png"
						alt="user"
						width={100}
						height={100}
						className="h-10 w-10 rounded-full"
					/>
					<div className="flex flex-col">
						<span className="text-sm font-medium text-main">Ahmed Mulla</span>
						<span className="text-xs text-gray-500">example@example.com</span>
					</div>
				</div>

				{/* Logout */}
				<button
					type="button"
					onClick={() => (window.location.href = "/login")}
					className="flex items-center justify-center gap-2 py-1  font-medium text-red-600 ring ring-red-600 transition-colors hover:text-white hover:bg-red-600 rounded-sm mx-3 mb-4 "
				>
					<LogIn className="h-5 w-5" />
					Log Out
				</button>
			</aside>
		</>
	);
}
