"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

export default function ProfileCreate() {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState("");
	const [address, setAddress] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle login logic here
		console.log({ name, phone, dateOfBirth, address });
	};

	return (
		<div className="min-h-screen w-full flex items-center justify-center gap-20 p-4">
			<div className="flex flex-col relative -top-20 items-center justify-center">
				<Image
					src="/images/logo-colored.png"
					alt="Logo"
					width={1000}
					height={1000}
					className="h-150 w-150 object-contain"
				/>
				<div className="text-main text-center">
					<p>Collecting Memories</p>
					<p>Creating Moments</p>
				</div>
				<div className="lines flex gap-2 mt-4">
					<div className="line w-8 h-2 bg-secondary rounded-xl"></div>
					<div className="line w-8 h-2 bg-secondary rounded-xl"></div>
					<div className="line w-8 h-2 bg-secondary rounded-xl"></div>
					<div className="line w-8 h-2 bg-secondary rounded-xl"></div>
					<div className="line w-8 h-2 bg-secondary rounded-xl"></div>
					<div className="line w-8 h-2 bg-main rounded-xl"></div>
				</div>
			</div>
			<div className="flex ">
				<div className=" max-w-sm mx-auto p-8 bg-white rounded-xl shadow-xl ring-1 ring-black/10 w-300 space-y-2">
					<h1 className="text-4xl font-semibold text-center">Profile</h1>
					<p className="text-center text-sm">Please set your profile</p>
					<form onSubmit={handleSubmit} className="mt-8 text-main">
						<div className="mb-4 flex justify-center">
							<button className="h-30 w-30 rounded rounded-full bg-gray-300">
								<div className="flex justify-center items-center">
									<Plus className="" size={40} />
								</div>
							</button>
						</div>
						<div className="mb-4">
							<label className="block font-medium">Name *</label>
							<input
								type="text"
								placeholder="Enter your name..."
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="w-full px-3 py-2 border rounded-md  focus:outline-none focus:ring focus:ring-main"
								required
							/>
						</div>
						<div className="mb-4">
							<label className="block font-medium">Phone Number *</label>
							<input
								type="text"
								placeholder="Enter your phone number..."
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className="w-full px-3 py-2 border rounded-md  focus:outline-none focus:ring focus:ring-main"
								required
							/>
						</div>
						<div className="mb-4">
							<label className="block font-medium">Date of Birth *</label>
							<input
								type="date"
								value={dateOfBirth}
								onChange={(e) => setDateOfBirth(e.target.value)}
								className="w-full px-3 py-2 border rounded-md  focus:outline-none focus:ring focus:ring-main"
								required
							/>
						</div>
						<div className="mb-4">
							<label className="block font-medium">Address *</label>
							<textarea
								placeholder="Enter your address..."
								value={address}
								onChange={(e) => setAddress(e.target.value)}
								className="w-full px-3 py-2 border rounded-md  focus:outline-none focus:ring focus:ring-main"
							/>
						</div>

						<button
							type="submit"
							className="w-full bg-main text-white py-3 px-4 rounded-md hover:bg-main/80 focus:outline-none focus:ring focus:ring-main focus:ring-opacity-50 cursor-pointer"
						>
							Continue
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
