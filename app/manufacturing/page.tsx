export const metadata = { title: "Manufacturing | EastBengal Footwear BD LTD" }

const steps = [
  { id: "01", name: "Material Sourcing", desc: "Approved vendor network, lab-tested leather, mesh, TPU, EVA. Color & compliance docs.", img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80&auto=format&fit=crop" },
  { id: "02", name: "Cutting", desc: "Auto & die cutting, material optimization to reduce waste.", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80&auto=format&fit=crop" },
  { id: "03", name: "Stitching", desc: "JUKI lines, skilled operators, upper closing precision.", img: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=80&auto=format&fit=crop" },
  { id: "04", name: "Assembly", desc: "Insole attachment, toe puff & counter setting.", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop" },
  { id: "05", name: "Lasting", desc: "Toe & heel lasting, heat setting for shape retention.", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80&auto=format&fit=crop" },
  { id: "06", name: "Sole Attachment", desc: "Cemented / vulcanized / PU injection, bonding test.", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80&auto=format&fit=crop" },
  { id: "07", name: "Finishing", desc: "Cleaning, polishing, private label & branding.", img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=800&q=80&auto=format&fit=crop" },
  { id: "08", name: "Quality Control", desc: "In-line QC, AQL 2.5, needle detection, size check.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop" },
  { id: "09", name: "Packaging", desc: "Poly, tissue, branded box, export carton with barcode.", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80&auto=format&fit=crop" },
  { id: "10", name: "Shipment", desc: "FOB Chittagong, CIF/DDP, audit & global dispatch.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop" },
]

export default function Page() {
  return (
    <div className="bg-[#FDFBF7]">
      <style>{`
        @keyframes up { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
       .anim{ animation: up.7s cubic-bezier(.22,1,.36,1) both; }
      `}</style>

      {/* Hero */}
      <div className="mx-auto max-w- px-6 pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div className="anim">
            <p className="text- tracking-[0.2em] text-black/40">MANUFACTURING • 100% EXPORT READY</p>
            <h1 className="mt-4 text-5xl lg:text-7xl font-bold tracking-tight leading-[0.9]">
              Built for Scale.<br />Made for Brands.
            </h1>
            <p className="mt-6 max-w- text- leading-relaxed text-black/60">
              10-stage controlled workflow from sourcing to shipment.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-">
              {[
                ["300K*", "pairs / month"],
                ["45+*", "QC inspectors"],
                ["25+*", "countries shipped"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border bg-white p-4">
                  <div className="text-xl font-bold">{k}</div>
                  <div className="mt-1 text- text-black/40">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="anim" style={{ animationDelay: "0.1s" }}>
            <div className="aspect-[4/3] overflow-hidden rounded- border bg-[#F5F2ED]">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&auto=format&fit=crop" alt="Factory floor 4K demo" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80&auto=format&fit=crop" alt="Material 4K" className="rounded-2xl aspect-[4/3] object-cover border" />
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop" alt="Assembly 4K" className="rounded-2xl aspect-[4/3] object-cover border" />
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="mx-auto max-w- px-6 py-16 lg:py-24">
        <div className="flex items-end justify-between anim" style={{ animationDelay: "0.15s" }}>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">10-Stage Process</h2>
          <span className="text- tracking-widest text-black/30">SOURCING → SHIPMENT</span>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap- bg-black/5 border border-black/5 rounded- overflow-hidden">
          {steps.map((s, i) => (
            <div key={s.id} className="bg-white p-5 lg:p-6 group hover:bg-[#FBF9F5] transition-colors anim" style={{ animationDelay: `${0.05 * i}s` }}>
              <div className="aspect-[4/3] overflow-hidden rounded- bg-[#F5F2ED]">
                <img src={s.img} alt={`${s.name} 4K`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="text- tracking-widest text-black/30">{s.id}</span>
                <span className="h- w-6 bg-black/10" />
              </div>
              <h3 className="mt-2 font-medium text-">{s.name}</h3>
              <p className="mt-2 text- leading-relaxed text-black/55">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* QC + Compliance */}
      <div className="mx-auto max-w- px-6 pb-24 grid lg:grid-cols-3 gap-6">
        <div className="rounded- border bg-white p-8 anim">
          <h3 className="font-semibold">Quality Control</h3>
          <ul className="mt-4 space-y-2 text- text-black/60 list-disc ml-5">
            <li>In-line QC at every stage</li>
            <li>Needle detector & metal free</li>
            <li>AQL 2.5 final inspection</li>
            <li>Size, color, bonding tests</li>
          </ul>
        </div>
        <div className="rounded- border bg-white p-8 anim" style={{ animationDelay: "0.08s" }}>
          <h3 className="font-semibold">Compliance *</h3>
          <ul className="mt-4 space-y-2 text- text-black/60 list-disc ml-5">
            <li>BSCI / SEDEX / WRAP ready *</li>
            <li>REACH & RSL compliant materials *</li>
            <li>Documented SOP & traceability *</li>
          </ul>
        </div>
        <div className="rounded- overflow-hidden border bg-[#F5F2ED] anim" style={{ animationDelay: "0.16s" }}>
          <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80&auto=format&fit=crop" alt="QC demo 4K" className="h-full w-full object-cover aspect-[4/3] lg:aspect-auto" />
        </div>
      </div>
    </div>
  )
}