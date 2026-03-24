"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

export default function EditProfileCard({
	onCancel,
}: {
	onCancel?: () => void;
}) {
	const [form, setForm] = useState({
		name: "",
		phone: "",
		dob: "",
		address: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Profile Data:", form);
	};

	return (
		<div className="bg-white rounded-2xl border border-secondary shadow-sm p-6 mt-6">

			{/* Avatar */}
			<div className="flex justify-center mb-6">
				<div className="relative h-24 w-24">
					<Image
						src="/images/users/user-avatar.png"
						alt="avatar"
						fill
						className="rounded-full object-cover"
					/>
					<button className="absolute bottom-0 right-2 bg-main text-white w-6 h-6 rounded-full flex items-center justify-center">
						<Plus className="w-3 h-3" />
					</button>
				</div>
			</div>

			<form onSubmit={handleSubmit}>
				<div className="grid md:grid-cols-2 gap-4 text-main">
					{/* Name */}
					<div>
						<label>Name</label>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Enter your name"
							className="w-full ring ring-secondary rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-secondary"
						/>
					</div>

					{/* Phone */}
					<div>
						<label>Phone number</label>
						<input
							type="text"
							name="phone"
							value={form.phone}
							onChange={handleChange}
							placeholder="Enter phone number"
							className="w-full ring ring-secondary rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-secondary"
						/>
					</div>

					{/* DOB */}
					<div>
						<label>Date of birth</label>
						<input
							type="text"
							name="dob"
							value={form.dob}
							onChange={handleChange}
							placeholder="DD/MM/YYYY"
							className="w-full ring ring-secondary rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-secondary"
						/>
					</div>

					{/* Address */}
					<div>
						<label>Address</label>
						<input
							type="text"
							name="address"
							value={form.address}
							onChange={handleChange}
							placeholder="Enter address"
							className="w-full ring ring-secondary rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-secondary"
						/>
					</div>
				</div>

				<div className="flex justify-end gap-4 mt-10">
					<button
						type="button"
						onClick={onCancel}
						className="px-6 py-2 rounded-md border border-main hover:bg-normal"
					>
						Cancel
					</button>

					<button
						type="submit"
						className="bg-main text-white px-6 py-2 rounded-md hover:opacity-90 transition"
					>
						Save Changes
					</button>
				</div>
			</form>
		</div>
	);
}
