import DetailsCard from "@/components/user/dashboard/DetailsCard";
import UserLayout from "@/components/user/layout/UserLayout";
import CategoryNav from "@/components/user/subscription/CategoryNav";

export default function ShowDetailsPage(){
    return (
        <UserLayout>
            <CategoryNav/>
            <DetailsCard/>
        </UserLayout>
    );
}