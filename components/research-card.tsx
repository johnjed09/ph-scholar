interface ResearchCardProps {
  title: string
  description: string
  category: string
  authors: string[]
  citationCount: number
}

export default function ResearchCard({
  title,
  description,
  category,
  authors,
  citationCount,
}: ResearchCardProps) {
  return (
    <div className="p-6 bg-white border border-border rounded-lg hover:shadow-md hover:border-primary/30 transition-all cursor-pointer group">
      {/* Category Badge */}
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
        {description}
      </p>

      {/* Authors */}
      <div className="flex flex-wrap gap-2 mb-4">
        {authors.map((author, idx) => (
          <span
            key={idx}
            className="text-xs text-foreground/60 bg-muted px-2 py-1 rounded"
          >
            {author}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border/50">
        <div className="flex items-center gap-4 text-xs text-foreground/60">
          <span className="flex items-center gap-1">
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            {citationCount} citations
          </span>
        </div>
        <div className="text-primary font-medium group-hover:gap-1 transition-all">
          →
        </div>
      </div>
    </div>
  )
}
