import RecentSection from "@/components/user/dashboard/Dashboard";
import UserLayout from "@/components/user/layout/UserLayout";
import CategoryNav from "@/components/user/subscription/CategoryNav";

export default function UserLandingPage(){
    return (
        <UserLayout>
            <CategoryNav/>
            <RecentSection/>
        </UserLayout>
    );
}