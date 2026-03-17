"use client";

import Image from "next/image";
import { Eye } from "lucide-react";
import {
	Table,
	TableHeader,
	TableBody,
	TableHead,
	TableRow,
	TableCell,
} from "@/components/ui/table";
import { useState } from "react";
import { UserTablePagination } from "./MembershipTablePagination";

export default function MembershipStatusTable({ memberships }: any) {
	const [currentPage, setCurrentPage] = useState(1);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const totalPages = 50;


	return (
		<>
			<h2 className="text-3xl font-normal pb-2">Membership Status</h2>
			<div className="bg-white rounded-lg border border-[#caa57b] p-6">
				<Table>
					{/* Header */}
					<TableHeader>
						<TableRow className="py-2 ">
							<TableHead className="">User Name</TableHead>
							<TableHead className="">Membership Type</TableHead>
							<TableHead className="">Phone Number</TableHead>
							<TableHead className="">Date</TableHead>
							<TableHead className="w-[10%] text-center">Action</TableHead>
						</TableRow>
					</TableHeader>

					{/* Body */}
					<TableBody>
						{memberships.map((item: any) => (
							<TableRow key={item.id} className="border-0 py-2">
								{/* User */}
								<TableCell>
									<div className="flex items-center gap-3">
										<Image
											src={item.avatar}
											alt={item.name}
											width={36}
											height={36}
											className="rounded-full object-cover"
										/>
										<span className="text-sm font-medium text-gray-800">
											{item.name}
										</span>
									</div>
								</TableCell>

								{/* Membership Types */}
								<TableCell className="text-sm text-gray-600">
									{item.membershipType}
								</TableCell>

								{/* Phone Number */}
								<TableCell className="text-sm text-gray-600">
									{item.phone}
								</TableCell>

								{/* Date */}
								<TableCell className="text-sm text-gray-600">
									{item.date}
								</TableCell>

								{/* Actions */}
								<TableCell>
									<div className="flex justify-end items-center gap-2">
										<button className="text-xs bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600">
											Remove
										</button>

										<button className="p-1 hover:bg-gray-200 rounded">
											<Eye size={16} />
										</button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>

			<UserTablePagination
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
		</>
	);
}
