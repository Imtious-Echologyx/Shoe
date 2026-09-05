
"use client"
import { useState } from "react"
export default function RFQForm(){
  const [done,setDone]=useState(false)
  const [ref,setRef]=useState("")
  const onSubmit = (e:any)=>{
    e.preventDefault()
    const id = `RFQ-DEMO-${String(Math.floor(Math.random()*9000)+1000)}`
    setRef(id); setDone(true)
  }
  if(done) return (
    <div className="rounded-2xl bg-green-50 border border-green-200 p-8">
      <div className="text-green-800 font-bold text-xl">Inquiry Received (Demo)</div>
      <div className="mt-2 text-sm">Reference: <b>{ref}</b></div>
    </div>
  )
  return (
    <form onSubmit={onSubmit} className="space-y-5 bg-white p-8 rounded-2xl border">
      <div className="grid md:grid-cols-2 gap-4">
        <div><label className="text-xs font-medium">Company Name *</label><input required className="w-full mt-1 border rounded-full px-4 py-3 text-sm" placeholder="Your Company Ltd." /></div>
        <div><label className="text-xs font-medium">Website</label><input className="w-full mt-1 border rounded-full px-4 py-3 text-sm" placeholder="https://..." /></div>
        <div><label className="text-xs font-medium">Country *</label><input required className="w-full mt-1 border rounded-full px-4 py-3 text-sm" placeholder="USA / Germany / etc" /></div>
        <div><label className="text-xs font-medium">Contact Person *</label><input required className="w-full mt-1 border rounded-full px-4 py-3 text-sm" /></div>
        <div><label className="text-xs font-medium">Business Email *</label><input required type="email" className="w-full mt-1 border rounded-full px-4 py-3 text-sm" /></div>
        <div><label className="text-xs font-medium">Phone / WhatsApp *</label><input required className="w-full mt-1 border rounded-full px-4 py-3 text-sm" /></div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div><label className="text-xs font-medium">Product / Category</label><input className="w-full mt-1 border rounded-full px-4 py-3 text-sm" placeholder="e.g. Men's Running Sneaker" /></div>
        <div><label className="text-xs font-medium">Product Code (if known)</label><input className="w-full mt-1 border rounded-full px-4 py-3 text-sm" placeholder="EB-2026-001" /></div>
        <div><label className="text-xs font-medium">Quantity</label><input className="w-full mt-1 border rounded-full px-4 py-3 text-sm" placeholder="e.g. 5000 pairs" /></div>
        <div><label className="text-xs font-medium">Sizes Required</label><input className="w-full mt-1 border rounded-full px-4 py-3 text-sm" placeholder="39-45 EU" /></div>
        <div><label className="text-xs font-medium">Colors</label><input className="w-full mt-1 border rounded-full px-4 py-3 text-sm" /></div>
        <div><label className="text-xs font-medium">Material Preference</label><input className="w-full mt-1 border rounded-full px-4 py-3 text-sm" /></div>
        <div><label className="text-xs font-medium">Target Delivery Date</label><input type="date" className="w-full mt-1 border rounded-full px-4 py-3 text-sm" /></div>
        <div><label className="text-xs font-medium">Destination Country</label><input className="w-full mt-1 border rounded-full px-4 py-3 text-sm" /></div>
        <div><label className="text-xs font-medium">Preferred Incoterm</label><select className="w-full mt-1 border rounded-full px-4 py-3 text-sm"><option>FOB</option><option>CIF</option><option>EXW</option><option>DDP</option></select></div>
        <div><label className="text-xs font-medium">Private Label / Customization</label><input className="w-full mt-1 border rounded-full px-4 py-3 text-sm" placeholder="Logo, packaging, etc" /></div>
      </div>
      <div><label className="text-xs font-medium">Message / Specification</label><textarea className="w-full mt-1 border rounded-2xl px-4 py-3 text-sm min-h-[120px]" placeholder="Describe your requirement, quality standards, target price, etc"></textarea></div>
      <div><label className="text-xs font-medium">Files</label><div className="mt-1 border border-dashed rounded-2xl p-6 text-center text-sm text-black/40">Drag & drop or <span className="underline">browse</span></div></div>
      <button className="w-full bg-navy text-white rounded-full py-4 text-sm font-medium hover:bg-black transition">Submit RFQ - Frontend Demo</button>
      <p className="text-[11px] text-black/40 text-center">By submitting, you agree to our privacy policy. </p>
    </form>
  )
}
