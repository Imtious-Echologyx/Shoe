import { products } from "@/data/products"
import Link from "next/link"

export const metadata = { title: "Catalog | EastBengal Footwear BD LTD" }

type Props = { searchParams?: Promise<{ cat?: string }> }

export default async function Page({ searchParams }: Props) {
  const params = await searchParams
  const activeCat = params?.cat || "All"
  const categories = ["All",...Array.from(new Set(products.map(p => p.category)))]
  const filtered = activeCat === "All"? products : products.filter(p => p.category === activeCat)

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <style>{`@keyframes up{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}.anim{animation:up.5s cubic-bezier(.22,1,.36,1) both}`}</style>
      <div className="mx-auto max-w- px-6 py-16 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 anim">
          <div>
            <p className="text- tracking-[0.2em] text-black/40">CATALOG • {products.length} DESIGNS • 4K DEMO</p>
            <h1 className="mt-4 text-5xl lg:text-6xl font-bold tracking-tight leading-[0.9]">Wholesale<br/>Catalog</h1>
            <p className="mt-4 max-w- text- text-black/60 leading-relaxed">Replace images at /public/images/products/. Data from /data/products.ts — EDITABLE.</p>
          </div>
          <a href="/request-a-quote" className="px-6 py-3 bg-black text-white rounded-full text-">Request Bulk Price →</a>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 anim" style={{animationDelay:"0.06s"}}>
          {categories.map(c => {
            const active = c === activeCat
            return (
              <Link key={c} href={c === "All"? "/catalog" : `/catalog?cat=${encodeURIComponent(c)}`} className={`rounded-full border px-5 py-2.5 text- font-medium transition ${active? "bg-black text-white border-black" : "bg-white hover:bg-black hover:text-white border-black/10"}`}>
                {c} {c!== "All" && <span className="opacity-50">({products.filter(p=>p.category===c).length})</span>}
              </Link>
            )
          })}
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap- bg-black/5 border border-black/5 rounded- overflow-hidden">
          {filtered.map((p,i) => (
            <Link key={p.id} href={`/products/${p.slug}`} className="group bg-white p-4 lg:p-5 anim" style={{animationDelay:`${i*0.03}s`}}>
              <div className="aspect-square overflow-hidden rounded- bg-[#F5F2ED] border border-black/5">
                <img src={p.images[0]} alt={`${p.name} 4K`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="text- tracking-widest text-black/30">{p.code}</span>
                <span className="h- w-4 bg-black/10" />
                <span className="text- tracking-widest text-black/40">{p.category}</span>
              </div>
              <div className="mt-1 font-medium text- leading-tight group-hover:underline underline-offset-4">{p.name}</div>
              <div className="mt-2 text- text-black/50 line-clamp-2 leading-relaxed">{p.description.slice(0,80)}...</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}