"use client";

import { useState } from "react";
import { Navbar } from "./navbar/Navbar";

interface WebLayoutProps {
	children: React.ReactNode;
}

export function WebLayout({ children }: WebLayoutProps) {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);

	return (
		<main className="container w-[90%] mx-auto min-h-screen sm:px-6 lg:px-8 py-6">
			<Navbar onMenuToggle={() => setIsNavbarOpen((prev) => !prev)} />
			<div className="">{children}</div>
		</main>
	);
}

// container  px-4
