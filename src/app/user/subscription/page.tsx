import UserLayout from "@/components/user/layout/UserLayout";
import CategoryNav from "@/components/user/subscription/CategoryNav";
import SubscriptionPlan from "@/components/user/subscription/Subscription";

export default function SubscriptionPage(){
    return (
        <UserLayout>
            <CategoryNav/>
            <SubscriptionPlan />
        </UserLayout>
    );
}