"use client";

import { useState } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	PieChart,
	Pie,
	Cell,
	Legend,
} from "recharts";
import { MapPin, Clock, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Data ────────────────────────────────────────────────────────────────────

const revenueData = [
	{ month: "Jan", revenue: 30000 },
	{ month: "Feb", revenue: 32000 },
	{ month: "Mar", revenue: 31500 },
	{ month: "Apr", revenue: 38000 },
	{ month: "May", revenue: 43000 },
	{ month: "Jun", revenue: 47000 },
	{ month: "July", revenue: 52000 },
];

const storageData = [
	{ name: "Photos", value: 50, color: "#F87171" },
	{ name: "Videos", value: 37, color: "#818CF8" },
	{ name: "Audio", value: 10, color: "#34D399" },
	{ name: "Documents", value: 3, color: "#FBBF24" },
];

const recentOrders = [
	{
		id: "ORD-1247",
		name: "Sarah Johnson",
		status: "Processing",
		location: "New York",
		items: "VHS Tapes, Photos",
		line: "Fast Line",
		time: "2 hours ago",
	},
	{
		id: "ORD-1248",
		name: "Marcus Lee",
		status: "Processing",
		location: "Los Angeles",
		items: "VHS Tapes, Photos",
		line: "Fast Line",
		time: "2 hours ago",
	},
	{
		id: "ORD-1249",
		name: "Emily Carter",
		status: "Processing",
		location: "Chicago",
		items: "VHS Tapes, Photos",
		line: "Fast Line",
		time: "2 hours ago",
	},
	{
		id: "ORD-1250",
		name: "James Rivera",
		status: "Processing",
		location: "Austin",
		items: "VHS Tapes, Photos",
		line: "Fast Line",
		time: "2 hours ago",
	},
];

// ─── Custom Tooltip ───────────────────────────────────────────────────────────

function RevenueTooltip({ active, payload, label }: any) {
	if (active && payload && payload.length) {
		return (
			<div className="rounded-lg bg-white shadow-md border border-main/20 px-3 py-2 text-sm">
				<p className="font-semibold text-main">{label}</p>
				<p className="text-foreground">${payload[0].value.toLocaleString()}</p>
			</div>
		);
	}
	return null;
}

// ─── Storage Usage Bar ────────────────────────────────────────────────────────

function StorageUsageBar() {
	const used = 8.4;
	const total = 15;
	const pct = (used / total) * 100;

	return (
		<div className="rounded-xl bg-white ring ring-main/30 p-5">
			<div className="flex items-center justify-between mb-3">
				<h2 className="text-base font-semibold text-foreground">
					System Storage Usage
				</h2>
				<span className="text-sm text-muted-foreground">
					{used} TB / {total} TB
				</span>
			</div>

			{/* Track */}
			<div className="relative h-3 rounded-full bg-main/10 overflow-hidden">
				<div
					className="absolute left-0 top-0 h-full rounded-full bg-main transition-all duration-700"
					style={{ width: `${pct}%` }}
				/>
			</div>

			<p className="mt-2 text-xs text-muted-foreground">
				{pct.toFixed(1)}% of total capacity used
			</p>
		</div>
	);
}

// ─── Revenue Chart ────────────────────────────────────────────────────────────

type Period = "Monthly" | "Weekly" | "Yearly";

function RevenueChart() {
	const [period, setPeriod] = useState<Period>("Monthly");
	const [open, setOpen] = useState(false);

	return (
		<div className="rounded-xl bg-white ring ring-main/30 p-5 flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<h2 className="text-base font-semibold text-foreground">
					Monthly Revenue Growth
				</h2>
				{/* Period dropdown */}
				<div className="relative">
					<button
						onClick={() => setOpen((v) => !v)}
						className="flex items-center gap-1 rounded-md border border-main/30 px-3 py-1 text-sm text-foreground hover:bg-main/5 transition"
					>
						{period}
						<ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
					</button>
					{open && (
						<ul className="absolute right-0 top-full mt-1 z-10 w-28 rounded-md border border-main/20 bg-white shadow-md text-sm">
							{(["Monthly", "Weekly", "Yearly"] as Period[]).map((p) => (
								<li key={p}>
									<button
										onClick={() => {
											setPeriod(p);
											setOpen(false);
										}}
										className={cn(
											"w-full px-3 py-2 text-left hover:bg-main/5 transition",
											p === period && "text-main font-medium",
										)}
									>
										{p}
									</button>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>

			<ResponsiveContainer width="100%" height={220}>
				<LineChart
					data={revenueData}
					margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
				>
					<XAxis
						dataKey="month"
						tick={{ fontSize: 12, fill: "#9ca3af" }}
						axisLine={false}
						tickLine={false}
					/>
					<YAxis
						tick={{ fontSize: 12, fill: "#9ca3af" }}
						axisLine={false}
						tickLine={false}
						tickFormatter={(v) => `${v / 1000}k`}
					/>
					<Tooltip content={<RevenueTooltip />} />
					<Line
						type="monotone"
						dataKey="revenue"
						stroke="var(--color-main, #a0785a)"
						strokeWidth={2}
						dot={{ r: 5, fill: "var(--color-main, #a0785a)", strokeWidth: 0 }}
						activeDot={{ r: 7 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

// ─── Storage Pie Chart ────────────────────────────────────────────────────────

const RADIAN = Math.PI / 180;

function renderCustomLabel({
	cx,
	cy,
	midAngle,
	outerRadius,
	name,
	value,
}: any) {
	const radius = outerRadius + 28;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);
	return (
		<text
			x={x}
			y={y}
			fill="#6b7280"
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline="central"
			fontSize={11}
		>
			{name} {value}%
		</text>
	);
}

function StoragePieChart() {
	return (
		<div className="rounded-xl bg-white ring ring-main/30 p-5 flex flex-col gap-4">
			<h2 className="text-base font-semibold text-foreground">
				Storage Distribution by Media Type
			</h2>

			<ResponsiveContainer width="100%" height={250}>
				<PieChart>
					<Pie
						data={storageData}
						cx="50%"
						cy="50%"
						outerRadius={90}
						dataKey="value"
						labelLine={false}
						label={renderCustomLabel}
					>
						{storageData.map((entry, index) => (
							<Cell key={index} fill={entry.color} />
						))}
					</Pie>
					<Legend
						iconType="circle"
						iconSize={8}
						formatter={(value) => (
							<span className="text-xs text-muted-foreground">{value}</span>
						)}
					/>
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}

// ─── Recent Orders ────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
	const colors: Record<string, string> = {
		Processing: "bg-[#E39451] text-white",
		Completed: "bg-green-100 text-green-600",
		Pending: "bg-yellow-100 text-yellow-600",
		Cancelled: "bg-red-100 text-red-600",
	};
	return (
		<span
			className={cn(
				"inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
				colors[status] ?? "bg-gray-100 text-gray-600",
			)}
		>
			{status}
		</span>
	);
}

function RecentOrders() {
	return (
		<div className="rounded-xl bg-white ring ring-main/30 p-5">
			<h2 className="mb-4 text-base font-semibold text-foreground">
				Recent Orders
			</h2>

			<div className="flex flex-col divide-y divide-main/10">
				{recentOrders.map((order) => (
					<div
						key={order.id}
						className="flex items-center justify-between py-3.5 gap-4 ring ring-secondary rounded-md my-2 p-3"
					>
						{/* Left */}
						<div className="flex flex-col gap-1 min-w-0">
							<div className="flex items-center gap-2 flex-wrap">
								<span className="text-sm font-medium text-foreground">
									{order.name}
								</span>
								<span className="text-xs text-muted-foreground">
									({order.id})
								</span>
								<StatusBadge status={order.status} />
							</div>
							<div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
								<span className="flex items-center gap-1">
									<MapPin className="h-3 w-3" />
									{order.location}
								</span>
								<span>•</span>
								<span>{order.items}</span>
								<span>•</span>
								<span>{order.line}</span>
							</div>
						</div>

						{/* Right */}
						<div className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap shrink-0">
							<Clock className="h-3.5 w-3.5" />
							{order.time}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export function DashboardContent() {
	return (
		<div className="mt-6 flex flex-col gap-5">
			{/* Storage Bar */}
			<StorageUsageBar />

			{/* Charts Row */}
			<div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
				<RevenueChart />
				<StoragePieChart />
			</div>

			{/* Recent Orders */}
			<RecentOrders />
		</div>
	);
}
