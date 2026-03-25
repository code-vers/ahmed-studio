

interface LogoutConfirmationProps {
	onCancel: () => void;
	onConfirm: () => void;
}

export default function LogoutConfirmation({
	onCancel,
	onConfirm,
}: LogoutConfirmationProps) {
	return (
		<div className="w-[85%] mx-auto p-6">
			{/* Title */}
			<h2 className="text-3xl font-normal pb-8">Logout</h2>
            
			<div className="border border-[#D94035] rounded-xl px-8 py-8">
				{/* Message */}
				<p className="text-center text-gray-800 text-base mb-6">
					Are you want to log out?
				</p>

				{/* Buttons */}
				<div className="flex gap-4">
					{/* Cancel / Outline button */}
					<button
						onClick={onCancel}
						className="flex-1 py-3 px-6 rounded-md border border-[#D94035] text-[#D94035] bg-white font-medium text-sm hover:bg-[#D94035]/5 transition-colors"
					>
						Cancel
					</button>

					{/* Confirm / Filled button */}
					<button
						onClick={onConfirm}
						className="flex-1 py-3 px-6 rounded-md bg-[#D94035] text-white font-medium text-sm hover:bg-[#C03329] transition-colors"
					>
						Log Out
					</button>
				</div>
			</div>
		</div>
	);
}
