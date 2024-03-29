export function Loading() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="h-8 w-8 animate-spin rounded-full border-4 border-t-muted-foreground"
        aria-label="Loading..."
        role="progressbar"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
