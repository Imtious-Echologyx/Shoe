export const metadata = { title: "Factory | EastBengal Footwear BD LTD" }

export default function Page() {
  return (
    <div className="bg-[#FDFBF7]">
      <style>{`@keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}.anim{animation:up.6s cubic-bezier(.22,1,.36,1) both}`}</style>

      <div className="mx-auto max-w- px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div className="anim">
            <p className="text- tracking-[0.2em] text-black/40">FACTORY • COMILLA EPZ • 50,000 SQFT *</p>
            <h1 className="mt-4 text-5xl lg:text-6xl font-bold tracking-tight leading-[0.9]">Inside<br/>Our Factory</h1>
            <p className="mt-6 max-w- text- leading-relaxed text-black/60">
              Cutting, stitching, lasting, sole attachment & QC under one roof. 4 lines stitching, 2 assembly.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-">
              {[
                ["50K*","sqft area"],
                ["4+2*","stitching + assembly"],
                ["300K*","pairs/month"],
              ].map(([k,v])=>(
                <div key={k} className="rounded-2xl border bg-white p-4"><div className="text-xl font-bold">{k}</div><div className="mt-1 text- text-black/40">{v}</div></div>
              ))}
            </div>
          </div>
          <div className="anim rounded- overflow-hidden border bg-[#F5F2ED] aspect-[4/3]" style={{animationDelay:"0.08s"}}>
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80" alt="Factory floor 4K" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {[
            { t:"Cutting Section", d:"Auto cutting, die cutting, material saving markers. 10+ machines *", img:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80" },
            { t:"Stitching Section", d:"JUKI sewing, 120+ operators, upper closing precision *", img:"https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600&q=80" },
            { t:"Assembly & Lasting", d:"Toe lasting, heat setting, sole pressing, bonding test *", img:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80" },
            { t:"Finishing", d:"Cleaning, polishing, logo, insole print, branded packing *", img:"https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&q=80" },
            { t:"Quality Control", d:"In-line QC, needle detector, AQL 2.5 final, size audit *", img:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" },
            { t:"Warehouse & Packing", d:"Export cartons, barcode, FOB Chittagong ready *", img:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" },
          ].map((s,i)=>(
            <div key={s.t} className="rounded- border bg-white overflow-hidden anim" style={{animationDelay:`${i*0.05}s`}}>
              <div className="aspect-[16/10] bg-[#F5F2ED]"><img src={s.img} alt={s.t} className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-6"><h3 className="font-medium">{s.t}</h3><p className="mt-2 text- text-black/60 leading-relaxed">{s.d}</p></div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded- border bg-white overflow-hidden anim">
          <div className="px-8 py-4 border-b bg-[#FBF9F5] text- tracking-[0.2em]">MACHINE LIST • *</div>
          <div className="grid md:grid-cols-3 divide-x divide-y md:divide-y-0 divide-black/5 text-">
            <div className="p-8"><div className="font-medium">Cutting</div><ul className="mt-3 list-disc ml-5 text-black/60 space-y-1"><li>Auto cutting x2 *</li><li>Die cutting x6 *</li><li>Skiving x3 *</li></ul></div>
            <div className="p-8"><div className="font-medium">Stitching</div><ul className="mt-3 list-disc ml-5 text-black/60 space-y-1"><li>JUKI single needle x60 *</li><li>Double needle x15 *</li><li>Zigzag x5 *</li></ul></div>
            <div className="p-8"><div className="font-medium">Assembly</div><ul className="mt-3 list-disc ml-5 text-black/60 space-y-1"><li>Toe laster x4 *</li><li>Heel laster x4 *</li><li>Pressing x6 *</li></ul></div>
          </div>
        </div>
      </div>
    </div>
  )
}