export default function AuthorsPage() {
  const authors = [
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
  ];

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
                {authors.map((author, idx) => (
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
        </div>
      </div>
    </main>
  );
}
