"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface UserTablePaginationProps {
	currentPage: number;
	totalPages: number;
	rowsPerPage: number;
	totalRecords: number;
	rowsPerPageOptions: number[];
	onPageChange: (page: number) => void;
	onRowsPerPageChange: (rows: number) => void;
}

export function UserTablePagination({
	currentPage,
	totalPages,
	rowsPerPage,
	totalRecords,
	rowsPerPageOptions,
	onPageChange,
	onRowsPerPageChange,
}: UserTablePaginationProps) {
	const startRecord =
		totalRecords === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1;
	const endRecord = Math.min(currentPage * rowsPerPage, totalRecords);

	return (
		// <div className="flex items-center justify-between px-6 py-4 border-t border-[#caa57b] bg-white rounded-b-xl">
		<div className="mt-4 flex items-center justify-between rounded-lg bg-white px-4 py-3 border">
			{/* Left */}
			<p className="text-sm text-gray-600">
				Showing <span className="font-medium text-black">{startRecord}</span> to{" "}
				<span className="font-medium text-black">{endRecord}</span> of{" "}
				<span className="font-medium text-black">{totalRecords}</span> results
			</p>

			{/* Right */}
			<div className="flex items-center gap-5">
				{/* Rows per page */}
				<div className="flex items-center gap-2 text-sm text-gray-600">
					<select
						value={rowsPerPage}
						onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
						className="border border-[#caa57b] h-7 px-2 py-1 rounded-xs text-sm outline-none "
					>
						{rowsPerPageOptions.map((opt) => (
							<option key={opt} value={opt}>
								{opt}
							</option>
						))}
					</select>
				</div>

				{/* Pagination */}
				<div className="flex items-center gap-2">
					{/* Prev */}
					<button
						onClick={() => onPageChange(currentPage - 1)}
						disabled={currentPage <= 1}
						className="flex h-7 w-7 items-center justify-center rounded-xs border border-[#caa57b]  text-main hover:bg-[#F3E2C7] disabled:opacity-40"
					>
						<ChevronLeft size={18} />
					</button>

					{/* Page Number */}
					<div className="px-3 py-1 bg-main text-white text-sm font-medium rounded-xs border  hover:bg-[#F3E2C7] hover:text-main hover: border-main">
						{currentPage}
					</div>
					<div className="px-3 py-1  bg-white  text-sm font-medium rounded-xs border border-[#caa57b] hover:bg-[#F3E2C7]  text-main">
						...
					</div>
					<div className="px-3 py-1  bg-white text-sm font-medium rounded-xs border border-[#caa57b] hover:bg-[#F3E2C7] text-main">
						{totalPages}
					</div>

					{/* Next */}
					<button
						onClick={() => onPageChange(currentPage + 1)}
						disabled={currentPage >= totalPages}
						className="flex h-7 w-7 items-center justify-center rounded-xs border border-[#caa57b]  text-main hover:bg-[#F3E2C7] disabled:opacity-40"
					>
						<ChevronRight size={18} />
					</button>
				</div>
			</div>
		</div>
	);
}
