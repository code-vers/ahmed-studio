import Link from "next/link";

export default function Navigation() {
	return (
		<nav className="hidden lg:flex space-x-6 text-black/50 text-lg">
			{[
				{ name: "Home", goTo: "/", active: true },
				{ name: "About Us", goTo: "about-us" },
				{ name: "Order", goTo: "#" },
				{ name: "Consultant", goTo: "#" },
				{ name: "Cloud Storage", goTo: "#" },
				{ name: "Subscription", goTo: "#" },
				{ name: "Our Lab", goTo: "our-lab" },
			].map((item) => (
				<Link
					key={item.name}
					href={item.goTo}
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
