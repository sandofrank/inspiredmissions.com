export default function BlogLoading() {
  return (
    <div className="page-container py-12">
      <div className="animate-pulse">
        {/* Hero skeleton */}
        <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>

        {/* Title skeleton */}
        <div className="h-10 bg-gray-200 rounded w-3/4 mb-6"></div>

        {/* Grid skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-48 bg-gray-200 rounded-lg"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
