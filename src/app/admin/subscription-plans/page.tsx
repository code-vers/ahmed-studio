import { MainLayout } from "@/components/admin/layout";
import SubscriptionComponent from "@/components/admin/subscription-plans/SubscriptionPlan.component";


export default function SubscriptionPlan(){
    return (
        <MainLayout>
            <SubscriptionComponent/>
        </MainLayout>
    );
}