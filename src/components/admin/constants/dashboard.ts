import type { DashboardCardData, UserProfile } from "@/types";
import StorageIcon from "@/icons/StorageIcon";
import TeamIcon from "@/icons/dashboard-home/TeamIcon";
import DcrIcon from "@/icons/dashboard-home/DcrIcon";
import { Users } from "lucide-react";
import { TrendingUp } from "lucide-react";
export const DASHBOARD_CARDS: DashboardCardData[] = [
  {
    id: "users",
    title: "Total Users",
    count: 12458,
    icon: Users,
    secondaryIcon: TrendingUp,
    href: "/users",
  },
  {
    id: "users2",
    title: "Total Users",
    count: 12458,
    icon: Users,
    secondaryIcon: TrendingUp,
    href: "/users",
  },
  // {
  //   id: "storage",
  //   title: "Total Storage Used",
  //   count: 12,
  //   icon: StorageIcon,
  //   secondaryIcon: TrendingUp,
  //   href: "/storage",
  // },
  // {
  //   id: "team-members",
  //   title: "Total Team Members",
  //   count: 8.4,
  //   icon: TeamIcon,
  //   secondaryIcon: TrendingUp,
  //   href: "/team-members",
  // },
  // {
  //   id: "dcr-submission",
  //   title: "DCR Submission",
  //   count: 6,
  //   icon: DcrIcon,
  //   secondaryIcon: TrendingUp,
  //   href: "/dcr-submission",
  // },
];

export const DEMO_USER: UserProfile = {
  name: "Robbi Darwis",
  email: "rdarwis@gmail.com",
  avatarUrl: undefined,
};
