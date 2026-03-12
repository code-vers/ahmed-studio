"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function SignUp() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle login logic here
		console.log({ email, password });
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
				<div className="text-main text-center text-2xl">
					<p>Collecting Memories</p>
					<p>Creating Moments</p>
				</div>
				<div className="lines flex gap-2 mt-4">
					<div className="line w-8 h-2 bg-secondary rounded-xl"></div>
					<div className="line w-8 h-2 bg-main rounded-xl"></div>
					<div className="line w-8 h-2 bg-secondary rounded-xl"></div>
					<div className="line w-8 h-2 bg-secondary rounded-xl"></div>
					<div className="line w-8 h-2 bg-secondary rounded-xl"></div>
					<div className="line w-8 h-2 bg-secondary rounded-xl"></div>
				</div>
			</div>
			<div className="flex ">
				<div className=" max-w-sm mx-auto p-8 bg-white rounded-xl shadow-xl ring-1 ring-black/10 w-300 space-y-2">
					<p className="text-center text-sm">Welcome to Ahmed Studio</p>
					<h1 className="text-2xl font-semibold text-center">
						Create an account
					</h1>
					<form onSubmit={handleSubmit} className="mt-4 text-main">
						<div className="mb-3">
							<label className="block font-medium mb-1">Name *</label>
							<input
								type="text"
								placeholder="Enter your name..."
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="w-full px-3 py-2 border rounded-md  focus:outline-none focus:ring focus:ring-main"
								required
							/>
						</div>
						<div className="mb-3">
							<label className="block font-medium mb-1">Email *</label>
							<input
								type="email"
								placeholder="Enter your mail address..."
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full px-3 py-2 border rounded-md  focus:outline-none focus:ring focus:ring-main"
								required
							/>
						</div>
						<div className="mb-3">
							<label className="block font-medium mb-2">Phone Number *</label>
							<input
								type="text"
								placeholder="Enter your phone number..."
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className="w-full px-3 py-2 border rounded-md  focus:outline-none focus:ring focus:ring-main"
								required
							/>
						</div>
						<div className="mb-3">
							<label className="block font-medium mb-1">Password *</label>
							<div className="relative">
								<input
									type={showPassword ? "text" : "password"}
									placeholder="Enter password..."
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-main"
									required
								/>
								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-main cursor-pointer"
								>
									{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
								</button>
							</div>
						</div>
						<div className="mb-3">
							<label className="block font-medium mb-1">
								Confirm Password *
							</label>
							<div className="relative">
								<input
									type={showConfirmPassword ? "text" : "password"}
									placeholder="Re-enter password..."
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-main"
									required
								/>
								<button
									type="button"
									onClick={() => setShowConfirmPassword(!showConfirmPassword)}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-main cursor-pointer"
								>
									{showConfirmPassword ? (
										<EyeOff size={20} />
									) : (
										<Eye size={20} />
									)}
								</button>
							</div>
						</div>
						<div className="mb-4 text-center text-main flex items-center justify-start">
							<input
								type="checkbox"
								className="mr-2 h-4 w-4 accent-main"
								id="agree"
							/>
							<label htmlFor="agree">I agree to the terms & conditions</label>
						</div>
						<button
							type="submit"
							className="w-full bg-main text-white py-3 px-4 rounded-md hover:bg-main/80 focus:outline-none focus:ring focus:ring-main focus:ring-opacity-50 cursor-pointer"
						>
							Create Account
						</button>
					</form>

					<p className="text-center text-sm mt-6 text-main">
						Already have an account?
						<Link href="sign-in" className="font-bold hover:underline">
							Sign In
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
