"use client";

import Image from "next/image";
import { Upload, Download, ImageIcon } from "lucide-react";

export default function MediaLibraryComponent() {
	return (
		<section className="w-full pb-6 min-h-screen">
			{/* Title */}
			<h2 className="text-3xl font-normal pb-2">Media Library</h2>
			{/* ================= Stats Cards ================= */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
				{["Photos", "Videos", "Audios"].map((item) => (
					<div
						key={item}
						className="bg-white border border-[#caa57b] rounded-xl p-8"
					>
						<p className="text-lg mb-2 flex ">
							<ImageIcon className="mr-2" /> {item}
						</p>
						<h3 className="text-3xl font-normal py-4">124,567</h3>
						<span className="text-lg">3.1 TB</span>
					</div>
				))}
			</div>

			{/* ================= Search + Upload ================= */}
			<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
				{/* Search */}
				<input
					type="text"
					placeholder="Search..."
					className="w-full md:w-75 px-4 py-2 rounded-md border border-main  outline-none focus:ring-1 focus:ring-[#8B5E3C]"
				/>

				{/* Upload Button */}
				<button className="flex items-center gap-2 bg-[#8B5E3C] text-white px-5 py-2 rounded-md hover:bg-[#6f472d] transition">
					<Upload size={16} />
					Upload
				</button>
			</div>

			{/* ================= Tabs ================= */}
			<div className="flex items-center gap-6 mb-6 text-lg font-medium">
				<button className="border-b-2 border-black pb-1">All</button>
				<button className="text-gray-600 hover:text-black">Photo</button>
				<button className="text-gray-600 hover:text-black">Video</button>
				<button className="text-gray-600 hover:text-black">Audio</button>
			</div>

			{/* ================= Media Grid ================= */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
				{[...Array(12)].map((_, i) => (
					<div key={i} className="relative rounded-xl overflow-hidden group ">
						{/* Image */}
						<div className="relative w-full h-80">
							<Image
								src={`/images/admin/media-library/${i + 1}.jpg`}
								alt="media"
								fill
								className="object-cover"
							/>
						</div>

						{/* Download Icon */}
						<button className="absolute top-2 right-2  p-2 cursor-pointer hover:bg-white hover:rounded-full">
							<Download size={20} />
						</button>

						{/* Bottom Overlay */}
						<div className="absolute bottom-0 left-0 right-0  text-md px-3 pb-3">
							<p className="truncate">Family Vacation 2024.jpg</p>
							<span className="text-[10px] opacity-80">4.2 MB</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
