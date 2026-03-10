"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function SignIn() {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
					<div className="line w-8 h-2 bg-main rounded-xl"></div>
					<div className="line w-8 h-2 bg-secondary rounded-xl"></div>
					<div className="line w-8 h-2 bg-secondary rounded-xl"></div>
					<div className="line w-8 h-2 bg-secondary rounded-xl"></div>
					<div className="line w-8 h-2 bg-secondary rounded-xl"></div>
					<div className="line w-8 h-2 bg-secondary rounded-xl"></div>
				</div>
			</div>
			<div className="flex ">
				<div className=" max-w-sm mx-auto p-8 bg-white rounded-xl shadow-xl ring-1 ring-black/10 w-300 space-y-2">
					<h1 className="text-4xl font-semibold text-center">Welcome Back!</h1>
					<p className="text-center text-sm">
						Enter to get unlimited data & information
					</p>
					<form onSubmit={handleSubmit} className="mt-8 text-main">
						<div className="mb-4">
							<label className="block font-medium mb-2">Email *</label>
							<input
								type="email"
								placeholder="Enter your mail address..."
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full px-3 py-2 border rounded-md  focus:outline-none focus:ring focus:ring-main"
								required
							/>
						</div>
						<div className="mb-4">
							<label className="block font-medium mb-2">Password *</label>
							<div className="relative">
								<input
									type={showPassword ? "text" : "password"}
									placeholder="Enter your password..."
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
						<div className="mb-6 text-center text-main flex items-center justify-between">
							<div className="flex justify-start items-center ">
								<input
									type="checkbox"
									className="mr-2 h-5 w-5 accent-main"
									id="remember"
								/>
								<label htmlFor="remember">Remember Me</label>
							</div>
							<Link
								href="forgot-password"
								className="text-main hover:underline"
							>
								Forget Password?
							</Link>
						</div>
						<button
							type="submit"
							className="w-full bg-main text-white py-3 px-4 rounded-md hover:bg-main/80 focus:outline-none focus:ring focus:ring-main focus:ring-opacity-50 cursor-pointer"
						>
							Sign In
						</button>
					</form>
					<div className="flex items-center my-4">
						<div className="flex-grow border-t border-main"></div>
						<span className="mx-4 text-main text-sm">Or Login with</span>
						<div className="flex-grow border-t border-main"></div>
					</div>
					<div className="my-4">
						<button
							type="button"
							className="w-full flex items-center justify-center gap-3 border border-main rounded-md py-2 px-4 text-main hover:bg-main hover:text-white transition"
						>
							<Image
								src="/images/icons/google.png"
								alt="Google"
								width={24}
								height={24}
							/>
							Sign in with Google
						</button>
					</div>

					{/* Don’t have an account? Sign Up */}
					<p className="text-center text-sm mt-6 text-main">
						Don't have an account?{" "}
						<Link href="sign-up" className="font-bold hover:underline">
							Sign Up
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
