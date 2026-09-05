import { products } from "@/data/products"
import Link from "next/link"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const p = products.find(x => x.slug === slug)
  return {
    title: p? `${p.name} | ${p.code} | EastBengal Footwear BD LTD` : "Product",
    description: p?.description,
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const p = products.find(x => x.slug === slug)
  if (!p) return <div className="p-20">Product not found - EDITABLE</div>

  const specs = [
    ["Upper", p.upper],
    ["Lining", p.lining],
    ["Insole", p.insole],
    ["Outsole", p.outsole],
    ["Closure", p.closure],
    ["Sizes", p.sizes?.join(", ")],
    ["Colors", p.colors?.join(", ")],
    ["MOQ", p.moq],
    ["Customization", p.customization? "Yes" : "No"],
    ["Private Label", p.privateLabel? "Yes" : "No"],
  ]

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <style>{`
      .gallery-radio:checked +.gallery-main { display:block; animation: fadeIn.45s cubic-bezier(.22,1,.36,1); }
      .gallery-main { display:none; }
        @keyframes fadeIn { from{opacity:0; transform:scale(1.02)} to{opacity:1; transform:scale(1)} }
      .gallery-radio:checked +.gallery-main +.gallery-thumb-wrap.gallery-thumb { border-color:black; }
      `}</style>

      <div className="mx-auto max-w- px-6 py-10 lg:py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16">

        {/* LEFT - Gallery - NO JS, thumbs clickable */}
        <div>
          <div className="flex items-center gap-2 text- tracking-widest text-black/40">
            <Link href="/products" className="hover:text-black underline-offset-4 hover:underline">← Products</Link>
            <span>/</span><span>{p.category}</span>
          </div>

          <div className="mt-6 relative aspect-square overflow-hidden rounded- bg-[#F5F2ED] border border-black/5">
            {p.images.map((img, i) => (
              <div key={i} className="contents">
                <input
                  type="radio"
                  name={`gallery-${p.id}`}
                  id={`g-${p.id}-${i}`}
                  defaultChecked={i === 0}
                  className="sr-only gallery-radio"
                />
                <div className="gallery-main absolute inset-0">
                  <img src={img} alt={`${p.name} 4K view ${i+1}`} className="h-full w-full object-cover" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur rounded-full px-3 py-1.5 text-">{p.code}</span>
                    <span className="bg-black text-white rounded-full px-3 py-1.5 text-">{p.category}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 text-">{i+1} / {p.images.length} • 4K</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-4 gap-3">
            {p.images.map((img, i) => (
              <label key={i} htmlFor={`g-${p.id}-${i}`} className="gallery-thumb-wrap cursor-pointer group">
                <div className="gallery-thumb aspect-square overflow-hidden rounded-2xl border-2 border-black/5 group-hover:border-black/20 transition-all">
                  <img src={img} alt={`thumb ${i+1}`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              </label>
            ))}
          </div>

        </div>

        {/* RIGHT */}
        <div>
          <div className="animate-[fadeIn_.6s_ease]">
            <div className="text- tracking-[0.2em] text-black/40">{p.code} • {p.category.toUpperCase()}</div>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight leading-[0.9]">{p.name}</h1>
            <p className="mt-4 text- leading-relaxed text-black/60">{p.description}</p>
          </div>

          <div className="mt-8 overflow-hidden rounded- border border-black/5 bg-white">
            <div className="px-6 py-4 border-b bg-[#FBF9F5] flex justify-between">
              <span className="text- tracking-[0.2em]">SPECIFICATIONS</span>
              <span className="text- text-black/30">EDITABLE</span>
            </div>
            <div className="divide-y divide-black/5">
              {specs.map(([k,v]) => (
                <div key={k as string} className="grid grid-cols-[140px_1fr] hover:bg-black/[0.02] transition-colors">
                  <div className="px-6 py-3.5 text- font-medium bg-black/[0.02]">{k}</div>
                  <div className="px-6 py-3.5 text- text-black/70">{v as string || "—"}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <Link href={`/request-a-quote?product=${p.code}`} className="px-7 py-3.5 bg-black text-white rounded-full text- font-medium hover:bg-[#0B2A4A] transition">Request Wholesale Pricing</Link>
            <Link href="/request-a-sample" className="px-7 py-3.5 bg-white border rounded-full text- hover:bg-black hover:text-white transition">Request a Sample</Link>
          </div>

          <div className="mt-12">
            <h3 className="text- tracking-[0.2em] text-black/40">RELATED IN {p.category.toUpperCase()}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {products.filter(x=>x.category===p.category && x.id!==p.id).slice(0,3).map(r=>(
                <Link key={r.id} href={`/products/${r.slug}`} className="flex items-center gap-2 border rounded-full pl-1 pr-3 py-1 bg-white hover:bg-black hover:text-white transition-colors">
                  <img src={r.images[0]} alt={r.name} className="h-6 w-6 rounded-full object-cover" />
                  <span className="text-">{r.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}