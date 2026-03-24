"use client";

type Props = {
	onConfirm?: () => void;
	onCancel?: () => void;
};

export default function LogoutConfirmationCard({ onConfirm, onCancel }: Props) {
	return (
		<section className="w-full pb-6 min-h-screen">
			{/* Title */}
			<h2 className="text-3xl font-normal pb-8">Logout</h2>

			<div className="border border-red-500 rounded-xl p-6 bg-white">
				<p className="text-center text-black/70 mb-15">
					Are you sure you want to logout?
				</p>

				<div className="grid grid-cols-2 gap-4">
					{/* YES BUTTON */}
					<button
						onClick={onConfirm}
						className="border border-red-500 text-red-500 py-3 rounded-lg hover:bg-red-50 transition"
					>
						Yes
					</button>

					{/* CANCEL BUTTON */}
					<button
						onClick={onCancel}
						className="bg-red-500 text-white py-3 rounded-lg hover:opacity-90 transition"
					>
						Cancel
					</button>
				</div>
			</div>
		</section>
	);
}
