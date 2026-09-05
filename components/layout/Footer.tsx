
import Link from "next/link"
export default function Footer(){
  return (
    <footer className="bg-[#0B2A4A] text-white/80 mt-24">
      <div className="mx-auto max-w-[1400px] px-6 py-16 grid lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/images/logo.jpg" alt="Logo" className="h-10 w-10 rounded-full bg-white" />
            <div><div className="font-bold text-white">EASTBENGAL FOOTWEAR BD LTD</div><div className="text-xs text-white/60">Estd-2026 • Bangladesh</div></div>
          </div>
          <p className="text-sm leading-relaxed text-white/60">OEM, ODM & Private Label footwear manufacturer for global brands, importers and retailers. 100% export-oriented, compliance-ready.</p>
        </div>
        <div><h4 className="text-white font-semibold mb-4">Company</h4><ul className="space-y-2 text-sm"><li><Link href="/about">About</Link></li><li><Link href="/factory">Factory</Link></li><li><Link href="/certifications">Certifications</Link></li><li><Link href="/sustainability">Sustainability</Link></li></ul></div>
        <div><h4 className="text-white font-semibold mb-4">Services</h4><ul className="space-y-2 text-sm"><li><Link href="/oem">OEM</Link></li><li><Link href="/odm">ODM</Link></li><li><Link href="/private-label">Private Label</Link></li><li><Link href="/custom-footwear">Custom Footwear</Link></li><li><Link href="/materials">Materials</Link></li></ul></div>
        <div><h4 className="text-white font-semibold mb-4">Contact - EDITABLE DEMO</h4><p className="text-sm">Plot #XX, Comilla EPZ, Comilla-3500, Bangladesh<br/>info@eastbengalfootwear.com<br/>+880 1XXX-XXXXXX (WhatsApp)</p><div className="mt-4 flex gap-3 text-xs"><Link href="/request-a-quote" className="bg-white text-navy px-4 py-2 rounded-full">RFQ Form</Link><Link href="/contact" className="border border-white/20 px-4 py-2 rounded-full">Contact</Link></div></div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">© {new Date().getFullYear()} EastBengal Footwear BD Ltd. All rights reserved.</div>
    </footer>
  )
}
