import { categories, resources, roadmap } from "@/data/resources";

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
    >
      <path
        d="M1 13L13 1M13 1H4M13 1V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-card-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-mono text-sm tracking-tight">
            design/engineering
          </span>
          <div className="flex gap-6 text-sm text-muted">
            <a href="#resources" className="hover:text-foreground transition">
              Resources
            </a>
            <a href="#roadmap" className="hover:text-foreground transition">
              Roadmap
            </a>
            <a
              href="/playground"
              className="text-accent hover:text-accent-light transition font-medium"
            >
              Playground
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent font-mono text-sm mb-4 tracking-wider uppercase">
            Curated Collection
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] max-w-3xl">
            Design
            <br />
            Engineering
          </h1>
          <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
            A curated set of resources, tools, and a roadmap for the people who
            live at the intersection of design and code.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="px-6 pb-32 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          {categories.map((cat) => {
            const items = resources.filter((r) => r.category === cat.name);
            if (items.length === 0) return null;
            return (
              <div key={cat.name} className="mb-16">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-xs text-accent">
                    {cat.emoji}
                  </span>
                  <h2 className="text-xl font-semibold tracking-tight">
                    {cat.name}
                  </h2>
                </div>
                <p className="text-sm text-muted mb-6">{cat.description}</p>
                <div className="grid gap-3">
                  {items.map((resource) => (
                    <a
                      key={resource.url}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-4 p-5 rounded-lg border border-card-border bg-card-bg hover:border-accent/40 hover:bg-card-bg/80 transition-all"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-[15px] truncate">
                            {resource.title}
                          </h3>
                          <ArrowIcon />
                        </div>
                        <p className="text-sm text-muted leading-relaxed">
                          {resource.description}
                        </p>
                        {resource.author && (
                          <p className="text-xs text-muted/60 mt-2 font-mono">
                            by {resource.author}
                          </p>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="px-6 pb-32 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent font-mono text-sm mb-4 tracking-wider uppercase">
            The Path
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Roadmap
          </h2>
          <p className="text-muted mb-16 max-w-xl">
            A suggested learning path from fundamentals to mastery. Not
            linear — explore what excites you.
          </p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-card-border" />

            <div className="space-y-12">
              {roadmap.map((phase, i) => (
                <div key={phase.phase} className="relative pl-14">
                  {/* Dot */}
                  <div
                    className={`absolute left-2.5 top-1 w-[14px] h-[14px] rounded-full border-2 ${
                      i === 0
                        ? "border-accent bg-accent"
                        : "border-card-border bg-background"
                    }`}
                  />

                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-mono text-xs text-accent">
                        {phase.number}
                      </span>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {phase.phase}
                      </h3>
                    </div>
                    <p className="text-sm text-muted mb-4 leading-relaxed">
                      {phase.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {phase.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1.5 rounded-full border border-card-border bg-card-bg text-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA to Playground */}
          <div className="mt-16 p-8 rounded-lg border border-accent/20 bg-accent/5 text-center">
            <h3 className="text-xl font-semibold mb-2">
              Ready to start building?
            </h3>
            <p className="text-sm text-muted mb-6 max-w-md mx-auto">
              36 hands-on exercises with a live code editor. Practice each skill
              from the roadmap and track your progress.
            </p>
            <a
              href="/playground"
              className="inline-block px-6 py-3 rounded-lg bg-accent hover:bg-accent-light text-white font-medium text-sm transition"
            >
              Open Playground
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-card-border px-6 py-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-sm text-muted">
          <span className="font-mono text-xs">design/engineering</span>
          <span>Curated with care</span>
        </div>
      </footer>
    </main>
  );
}
