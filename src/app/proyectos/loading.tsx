export default function Loading() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="h-8 w-48 animate-pulse rounded bg-muted" />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {[1, 2].map((item) => (
          <div key={item}>
            <div className="h-64 animate-pulse rounded-xl bg-muted" />
            <div className="mt-4 h-6 w-2/3 animate-pulse rounded bg-muted" />
            <div className="mt-3 h-4 w-full animate-pulse rounded bg-muted" />
          </div>
        ))}
      </div>
    </section>
  )
}