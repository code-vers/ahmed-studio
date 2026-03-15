"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import MultiSelect from "@/components/ui/multi-select";
import { useState } from "react";

interface Props {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

const services = [
	"Video Digitization",
	"Audio Digitization",
	"Film Scanning",
	"Slide/Negative/Photo Scanning",
	"Consulting",
	"Enhancement & Restoration",
];

export default function RequestQuoteDialog({ open, onOpenChange }: Props) {
	const [firstName, setFirstName] = useState("");
	const [middleName, setMiddleName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [city, setCity] = useState("");
	const [address, setAddress] = useState("");
	const [serviceType, setServiceType] = useState<string[]>([]);
	const [message, setMessage] = useState("");

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl h-[85vh] p-0 flex flex-col">
				{/* Header */}
				<DialogHeader className="py-6 px-6 border-b border-gray-300 shrink-0 bg-white">
					<DialogTitle className="text-3xl text-main font-normal">
						Request A Quote
					</DialogTitle>
				</DialogHeader>

				{/* Scrollable Body */}
				<div className="flex-1 overflow-y-auto px-6 py-6">
					<form className="space-y-6">
						{/* Name Fields */}
						<div className="mb-3">
							<label className="block font-normal mb-1">First Name *</label>
							<input
								type="text"
								placeholder="Ahmed..."
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								className="w-full px-3 py-2 border rounded-sm bg-[#F7F8F9] ring ring-[#E3E4E8] focus:outline-none focus:ring focus:ring-main "
								required
							/>
						</div>
						<div className="mb-3">
							<label className="block font-normal mb-1">Middle Name </label>
							<input
								type="text"
								placeholder="Ahmed..."
								value={middleName}
								onChange={(e) => setMiddleName(e.target.value)}
								className="w-full px-3 py-2 border rounded-sm  bg-[#F7F8F9] ring ring-[#E3E4E8] focus:outline-none focus:ring focus:ring-main"
							/>
						</div>
						<div className="mb-3">
							<label className="block font-normal mb-1">Surname </label>
							<input
								type="text"
								placeholder="Ahmed..."
								value={surname}
								onChange={(e) => setSurname(e.target.value)}
								className="w-full px-3 py-2 border rounded-sm  bg-[#F7F8F9] ring ring-[#E3E4E8] focus:outline-none focus:ring focus:ring-main"
							/>
						</div>

						{/* Email */}
						<div className="mb-3">
							<label className="block font-normal mb-1">Email *</label>
							<input
								type="email"
								placeholder="Email..."
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full px-3 py-2 border rounded-sm bg-[#F7F8F9] ring ring-[#E3E4E8] focus:outline-none focus:ring focus:ring-main"
								required
							/>
						</div>

						<div className="grid md:grid-cols-2 gap-2 mb-1">
							{/* Phone Number */}
							<div className="mb-2">
								<label className=" font-normal mb-1">Phone Number *</label>
								<input
									type="text"
									placeholder="+966 50 023 ...."
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									className="w-full px-3 py-2 border rounded-sm  bg-[#F7F8F9] ring ring-[#E3E4E8] focus:outline-none focus:ring focus:ring-main"
									required
								/>
							</div>

							{/* Services */}
							<div className="mb-2">
								<label className="font-normal mb-1">Service Type</label>
								<MultiSelect
									options={services}
									placeholder="Select services"
									onChange={(values) => setServiceType(values)}
                                    className="bg-[#F7F8F9] ring ring-[#E3E4E8]"
								/>
							</div>
						</div>

						{/* Address */}
						<div className="grid md:grid-cols-2 gap-2 mb-1">
							<div className="mb-2">
								<label className=" font-normal mb-1">City</label>
								<input
									type="text"
									placeholder="Jedda..."
									value={city}
									onChange={(e) => setCity(e.target.value)}
									className="w-full px-3 py-2 border rounded-sm  bg-[#F7F8F9] ring ring-[#E3E4E8] focus:outline-none focus:ring focus:ring-main"
									required
								/>
							</div>
							<div className="mb-2">
								<label className=" font-normal mb-1">Address</label>
								<input
									type="text"
									placeholder="Road no - 12, House no - 40."
									value={address}
									onChange={(e) => setAddress(e.target.value)}
									className="w-full px-3 py-2 border rounded-sm  bg-[#F7F8F9] ring ring-[#E3E4E8] focus:outline-none focus:ring focus:ring-main"
									required
								/>
							</div>
						</div>
						{/* Message */}
						<div className="mb-4">
							<label className="block font-normal mb-1">
								Message / Project Details *
							</label>
							<textarea
								placeholder="Write here number of mediums u have and the condition and any information u need to add..."
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								className="w-full h-30 px-3 py-2 border rounded-sm  bg-[#F7F8F9] ring ring-[#E3E4E8] focus:outline-none focus:ring focus:ring-main"
							/>
						</div>
					</form>{" "}
				</div>

				{/* Footer */}
				<div className="border-t border-gray-300 px-6 py-4 flex justify-end shrink-0 bg-white">
					<div className="flex justify-end">
						{/* <Button className="bg-main hover:bg-main/90">Submit Request</Button> */}
						<button
							type="submit"
							className=" bg-main text-white py-2 px-15 rounded-md hover:bg-main/80 focus:outline-none focus:ring focus:ring-main focus:ring-opacity-50 cursor-pointer"
						>
							Submit
						</button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
