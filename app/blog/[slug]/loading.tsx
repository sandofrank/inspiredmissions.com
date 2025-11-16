export default function BlogPostLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="h-[300px] md:h-[500px] bg-gray-200 mb-8"></div>

      <div className="page-container py-12">
        {/* Title skeleton */}
        <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>

        {/* Meta skeleton */}
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>

        {/* Content skeleton */}
        <div className="space-y-4 max-w-3xl">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-48 bg-gray-200 rounded my-8"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5"></div>
        </div>
      </div>
    </div>
  )
}
