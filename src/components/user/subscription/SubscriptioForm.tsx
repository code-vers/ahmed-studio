"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const paymentMethods = ["Stripe", "Paypal"];

interface SubscribeFormProps {
	planName?: string;
	planPrice?: string;
	onSuccess?: () => void;
}

export default function SubscribeForm({
	planName,
	planPrice,
	onSuccess,
}: SubscribeFormProps) {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		country: "",
		coupon: "",
		payment: "",
	});

	const [open, setOpen] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Subscribe form data:", form);
		onSuccess?.();
	};

	const inputClass =
		"w-full ring ring-secondary px-3 py-1 rounded-sm focus:outline-none focus:ring-2 ";

	const labelClass = "block mb-1";

	return (
		<section className="w-full pb-10 sm:px-6">
			<div className="w-[85%] mx-auto">
				{/* Header row */}
				<div className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900">Subscription</h2>

					<div className="w-100 mx-auto ring ring-secondary rounded-xl p-6">
						{/* Form */}
						<form onSubmit={handleSubmit} className="space-y-4 text-main">
							{/* Name */}
							<div>
								<label className={labelClass}>Name</label>
								<input
									type="text"
									name="name"
									value={form.name}
									onChange={handleChange}
									placeholder="Name"
									required
									className={inputClass}
								/>
							</div>

							{/* Email */}
							<div>
								<label className={labelClass}>Email</label>
								<input
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									placeholder="Email"
									required
									className={inputClass}
								/>
							</div>

							{/* Phone Number */}
							<div>
								<label className={labelClass}>Phone number</label>
								<input
									type="tel"
									name="phone"
									value={form.phone}
									onChange={handleChange}
									placeholder="••••••••"
									className={inputClass}
								/>
							</div>

							{/* Country */}
							<div>
								<label className={labelClass}>Country</label>
								<input
									type="text"
									name="country"
									value={form.country}
									onChange={handleChange}
									placeholder="Country"
									className={inputClass}
								/>
							</div>

							{/* Coupon Code */}
							<div>
								<label className={labelClass}>Coupon Code</label>
								<input
									type="text"
									name="coupon"
									value={form.coupon}
									onChange={handleChange}
									placeholder="•••"
									className={inputClass}
								/>
							</div>

							{/* Payment — custom dropdown */}
							<div>
								<label className={labelClass}>Payment</label>
								<div className="relative">
									<button
										type="button"
										onClick={() => setOpen((v) => !v)}
										className={`w-full flex items-center justify-between border border-[#C8B89A] rounded-md px-3 py-2 text-sm text-left transition focus:outline-none focus:ring-2 focus:ring-[#8B6A3E]/30 focus:border-[#8B6A3E] bg-white ${
											form.payment ? "text-gray-700" : "text-[#C8B89A]"
										}`}
									>
										{form.payment || "Select your payment"}
										<ChevronDown
											className={`w-4 h-4 text-[#8B6A3E] transition-transform ${open ? "rotate-180" : ""}`}
										/>
									</button>

									{open && (
										<ul className="absolute z-20 mt-1 w-full bg-white border border-[#D6C9B6] rounded-md shadow-md overflow-hidden">
											{paymentMethods.map((method) => (
												<li key={method}>
													<button
														type="button"
														onClick={() => {
															setForm({ ...form, payment: method });
															setOpen(false);
														}}
														className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-[#FFF8DC] transition"
													>
														{method}
													</button>
												</li>
											))}
										</ul>
									)}
								</div>
							</div>

							{/* Submit */}
							<button
								type="submit"
								className="w-full mt-2 bg-[#8B6A3E] hover:bg-[#7A5C35] text-white font-medium text-sm rounded-md py-2.5 transition"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
