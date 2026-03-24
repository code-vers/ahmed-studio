"use client";

import { useState } from "react";

export default function PasswordCard() {
	const [form, setForm] = useState({
		currentPassword: "",
		newPassword: "",
		confirmPassword: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// 🔥 Replace with API call
		console.log("Form Data:", form);
	};

	return (
		<div className="bg-white rounded-2xl border border-secondary shadow-sm p-6 mt-6">
			<h3 className="text-md font-medium text-main mb-6 text-2xl">
				Change password
			</h3>

			<form onSubmit={handleSubmit}>
				<div className="grid md:grid-cols-3 gap-4 text-main mt-10">
					{/* Current Password */}
					<div>
						<label className="">Current Password</label>
						<input
							type="password"
							name="currentPassword"
							value={form.currentPassword}
							onChange={handleChange}
							className="w-full ring ring-secondary rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-secondary"
                            placeholder="********"
						/>
					</div>

					{/* New Password */}
					<div>
						<label className="">New Password</label>
						<input
							type="password"
							name="newPassword"
							value={form.newPassword}
							onChange={handleChange}
							className="w-full ring ring-secondary rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-secondary"
                            placeholder="********"
						/>
					</div>

					{/* Confirm Password */}
					<div>
						<label className="">
							Confirm New Password
						</label>
						<input
							type="password"
							name="confirmPassword"
							value={form.confirmPassword}
							onChange={handleChange}
							className="w-full ring ring-secondary rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-secondary "
                            placeholder="********"
						/>
					</div>
				</div>

				<div className="flex justify-center mt-6">
					<button
						type="submit"
						className="bg-main text-white px-28 py-4 my-6 rounded-md hover:opacity-90 transition"
					>
						Save Changes
					</button>
				</div>
			</form>
		</div>
	);
}
