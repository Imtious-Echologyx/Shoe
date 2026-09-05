"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero(){
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-12 lg:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
      <div>
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="inline-flex items-center gap-2 border rounded-full px-3 py-1 text-[11px] tracking-widest">Estd-2026 • BANGLADESH • 100% EXPORT ORIENTED</motion.div>
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.7}} className="mt-6 text-5xl lg:text-[72px] leading-[0.9] font-bold tracking-tight">Footwear Manufacturing for <span className="text-gold">Global Brands</span></motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="mt-6 text-lg text-black/60 max-w-[560px] leading-relaxed">Bangladesh-based OEM, ODM & Private Label partner for international footwear brands, importers and retailers. Compliance-ready, quality-driven.</motion.p>
        <div className="mt-8 flex gap-3">
          <Link href="/request-a-quote" className="px-7 py-3.5 bg-navy text-white rounded-full text-sm font-medium hover:bg-black transition">Request a Quote</Link>
          <Link href="/products" className="px-7 py-3.5 border border-black/10 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">View Products</Link>
        </div>
        <div className="mt-10 grid grid-cols-4 gap-6 border-t pt-8 max-w-[520px]">
          <div><div className="text-2xl font-bold">15+</div><div className="text-[11px] uppercase tracking-wide text-black/50">Years Exp*</div></div>
          <div><div className="text-2xl font-bold">300K</div><div className="text-[11px] uppercase tracking-wide text-black/50">Pairs/Month*</div></div>
          <div><div className="text-2xl font-bold">25+</div><div className="text-[11px] uppercase tracking-wide text-black/50">Countries*</div></div>
          <div><div className="text-2xl font-bold">12</div><div className="text-[11px] uppercase tracking-wide text-black/50">Lines*</div></div>
        </div>
      </div>
      <div className="relative aspect-[4/3] lg:aspect-[1/1] bg-[#EDE9E2] rounded-[32px] overflow-hidden shadow-2xl">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&q=90&auto=format&fit=crop" alt="Premium footwear 4K - EastBengal Footwear BD LTD" className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-2xl p-4 flex items-center justify-between shadow-lg">
          <div><div className="text-xs text-black/50">Factory Location</div><div className="text-sm font-semibold">Comilla EPZ, Bangladesh - DEMO</div></div>
          <div className="h-10 w-10 rounded-full bg-navy text-white grid place-items-center text-[10px] font-bold">4K</div>
        </div>
      </div>
    </section>
  )
}
