import type { DashboardCardData, UserProfile } from "@/types";
import StorageIcon from "@/icons/StorageIcon";
import { DollarSign, Users } from "lucide-react";
import { TrendingUp } from "lucide-react";
import FilesUploadIcon from "@/icons/FIlesUploadIcon";
export const DASHBOARD_CARDS: DashboardCardData[] = [
  {
    id: "users",
    title: "Total Users",
    count: "12,458",
    icon: Users,
    secondaryIcon: TrendingUp,
    href: "/users",
  },
  {
    id: "storageUsed",
    title: "Total Storage Used",
    count: "8.4 TB",
    icon: StorageIcon,
    secondaryIcon: TrendingUp,
    href: "/storage-used",
  },
  {
    id: "revenue",
    title: "Total Revenue",
    count: "$45,280",
    icon: DollarSign,
    secondaryIcon: TrendingUp,
    href: "/revenue",
  },
  {
    id: "filesUploaded",
    title: "Total Files Uploaded",
    count: "1.2 M",
    icon: FilesUploadIcon,
    secondaryIcon: TrendingUp,
    href: "/files-uploaded",
  },
];

export const DEMO_USER: UserProfile = {
  name: "Robbi Darwis",
  email: "rdarwis@gmail.com",
  avatarUrl: undefined,
};
