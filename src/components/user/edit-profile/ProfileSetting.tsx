"use client";

import { useState } from "react";
import ProfileCard from "./ProfileCard";
import PasswordCard from "./PasswordCard";
import EditProfileCard from "./EditProfileCard";

export default function ProfileSettings() {
	const [mode, setMode] = useState<"view" | "edit">("view");

	return (
		<section className="w-full pb-6">
			<div className="w-[85%] mx-auto">
				<h2 className="text-3xl font-normal pb-4">Profile Settings</h2>

				{mode === "view" ? (
					<>
						<ProfileCard
							name="Ahmed Mulla"
							email="ahmedmulla@gmail.com"
							onEdit={() => setMode("edit")}
						/>

						<PasswordCard />
					</>
				) : (
					<EditProfileCard onCancel={() => setMode("view")} />
				)}
			</div>
		</section>
	);
}
