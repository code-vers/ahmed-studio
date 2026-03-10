"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ForgotPassword() {
	const [email, setEmail] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle login logic here
		console.log({ email  });
	};

	return (
		<div className="min-h-screen w-full flex items-center justify-center gap-20 p-4">
			<div className="flex flex-col relative -top-20 items-center justify-center">
				<Image
					src="/images/background1.png"
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
                    <div className="line w-10 h-2 bg-secondary rounded-xl"></div>
                    <div className="line w-10 h-2 bg-main rounded-xl"></div>
                    <div className="line w-10 h-2 bg-secondary rounded-xl"></div>
                    <div className="line w-10 h-2 bg-secondary rounded-xl"></div>
                </div>
			</div>
			<div className="flex ">
				<div className=" max-w-sm mx-auto p-8 bg-white rounded-xl shadow-xl ring-1 ring-black/10 w-300 space-y-2">
					<h1 className="text-4xl font-semibold text-center">Forgot Password</h1>
					<p className="text-center text-sm">Enter your email to recover your password</p>
					<form onSubmit={handleSubmit} className="mt-8 text-main">
						<div className="mb-4">
							<label className="block font-medium">Email *</label>
							<input
								type="email"
								placeholder="Enter your mail address..."
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full px-3 py-2 border rounded-md  focus:outline-none focus:ring focus:ring-main"
							/>
						</div>
						
						<button
							type="submit"
							className="w-full bg-main text-white py-3 px-4 rounded-md hover:bg-main/80 focus:outline-none focus:ring focus:ring-main focus:ring-opacity-50 cursor-pointer">
							Continue
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
