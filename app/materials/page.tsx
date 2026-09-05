export const metadata = { title: "Materials | EastBengal Footwear BD LTD" }

export default function Page() {
  return (
    <div className="bg-[#FDFBF7]">
      <style>{`@keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}.anim{animation:up.6s cubic-bezier(.22,1,.36,1) both}`}</style>

      <div className="mx-auto max-w- px-6 py-16 lg:py-24">
        <div className="anim max-w-">
          <p className="text- tracking-[0.2em] text-black/40">MATERIALS • RSL COMPLIANT • EDITABLE</p>
          <h1 className="mt-4 text-5xl lg:text-6xl font-bold tracking-tight leading-[0.9]">Material<br/>Library</h1>
          <p className="mt-6 text- leading-relaxed text-black/60">Approved suppliers, REACH/RSL tested *, replace with real swatches at /public/images/materials/.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t:"Cow Leather", d:"Full grain, suede, nubuck — 1.2-1.6mm, LWG certified *", img:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80" },
            { t:"Mesh & Knit", d:"Flyknit, sandwich mesh, recycled PET knit — breathable", img:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80" },
            { t:"Canvas & Textile", d:"10oz canvas, cotton twill, denim — sustainable options *", img:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80" },
            { t:"Synthetic PU", d:"Microfiber, PU leather — vegan options, easy clean", img:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80" },
            { t:"Outsole Compounds", d:"TPR, TR, PU, EVA, rubber — hardness 55-85 Shore A *", img:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80" },
            { t:"Foam & Insole", d:"MD, EVA, Ortholite, memory foam — comfort grading", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" },
            { t:"Laces & Trims", d:"Waxed, flat, round, reflective — metal eyelets, D-rings", img:"https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&q=80" },
            { t:"Adhesives", d:"Water-based PU, latex-free — low VOC, REACH compliant *", img:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" },
          ].map((m,i)=>(
            <div key={m.t} className="rounded- border bg-white overflow-hidden anim" style={{animationDelay:`${i*0.04}s`}}>
              <div className="aspect-square bg-[#F5F2ED]"><img src={m.img} alt={m.t} className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5">
                <h3 className="font-medium text-">{m.t}</h3>
                <p className="mt-2 text- text-black/55 leading-relaxed">{m.d}</p>
                <div className="mt-3 text- text-black/30">EDITABLE — /public/images/materials/</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}