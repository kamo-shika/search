import { useState } from 'hono/jsx'

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <form method="get" className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          name="searchQuery"
          value={searchQuery}
          placeholder="ガジェットを検索..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          検索
        </button>
      </div>
    </form>
  )
}
