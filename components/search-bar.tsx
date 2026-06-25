"use client";

import { useState } from "react";

interface SearchBarProps {
  variant?: "hero" | "compact";
  onSearch: (searchQuery: string) => void;
  isLoading?: boolean;
  queryValue?: string;
}

export default function SearchBar({
  variant = "hero",
  onSearch,
  isLoading,
  queryValue = "",
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState(queryValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchQuery.trim() === "") return;
    onSearch(searchQuery);
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search academic papers..."
            className="w-full px-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search academic papers, research, and authors..."
          className="w-full px-6 py-4 border border-border rounded-full text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary shadow-sm transition-all"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </div>
    </form>
  );
}
