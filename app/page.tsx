"use client";

import SearchBar from "@/components/search-bar";
import ResearchCard from "@/components/research-card";
import { useRouter } from "next/navigation";
import { useState } from "react";

const featuredResearch = [
  {
    title: "Machine Learning Applications in Philippine Healthcare Systems",
    description:
      "Exploring the implementation of AI and machine learning models to improve diagnostic accuracy and patient outcomes in underserved Philippine medical institutions.",
    category: "Healthcare",
    authors: ["Dr. Maria Santos", "Prof. Juan Cruz"],
    citationCount: 87,
  },
  {
    title: "Climate Change Impact on Philippine Agricultural Productivity",
    description:
      "A comprehensive study on how rising temperatures and changing rainfall patterns affect crop yields across different Philippine regions and farming communities.",
    category: "Environmental Science",
    authors: ["Dr. Ana Reyes", "Dr. Carlos Mendoza"],
    citationCount: 124,
  },
  {
    title:
      "Digital Transformation in Philippine SMEs: Barriers and Opportunities",
    description:
      "Investigation into the adoption of digital technologies by small and medium enterprises in the Philippines, identifying key challenges and success factors.",
    category: "Business",
    authors: ["Prof. Roberto Acosta", "Dr. Jessica Torres"],
    citationCount: 56,
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSearch = (query: string) => {
    setIsLoading(true);

    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Hero Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Discover Philippine Academic Research
            </h1>
            <p className="text-lg text-foreground/70 text-balance">
              Search millions of academic papers, research projects, and
              scholars from the Philippines.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <SearchBar
              variant="hero"
              onSearch={handleSearch}
              isLoading={isLoading}
            />
          </div>
        </div>
      </section>

      {/* Featured Research Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Featured Research Today
            </h2>
          </div>

          {/* Research Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResearch.map((research, idx) => (
              <div
                key={idx}
                onClick={() => handleSearch(research.title)}
                className="cursor-pointer"
              >
                <ResearchCard {...research} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
