"use client";

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const chartData = [
	{ name: "Photos", value: 4500 },
	{ name: "Videos", value: 3000 },
	{ name: "Audios", value: 1500 },
	{ name: "Document", value: 500 },
];

const fileDetails = [
	{
		type: "Photos",
		size: "200 GB",
		count: "847,234",
		avg: "5.00 MB",
		percent: 50,
	},
	{
		type: "Videos",
		size: "4200 GB",
		count: "847,234",
		avg: "1.00 GB",
		percent: 50,
	},
	{
		type: "Audios",
		size: "100 GB",
		count: "847,234",
		avg: "10.00 MB",
		percent: 50,
	},
	{
		type: "Documents",
		size: "420 GB",
		count: "847,234",
		avg: "15.00 MB",
		percent: 50,
	},
];

export default function StorageAnalyticsComponent() {
	return (
		<section className="w-full pb-6">
			{/* Title */}
			<h2 className="text-3xl font-normal pb-4">Storage Analytics</h2>

			{/* ================= CHART ================= */}
			{/* ================= CHART ================= */}
			<div className="mb-6">
				<h3 className="text-sm mb-4">Storage Growth Over Time</h3>

				<div className="w-full h-62.5">
					<ResponsiveContainer>
						<BarChart data={chartData}>
							<XAxis dataKey="name" axisLine={false} tickLine={false} />
							<YAxis axisLine={false} tickLine={false} />
							<Tooltip cursor={{ fill: "transparent" }} />

							<Bar dataKey="value" radius={[6, 6, 0, 0]} fill="#E9A86D" />
						</BarChart>
					</ResponsiveContainer>
				</div>
			</div>

			{/* ================= FILE DETAILS ================= */}
			<div className="bg-white border border-[#caa57b] rounded-xl p-5">
				<h3 className="text-sm mb-4">File Type Details</h3>

				{/* Header */}
				<div className="grid grid-cols-5 text-xs font-medium text-gray-600 pb-2 border-b">
					<span>File Type</span>
					<span>Total Size</span>
					<span>File Count</span>
					<span>Avg File Size</span>
					<span>% of Total</span>
				</div>

				{/* Rows */}
				<div className="divide-y">
					{fileDetails.map((item) => (
						<div
							key={item.type}
							className="grid grid-cols-5 items-center py-3 text-sm"
						>
							{/* File type with dot */}
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-[#8B5E3C] rounded-full"></span>
								{item.type}
							</div>

							<span>{item.size}</span>
							<span>{item.count}</span>
							<span>{item.avg}</span>

							{/* Progress */}
							<div className="flex items-center gap-2">
								<div className="w-full h-1.5 bg-gray-200 rounded-full">
									<div
										className="h-1.5 bg-[#8B5E3C] rounded-full"
										style={{ width: `${item.percent}%` }}
									/>
								</div>
								<span className="text-xs text-gray-500">{item.percent}%</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
