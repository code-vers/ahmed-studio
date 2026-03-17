"use client";

import { Eye, Trash2 } from "lucide-react";
import { SubscriptionPlanPagination } from "./SubscriptionPlanPagination";
import { useState } from "react";

export default function SubscriptionPlanCompoment() {
	const [currentPage, setCurrentPage] = useState(1);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const totalPages = 50;

	// const getStatusClass = (planStatus: string) =>
	// 	planStatus === "Active"
	// 		? "bg-green-100 text-green-600"
	// 		: "bg-red-100 text-red-500";

	return (
		<section className="w-full pb-6">
			{/* Title */}
			<h2 className="text-3xl font-normal pb-4">Subscription Plans</h2>

			{/* ================= FORM ================= */}
			<div className="bg-white border border-[#caa57b] rounded-md p-6 mb-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					{/* Plan Name */}
					<div>
						<label className="text-sm mb-1 text-main font-semibold block">
							Plan Name
						</label>
						<select className="w-full border border-[#caa57b] rounded-md px-3 py-2 outline-none">
							<option>Premium</option>
							<option>Standard</option>
							<option>Trial</option>
						</select>
					</div>

					{/* Price */}
					<div>
						<label className="text-sm mb-1 text-main font-semibold block">
							Price
						</label>
						<input
							type="text"
							placeholder="$29.00"
							className="w-full border border-[#caa57b] rounded-md px-3 py-2 outline-none"
						/>
					</div>

					{/* Billing */}
					<div>
						<label className="text-sm mb-1 text-main font-semibold block">
							Billing Cycle
						</label>
						<input
							type="text"
							placeholder="Yearly"
							className="w-full border border-[#caa57b] rounded-md px-3 py-2 outline-none"
						/>
					</div>

					{/* Title */}
					<div>
						<label className="text-sm mb-1 text-main font-semibold block">
							Title
						</label>
						<input
							type="text"
							placeholder="The complete solution for serious business grant seekers."
							className="w-full border border-[#caa57b] rounded-md px-3 py-2 outline-none"
						/>
					</div>
				</div>

				{/* Package Include */}
				<div className="mt-4">
					<label className="text-sm mb-1 text-main font-semibold block">
						This Package Include
					</label>
					<textarea
						rows={3}
						placeholder="Unlimited grant searches, Unlimited saved grants, Advanced filters & sorting, Personalized recommendations, Deadline reminders"
						className="w-full border border-[#caa57b] rounded-md px-3 py-2 outline-none"
					/>
				</div>

				{/* Actions */}
				<div className="flex justify-end gap-3 mt-5">
					<button className="px-16 py-2 border border-main hover:bg-normal rounded-md">
						Cancel
					</button>
					<button className="px-16 py-2 bg-[#8B5E3C] text-white rounded-md hover:bg-[#6f472d]">
						Save
					</button>
				</div>
			</div>

			{/* ================= TABLE ================= */}
			<div className="bg-white rounded-xs overflow-hidden">
				{/* Header */}
				<div className="grid grid-cols-7 bg-[#E8D6C0] px-4 py-3 text-sm font-medium">
					<span>Plan Name</span>
					<span>Price</span>
					<span>Billing Cycle</span>
					<span>Subscribers</span>
					<span>Date</span>
					<span>Status</span>
					<span className="text-right">Action</span>
				</div>

				{/* Rows */}
				<div className="divide-y">
					{[1, 2, 3, 4, 5, 6].map((i) => (
						<div
							key={i}
							className="grid grid-cols-7 items-center px-4 py-3 text-sm"
						>
							<span>Pro</span>
							<span>$29.00</span>
							<span>Yearly</span>
							<span>120</span>
							<span>Oct 06, 2025</span>

							{/* Status */}
							<span>
								<span className="bg-green-100 text-green-600 px-3 py-1 rounded-md text-xs">
									Active
								</span>
							</span>

                            {/* <span
                                className={`px-3 py-1 rounded-md text-xs ${getStatusClass(
                                    item.status
                                )}`}
                                >
                                {item.status}
                            </span> */}

							{/* Actions */}
							<div className="flex justify-end gap-2">
								<button className="p-1 hover:bg-gray-100 rounded">
									<Eye size={16} />
								</button>
								<button className="p-1 hover:bg-red-100 rounded text-red-500">
									<Trash2 size={16} />
								</button>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* ================= PAGINATION ================= */}
			<SubscriptionPlanPagination
				currentPage={currentPage}
				totalPages={totalPages}
				rowsPerPage={rowsPerPage}
				totalRecords={500}
				rowsPerPageOptions={[10, 20, 50]}
				onPageChange={setCurrentPage}
				onRowsPerPageChange={(rows) => {
					setRowsPerPage(rows);
					setCurrentPage(1);
				}}
			/>
		</section>
	);
}
