"use client";

import { useState } from "react";
import { University } from "../types/university";
import LoadMore from "@/components/loadmore";

// TODO: For deletion when using actual data.
const allUniversities = [
  {
    name: "University of the Philippines",
    location: "Diliman, Quezon City",
    papers: 1284,
    hIndex: 89,
  },
  {
    name: "De La Salle University",
    location: "Taft Avenue, Manila",
    papers: 856,
    hIndex: 72,
  },
  {
    name: "Ateneo de Manila University",
    location: "Loyola Heights, Quezon City",
    papers: 743,
    hIndex: 68,
  },
  {
    name: "Polytechnic University of the Philippines",
    location: "Sta. Mesa, Manila",
    papers: 621,
    hIndex: 54,
  },
  {
    name: "Mindanao State University",
    location: "Iligan City, Lanao del Norte",
    papers: 487,
    hIndex: 45,
  },
  {
    name: "University of Santo Tomas",
    location: "Sampaloc, Manila",
    papers: 598,
    hIndex: 52,
  },
  {
    name: "University of Santo Tomas",
    location: "Sampaloc, Manila",
    papers: 598,
    hIndex: 52,
  },
  {
    name: "University of Santo Tomas",
    location: "Sampaloc, Manila",
    papers: 598,
    hIndex: 52,
  },
  {
    name: "University of Santo Tomas",
    location: "Sampaloc, Manila",
    papers: 598,
    hIndex: 52,
  },
  {
    name: "University of Santo Tomas",
    location: "Sampaloc, Manila",
    papers: 598,
    hIndex: 52,
  },
  {
    name: "University of Santo Tomas",
    location: "Sampaloc, Manila",
    papers: 598,
    hIndex: 52,
  },
];

export default function UniversitiesPage() {
  // TODO: Use actual data
  const ITEMS_PER_PAGE = 6;
  const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);

  const displayedUniversities = allUniversities.slice(
    0,
    displayedCount,
  ) as University[];

  return (
    <main className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Philippine Universities
            </h1>
            <p className="text-lg text-foreground/70">
              Explore academic institutions in the Philippines and their
              research contributions
            </p>
          </div>

          {/* Universities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedUniversities.map((uni, idx) => (
              <div
                key={idx}
                className="p-6 border border-border rounded-lg hover:shadow-md hover:border-primary/30 transition-all group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {uni.name}
                    </h3>
                    <p className="text-sm text-foreground/60 mt-1">
                      {uni.location}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {uni.papers}
                    </div>
                    <div className="text-xs text-foreground/60 mt-1">
                      Papers
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">
                      {uni.hIndex}
                    </div>
                    <div className="text-xs text-foreground/60 mt-1">
                      H-Index
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <LoadMore
            showMessage={`Showing ${displayedCount} of ${allUniversities.length} universities`}
            data={allUniversities}
            setDisplayedCount={setDisplayedCount}
            itemsPerPage={ITEMS_PER_PAGE}
            displayedCount={displayedCount}
          />
        </div>
      </div>
    </main>
  );
}
