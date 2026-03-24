"use client";

import { Search, MoreVertical } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<nav className="w-[85%] mx-auto px-6 py-3 flex items-center justify-between">
			{/* Logo */}
			<div className="flex items-center">
				<Image
					src="/images/logo-colored.png"
					alt="Logo"
					width={100}
					height={100}
				/>
			</div>

			{/* Search Bar */}
			<div className="flex-1 max-w-md mx-8">
				<div className="relative">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
					<input
						type="text"
						placeholder="Search"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full bg-[#F5F2EC] rounded-sm pl-9 pr-4 py-2 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B2C1A]/20"
					/>
				</div>
			</div>

			{/* Right Actions */}
			<div className="flex items-center gap-3">
				<button className="text-gray-500 hover:text-gray-700 transition-colors p-1">
					<MoreVertical className="w-5 h-5" />
				</button>
				<button className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-200 hover:border-[#8B2C1A] transition-colors">
					<Image
						src="/images/users/user-avatar.png"
						alt="User avatar"
						width={36}
						height={36}
						className="object-cover w-full h-full"
					/>
				</button>
			</div>
		</nav>
	);
}
