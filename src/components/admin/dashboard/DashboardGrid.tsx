"use client";

import { DashboardCard } from "./DashboardCard";
import { DASHBOARD_CARDS } from "@/components/admin/constants/dashboard";
import { DashboardContent } from "./DashboardContent";

export function DashboardGrid() {

  const handleCardClick = (cardId: string) => {
    console.log(`Card clicked: ${cardId}`);
  };

  return (
    <section>
      {/* <h2 className="mb-4 text-2xl font-semibold">Overview</h2> */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {DASHBOARD_CARDS.map((card) => (
          <DashboardCard key={card.id} data={card} onClick={handleCardClick} />
        ))}
      </div>
      <DashboardContent/>
    </section>
  );
}
