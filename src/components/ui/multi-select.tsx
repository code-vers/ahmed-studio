"use client";

import { useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
	options: string[];
	placeholder?: string;
	onChange?: (values: string[]) => void;
	className?: string;
}

export default function MultiSelect({
	options,
	placeholder = "Select services",
	onChange,
    className
}: Props) {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState<string[]>([]);

	function toggleOption(option: string) {
		let updated;

		if (selected.includes(option)) {
			updated = selected.filter((item) => item !== option);
		} else {
			updated = [...selected, option];
		}

		setSelected(updated);
		onChange?.(updated);
	}

	function removeItem(option: string) {
		const updated = selected.filter((item) => item !== option);
		setSelected(updated);
		onChange?.(updated);
	}

	return (
		<div className={cn("relative w-full", className)}>
			{/* Trigger */}
			<div
				onClick={() => setOpen(!open)}
				className="flex flex-wrap items-center gap-2 border rounded-md p-2 min-h-10.5 cursor-pointer"
			>
				{selected.length === 0 && (
					<span className="text-sm text-muted-foreground">{placeholder}</span>
				)}

				{selected.map((item) => (
					<span
						key={item}
						className="flex items-center gap-1 bg-muted px-2 py-1 rounded text-sm"
					>
						{item}

						<X
							size={14}
							onClick={(e) => {
								e.stopPropagation();
								removeItem(item);
							}}
							className="cursor-pointer"
						/>
					</span>
				))}

				<ChevronDown className="ml-auto h-4 w-4 opacity-60" />
			</div>

			{/* Dropdown */}
			{open && (
				<div className="absolute z-50 mt-2 w-full rounded-md border bg-white shadow-lg">
					<div className="max-h-60 overflow-y-auto">
						{options.map((option) => {
							const active = selected.includes(option);

							return (
								<div
									key={option}
									onClick={() => toggleOption(option)}
									className="flex items-center justify-between px-3 py-2 text-sm hover:bg-muted cursor-pointer"
								>
									{option}

									{active && <Check size={16} />}
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
