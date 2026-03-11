// Custom SVG icon components for sidebar
import MediaLibraryIcon from "@/icons/MediaLibraryIcon";
import MembershipStatusIcon from "@/icons/MembershipStatusIcon";
import SubscriptionPlanIcon from "@/icons/SubscriptioPlanIcon";
import { LayoutDashboard, Settings, Users } from "lucide-react";
import type { NavItem } from "@/types";
import StorageAnalyticsIcon from "@/icons/StorageAnalyticsIcon";

export const SIDEBAR_NAV_ITEMS: NavItem[] = [
  {
    label: "Dashboard Overview",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "User Management",
    href: "/admin/users",
    icon: Users,
  },
  {
    label: "Membership status",
    href: "/admin/membership-status",
    icon: MembershipStatusIcon,
  },
  {
    label: "Media Library",
    href: "/admin/media-library",
    icon: MediaLibraryIcon,
  },
  {
    label: "Subscription Plans",
    href: "/admin/subscription-plans",
    icon: SubscriptionPlanIcon,
  },
  {
    label: "Storage Analytics",
    href: "/admin/storage-analytics",
    icon: StorageAnalyticsIcon,
  },
  {
    label: "Profile Settings",
    href: "/admin/profile-settings",
    icon: Settings,
  },
];
