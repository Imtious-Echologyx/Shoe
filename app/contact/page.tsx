export const metadata = { title: "Contact | EastBengal Footwear BD LTD" }

export default function Page() {
  return (
    <div className="bg-[#FDFBF7]">
      <style>{`@keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}.anim{animation:up.6s cubic-bezier(.22,1,.36,1) both}`}</style>

      <div className="mx-auto max-w- px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div className="anim">
            <p className="text- tracking-[0.2em] text-black/40">CONTACT • 24H RESPONSE *</p>
            <h1 className="mt-4 text-5xl lg:text-6xl font-bold tracking-tight leading-[0.9]">Let's build<br/>your next<br/>collection.</h1>
            <p className="mt-6 max-w- text- leading-relaxed text-black/60">
              Send tech-pack or brief. We reply with costing & timeline within 24-48h *
            </p>

            <div className="mt-10 max-w- space-y-4">
              <div className="rounded-2xl border bg-white p-6">
                <div className="text- tracking-widest text-black/30">FACTORY *</div>
                <div className="mt-2 text- font-medium">Comilla EPZ, Comilla, Bangladesh *</div>
                <div className="mt-1 text- text-black/50">FOB Chittagong Port *</div>
              </div>
              <div className="rounded-2xl border bg-white p-6 flex gap-8">
                <div><div className="text- tracking-widest text-black/30">EMAIL *</div><div className="mt-2 text-">info@eastbengalfootwear.com *</div></div>
                <div><div className="text- tracking-widest text-black/30">WHATSAPP *</div><div className="mt-2 text-">+880 1XXX XXXXXX *</div></div>
              </div>
              <div className="aspect-[16/9] rounded- overflow-hidden border bg-[#F5F2ED]">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop" alt="Map" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          {/* DEMO FORM - NO HANDLERS */}
          <div className="anim rounded- border bg-white p-7 lg:p-9" style={{animationDelay:"0.08s"}}>
            <h3 className="font-semibold">Request a Quote</h3>

            <div className="mt-8 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Your Name *" className="rounded-full border border-black/10 px-5 py-3 text- outline-none focus:border-black/30" />
                <input placeholder="Company *" className="rounded-full border border-black/10 px-5 py-3 text- outline-none focus:border-black/30" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Work Email *" className="rounded-full border border-black/10 px-5 py-3 text- outline-none focus:border-black/30" />
                <input placeholder="WhatsApp / Phone" className="rounded-full border border-black/10 px-5 py-3 text- outline-none focus:border-black/30" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-full border border-black/10 px-5 py-3 text- bg-white text-black/50">Service: OEM</div>
                <div className="rounded-full border border-black/10 px-5 py-3 text- bg-white text-black/50">Qty: 1000-3000</div>
              </div>
              <div className="w-full rounded- border border-black/10 px-5 py-4 text- bg-white text-black/40 min-h-">
                Tell us about your design, target price, timeline...
              </div>

              <a href="mailto:info@eastbengalfootwear.com" className="block text-center w-full rounded-full bg-black text-white py-3.5 text- font-medium hover:bg-[#0B2A4A] transition">
                Send Inquiry via Email →
              </a>
            </div>

            <div className="mt-8 rounded-2xl bg-[#FBF9F5] border p-4 text- text-black/50">
              <div className="font-medium text-black text-">What happens next?</div>
              <ol className="mt-2 list-decimal ml-4 space-y-1">
                <li>We review tech-pack within 24h *</li>
                <li>Pattern + costing in 48h *</li>
                <li>Proto sample in 7-10 days *</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}