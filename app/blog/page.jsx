import Navigation from '@/components/Navigation'

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-5xl w-full">
          <h1 className="text-6xl font-bold mb-6">Blog</h1>
          <p className="text-gray-400 text-xl">Blog posts will be displayed here.</p>
        </div>
      </div>
    </>
  )
}
