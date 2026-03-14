"use client";

import { useState } from "react";
import { Navbar } from "./navbar/Navbar";

interface WebLayoutProps {
	children: React.ReactNode;
}

export function WebLayout({ children }: WebLayoutProps) {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);

	return (
		<main className="w-full min-h-screen">
			<Navbar onMenuToggle={() => setIsNavbarOpen((prev) => !prev)} />
			<div className="">{children}</div>
		</main>
	);
}

// container  px-4
