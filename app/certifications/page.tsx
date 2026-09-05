export const metadata = { title: "Certifications | EastBengal Footwear BD LTD" }

export default function Page() {
  return (
    <div className="bg-[#FDFBF7]">
      <style>{`@keyframes up{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}.anim{animation:up.6s cubic-bezier(.22,1,.36,1) both}`}</style>

      <div className="mx-auto max-w- px-6 py-16 lg:py-24">
        <div className="max-w- anim">
          <p className="text- tracking-[0.2em] text-black/40">CERTIFICATIONS • *</p>
          <h1 className="mt-4 text-5xl lg:text-6xl font-bold tracking-tight leading-[0.9]">Compliance &<br/>Certifications</h1>
          <p className="mt-6 text- leading-relaxed text-black/60">
            We are BSCI / SEDEX / WRAP ready *
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { code:"BSCI *", name:"Business Social Compliance", desc:"Ethical workplace, fair wages, safe conditions. Audit report available.", img:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" },
            { code:"SEDEX *", name:"SMETA 4-Pillar", desc:"Labor, health & safety, environment, business ethics.", img:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80" },
            { code:"WRAP *", name:"Worldwide Responsible", desc:"Gold certification ready for US brands *.", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" },
            { code:"ISO 9001 *", name:"Quality Management", desc:"Documented QMS, SOPs, continuous improvement.", img:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80" },
            { code:"ISO 14001 *", name:"Environmental Management", desc:"Waste segregation, water & energy reduction plan.", img:"https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80" },
            { code:"REACH / RSL *", name:"Material Compliance", desc:"REACH compliant leather, adhesives, restricted substances list.", img:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80" },
          ].map((c,i)=>(
            <div key={c.code} className="rounded- border bg-white overflow-hidden anim" style={{animationDelay:`${i*0.05}s`}}>
              <div className="aspect-[16/10] bg-[#F5F2ED] relative overflow-hidden">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text- font-medium">{c.code}</div>
              </div>
              <div className="p-6">
                <h3 className="font-medium">{c.name}</h3>
                <p className="mt-2 text- text-black/60 leading-relaxed">{c.desc}</p>
                <div className="mt-4 flex gap-2">
                  <span className="text- border rounded-full px-3 py-1.5 bg-[#FBF9F5]">Valid: 2025-2026 *</span>
                  <span className="text- border rounded-full px-3 py-1.5">PDF →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded- border bg-white p-8 anim">
          <h3 className="font-semibold">Lab Tests & RSL *</h3>
          <p className="mt-2 text- text-black/60">Replace with real test reports — bonding, color fastness, formaldehyde, AZO, Chrome VI. Link to PDFs at /public/certs/tests/ — EDITABLE.</p>
          <div className="mt-6 grid md:grid-cols-4 gap-3 text- text-black/60">
            <div className="rounded-xl border p-4 bg-[#FDFBF7]">Bonding Test: ≥ 3.0 N/mm *</div>
            <div className="rounded-xl border p-4 bg-[#FDFBF7]">Color Fastness: 4-5 *</div>
            <div className="rounded-xl border p-4 bg-[#FDFBF7]">Abrasion: DIN  150 *</div>
            <div className="rounded-xl border p-4 bg-[#FDFBF7]">Needle-Free: 100% *</div>
          </div>
        </div>
      </div>
    </div>
  )
}