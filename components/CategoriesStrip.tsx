"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { products, categories } from "@/data/products"

const images: Record<string, string> = {
  "Men's": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop",
  "Women's": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80&auto=format&fit=crop",
  "Kids": "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&q=80&auto=format&fit=crop",
  "Sports": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80&auto=format&fit=crop",
  "Casual": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80&auto=format&fit=crop",
  "Formal": "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80&auto=format&fit=crop",
  "Safety/Work": "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80&auto=format&fit=crop",
}

export default function CategoriesStrip() {
  return (
    <section className="mx-auto max-w- px-6 py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <h3 className="text- tracking-[0.2em] text-black/40">CATEGORIES</h3>
        <span className="text- text-black/25">{categories.length} categories</span>
      </motion.div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap- bg-black/5 border border-black/5 rounded- overflow-hidden">
        {categories.map((c, i) => {
          const count = products.filter(p => p.category === c).length
          return (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] as any }}
            >
              <Link
                href={`/products?cat=${encodeURIComponent(c)}`}
                className="group block bg-white p-4 lg:p-5 hover:bg-[#FBF9F5] transition-colors h-full"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F5F2ED]">
                  <img
                    src={images[c]}
                    alt={`${c} footwear category 4K - EastBengal`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4">
                  <div className="font-medium text-">{c}</div>
                  <div className="mt-1 text- text-black/40">{count} styles</div>
                </div>
                <div className="mt-3 h- w-0 bg-black group-hover:w-full transition-all duration-500" />
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}