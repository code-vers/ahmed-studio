import UserLayout from "@/components/user/layout/UserLayout";
import CategoryNav from "@/components/user/subscription/CategoryNav";
import SubscribeForm from "@/components/user/subscription/SubscriptioForm";

export default function BuyPlanPage() {
    return (
        <UserLayout>
            <CategoryNav/>
            <SubscribeForm/>
        </UserLayout>
    );
}