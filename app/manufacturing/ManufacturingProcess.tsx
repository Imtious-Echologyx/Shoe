"use client"
import { motion } from "framer-motion"

const steps = [
  { id: "01", name: "Material Sourcing", img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80" },
  { id: "02", name: "Cutting", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80" },
  { id: "03", name: "Stitching", img: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=80" },
  { id: "04", name: "Assembly", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80" },
  { id: "05", name: "Lasting", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80" },
  { id: "06", name: "Sole Attachment", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80" },
  { id: "07", name: "Finishing", img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=800&q=80" },
  { id: "08", name: "QC", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
  { id: "09", name: "Packaging", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80" },
  { id: "10", name: "Shipment", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" },
]

export default function ManufacturingProcess() {
  return (
    <section className="bg-white border-y py-24">
      <div className="mx-auto max-w- px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-baseline justify-between"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Manufacturing Process</h2>
          <span className="text- tracking-widest text-black/30">10 STEPS</span>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap- bg-black/5 border border-black/5 rounded- overflow-hidden">
          {steps.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
              className="group bg-white p-5 lg:p-7 hover:bg-[#FBF9F5] transition-colors"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F5F2ED]">
                <img
                  src={s.img}
                  alt={`${s.name} 4K`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="text- text-black/30">{s.id}</span>
                <div className="h- w-6 bg-black/10" />
              </div>
              <h3 className="mt-2 font-medium text-">{s.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}