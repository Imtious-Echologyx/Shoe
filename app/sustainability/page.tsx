export const metadata = { title: "Sustainability | EastBengal Footwear BD LTD" }

export default function Page() {
  return (
    <div className="bg-[#FDFBF7]">
      <style>{`@keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}.anim{animation:up.6s cubic-bezier(.22,1,.36,1) both}`}</style>

      <div className="mx-auto max-w- px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div className="anim">
            <p className="text- tracking-[0.2em] text-black/40">SUSTAINABILITY • *</p>
            <h1 className="mt-4 text-5xl lg:text-6xl font-bold tracking-tight leading-[0.9]">Responsible<br/>Manufacturing</h1>
            <p className="mt-6 max-w- text- leading-relaxed text-black/60">
              Long-term commitment to people, materials & waste reduction.
            </p>
          </div>
          <div className="anim rounded- overflow-hidden border bg-[#F5F2ED] aspect-[4/3]" style={{animationDelay:"0.08s"}}>
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80&auto=format&fit=crop" alt="Sustainability 4K" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { t:"Low-Waste Cutting", d:"Marker optimization, off-cut reuse for small components, target <5% waste *", img:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80" },
            { t:"Approved Materials", d:"RSL compliant leather, recycled mesh options, water-based adhesives *", img:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80" },
            { t:"People First", d:"Safe workplace, fair wages, training programs — BSCI / SEDEX ready *", img:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" },
          ].map((c,i)=>(
            <div key={c.t} className="rounded- border bg-white overflow-hidden anim" style={{animationDelay:`${i*0.06}s`}}>
              <div className="aspect-[16/10] bg-[#F5F2ED]"><img src={c.img} alt={c.t} className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-6"><h3 className="font-medium">{c.t}</h3><p className="mt-2 text- text-black/60 leading-relaxed">{c.d}</p></div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          <div className="rounded- border bg-white p-8 anim">
            <h3 className="font-semibold">Our Commitments *</h3>
            <div className="mt-6 space-y-4 text- text-black/60">
              <div><span className="font-medium text-black">Energy:</span> LED, daylight, efficient motors — reduce kWh/pair *</div>
              <div><span className="font-medium text-black">Water:</span> Low-water finishing, no hazardous discharge *</div>
              <div><span className="font-medium text-black">Waste:</span> Segregation, recycling, documented disposal *</div>
              <div><span className="font-medium text-black">Packaging:</span> Recycled cartons, soy-ink printing option *</div>
            </div>
          </div>
          <div className="rounded- border bg-white p-8 anim" style={{animationDelay:"0.06s"}}>
            <h3 className="font-semibold">Certifications *</h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {["BSCI *","SEDEX *","WRAP *","ISO 9001 *","ISO 14001 *","REACH *"].map(s=><span key={s} className="border rounded-full px-4 py-2 text- bg-[#FBF9F5]">{s}</span>)}
            </div>
            <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80&auto=format&fit=crop" alt="Cert 4K" className="mt-6 rounded-2xl aspect-[16/9] object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}