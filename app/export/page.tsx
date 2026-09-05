
import Link from "next/link"
export const metadata={ title: "Export / Global Markets" }
export default function Page(){
  return <div className="mx-auto max-w-[1000px] px-6 py-20"><h1 className="text-4xl font-bold">Export / Global Markets</h1><p className="mt-4 text-black/60">Placeholder for export experience, logistics, buyer info. EDITABLE.</p><div className="mt-8 flex flex-wrap gap-2">{["USA","Germany","UK","France","Spain","Italy","Japan","Australia","Canada","Netherlands"].map(c=><span key={c} className="border rounded-full px-4 py-2 text-sm">{c} - EDITABLE</span>)}</div></div>
}
