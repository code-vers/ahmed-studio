"use client";

import { Upload, Images as ImageIcon, Smile, Film, Plus, Cat as CatIcon } from "lucide-react";

const categories = [
	{
		label: "Upload",
		icon: Upload,
		bg: "bg-[#C84B2F]",
		prefix: true, // shows "+" prefix
	},
	{
		label: "My Album",
		icon: ImageIcon,
		bg: "bg-[#C48A2F]",
		prefix: false,
	},
	{
		label: "Cartoon",
		icon: CatIcon,
		bg: "bg-[#8B6A3E]",
		prefix: false,
	},
	{
		label: "Movies",
		icon: Film,
		bg: "bg-[#5A5A5A]",
		prefix: false,
	},
];

const CategoryNav = () => {
	return (
		<section className="w-full pb-6 sm:px-6">
			<div className="w-[85%] mx-auto">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
					{categories.map(({ label, icon: Icon, bg, prefix }) => (
						<button
							key={label}
							className={`${bg} flex items-center justify-center gap-2 py-5 rounded-md text-white font-medium text-[15px] hover:brightness-110 transition-all`}
						>
							{prefix && (
								<span className="text-xl font-light leading-none"><Plus/></span>
							)}
							<Icon className="w-5 h-5" strokeWidth={1.8} />
							<span>{label}</span>
						</button>
					))}
				</div>
			</div>
		</section>
	);
};

export default CategoryNav;
