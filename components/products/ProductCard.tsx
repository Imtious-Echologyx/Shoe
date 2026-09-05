
import Link from "next/link"
import { Product } from "@/data/products"
export default function ProductCard({ p }:{ p: Product }){
  return (
    <Link href={`/products/${p.slug}`} className="group border border-black/5 rounded-[20px] overflow-hidden bg-white hover:shadow-xl transition-all">
      <div className="aspect-[4/3] overflow-hidden bg-[#F5F2ED]">
        <img src={p.images[0]} alt={`${p.name} - ${p.code} - EastBengal Footwear`} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div><div className="text-[11px] tracking-widest text-black/40">{p.code} • {p.category}</div><div className="font-semibold mt-1">{p.name}</div></div>
          <span className="text-[10px] border rounded-full px-2 py-1">MOQ {p.moq}</span>
        </div>
        <p className="mt-3 text-[13px] text-black/60 line-clamp-2">{p.description}</p>
        <div className="mt-4 flex gap-2 text-[11px]"><span className="bg-black/5 px-2 py-1 rounded-full">{p.upper}</span><span className="bg-black/5 px-2 py-1 rounded-full">{p.outsole}</span></div>
      </div>
    </Link>
  )
}
