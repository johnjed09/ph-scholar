interface PaperResultCardProps {
  title: string;
  authors: string[];
  abstract: string;
  year: number;
  citations: number;
  hIndex: number;
  institution: string;
}

export default function PaperResultCard({
  title,
  authors,
  abstract,
  year,
  citations,
  hIndex,
  institution,
}: PaperResultCardProps) {
  return (
    <div className="p-6 bg-card border border-border rounded-lg hover:shadow-md hover:border-primary/30 transition-all group">
      <div className="flex items-start justify-between gap-4">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Authors */}
          <div className="mb-3">
            <p className="text-sm text-foreground/70 line-clamp-1">
              {authors.join(", ")}
            </p>
          </div>

          {/* Institution and Year */}
          <div className="flex items-center gap-4 mb-3 text-xs text-foreground/60">
            <span className="bg-muted px-2 py-1 rounded">{institution}</span>
            <span>{year}</span>
          </div>

          {/* Abstract */}
          <p className="text-sm text-foreground/70 line-clamp-2 mb-4">
            {abstract}
          </p>

          {/* Read More Link */}
          <div className="flex items-center text-primary font-medium text-sm group-hover:gap-1 transition-all">
            View Paper
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        {/* Right Sidebar - Metrics */}
        <div className="flex flex-col gap-4 pl-4 border-l border-border/50 min-w-fit">
          {/* Citations Metric */}
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{citations}</div>
            <div className="text-xs text-foreground/60 mt-1">Citations</div>
            <div className="mt-2">
              <svg
                className="w-5 h-5 text-primary/40 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5C6.333 0 0 2.75 0 5c0 1.25 0 2 .5 4h.5c0-1 0-1.5-.5-3 1-1.5 3-1.5 5-1.5 2 0 4 1 4 5v6c0 1-1 2-2 2s-1.5-.5-1.5-2c0-1 .5-3 1.5-4 1-1 2-2 2-4s-1-3-3-3c-2 0-2.5 1-2.5 2-1 1-1 3-1 5s0 4 1 5 3 3 5 3z" />
              </svg>
            </div>
          </div>

          {/* H-Index Metric */}
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">{hIndex}</div>
            <div className="text-xs text-foreground/60 mt-1">H-Index</div>
            <div className="mt-2">
              <svg
                className="w-5 h-5 text-accent/40 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
                <polyline points="13 2 13 9 20 9" />
              </svg>
            </div>
          </div>

          {/* Impact Badge */}
          <div className="text-center">
            <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
              {citations > 50 ? "High" : citations > 20 ? "Med" : "Low"} Impact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
