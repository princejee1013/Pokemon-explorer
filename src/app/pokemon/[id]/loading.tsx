export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="h-8 w-24 bg-amber-500 rounded animate-pulse mb-8" />

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px] bg-gray-200 rounded animate-pulse" />

          <div>
            <div className="h-12 w-3/4 bg-gray-200 rounded animate-pulse mb-4" />

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="h-8 w-24 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="flex gap-2">
                  <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
                  <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
                </div>
              </div>

              <div>
                <div className="h-8 w-32 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="h-6 w-24 bg-gray-200 rounded animate-pulse mb-1" />
                <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>

            <div className="mb-6">
              <div className="h-8 w-24 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="flex gap-2">
                <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse" />
              </div>
            </div>

            <div>
              <div className="h-8 w-24 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="space-y-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
                    <div className="flex-1 h-4 bg-gray-200 rounded-full mx-2 animate-pulse" />
                    <div className="w-12 h-4 bg-gray-200 rounded animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="h-8 w-24 bg-gray-200 rounded animate-pulse mb-4" />
          <div className="flex flex-wrap gap-2">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 