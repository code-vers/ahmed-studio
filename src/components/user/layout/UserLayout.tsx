"use client";

import { ReactNode } from "react";
import Navbar from "./Navbar";

interface UserLayoutProps {
	children: ReactNode;
	pageTitle?: string;
}

export default function UserLayout({ children, pageTitle }: UserLayoutProps) {
	return (
		<div className="min-h-screen bg-white flex flex-col">
			{/* Top Navbar */}
			<Navbar />

			{/* Page Content */}
			<main className=" w-full">
				{children}
			</main>
		</div>
	);
}
