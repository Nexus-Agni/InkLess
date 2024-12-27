

function SkeletonLoader() {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full space-y-4 p-4'>
        {[...Array(3)].map((_, index) => (
        <div key={index} className="w-full max-w-2xl p-4 border border-gray-300 rounded-lg shadow-md animate-pulse">
            <div className="flex space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                </div>
            </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default SkeletonLoader