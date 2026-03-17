"use client";

import Image from "next/image";
import { Eye } from "lucide-react";

export type MembershipStatus = {
	id: number;
	name: string;
	avatar: string;
	membershipType: string;
	phone: string;
	date: string;
};

export default function MembershipStatusCrad({ user }: { user: MembershipStatus }) {
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

			{/* Type */}
			<div className=" text-sm text-gray-600 truncate">{user.membershipType}</div>

			{/* Phone Number  */}
			<div className=" text-sm text-gray-600 truncate">{user.phone}</div>

			{/* Date */}
			<div className=" text-sm text-gray-600">{user.date}</div>

			{/* Actions */}
			<div className="flex items-center gap-2 w-[15%] justify-end">

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
