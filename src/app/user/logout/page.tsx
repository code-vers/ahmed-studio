"use client";

import UserLayout from "@/components/user/layout/UserLayout";
import LogoutConfirmation from "@/components/user/logout/Logoutconfirmation";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
	const router = useRouter();

	const handleCancel = () => {
		router.back();
	};

	const handleConfirm = () => {
		// Add your logout logic here (clear session, cookies, etc.)
		router.push("sign-in");
	};

	return (
		<UserLayout pageTitle="Log out">
			<LogoutConfirmation onCancel={handleCancel} onConfirm={handleConfirm} />
		</UserLayout>
	);
}
