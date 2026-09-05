// components/BrandTestimonials.tsx
const testimonials = [
  {
    brand: "NORDIC WALK",
    country: "Sweden *",
    logoText: "NORDIC WALK",
    style: "tracking-[0.2em] font-black",
    quote: "On-time delivery, AQL 2.5 passed first time. Best OEM partner we found in BD. 8K pairs first order → now 25K/month.",
    person: "Erik Lindholm — Sourcing Director",
    role: "Footwear buying, 50 stores EU *",
    img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80&auto=format&fit=crop",
  },
  {
    brand: "URBAN STEP",
    country: "Germany *",
    logoText: "URBAN STEP",
    style: "font-bold italic",
    quote: "Low MOQ helped us launch private label. Costing transparent, samples in 7 days. Now scaling 12K pairs/month.",
    person: "Maria Schneider — Founder",
    role: "DTC brand, Berlin *",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop",
  },
  {
    brand: "TRAIL & CO",
    country: "USA *",
    logoText: "TRAIL & CO.",
    style: "font-serif tracking-wide",
    quote: "Private label quality top-notch. Custom boxes, hangtags, tissue — all perfect. Audit passed SEDEX *.",
    person: "Jason Kim — Head of Operations",
    role: "Outdoor chain, California *",
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80&auto=format&fit=crop",
  },
]

const demoLogos = [
  { name: "NORDIC WALK", sub: "STOCKHOLM", w: "font-black tracking-[0.18em]" },
  { name: "URBAN STEP", sub: "BERLIN", w: "font-bold italic" },
  { name: "TRAIL & CO.", sub: "USA", w: "font-serif" },
  { name: "LARK & FEATHER", sub: "LONDON", w: "font-light tracking-[0.2em]" },
  { name: "PASEO", sub: "MADRID", w: "font-extrabold" },
  { name: "ARCH FOOTWEAR", sub: "SYDNEY", w: "font-medium tracking-[0.1em]" },
]

export default function BrandTestimonials() {
  return (
    <section className="bg-[#0B2A4A] text-white rounded- mx-3 lg:mx-6 my-16 overflow-hidden border border-white/5">
      <style>{`@keyframes up{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}.anim{animation:up.6s cubic-bezier(.22,1,.36,1) both}`}</style>

      <div className="mx-auto max-w- px-6 py-14 lg:py-20">
        {/* header */}
        <div className="flex flex-wrap items-end justify-between gap-6 anim">
          <div>
            <p className="text- tracking-[0.2em] text-white/40">TRUSTED BY • 50+ BRANDS ROADMAP *</p>
            <h2 className="mt-4 text-4xl lg:text- font-bold tracking-tight leading-[0.9]">Trusted by<br/>growing brands</h2>
          </div>
          <div className="max-w-">
            <div className="mt-3 flex gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-">4.9/5 avg rating *</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-">24-48h response *</span>
            </div>
          </div>
        </div>

        {/* testimonials */}
        <div className="mt-12 grid md:grid-cols-3 gap- bg-white/10 rounded- overflow-hidden border border-white/10">
          {testimonials.map((t, i) => (
            <div key={t.brand} className="bg-[#0F3159]/70 backdrop-blur p-7 lg:p-8 anim" style={{animationDelay: `${i*0.06}s`}}>
              <div className="flex items-center justify-between">
                <div className={`text- text-white ${t.style}`}>{t.logoText}</div>
                <div className="text- tracking-widest bg-white text-black rounded-full px-2.5 py-1">{t.country}</div>
              </div>
              <div className="mt-2 flex gap-0.5 text-[#FDE68A] text-">★★★★★</div>
              <p className="mt-4 text- leading-relaxed text-white/90">“{t.quote}”</p>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full overflow-hidden bg-white/10 border border-white/10">
                  <img src={t.img} alt={t.person} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div>
                  <div className="text- font-medium">{t.person} *</div>
                  <div className="text- text-white/50">{t.role}</div>
                </div>
              </div>

              <div className="mt-6 h- bg-white/10" />
              <div className="mt-4 flex gap-2">
                <span className="text- border border-white/15 rounded-full px-2.5 py-1 text-white/60">OEM *</span>
                <span className="text- border border-white/15 rounded-full px-2.5 py-1 text-white/60">Private Label</span>
              </div>
            </div>
          ))}
        </div>

        {/* demo client logo strip */}
        <div className="mt-10 anim" style={{animationDelay:"0.18s"}}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap- bg-white/10 rounded- overflow-hidden border border-white/10">
            {demoLogos.map((l) => (
              <div key={l.name} className="bg-[#0E2E54] p-5 lg:p-6 flex flex-col justify-center min-h- hover:bg-[#112f57] transition">
                <div className={`text-white text- leading-none ${l.w}`}>{l.name}</div>
                <div className="mt-1.5 text- tracking-[0.2em] text-white/30">{l.sub} *</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}