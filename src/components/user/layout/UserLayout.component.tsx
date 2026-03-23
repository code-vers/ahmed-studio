interface UserLayoutProps {
	children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
	return (
        // @todo: this is temp layout please modify layout
		<main className="w-full max-h-screen bg-normal">
			<div className="w-[85%] mx-auto">{children}</div>
		</main>
	);
}
