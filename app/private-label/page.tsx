export const metadata = { title: "Private Label | EastBengal Footwear BD LTD" }

export default function Page() {
  return (
    <div className="bg-[#FDFBF7]">
      <style>{`@keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}.anim{animation:up.6s cubic-bezier(.22,1,.36,1) both}`}</style>

      <div className="mx-auto max-w- px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div className="anim">
            <p className="text- tracking-[0.2em] text-black/40">PRIVATE LABEL • YOUR BRAND, OUR FACTORY</p>
            <h1 className="mt-4 text-5xl lg:text-6xl font-bold tracking-tight leading-[0.9]">Private Label<br/>Manufacturing</h1>
            <p className="mt-6 max-w- text- leading-relaxed text-black/60">
              Full branding — logo, insole print, tongue label, hangtags, box, tissue, poly. Low MOQ for startups, scale for enterprise.
            </p>
            <a href="/request-a-quote" className="mt-8 inline-flex px-6 py-3 bg-black text-white rounded-full text-">Start Private Label →</a>
          </div>
          <div className="anim rounded- overflow-hidden border bg-[#F5F2ED] aspect-[4/3]" style={{animationDelay:"0.08s"}}>
            <img src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=1200&q=80&auto=format&fit=crop" alt="Private label 4K" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-4 gap- bg-black/5 border border-black/5 rounded- overflow-hidden">
          {[
            { t:"Logo Application", d:"Emboss, deboss, screen print, woven label, metal badge.", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" },
            { t:"Insole & Lining", d:"Custom insole print, size print, branded lining fabric.", img:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80" },
            { t:"Packaging", d:"Box, tissue, poly, silica, shoe horn, extra lace — full kit.", img:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80" },
            { t:"Hangtags & Labels", d:"Price tag, barcode, QR, care label, RSL compliant.", img:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80" },
          ].map((s,i)=>(
            <div key={s.t} className="bg-white p-6 anim" style={{animationDelay:`${i*0.06}s`}}>
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#F5F2ED]"><img src={s.img} alt={s.t} className="w-full h-full object-cover" loading="lazy" /></div>
              <h4 className="mt-4 font-medium">{s.t}</h4>
              <p className="mt-2 text- text-black/55 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded- border bg-white overflow-hidden anim">
          <div className="px-8 py-4 border-b bg-[#FBF9F5] text- tracking-[0.2em]">PRIVATE LABEL INCLUDES • EDITABLE</div>
          <div className="grid md:grid-cols-2 text-">
            <div className="p-8 space-y-3 text-black/60">
              <div>✓ Logo on upper, heel, outsole</div>
              <div>✓ Branded insole & tongue label</div>
              <div>✓ Custom box with your design</div>
              <div>✓ MOQ 600-1200 pairs / color *</div>
            </div>
            <div className="p-8 space-y-3 text-black/60 bg-black/[0.02]">
              <div>✓ Barcode & price tag integration</div>
              <div>✓ Export carton with shipping marks</div>
              <div>✓ Confidentiality & pattern protection</div>
              <div>✓ Lead time 45-60 days after PPS *</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}