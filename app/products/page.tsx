"use client"
import { useState, useMemo } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { products, categories } from "@/data/products"

type SortBy = "featured" | "name" | "code" | "category"

export default function ProductsPage() {
  const [activeCat, setActiveCat] = useState<string>("All")
  const [query, setQuery] = useState("")
  const [sortBy, setSortBy] = useState<SortBy>("featured")

  const filtered = useMemo(() => {
    let list = [...products]

    if (activeCat!== "All") {
      list = list.filter(p => p.category === activeCat)
    }

    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      )
    }

    if (sortBy === "featured") list.sort((a,b) => (b.featured?1:0) - (a.featured?1:0))
    if (sortBy === "name") list.sort((a,b) => a.name.localeCompare(b.name))
    if (sortBy === "code") list.sort((a,b) => a.code.localeCompare(b.code))
    if (sortBy === "category") list.sort((a,b) => a.category.localeCompare(b.category))

    return list
  }, [activeCat, query, sortBy])

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <div className="mx-auto max-w- px-6 py-12 lg:py-16">
        {/* header */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text- tracking-[0.2em] text-black/40">CATALOG •</p>
          <h1 className="mt-3 text-4xl lg:text-6xl font-bold tracking-tight leading-[0.9]">Product Catalog</h1>
        </motion.div>

        {/* controls */}
        <div className="mt-10 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          {/* category tabs */}
          <div className="flex gap-2 flex-wrap">
            {["All",...categories].map(cat => {
              const isActive = activeCat === cat
              const count = cat === "All"? products.length : products.filter(p => p.category === cat).length
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`rounded-full px-5 py-2.5 text- font-medium border transition-all ${
                    isActive
                     ? "bg-black text-white border-black"
                      : "bg-white border-black/10 hover:border-black/20 hover:bg-black/[0.03]"
                  }`}
                >
                  {cat} <span className={`ml-1 text- ${isActive? "text-white/60" : "text-black/30"}`}>{count}</span>
                </button>
              )
            })}
          </div>

          {/* search + sort */}
          <div className="flex gap-3">
            <div className="relative">
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search name, code, category..."
                className="w- lg:w- rounded-full border border-black/10 bg-white px-5 py-2.5 text- outline-none focus:border-black/30 focus:ring-2 focus:ring-black/5 transition-all"
              />
              {query && (
                <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-black/30 hover:text-black text-sm">✕</button>
              )}
            </div>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as SortBy)}
              className="rounded-full border border-black/10 bg-white px-4 py-2.5 text- outline-none"
            >
              <option value="featured">Featured first</option>
              <option value="name">Name A-Z</option>
              <option value="code">Code</option>
              <option value="category">Category</option>
            </select>
          </div>
        </div>

        {/* result meta */}
        <div className="mt-6 flex items-center justify-between text- text-black/40">
          <span>{filtered.length} styles {activeCat!== "All"? `in ${activeCat}` : ""} {query? `for "${query}"` : ""}</span>
          <Link href="/request-a-quote" className="border rounded-full px-4 py-1.5 bg-white hover:bg-black hover:text-white transition-colors text- tracking-wide">Request Bulk Pricing →</Link>
        </div>

        {/* grid */}
        <motion.div
          layout
          className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map(p => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={`/products/${p.slug}`} className="group block rounded- overflow-hidden border border-black/5 bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F2ED]">
                    <img
                      src={p.images[0]}
                      alt={`${p.name} ${p.code} 4K`}
                      className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration- ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-white/90 backdrop-blur rounded-full px-2.5 py-1 text-">{p.code}</span>
                      {p.featured && <span className="bg-black text-white rounded-full px-2.5 py-1 text-">Featured</span>}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between">
                      <span className="bg-white/90 backdrop-blur rounded-full px-3 py-1 text-">{p.category}</span>
                      <span className="bg-white/90 backdrop-blur rounded-full px-3 py-1 text-">MOQ {p.moq}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text- leading-tight">{p.name}</h3>
                    <p className="mt-2 text- text-black/55 line-clamp-2">{p.description}</p>
                    <div className="mt-4 flex gap-2 text-">
                      <span className="bg-black/5 rounded-full px-2.5 py-1">{p.upper}</span>
                      <span className="bg-black/5 rounded-full px-2.5 py-1">{p.outsole}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center border border-dashed rounded- py-20 bg-white">
            <p className="font-medium">No products found</p>
            <p className="mt-2 text-sm text-black/40">Try another category or clear search</p>
            <button onClick={() => { setActiveCat("All"); setQuery("") }} className="mt-4 border rounded-full px-5 py-2 text-sm bg-black text-white">Reset filters</button>
          </div>
        )}

        <p className="mt-12 text-center text- text-black/25">All images are demo 4K from Unsplash — replace at /public/images/products/ • Demo data from /data/products.ts</p>
      </div>
    </div>
  )
}