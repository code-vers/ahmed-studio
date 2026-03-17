"use client";

import Image from "next/image";
import { Eye } from "lucide-react";

type User = {
	id: number;
	name: string;
	avatar: string;
	date: string;
	email: string;
};

export default function UserManagementCard({ user }: { user: User }) {
	return (
		<div className="flex items-center justify-between py-3 last:border-none ">
			{/* User Info */}
			<div className="flex items-center gap-3">
				<Image
					src={user.avatar}
					alt={user.name}
					width={36}
					height={36}
					className="rounded-full object-cover"
				/>
				<span className="text-sm font-medium text-gray-800">{user.name}</span>
			</div>

			{/* Date */}
			<div className=" text-sm text-gray-600">{user.date}</div>

			{/* Email */}
			<div className=" text-sm text-gray-600 truncate">{user.email}</div>

			{/* Actions */}
			<div className="flex items-center gap-2 w-[15%] justify-end">
				<span className="text-xs bg-[#8B5E3C] text-white px-3 py-1 rounded-full">
					Approved
				</span>

				<button className="text-xs bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600">
					Remove
				</button>

				<button className="p-1 hover:bg-gray-200 rounded">
					<Eye size={16} />
				</button>
			</div>
		</div>
	);
}
