"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Images as ImageIcon, Cat as CatIcon, Film } from "lucide-react";

const categories = [
	{
		label: "Upload",
		icon: Plus,
		bg: "bg-[#C84B2F]",
		action: "upload",
	},
	{
		label: "My Album",
		icon: ImageIcon,
		bg: "bg-[#C48A2F]",
		action: null,
	},
	{
		label: "Cartoon",
		icon: CatIcon,
		bg: "bg-[#8B6A3E]",
		action: null,
	},
	{
		label: "Movies",
		icon: Film,
		bg: "bg-[#5A5A5A]",
		action: null,
	},
];

const CategoryNav = () => {
	const [showDialog, setShowDialog] = useState(false);
	const router = useRouter();

	const handleClick = (action: string | null) => {
		if (action === "upload") {
			setShowDialog(true);
		}
	};

	const handleBuyNow = () => {
		setShowDialog(false);
		router.push("/user/subscription"); // adjust tp your route
	};

	return (
		<>
			<section className="w-full pb-6 sm:px-6">
				<div className="w-[85%] mx-auto">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
						{categories.map(({ label, icon: Icon, bg, action }) => (
							<button
								key={label}
								onClick={() => handleClick(action)}
								className={`${bg} flex items-center justify-center gap-2 py-6 rounded-md text-white font-medium text-[15px] hover:brightness-110 transition-all`}
							>
								<Icon className="w-5 h-5" strokeWidth={1.8} />
								<span>{label}</span>
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Upload Guard Dialog */}
			{showDialog && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[2px]"
					onClick={() => setShowDialog(false)}
				>
					<div
						className="bg-white rounded-2xl shadow-2xl px-8 py-8 w-full max-w-100 mx-4 text-center"
						onClick={(e) => e.stopPropagation()}
					>
						<p className="text-main font-medium mb-7 leading-relaxed">
							You can't upload any file <br /> without purchase any plan.
						</p>

						<div className="flex items-center justify-center gap-3">
							<button
								onClick={() => setShowDialog(false)}
								className="px-10 py-3 rounded-sm bg-[#EBEBEB] font-medium text-main hover:bg-[#d4d4d4] transition-colors"
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
};

export default CategoryNav;
