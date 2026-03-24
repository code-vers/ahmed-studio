"use client";

import { PencilLine, Plus } from "lucide-react";
import Image from "next/image";

type Props = {
	name: string;
	email: string;
	onEdit?: () => void;
};

export default function ProfileCard({ name, email, onEdit }: Props) {
	return (
		<div className="bg-white rounded-2xl border border-secondary shadow-sm p-6 flex items-center justify-between">
			<div className="flex items-center gap-4">
				<div className="relative h-25 w-25">
					<Image
						src="/images/users/user-avatar.png"
						alt="avatar"
						fill
						className="rounded-full object-cover "
					/>
					<button className="absolute bottom-0 right-0 bg-main text-white w-6 h-6 rounded-full text-xs flex items-center justify-center p-1">
						<Plus />
					</button>
				</div>

				<div>
					<h2 className="text-lg font-semibold text-gray-800">{name}</h2>
					<p className="text-sm text-gray-500">{email}</p>
				</div>
			</div>

			<button
				className="bg-main text-white px-4 py-2 rounded-md hover:opacity-90 transition flex items-center"
				onClick={onEdit}
			>
				<PencilLine className="mr-3 h-4.5" />
				Update Profile
			</button>
		</div>
	);
}
