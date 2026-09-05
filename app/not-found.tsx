
import Link from "next/link"
export default function NotFound(){ return <div className="mx-auto max-w-[600px] px-6 py-32 text-center"><h1 className="text-5xl font-bold">404</h1><p className="mt-4 text-black/60">Page not found. All URLs lowercase, stable, readable.</p><Link href="/" className="mt-8 inline-block bg-navy text-white px-6 py-3 rounded-full text-sm">Go Home</Link></div> }
