'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function AuthorsPage() {
  const allAuthors = [
    {
      name: "Dr. Maria Santos",
      field: "Computer Science",
      institution: "University of the Philippines",
      papers: 124,
      hIndex: 38,
      citations: 1840,
    },
    {
      name: "Prof. Juan Cruz",
      field: "Environmental Science",
      institution: "De La Salle University",
      papers: 98,
      hIndex: 35,
      citations: 1620,
    },
    {
      name: "Dr. Ana Reyes",
      field: "Marine Biology",
      institution: "Ateneo de Manila University",
      papers: 87,
      hIndex: 32,
      citations: 1420,
    },
    {
      name: "Prof. Carlos Mendoza",
      field: "Physics",
      institution: "University of the Philippines",
      papers: 156,
      hIndex: 44,
      citations: 2340,
    },
    {
      name: "Dr. Patricia Gonzales",
      field: "Engineering",
      institution: "De La Salle University",
      papers: 92,
      hIndex: 31,
      citations: 1250,
    },
    {
      name: "Dr. Roberto Acosta",
      field: "Economics",
      institution: "Polytechnic University of the Philippines",
      papers: 76,
      hIndex: 28,
      citations: 980,
    },
    {
      name: "Dr. Isabelle Fernandez",
      field: "Psychology",
      institution: "University of Santo Tomas",
      papers: 112,
      hIndex: 36,
      citations: 1750,
    },
    {
      name: "Prof. Miguel Santos",
      field: "Literature",
      institution: "Polytechnic University of the Philippines",
      papers: 68,
      hIndex: 25,
      citations: 820,
    },
    {
      name: "Dr. Sofia Reyes",
      field: "Chemistry",
      institution: "Ateneo de Manila University",
      papers: 145,
      hIndex: 40,
      citations: 2100,
    },
    {
      name: "Prof. David Torres",
      field: "Biological Sciences",
      institution: "De La Salle University",
      papers: 103,
      hIndex: 33,
      citations: 1520,
    },
    {
      name: "Dr. Elena Gonzales",
      field: "Medicine",
      institution: "University of the Philippines",
      papers: 178,
      hIndex: 48,
      citations: 2650,
    },
    {
      name: "Prof. Adrian Mercado",
      field: "Law",
      institution: "University of Santo Tomas",
      papers: 54,
      hIndex: 22,
      citations: 680,
    },
  ];

  const ITEMS_PER_PAGE = 6;
  const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);

  const displayedAuthors = allAuthors.slice(0, displayedCount);
  const hasMore = displayedCount < allAuthors.length;

  const handleLoadMore = () => {
    setDisplayedCount((prev) => Math.min(prev + ITEMS_PER_PAGE, allAuthors.length));
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Philippine Authors
            </h1>
            <p className="text-lg text-foreground/70">
              Discover influential researchers and scholars from the Philippines
            </p>
          </div>

          {/* Authors Table */}
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-4 text-left font-semibold text-foreground">
                    Author
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">
                    Field
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">
                    Institution
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-foreground">
                    Papers
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-foreground">
                    H-Index
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-foreground">
                    Citations
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayedAuthors.map((author, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-border hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-foreground group-hover:text-primary">
                          {author.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-foreground/70">
                      {author.field}
                    </td>
                    <td className="px-6 py-4 text-foreground/70">
                      {author.institution}
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-foreground">
                      {author.papers}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded">
                        {author.hIndex}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-semibold rounded">
                        {author.citations}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center mt-8">
              <Button
                onClick={handleLoadMore}
                variant="outline"
                className="px-6 py-2"
              >
                Load More Authors
              </Button>
            </div>
          )}

          {/* Results Summary */}
          <div className="mt-6 text-center text-sm text-foreground/70">
            Showing {displayedCount} of {allAuthors.length} authors
          </div>
        </div>
      </div>
    </main>
  );
}
