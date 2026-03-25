"use client";

import ProfileSettings from "@/components/user/edit-profile/ProfileSetting";
import UserLayout from "@/components/user/layout/UserLayout";

export default function EditProfilePage() {
	return (
		<UserLayout pageTitle="Profile Settings">
			 <ProfileSettings />
		</UserLayout>
	);
}
