import Link from "next/link";

export default function SigninSignup() {
	return (
		<div className="flex items-center gap-2 md:gap-5 text-black/50 text-sm md:text-lg">
			<Link
				href="/user/sign-up"
				className="hover:text-black/80 hover:font-semibold whitespace-nowrap"
			>
				Sign UP
			</Link>
			<span className="text-black/20">|</span>
			<Link
				href="/user/sign-in"
				className="hover:text-black/80 hover:font-semibold whitespace-nowrap"
			>
				Login
			</Link>
		</div>
	);
}
