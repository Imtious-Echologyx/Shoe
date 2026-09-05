export const metadata = { title: "OEM Manufacturing | EastBengal Footwear BD LTD" }

export default function Page() {
  return (
    <div className="bg-[#FDFBF7]">
      <style>{`@keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}.anim{animation:up.6s cubic-bezier(.22,1,.36,1) both}`}</style>

      <div className="mx-auto max-w- px-6 py-16 lg:py-24">
        {/* Hero */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div className="anim">
            <p className="text- tracking-[0.2em] text-black/40">OEM • YOUR DESIGN, OUR EXECUTION</p>
            <h1 className="mt-4 text-5xl lg:text-6xl font-bold tracking-tight leading-[0.9]">OEM<br/>Manufacturing</h1>
            <p className="mt-6 max-w- text- leading-relaxed text-black/60">
              You provide tech-pack, pattern, BOM. We handle sourcing, sampling, grading, bulk & QC at export scale.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/request-a-quote" className="px-6 py-3 bg-black text-white rounded-full text-">Start OEM Project →</a>
              <a href="/products" className="px-6 py-3 bg-white border rounded-full text-">View Catalog</a>
            </div>
          </div>
          <div className="anim rounded- overflow-hidden border bg-[#F5F2ED] aspect-[4/3]" style={{animationDelay:"0.08s"}}>
            <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80&auto=format&fit=crop" alt="OEM manufacturing 4K" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* What you provide vs we provide */}
        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          <div className="rounded- border bg-white p-8 anim">
            <h3 className="font-semibold">You Provide</h3>
            <ul className="mt-4 space-y-2.5 text- text-black/60 list-disc ml-5">
              <li>Tech-pack / sketch / reference sample</li>
              <li>Materials spec, colors, size set</li>
              <li>Logo, branding, packaging artwork</li>
              <li>Target FOB, compliance needs</li>
            </ul>
          </div>
          <div className="rounded- border bg-white p-8 anim" style={{animationDelay:"0.06s"}}>
            <h3 className="font-semibold">We Execute</h3>
            <ul className="mt-4 space-y-2.5 text- text-black/60 list-disc ml-5">
              <li>Pattern making, grading, costing within 48h</li>
              <li>Sourcing from approved vendor list</li>
              <li>Proto + SMS + PPS — 7-10 days sampling *</li>
              <li>Bulk, in-line QC, AQL 2.5, export packing</li>
            </ul>
          </div>
        </div>

        {/* OEM Workflow */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight anim">OEM Workflow</h2>
          <div className="mt-8 grid lg:grid-cols-4 gap- bg-black/5 border border-black/5 rounded- overflow-hidden">
            {[
              { n:"01", t:"Tech-Pack Review", d:"We review construction, materials, BOM & feasibility.", img:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&auto=format&fit=crop" },
              { n:"02", t:"Pattern & Costing", d:"Pattern + size grading + FOB quote in 48 hours.", img:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80&auto=format&fit=crop" },
              { n:"03", t:"Sampling", d:"Proto / SMS / PPS with your logo & box mockup.", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop" },
              { n:"04", t:"Bulk Production", d:"Cut → Stitch → Last → Sole → Finish → QC → Ship.", img:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80&auto=format&fit=crop" },
            ].map((s,i)=>(
              <div key={s.n} className="bg-white p-6 anim" style={{animationDelay:`${i*0.06}s`}}>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#F5F2ED]">
                  <img src={s.img} alt={`${s.t} 4K`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="mt-4 text- tracking-widest text-black/30">{s.n}</div>
                <h4 className="mt-1 font-medium">{s.t}</h4>
                <p className="mt-2 text- text-black/55 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities table */}
        <div className="mt-16 grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="rounded- border bg-white overflow-hidden anim">
            <div className="px-8 py-4 border-b bg-[#FBF9F5] text- tracking-[0.2em]">OEM CAPABILITIES • EDITABLE</div>
            <div className="divide-y divide-black/5 text-">
              {[
                ["Categories", "Men's, Women's, Kids, Sports, Casual, Formal, Safety *"],
                ["Construction", "Cemented, Strobel, Vulcanized, PU Injection *"],
                ["Upper Materials", "Full-grain leather, suede, mesh, knit, canvas, synthetic *"],
                ["Outsole", "EVA, TPR, Rubber, PU, Phylon *"],
                ["Sizes", "EU 36-46 / US 5-12, grading available"],
                ["MOQ", "600-1200 pairs / style / color *"],
                ["Lead Time", "Sampling 7-10 days, Bulk 45-60 days after PPS *"],
              ].map(([k,v])=>(
                <div key={k} className="grid grid-cols-[180px_1fr]"><div className="px-8 py-3.5 bg-black/[0.02] font-medium">{k}</div><div className="px-8 py-3.5 text-black/60">{v}</div></div>
              ))}
            </div>
          </div>
          <div className="rounded- border bg-white p-8 anim" style={{animationDelay:"0.08s"}}>
            <h3 className="font-semibold">Why OEM with Us</h3>
            <ul className="mt-4 space-y-3 text- text-black/60">
              <li>✓ Strict confidentiality & pattern lock</li>
              <li>✓ Lab tests & RSL compliance on request</li>
              <li>✓ In-line + final QC with photos</li>
              <li>✓ FOB Chittagong / CIF / DDP</li>
            </ul>
            <img src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&q=80&auto=format&fit=crop" alt="OEM demo" className="mt-6 rounded-2xl aspect-[4/3] object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}