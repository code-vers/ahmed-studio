"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Download, Play } from "lucide-react";

interface VideoCardProps {
	src?: string;
	name?: string;
	description?: string;
}

export default function DetailsCard({
	src = "/images/users/dashboard/1.jpg",
	name = "Image name",
	description = "Image description",
}: VideoCardProps) {
	const [showDialog, setShowDialog] = useState(false);
	const router = useRouter();

	const handleBuyNow = () => {
		setShowDialog(false);
		router.push("/user/subscription");
	};

	return (
		<>
			<section className="w-full px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center gap-8">
				<div className="w-[85%] mx-auto flex justify-around">
					{/* Video / Image Card */}
					<div className="relative w-full max-w-125 aspect-4/4 rounded-xl overflow-hidden shrink-0 group">
						<Image src={src} alt={name} fill className="object-cover" />

						{/* Dark overlay — pointer-events-none so it never blocks clicks */}
						<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-black/20 pointer-events-none" />

						{/* Download button — z-10 to sit above the overlay */}
						<button
							onClick={() => setShowDialog(true)}
							className="absolute top-3 right-3 z-10 text-white hover:text-[#C8B49A] transition-colors"
							aria-label="Download"
						>
							<Download className="w-5 h-5" strokeWidth={1.8} />
						</button>

						{/* Play button — center, also pointer-events-none so it doesn't block */}
						<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
							<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all">
								<Play className="w-5 h-5 text-white fill-white ml-0.5" />
							</div>
						</div>

						{/* Labels — bottom, also pointer-events-none */}
						<div className="absolute bottom-0 left-0 px-3 py-3 pointer-events-none">
							<p className="text-white text-[13px] font-medium leading-tight">
								{name}
							</p>
							<p className="text-white/60 text-[11px] leading-tight">
								{description}
							</p>
						</div>
					</div>

					{/* AI Feature CTA */}
					<div className="flex flex-col items-start gap-4 text-center">
						<p className="text-gray-800 font-medium text-[15px]">
							Use AI feature of video summarizing
						</p>
						<button className="px-10 py-2.5 bg-[#8B6A3E] hover:bg-[#7A5C35] text-white text-sm font-medium rounded-md transition-colors">
							See
						</button>
					</div>
				</div>
			</section>

			{/* Download Guard Dialog */}
			{showDialog && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[2px]"
					onClick={() => setShowDialog(false)}
				>
					<div
						className="bg-white rounded-2xl shadow-2xl px-8 py-8 w-full max-w-sm mx-4 text-center"
						onClick={(e) => e.stopPropagation()}
					>
						<p className="text-[#8B6A3E] font-medium mb-7 leading-relaxed">
							You can't download any file <br /> without purchase any plan.
						</p>

						<div className="flex items-center justify-center gap-3">
							<button
								onClick={() => setShowDialog(false)}
								className="px-10 py-3 rounded-sm bg-[#EBEBEB] font-medium text-[#8B6A3E] hover:bg-[#d4d4d4] transition-colors"
							>
								Cancel
							</button>

							<button
								onClick={handleBuyNow}
								className="px-10 py-3 rounded-sm bg-[#8B6A3E] text-white font-medium hover:bg-[#7A5C35] transition-colors"
							>
								Buy Now
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
