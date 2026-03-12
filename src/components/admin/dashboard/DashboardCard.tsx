import Link from "next/link";
import { cn } from "@/lib/utils";
import type { DashboardCardData } from "@/types";
import { TrendingUp } from "lucide-react";

interface DashboardCardProps {
  data: DashboardCardData;
  onClick?: (cardId: string) => void;
}

export function DashboardCard({ data, onClick }: DashboardCardProps) {
  // For user, membership, media, subscription, storage, profile, cards, use onClick handler to open modal
  if (
    (data.id === "user" ||
      data.id === "storage" ||
      data.id === "membership" ||
      data.id === "media" ||
      data.id === "subscription" ||
      data.id === "profile" ||
      data.id === "cards") &&
    onClick
  ) {
    return (
      <button
        onClick={() => onClick(data.id)}
        className="group block w-full text-left"
      >
        <div
          className={cn(
            "relative rounded-sm ring-2 ring-main p-4 sm:p-5 transition-all",
            "hover:shadow-md hover:border-border/50",

          )}
        >
          {/* Icon */}
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-main">
            <data.icon className="h-6 w-6" />
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold text-foreground">
            {data.title}
          </h3>

          {/* Stats */}
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-2xl font-bold text-foreground">
              {data.count}
            </span>
          </div>
        </div>
      </button>
    );
  }

  // For other cards, use Link
  return (
    <Link href={data.href} className="group block">
      <div
        className={cn(
          "relative rounded-xl p-4 sm:p-5 transition-all bg-white ring ring-main/70",
          "hover:shadow-md hover:ring-main",
        )}
      >
        <div className="flex justify-between ">
          {/* Icon */}
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm bg-main/20">
            <data.icon className="h-6 w-6 text-main" />
          </div>
          <div className="flex items-top gap-1 text-green-500">
            <data.secondaryIcon className="h-5 w-5" />
            <span>+12.5%</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base text-foreground mt-4">
          {data.title}
        </h3>

        {/* Stats */}
        <div className="mt-2 flex items-baseline gap-1.5">
          <span className="text-2xl font-semibold text-main">
            {data.count.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
}
