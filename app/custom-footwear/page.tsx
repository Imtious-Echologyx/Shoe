export const metadata = { title: "Custom Footwear | EastBengal Footwear BD LTD" }

export default function Page() {
  return (
    <div className="bg-[#FDFBF7]">
      <style>{`@keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}.anim{animation:up.6s cubic-bezier(.22,1,.36,1) both}`}</style>

      <div className="mx-auto max-w- px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div className="anim">
            <p className="text- tracking-[0.2em] text-black/40">CUSTOM FOOTWEAR • BUILT TO SPEC</p>
            <h1 className="mt-4 text-5xl lg:text-6xl font-bold tracking-tight leading-[0.9]">Custom<br/>Footwear</h1>
            <p className="mt-6 max-w- text- leading-relaxed text-black/60">
              Need something not in catalog? Share heel height, last shape, materials, colors. We develop from scratch with full grading & wear test.
            </p>
            <a href="/request-a-quote" className="mt-8 inline-flex px-6 py-3 bg-black text-white rounded-full text-">Build Custom Shoe →</a>
          </div>
          <div className="anim rounded- overflow-hidden border bg-[#F5F2ED] aspect-[4/3]" style={{animationDelay:"0.08s"}}>
            <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=1200&q=80&auto=format&fit=crop" alt="Custom footwear 4K" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { t:"Material Mix", d:"Leather + mesh, knit + TPU, canvas + rubber — any combo *", img:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80" },
            { t:"Last & Fit", d:"Slim, regular, wide, orthopedic lasts, size grading EU 36-46", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" },
            { t:"Color & Finish", d:"Custom Pantone, spray, emboss, laser, foil, 3D print logo", img:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80" },
          ].map((c,i)=>(
            <div key={c.t} className="rounded- border bg-white overflow-hidden anim" style={{animationDelay:`${i*0.06}s`}}>
              <div className="aspect-[16/10] bg-[#F5F2ED]"><img src={c.img} alt={c.t} className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-6"><h3 className="font-medium">{c.t}</h3><p className="mt-2 text- text-black/60 leading-relaxed">{c.d}</p></div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded- border bg-white p-8 lg:p-10 anim">
          <h3 className="font-semibold">How Custom Works</h3>
          <div className="mt-8 grid md:grid-cols-5 gap-4 text-">
            {[
              ["Brief", "Send sketch / ref"],
              ["Material", "Select leather / mesh"],
              ["Sample", "7-10 days proto *"],
              ["Wear Test", "Fit + bonding"],
              ["Bulk", "45-60 days *"],
            ].map(([k,v],i)=>(
              <div key={k} className="rounded-2xl border bg-[#FBF9F5] p-5">
                <div className="text- tracking-widest text-black/30">0{i+1}</div>
                <div className="mt-2 font-medium">{k}</div>
                <div className="mt-1 text-black/50 text-">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}