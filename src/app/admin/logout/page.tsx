// import LogoutCard from "@/components/LogoutCard";

import { MainLayout } from "@/components/admin/layout";
import LogoutConfirmationCard from "@/components/admin/logout/LogoutConfirmationCard";

// export default function LogoutPage() {
// 	return (
// 		<div className="p-6 bg-[#E8DCD0] min-h-screen">
// 			<div className="max-w-3xl mx-auto">
// 				<LogoutCard
// 					onConfirm={() => console.log("Logging out...")}
// 					onCancel={() => console.log("Cancelled")}
// 				/>
// 			</div>
// 		</div>
// 	);
// }

export default function LogoutConfirmation(){
    return (
        <MainLayout>
            <LogoutConfirmationCard/>
        </MainLayout>
    );
}