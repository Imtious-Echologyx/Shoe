
"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
const nav = [
  { href: "/products", label: "Products" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/oem", label: "OEM/ODM" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]
export default function Header(){
  const [open,setOpen]=useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/85 border-b border-black/5">
      <div className="mx-auto max-w-[1400px] px-6 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo.jpg" alt="EastBengal Footwear BD LTD Logo" className="h-11 w-11 rounded-full object-cover border" />
          <div className="leading-none">
            <div className="font-bold text-[15px] tracking-wide text-navy">EASTBENGAL</div>
            <div className="text-[10px] tracking-[0.18em] text-navy/80">FOOTWEAR BD LTD</div>
          </div>
        </Link>
        <nav className="hidden lg:flex gap-7 text-[13px] tracking-wide font-medium">
          {nav.map(n=><Link key={n.href} href={n.href} className="hover:text-gold transition">{n.label}</Link>)}
        </nav>
        <div className="hidden lg:flex gap-3">
          <Link href="/catalog" className="px-4 py-2.5 text-[13px] border border-black/10 rounded-full hover:bg-black hover:text-white transition">Catalog</Link>
          <Link href="/request-a-quote" className="px-5 py-2.5 text-[13px] bg-navy text-white rounded-full hover:bg-black transition">Request a Quote</Link>
        </div>
        <button onClick={()=>setOpen(!open)} className="lg:hidden border px-3 py-2 rounded-full text-sm">Menu</button>
      </div>
      {open && (
        <div className="lg:hidden border-t bg-white px-6 py-6 space-y-4">
          {nav.map(n=><Link key={n.href} href={n.href} onClick={()=>setOpen(false)} className="block py-2">{n.label}</Link>)}
          <Link href="/request-a-quote" className="block text-center bg-navy text-white py-3 rounded-full">Request a Quote</Link>
        </div>
      )}
    </header>
  )
}
