"use client";

import { useState } from "react";
import { FiCheck } from "react-icons/fi";

const plans = [
	{
		name: "Trial Plan",
		monthlyPrice: "£0",
		yearlyPrice: "£0",
		desc: "Experience the magic of your digital history.",
		features: [
			"Secure 5GB Storage",
			"14 Days of Free Access",
			"8 free guest accounts",
			"Multi-Device Streaming",
			"Global Sharing",
		],
		highlight: false,
	},
	{
		name: "Standard Cloud",
		monthlyPrice: "£24",
		yearlyPrice: "£240",
		desc: "Secure, long-term hosting for home movies.",
		features: [
			"Secure 10GB Storage",
			"AI Tagging & Indexing",
			"Deep Search Functionality",
			"Multi-Platform Access",
			"Extended Hosting",
		],
		highlight: true,
	},
	{
		name: "Pro Archival",
		monthlyPrice: "£100",
		yearlyPrice: "£960",
		desc: "Enterprise-grade preservation for large collections.",
		features: [
			"Secure 20GB+ Storage",
			"RFP Development Support",
			"Comprehensive Archive",
			"Test Digitization Samples",
			"Unlimited Sharing",
		],
		highlight: false,
	},
];

const SubscriptionPlan = () => {
	const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

	return (
		<section className="w-full pb-10 sm:px-6">
			<div className="w-[85%] mx-auto">
				{/* Header row */}
				<div className="flex items-center justify-between mb-8">
					<h2 className="text-xl font-semibold text-gray-900">Subscription</h2>

					{/* Toggle */}
					<div className="flex items-center bg-white gap-1">
						<button
							onClick={() => setBilling("monthly")}
							className={`px-4 py-1.5 rounded-md text-sm font-medium ring ring-black/70 transition-all ${
								billing === "monthly"
									? "bg-black text-white"
									: "hover:text-white hover:bg-black"
							}`}
						>
							Monthly
						</button>
						<button
							onClick={() => setBilling("yearly")}
							className={`px-4 py-1.5 rounded-md text-sm ring ring-black/70 font-medium transition-all ${
								billing === "yearly"
									? "bg-black text-white"
									: "hover:text-white hover:bg-black"
							}`}
						>
							Yearly
						</button>
					</div>
				</div>

				{/* Cards */}
				<div className="flex flex-wrap items-end justify-center gap-5">
					{plans.map((plan) => (
						<div
							key={plan.name}
							className={`flex flex-col justify-between rounded-2xl transition-all duration-300 w-full max-w-[300px] ${
								plan.highlight
									? "border-2 border-gray-900 bg-[#FFFBF0] px-7 pt-7 pb-8 min-h-[430px] scale-[1.03]"
									: "bg-[#FFF8DC] px-6 pt-6 pb-7 min-h-[390px]"
							}`}
						>
							<div>
								{/* Plan name */}
								<h3
									className={`mb-2 font-medium ${
										plan.highlight
											? "text-[17px] text-[#7B5A3B]"
											: "text-[15px] text-[#7B5A3B]"
									}`}
								>
									{plan.name}
								</h3>

								{/* Price */}
								<div className="mb-3 flex items-end">
									<span
										className={`font-bold leading-none text-black ${
											plan.highlight ? "text-[52px]" : "text-[46px]"
										}`}
									>
										{billing === "monthly"
											? plan.monthlyPrice
											: plan.yearlyPrice}
									</span>
									<span className="ml-1.5 text-[13px] text-[#8A8A8A] mb-1">
										/Month
									</span>
								</div>

								{/* Description */}
								<p
									className={`mb-5 leading-snug text-[#7B6E62] ${
										plan.highlight ? "text-[14px]" : "text-[13px]"
									}`}
								>
									{plan.desc}
								</p>

								{/* Features */}
								<ul className="space-y-[10px]">
									{plan.features.map((feature) => (
										<li
											key={feature}
											className={`flex items-center gap-2.5 text-[#555] ${
												plan.highlight ? "text-[15px]" : "text-[13px]"
											}`}
										>
											<span className="flex h-5 w-5 min-w-[20px] items-center justify-center rounded-full bg-[#8B6A3E]">
												<FiCheck className="text-[11px] text-white stroke-[3]" />
											</span>
											{feature}
										</li>
									))}
								</ul>
							</div>

							{/* CTA */}
							<button
								className={`mt-8 w-full rounded-md font-semibold text-white py-2.5 transition hover:opacity-90 ${
									plan.highlight
										? "bg-black text-[14px]"
										: "bg-[#937052] text-[13px]"
								}`}
								onClick={() => (window.location.href="subscription/buy-plan")}
								>
								Buy Plan
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SubscriptionPlan;
