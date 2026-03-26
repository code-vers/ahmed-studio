"use client";

import Image from "next/image";
import { FolderClosed } from "lucide-react";
import { useRouter } from "next/navigation";

const images = [
	{
		id: 1,
		name: "Image name",
		description: "Image description",
		src: "/images/users/dashboard/1.jpg",
	},
	{
		id: 2,
		name: "Image name",
		description: "Image description",
		src: "/images/users/dashboard/2.jpg",
	},
	{
		id: 3,
		name: "Image name",
		description: "Image description",
		src: "/images/users/dashboard/3.jpg",
	},
	{
		id: 4,
		name: "Image name",
		description: "Image description",
		src: "/images/users/dashboard/4.jpg",
	},
	{
		id: 5,
		name: "Image name",
		description: "Image description",
		src: "/images/users/dashboard/5.jpg",
	},
	{
		id: 6,
		name: "Image name",
		description: "Image description",
		src: "/images/users/dashboard/6.jpg",
	},
	{
		id: 7,
		name: "Image name",
		description: "Image description",
		src: "/images/users/dashboard/7.jpg",
	},
	{
		id: 8,
		name: "Image name",
		description: "Image description",
		src: "/images/users/dashboard/8.jpg",
	},
];

const folders = [
	{ id: 1, name: "Folder name", description: "Folder description" },
	{ id: 2, name: "Folder name", description: "Folder description" },
	{ id: 3, name: "Folder name", description: "Folder description" },
	{ id: 4, name: "Folder name", description: "Folder description" },
	{ id: 5, name: "Folder name", description: "Folder description" },
	{ id: 6, name: "Folder name", description: "Folder description" },
	{ id: 7, name: "Folder name", description: "Folder description" },
	{ id: 8, name: "Folder name", description: "Folder description" },
];

export default function RecentSection() {
	const router = useRouter();

	const handleGoDetails = (id: number) => {
		router.push(`user/show-details/${id}`);
	};

	return (
		<section className="w-full px-4 sm:px-6 bg-white">
			<div className="w-[85%] mx-auto">
				<h2 className="text-lg font-semibold text-gray-900 mb-5">Recent</h2>

				{/* Image Grid */}
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-3">
					{images.map((img) => (
						<div
							key={img.id}
							className="relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer group"
							onClick={() => handleGoDetails(img.id)}
						>
							<Image
								src={img?.src}
								alt={img?.name}
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-105"
							/>
							{/* Gradient overlay */}
							<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
							{/* Labels */}
							<div className="absolute bottom-0 left-0 px-3 py-2">
								<p className="text-white text-[13px] font-medium leading-tight">
									{img.name}
								</p>
								<p className="text-white/70 text-[11px] leading-tight">
									{img.description}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Folder Grid */}
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
					{folders.map((folder) => (
						<div
							key={folder.id}
							className="relative aspect-4/3 rounded-xl overflow-hidden bg-[#81755f] cursor-pointer group hover:bg-[#695d49] transition-colors"
						>
							{/* Folder icon */}
							<div className="absolute inset-0 flex items-center justify-center">
								<FolderClosed
									className="w-12 h-12 sm:w-14 sm:h-14 text-white/50 group-hover:text-white/70 transition-colors"
									strokeWidth={1}
								/>
							</div>
							{/* Labels */}
							<div className="absolute bottom-0 left-0 px-3 py-2">
								<p className="text-white text-[13px] font-medium leading-tight">
									{folder.name}
								</p>
								<p className="text-white/60 text-[11px] leading-tight">
									{folder.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}