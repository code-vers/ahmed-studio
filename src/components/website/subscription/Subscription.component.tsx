import { CircleCheck } from "lucide-react";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";

export default function SubscriptionComponent() {
	const plans = [
		{
			name: "Trial Plan",
			price: "£0",
			desc: "Try The Experience",
			features: [
				"10 days access(one time)",
				"10 GB storage",
				"High-quality playback",
				"Media sharing",
				"Media download",
				"Up to 4 guest users",
				"AS App (IOS/Android/Web)",
				"AI tagging",
				"Metadata viewing",
				"5 Classic Cartoons & Series",
			],
			highlight: false,
		},
		{
			name: "Standard",
			price: "£24",
			desc: "Best For Personal Archives",
			features: [
				"30 days access",
				"10 GB storage",
				"Cloud Video Playback",
				"High-Quality Playback",
				"Media Sharing",
				"Up to 4 Guest Users",
				"AS App (IOS/Android/Web)",
				"AI tagging",
				"Metadata Management",
				"Classic Cartoons & Series",
				"Additional Storage(10GB/9SAR)",
			],

			highlight: true,
		},
		{
			name: "Pro Archival",
			price: "£100",
			desc: "Enterprise-grade preservation for large collections.",
			features: [
				"30 days access",
				"10 GB storage",
				"Content Upload",
				"Cloud Video Playback",
				"High-Quality Playback",
				"Media Sharing",
				"Media Download",
				"Up to 4 Guest Users",
				"AS App (IOS/Android/Web)",
				"AI tagging",
				"AI Indexing",
				"Metadata Management",
				"Classic Cartoons & Series",
				"5 Photo Restorations",
				"1 Video Restorations",
				"Additional Storage(10GB/9SAR)",
			],
			highlight: false,
		},
	];

	return (
		<>
			{/* Banner */}
			<section className="w-full py-12">
				<div className="w-[85%] mx-auto">
					<div className="relative h-140 w-full overflow-hidden rounded-xl">
						<Image
							src="/images/website/subscription/banner.jpg"
							alt="Preserving memories"
							fill
							priority
							className="object-cover"
						/>

						<div className="absolute inset-0 bg-black/40" />

						<div className="absolute inset-0 flex items-center bg-linear-to-r from-black/80 to-transparent">
							<div className="max-w-[60%] text-white pl-10 ">
								<h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
									Your Priceless <br /> Memories Digitized
								</h1>

								<p className="text-gray-200 text-sm md:text-base">
									Beyond mere conversion—we provide a master-class restoration
									for your family's visual heritage. From the grain of vintage
									8mm film to the nostalgic hum of VHS, we treat every frame as
									a work of art, bridging the gap between your most cherished
									yesterdays and the high-definition clarity of today.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Intro Section  */}
			<section className="w-full py-12">
				<div className="w-[85%] mx-auto">
					<h2 className="text-5xl font-medium text-[#7b5308] mb-4 text-center">
						Your Family History, <br /> Reimagined for the Digital Age
					</h2>

					<p className="text-black/70 text-xl leading-relaxed py-4 text-justify">
						Stop letting your family's legacy fade on obsolete tapes and brittle
						film. Ahmed Studio utilizes industry-leading technology to convert
						every format—from VHS and 8mm reels to vintage slides—into stunning
						4K-ready digital files. With our proprietary McKenzie™ AI
						Enhancement, we don't just transfer your media; we restore it,
						sharpening clarity and correcting color to look better than the day
						it was recorded. Enjoy free digital downloads or secure your archive
						on custom USBs and DVDs, all backed by our 100% accuracy guarantee.
					</p>
				</div>
			</section>

			{/* Subscription Plan  */}
			<section className="w-full bg-white py-16 md:py-20">
				<div className="mx-auto px-4 sm:px-6">
					<h2 className="mb-10 md:mb-14 text-center text-[28px] md:text-[40px] font-semibold tracking-[-0.02em] text-[#8A6545]">
						Subscription Plan
					</h2>

					<div className="flex flex-wrap items-stretch justify-center gap-5 md:gap-7">
						{plans.map((plan) => (
							<div
								key={plan.name}
								className={`flex flex-col rounded-2xl transition-all duration-300 ${
									plan.highlight
										? "w-full max-w-[320px] ring ring-black bg-[#FFFBF0] px-6 md:px-8 pt-6 md:pt-7 pb-7 md:pb-8 h-210 md:scale-[1.03]"
										: "w-full max-w-[320px] bg-[#FFF1CC] px-5 md:px-6 pt-5 md:pt-6 pb-6 md:pb-7 h-200"
									}`}
							>
								{/* Content */}
								<div className="flex flex-col flex-1">
									<h3 className="mb-2 text-[16px] md:text-[18px] font-medium text-[#7B5A3B]">
										{plan.name}
									</h3>

									<div className="mb-3 flex items-end">
										<span
											className={`font-bold leading-none text-black ${
												plan.highlight
													? "text-[46px] md:text-[54px]"
													: "text-[42px] md:text-[48px]"
											}`}
										>
											{plan.price}
										</span>

										<span className="ml-2 text-[13px] md:text-[14px] text-[#8A8A8A]">
											/Month
										</span>
									</div>

									<p
										className={`mb-5 leading-[1.35] text-[#7B6E62] ${
											plan.highlight
												? "max-w-70 text-[14px] md:text-[15px]"
												: "max-w-70 text-[13px] md:text-[14px]"
										}`}
									>
										{plan.desc}
									</p>

									{/* Feature List */}
									<ul className="space-y-2.5 md:space-y-2.75 flex-1 overflow-hidden">
										{plan.features.map((feature) => (
											<li
												key={feature}
												className={`flex items-center gap-2.5 leading-1.25 text-[#555555] ${
													plan.highlight
														? "text-[15px] md:text-[16px]"
														: "text-[14px] md:text-[15px]"
												}`}
											>
												<span className="flex h-5.5 w-5.5 min-w-5.5 items-center justify-center rounded-full">
													<CircleCheck />
												</span>

												<span>{feature}</span>
											</li>
										))}
									</ul>
								</div>

								{/* Button */}
								<button
									className={`mt-auto mx-auto rounded-sm font-semibold text-white ${
										plan.highlight
											? "h-11 px-8 text-[14px] bg-black mb-10"
											: "h-10 px-7 text-[13px] md:h-11 md:text-[14px] bg-main"
									}`}
								>
									Buy Plan
								</button>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
