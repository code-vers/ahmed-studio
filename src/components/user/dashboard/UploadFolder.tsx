"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";
import { ImageIcon, Upload, UploadCloud } from "lucide-react";

const tabs = ["Indexing", "Leveling", "Tagging"];

export default function UploadFolder() {
	const [activeTab, setActiveTab] = useState("Indexing");
	const [isDragging, setIsDragging] = useState(false);
	const [uploadedFile, setUploadedFile] = useState<File | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDragging(true);
	};

	const handleDragLeave = () => setIsDragging(false);

	const handleDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDragging(false);
		const file = e.dataTransfer.files?.[0];
		if (file) setUploadedFile(file);
	};

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) setUploadedFile(file);
	};

	return (
		<section className="w-full px-4 sm:px-6 py-5">
			<div className="w-[85%] mx-auto">
				{/* Top bar */}
				<div className="flex items-center justify-between mb-5">
					<h2 className="text-[17px] font-semibold text-gray-900">
						Upload Folder
					</h2>

					<div className="flex items-center gap-5">
						{tabs.map((tab) => (
							<button
								key={tab}
								onClick={() => setActiveTab(tab)}
								className={`text-sm transition-colors ${
									activeTab === tab
										? "text-gray-900 font-semibold border-b-2 border-gray-900 pb-0.5"
										: "text-gray-400 hover:text-gray-600"
								}`}
							>
								{tab}
							</button>
						))}
					</div>
				</div>

				{/* Card */}
				<div className="bg-[#fefaee] border border-[#9370524D] rounded-3xl px-6 py-8 flex flex-col items-center w-125 mx-auto mt-10">
					{/* Card header text */}
					<h3 className="text-center font-medium leading-relaxed mb-1">
						Upload Image for Metadata, <br /> Indexing, Scene Detection
					</h3>
					<p className="text-center text-gray-400 text-xs mb-6">
						Supported formats: JPG, JPEG, PNG
					</p>

					{/* Drop zone */}
					<div
						onDragOver={handleDragOver}
						onDragLeave={handleDragLeave}
						onDrop={handleDrop}
						className={`w-full max-w-sm border rounded-xl flex flex-col items-center justify-center py-10 px-4 transition-all ${
							isDragging
								? "border-[#8B6A3E] bg-[#FFF8EE]"
								: "border-gray-200 bg-white"
						}`}
					>
						{uploadedFile ? (
							<div className="flex flex-col items-center gap-2 text-center">
								<ImageIcon
									className="w-10 h-10 text-[#8B6A3E]"
									strokeWidth={1.2}
								/>
								<p className="text-sm text-gray-700 font-medium">
									{uploadedFile.name}
								</p>
								<p className="text-xs text-gray-400">
									{(uploadedFile.size / 1024).toFixed(1)} KB
								</p>
								<button
									onClick={() => setUploadedFile(null)}
									className="text-xs text-red-400 hover:text-red-600 mt-1 transition"
								>
									Remove
								</button>
							</div>
						) : (
							<>
								<ImageIcon
									className="w-10 h-10 text-[#C8B49A] mb-3"
									strokeWidth={1.2}
								/>
								<p className="text-sm text-gray-400 mb-3">
									Drag and drop your image here
								</p>
								<p className="text-xs text-gray-300 mb-4">or</p>

								<button
									onClick={() => fileInputRef.current?.click()}
									className="flex items-center gap-2 bg-main hover:bg-[#7A5C35] text-white text-sm font-medium px-6 py-3 rounded-md transition-colors"
								>
									<Upload className="w-4 h-4" />
									Upload Image
								</button>
							</>
						)}

						<input
							ref={fileInputRef}
							type="file"
							accept=".jpg,.jpeg,.png"
							className="hidden"
							onChange={handleFileChange}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
