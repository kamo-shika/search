import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import SearchForm from '../islands/SearchForm.js'
// import GadgetList from '../components/GadgetList'
// import FilterPanel from '../components/FilterPanel'

export default createRoute((c) => {
  return c.render(
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">ガジェット検索</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* 左サイドバー：フィルターパネル */}
        <div className="md:col-span-1">
          {/* <FilterPanel /> */}
        </div>

        {/* メインコンテンツ */}
        <div className="md:col-span-3">
          <SearchForm />
          {/* <GadgetList /> */}
        </div>
      </div>
    </div>
  )
})

export const POST = createRoute(async (c) => {
  const { searchQuery } = await c.req.parseBody<{ searchQuery: string }>()
  console.log(searchQuery)
  if (!searchQuery) {
    return c.redirect(`/`);
  }
  return c.redirect(`/?searchQuery=${searchQuery}`);
})
