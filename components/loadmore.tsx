"use client";

import { Button } from "./ui/button";
import { Author } from "next/dist/lib/metadata/types/metadata-types";
import { University } from "@/app/types/university";

interface LoadMoreProps {
  showMessage: string;
  loadButtonMessage?: string;
  data: Author[] | University[];
  setDisplayedCount: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
  displayedCount: number;
}

export default function LoadMore({
  showMessage,
  loadButtonMessage = "Load More",
  data,
  setDisplayedCount,
  itemsPerPage,
  displayedCount,
}: LoadMoreProps) {
  const hasMore = displayedCount < data.length;
  const handleLoadMore = () => {
    setDisplayedCount((prev) => Math.min(prev + itemsPerPage, data.length));
  };

  return (
    <>
      {hasMore && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={handleLoadMore}
            variant="outline"
            className="px-6 py-2"
          >
            {loadButtonMessage}
          </Button>
        </div>
      )}

      <div className="mt-6 text-center text-sm text-foreground/70">
        {showMessage}
      </div>
    </>
  );
}
