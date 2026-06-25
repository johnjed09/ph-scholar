"use client";

import { useSearchParams } from "next/navigation";
import SearchBar from "@/components/search-bar";
import PaperResultCard from "@/components/paper-result-card";
import { Suspense, useEffect, useState } from "react";

// Mock search results data
const mockResults = [
  {
    title:
      "Deep Learning Architectures for Sentiment Analysis in Filipino Social Media",
    authors: ["Dr. Maria Santos", "Prof. Juan Cruz", "Dr. Angela Lee"],
    abstract:
      "This paper presents novel deep learning architectures optimized for analyzing sentiment in Filipino-language social media content, addressing unique linguistic challenges.",
    year: 2024,
    citations: 42,
    hIndex: 28,
    institution: "University of the Philippines",
  },
  {
    title: "Renewable Energy Integration in Philippine Smart Grids",
    authors: ["Eng. Ramon Rodriguez", "Dr. Patricia Gonzales"],
    abstract:
      "A comprehensive framework for integrating renewable energy sources into Philippine electrical grids using advanced IoT and AI-based monitoring systems.",
    year: 2023,
    citations: 68,
    hIndex: 35,
    institution: "De La Salle University",
  },
  {
    title: "Biodiversity Assessment of Philippine Coral Reef Ecosystems",
    authors: ["Dr. Ana Reyes", "Prof. Carlos Mendoza", "Dr. Robert Santos"],
    abstract:
      "Field research documenting species diversity and health metrics of coral reefs across the Philippine archipelago with implications for conservation strategies.",
    year: 2023,
    citations: 156,
    hIndex: 52,
    institution: "Ateneo de Manila University",
  },
  {
    title:
      "Accessibility Design Patterns for Filipino Language Web Applications",
    authors: ["Dr. Jessica Torres"],
    abstract:
      "Exploring accessibility standards and design patterns specifically tailored for Filipino language web applications to ensure inclusive digital experiences.",
    year: 2024,
    citations: 19,
    hIndex: 15,
    institution: "Polytechnic University of the Philippines",
  },
  {
    title:
      "Economic Impact Analysis of Tourism Development in Rural Philippine Communities",
    authors: ["Prof. Roberto Acosta", "Dr. Maria Flores"],
    abstract:
      "Socioeconomic study examining how tourism development affects income distribution, employment, and social structures in rural Philippine communities.",
    year: 2023,
    citations: 34,
    hIndex: 22,
    institution: "Mindanao State University",
  },
  {
    title:
      "Nanotechnology Applications in Philippine Agricultural Soil Enhancement",
    authors: ["Dr. Luis Gonzalez", "Prof. Diana Santos", "Dr. Miguel Reyes"],
    abstract:
      "Investigation of nanomaterial applications to improve soil nutrients and water retention in Philippine agricultural lands for sustainable farming.",
    year: 2024,
    citations: 25,
    hIndex: 18,
    institution: "Philippine Institute of Soil Science",
  },
];

function SearchContent() {
  const [searchResults, setSearchResults] = useState([]);
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [sortBy, setSortBy] = useState<"relevance" | "citations" | "recent">(
    "relevance",
  );
  const [filterType, setFilterType] = useState<
    "all" | "journal" | "conference"
  >("all");

  const handleSearch = (newQuery: string) => {
    const params = new URLSearchParams();
    params.set("q", newQuery);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/search?query=${encodeURIComponent(query)}`,
        );
        const data = await response.json();

        setSearchResults(data.results || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchData();
  }, [query]);

  console.log("Search Results:", searchResults);

  return (
    <main className="min-h-screen bg-background">
      {/* Search Bar Section */}
      <section className="sticky top-16 z-40 bg-card border-b border-border py-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SearchBar
            variant="compact"
            onSearch={handleSearch}
            queryValue={query}
          />
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl py-8">
          {/* Results Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Search Results {query && `for "${query}"`}
            </h1>
            <p className="text-sm text-foreground/70">
              Found{" "}
              <span className="font-semibold text-foreground">
                {mockResults.length}
              </span>{" "}
              papers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Sort Options */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">
                    Sort By
                  </h3>
                  <div className="space-y-2">
                    {(["relevance", "citations", "recent"] as const).map(
                      (option) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="sort"
                            value={option}
                            checked={sortBy === option}
                            onChange={(e) =>
                              setSortBy(e.target.value as typeof sortBy)
                            }
                            className="w-4 h-4 accent-primary"
                          />
                          <span className="text-sm text-foreground/70 capitalize">
                            {option}
                          </span>
                        </label>
                      ),
                    )}
                  </div>
                </div>

                {/* Filter Options */}
                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-3">
                    Paper Type
                  </h3>
                  <div className="space-y-2">
                    {(["all", "journal", "conference"] as const).map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="filter"
                          value={type}
                          checked={filterType === type}
                          onChange={(e) =>
                            setFilterType(e.target.value as typeof filterType)
                          }
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-sm text-foreground/70 capitalize">
                          {type === "all" ? "All Types" : type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Year Range */}
                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-3">Year</h3>
                  <input
                    type="range"
                    min="2000"
                    max="2024"
                    defaultValue="2024"
                    className="w-full accent-primary"
                  />
                  <div className="text-xs text-foreground/60 mt-2">
                    2000 - 2024
                  </div>
                </div>
              </div>
            </aside>

            {/* Results List */}
            <div className="lg:col-span-3 space-y-4">
              {mockResults.length > 0 ? (
                mockResults.map((result, idx) => (
                  <PaperResultCard key={idx} {...result} />
                ))
              ) : (
                <div className="py-12 text-center">
                  <p className="text-foreground/70">
                    No papers found. Try adjusting your search criteria.
                  </p>
                </div>
              )}

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-8 pt-8 border-t border-border">
                <button className="px-3 py-2 border border-border rounded hover:bg-muted transition-colors text-sm">
                  Previous
                </button>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      className={`px-3 py-2 rounded text-sm transition-colors ${
                        page === 1
                          ? "bg-primary text-white"
                          : "border border-border hover:bg-muted"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button className="px-3 py-2 border border-border rounded hover:bg-muted transition-colors text-sm">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <p className="text-muted-foreground">Loading search system...</p>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
