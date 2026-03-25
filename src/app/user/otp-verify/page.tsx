"use client";
import { useState } from "react";
import Image from "next/image";

export default function otpVerify() {
	const [otp, setOTP] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle login logic here
		console.log({ otp });
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
					<div className="line w-8 h-2 bg-main rounded-xl"></div>
					<div className="line w-8 h-2 bg-secondary rounded-xl"></div>
					<div className="line w-8 h-2 bg-secondary rounded-xl"></div>
				</div>
			</div>
			<div className="flex ">
				<div className=" max-w-sm mx-auto p-8 bg-white rounded-xl shadow-xl ring-1 ring-black/10 w-300 space-y-2">
					<h1 className="text-4xl font-semibold text-center">Enter OTP</h1>
					<p className="text-center text-sm">
						An OTP has been sent to your email address please verify it below
					</p>
					<form onSubmit={handleSubmit} className="mt-4 text-main">
						<div className="mb-4">
							<div className="flex justify-between gap-2">
								<input
									type="text"
									value={otp}
									placeholder="2"
									onChange={(e) => setOTP(e.target.value)}
									className="w-10  px-3 py-2 border rounded-md  focus:outline-none focus:ring focus:ring-main"
								/>
								<input
									type="text"
									value={otp}
									placeholder="4"
									onChange={(e) => setOTP(e.target.value)}
									className="w-10  px-3 py-2 border rounded-md  focus:outline-none focus:ring focus:ring-main"
								/>
								<input
									type="text"
									value={otp}
									placeholder="6"
									onChange={(e) => setOTP(e.target.value)}
									className="w-10  px-3 py-2 border rounded-md  focus:outline-none focus:ring focus:ring-main"
								/>
								<input
									type="text"
									value={otp}
									onChange={(e) => setOTP(e.target.value)}
									className="w-10  px-3 py-2 border rounded-md  focus:outline-none focus:ring focus:ring-main"
								/>
								<input
									type="text"
									value={otp}
									onChange={(e) => setOTP(e.target.value)}
									className="w-10  px-3 py-2 border rounded-md  focus:outline-none focus:ring focus:ring-main"
								/>
								<input
									type="text"
									value={otp}
									onChange={(e) => setOTP(e.target.value)}
									className="w-10  px-3 py-2 border rounded-md  focus:outline-none focus:ring focus:ring-main"
								/>
							</div>
						</div>

						<button
							type="submit"
							onClick={() => (window.location.href = "new-password")}
							className="w-full bg-main text-white py-3 px-4 rounded-md hover:bg-main/80 focus:outline-none focus:ring focus:ring-main focus:ring-opacity-50 cursor-pointer"
						>
							Verify
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
