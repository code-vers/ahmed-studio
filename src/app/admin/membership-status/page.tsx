import { MainLayout } from "@/components/admin/layout";
import MembershipStatusTable from "@/components/admin/membership-status/MembershipStatusTable";
import { MEMBERSHIP_STATUS } from "@/data/memberships";


export default function MembershipStatus() {
    return (
        <MainLayout>
            <MembershipStatusTable memberships={MEMBERSHIP_STATUS} />
        </MainLayout>
    );
}