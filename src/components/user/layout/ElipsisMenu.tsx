"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { EllipsisVertical, HelpCircle, Settings, LogOut } from "lucide-react";

export default function EllipsisMenu() {
	const [open, setOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const router = useRouter();

	// Close when clicking outside
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleLogout = () => {
		setOpen(false);
		router.push("/user/logout");
	};

	const handleSettings = () => {
		setOpen(false);
		router.push("/user/profile");
	};

	const handleHelp = () => {
		setOpen(false);
		// router.push("/user/help");
	};

	const handleUpgradeNow = () => {
		setOpen(false);
		router.push("/user/subscription");
	};

	return (
		<div className="relative" ref={menuRef}>
			{/* Trigger button */}
			<button
				onClick={() => setOpen((v) => !v)}
				className="text-gray-500 hover:text-gray-700 hover:cursor-pointer transition-colors p-1"
				aria-label="More options"
			>
				<EllipsisVertical className="w-5 h-5" />
			</button>

			{/* Dropdown */}
			{open && (
				<div className="absolute right-0 top-9 z-50 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
					{/* Menu items */}
					<div className="px-4 py-3 space-y-1">
						<button
							onClick={handleHelp}
							className="w-full flex items-center gap-3 px-3 py-3 rounded-md text-gray-800 hover:bg-gray-300 transition-colors text-[15px]"
						>
							<HelpCircle className="w-5 h-5 text-gray-700" strokeWidth={1.8} />
							Help & Support
						</button>

						<button
							onClick={handleSettings}
							className="w-full flex items-center gap-3 px-3 py-3 rounded-md text-gray-800 hover:bg-gray-300 transition-colors text-[15px]"
						>
							<Settings className="w-5 h-5 text-gray-700" strokeWidth={1.8} />
							Settings
						</button>

						<button
							onClick={handleLogout}
							className="w-full flex items-center gap-3 px-3 py-3 rounded-md text-gray-800 hover:bg-gray-300 transition-colors text-[15px]"
						>
							<LogOut className="w-5 h-5 text-gray-700" strokeWidth={1.8} />
							Log out
						</button>
					</div>

					{/* Upgrade card */}
					<div className="mx-3 mb-3 rounded-xl bg-[#8B6A3E] px-5 py-5">
						<h4 className="text-white font-bold text-[17px] mb-2">
							Upgrade your plan!
						</h4>
						<p className="text-white/80 text-[13px] leading-relaxed mb-4">
							You're on the Free plan with up to 3 channels. Add or remove
							channels to customize your plan.
						</p>
						<button
							onClick={handleUpgradeNow}
							className="w-full bg-black text-white font-semibold text-[14px] py-3 rounded-xl hover:bg-gray-900 transition-colors"
						>
							Upgrade Now
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
