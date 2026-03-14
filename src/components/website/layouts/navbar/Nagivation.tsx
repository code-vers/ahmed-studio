import Link from "next/link";

export default function Navigation() {
	return (
		<nav className="hidden lg:flex space-x-6 text-black/50 text-lg">
			{[
				{ name: "Home", active: true },
				{ name: "About Us" },
				{ name: "Order" },
				{ name: "Consultant" },
				{ name: "Cloud Storage" },
				{ name: "Subscription" },
				{ name: "Our Lab" },
			].map((item) => (
				<Link
					key={item.name}
					href="#"
					className={`
                            relative inline-flex flex-col items-center justify-center
                            transition-colors duration-300
                            ${item.active ? "text-main font-bold" : "hover:text-main"}
                            group
                        `}
				>
					<span className="group-hover:font-bold transition-all">
						{item.name}
					</span>
					<span
						className="invisible block h-0 overflow-hidden font-bold"
						aria-hidden="true"
					>
						{item.name}
					</span>
				</Link>
			))}
		</nav>
	);
}
