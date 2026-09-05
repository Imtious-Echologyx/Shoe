export const metadata = { title: "About Us | EastBengal Footwear BD LTD" };

export default function Page() {
  return (
    <div className="bg-[#FDFBF7]">
      <style>{`@keyframes up{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}.anim{animation:up.7s cubic-bezier(.22,1,.36,1) both}`}</style>

      <div className="mx-auto max-w- px-6 py-16 lg:py-24">
        {/* Hero */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div className="anim">
            <p className="text- tracking-[0.2em] text-black/40">ABOUT • COMILLA EPZ, BANGLADESH • ESTD 2026 *</p>
            <h1 className="mt-4 text-5xl lg:text-7xl font-bold tracking-tight leading-[0.85]">
              EASTBENGAL<br/>FOOTWEAR<br/>BD LTD
            </h1>
            <p className="mt-8 max-w- text- leading-relaxed text-black/60">
              100% export-oriented footwear manufacturer focused on OEM, ODM and Private Label for international brands.
              We operate from Comilla EPZ with controlled 10-stage workflow — from sourcing to shipment.
              <br/><br/>
            </p>

            <div className="mt-10 grid grid-cols-3 gap-3 max-w-">
              <div className="rounded-2xl border bg-white p-5">
                <div className="text-2xl font-bold">300K*</div>
                <div className="mt-1 text- text-black/40">pairs / month capacity</div>
              </div>
              <div className="rounded-2xl border bg-white p-5">
                <div className="text-2xl font-bold">2026*</div>
                <div className="mt-1 text- text-black/40">established</div>
              </div>
              <div className="rounded-2xl border bg-white p-5">
                <div className="text-2xl font-bold">100%</div>
                <div className="mt-1 text- text-black/40">export oriented</div>
              </div>
            </div>
          </div>

          <div className="anim space-y-4" style={{animationDelay:"0.1s"}}>
            <div className="aspect-[4/3] rounded- overflow-hidden border bg-[#F5F2ED]">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&auto=format&fit=crop" alt="Factory 4K" className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80" alt="Material 4K" className="rounded-2xl aspect-square object-cover border" />
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" alt="Shoe 4K" className="rounded-2xl aspect-square object-cover border" />
            </div>
          </div>
        </div>

        {/* Mission Vision Values */}
        <div className="mt-20 grid md:grid-cols-3 gap- bg-black/5 border border-black/5 rounded- overflow-hidden">
          {[
            { k:"MISSION", t:"Deliver quality footwear on time with ethical manufacturing.", d:"On-time delivery, AQL 2.5 QC, documented SOP, transparent costing. Replace with real mission statement." },
            { k:"VISION", t:"Be trusted manufacturing partner for 50+ global brands.", d:"Scale from startup to enterprise — low MOQ for new brands, high volume for established chains. EDITABLE." },
            { k:"VALUES", t:"Quality, Compliance, Transparency, Sustainability.", d:"BSCI/SEDEX ready *, RSL compliant, needle-free, people-first workplace. Replace with real values." },
          ].map((b,i)=>(
            <div key={b.k} className="bg-white p-8 lg:p-9 anim" style={{animationDelay:`${0.05*i}s`}}>
              <div className="text- tracking-[0.2em] text-black/30">{b.k}</div>
              <div className="mt-4 font-semibold text- leading-tight">{b.t}</div>
              <p className="mt-3 text- text-black/55 leading-relaxed">{b.d}</p>
              <div className="mt-6 h- w-0 group-hover:w-full bg-black transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Leadership + Location */}
        <div className="mt-16 grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
          <div className="rounded- border bg-white p-8 lg:p-10 anim">
            <h3 className="text- tracking-[0.2em] text-black/40">LOCATION & CAPACITY *</h3>
            <div className="mt-6 space-y-4 text- text-black/60">
              <p><span className="font-medium text-black">Address:</span> Comilla EPZ, Bangladesh *</p>
              <p><span className="font-medium text-black">Area:</span> 50,000 sq ft * — cutting, stitching, lasting, finishing</p>
              <p><span className="font-medium text-black">Lines:</span> 4 stitching lines, 2 assembly lines *</p>
              <p><span className="font-medium text-black">Shipment:</span> FOB Chittagong, CIF/DDP worldwide</p>
            </div>
            <div className="mt-8 rounded-2xl overflow-hidden bg-[#F5F2ED] aspect-[16/10]">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" alt="Comilla EPZ 4K" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="rounded- border bg-white p-8 lg:p-10 anim" style={{animationDelay:"0.08s"}}>
            <h3 className="text- tracking-[0.2em] text-black/40">LEADERSHIP • EDITABLE</h3>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { n:"Founder & MD", d:"Name — 15+ yrs footwear *", img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
                { n:"Head of Operations", d:"Factory & compliance *", img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
              ].map(c=>(
                <div key={c.n} className="rounded-2xl border bg-[#FBF9F5] p-4">
                  <img src={c.img} alt={c.n} className="h-16 w-16 rounded-full object-cover" />
                  <div className="mt-3 font-medium text-">{c.n}</div>
                  <div className="mt-1 text- text-black/50">{c.d}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["BSCI *","SEDEX *","WRAP *","ISO 9001 *"].map(b=><span key={b} className="rounded-full border px-4 py-2 text- bg-[#FDFBF7]">{b}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}