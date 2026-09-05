"use client"
import Link from "next/link"
import { motion } from "framer-motion"

const items = [
  {
    k: "OEM",
    t: "OEM Manufacturing",
    d: "Your tech-pack, our execution at scale. Pattern, grading & strict QC.",
    img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80&auto=format&fit=crop",
    href: "/oem",
    tag: "Your Design"
  },
  {
    k: "ODM",
    t: "ODM Development",
    d: "From sketch to sample to bulk. Sampling in 7-10 days.",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80&auto=format&fit=crop",
    href: "/odm",
    tag: "7-10 Days"
  },
  {
    k: "Private Label",
    t: "Private Label",
    d: "Ready designs with your logo, packaging and branding. Low MOQ.",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop",
    href: "/private-label",
    tag: "Low MOQ"
  },
]

export default function ServicesStrip() {
  return (
    <section className="mx-auto max-w- px-6 py-16 lg:py-20">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text- tracking-[0.2em] text-black/40"
      >
        WHAT WE DO
      </motion.p>

      <div className="mt-8 grid lg:grid-cols-3 gap- bg-black/5 border border-black/5 rounded- overflow-hidden">
        {items.map((s, i) => (
          <motion.div
            key={s.k}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
            className="group bg-white p-7 lg:p-9"
          >
            <div className="flex items-start justify-between">
              <div className="h-10 w-10 rounded-full bg-[#FBF9F5] border grid place-items-center text- font-bold tracking-widest">
                {s.k.slice(0, 2)}
              </div>
              <span className="text- bg-black/5 rounded-full px-3 py-1">{s.tag}</span>
            </div>

            <div className="mt-6 aspect-[16/10] rounded- overflow-hidden bg-[#F5F2ED]">
              <img
                src={s.img}
                alt={`${s.t} 4K - EastBengal Footwear`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>

            <h3 className="mt-6 text- font-semibold tracking-tight">{s.t}</h3>
            <p className="mt-2 text- leading-relaxed text-black/55">{s.d}</p>

            <Link
              href={s.href}
              className="mt-6 inline-flex items-center gap-2 text- tracking-wide border border-black/10 rounded-full px-4 py-2 hover:bg-black hover:text-white transition-colors"
            >
              Learn More <span>→</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}