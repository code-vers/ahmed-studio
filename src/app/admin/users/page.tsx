import { MainLayout } from "@/components/admin/layout";
// import TablePagination from "@/components/admin/user-management/TablePagination";
import UserManagementTable from "@/components/admin/user-management/UsersTable";
import { USERS } from "@/data/users";


export default function UserManagement() {
    return (
        <MainLayout>
            <UserManagementTable users={USERS} />
            {/* <TablePagination /> */}
        </MainLayout>
    );
}