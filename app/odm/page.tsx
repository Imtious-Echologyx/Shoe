export const metadata = { title: "ODM Development | EastBengal Footwear BD LTD" }

export default function Page() {
  return (
    <div className="bg-[#FDFBF7]">
      <style>{`@keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}.anim{animation:up.6s cubic-bezier(.22,1,.36,1) both}`}</style>

      <div className="mx-auto max-w- px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div className="anim">
            <p className="text- tracking-[0.2em] text-black/40">ODM • SKETCH TO BULK IN 7-10 DAYS *</p>
            <h1 className="mt-4 text-5xl lg:text-6xl font-bold tracking-tight leading-[0.9]">ODM<br/>Development</h1>
            <p className="mt-6 max-w- text- leading-relaxed text-black/60">
              Share your idea or brief. Our design team handles trend research, last development, pattern, sampling & bulk. You get full design support.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/request-a-quote" className="px-6 py-3 bg-black text-white rounded-full text-">Start ODM →</a>
              <a href="/products" className="px-6 py-3 bg-white border rounded-full text-">Browse Ready Designs</a>
            </div>
          </div>
          <div className="anim rounded- overflow-hidden border bg-[#F5F2ED] aspect-[4/3]" style={{animationDelay:"0.08s"}}>
            <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80&auto=format&fit=crop" alt="ODM design 4K" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-4 gap- bg-black/5 border border-black/5 rounded- overflow-hidden">
          {[
            { n:"01", t:"Brief & Trend", d:"Season, target market, price point, inspiration images.", img:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80" },
            { n:"02", t:"Design & 2D/3D Sketch", d:"Line art, colorways, material board, tech details.", img:"https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600&q=80" },
            { n:"03", t:"Sampling 7-10 Days", d:"Proto, wear-test, costing, FOB quote with breakdown.", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" },
            { n:"04", t:"Bulk & Branding", d:"Your logo, box, tags, private label export ready.", img:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80" },
          ].map((s,i)=>(
            <div key={s.n} className="bg-white p-6 anim" style={{animationDelay:`${i*0.06}s`}}>
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#F5F2ED]"><img src={s.img} alt={s.t} className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="mt-4 text- tracking-widest text-black/30">{s.n}</div>
              <h4 className="mt-1 font-medium">{s.t}</h4>
              <p className="mt-2 text- text-black/55 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="rounded- border bg-white overflow-hidden anim">
            <div className="px-8 py-4 border-b bg-[#FBF9F5] text- tracking-[0.2em]">ODM CAPABILITIES • EDITABLE</div>
            <div className="divide-y divide-black/5 text-">
              {[
                ["Design Support", "2D sketches, colorways, tech-pack creation"],
                ["Development", "Last, pattern, grading, outsole mold *"],
                ["Categories", "Sneakers, loafers, boots, sandals, slides *"],
                ["MOQ", "800-1500 pairs / design / color *"],
                ["Sampling", "7-10 days proto, 2 revisions included *"],
                ["Customization", "Logo, insole, outsole, packaging full custom"],
              ].map(([k,v])=>(
                <div key={k} className="grid grid-cols-[180px_1fr]"><div className="px-8 py-3.5 bg-black/[0.02] font-medium">{k}</div><div className="px-8 py-3.5 text-black/60">{v}</div></div>
              ))}
            </div>
          </div>
          <div className="rounded- border bg-white p-8 anim" style={{animationDelay:"0.08s"}}>
            <h3 className="font-semibold">What You Get in ODM</h3>
            <ul className="mt-4 space-y-3 text- text-black/60 list-disc ml-5">
              <li>Seasonal trend boards & market pricing</li>
              <li>2-3 design options per brief</li>
              <li>Wear-test reports & material cards</li>
              <li>FOB costing with breakdown</li>
            </ul>
            <img src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80&auto=format&fit=crop" alt="ODM 4K" className="mt-6 rounded-2xl aspect-[4/3] object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}