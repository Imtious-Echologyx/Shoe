
export const metadata={ title: "Quality Control" }
export default function Page(){
  return (
    <div className="mx-auto max-w-[1000px] px-6 py-20">
      <h1 className="text-4xl font-bold">Quality Control</h1>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="border rounded-2xl p-6"><h3 className="font-semibold">Key Points</h3><ul className="mt-3 list-disc ml-5 text-sm text-black/60"><li>Premium B2B aesthetic</li><li>Replace images at /public/images</li><li>Replace data at /data/*.ts</li><li>SEO friendly - server rendered</li></ul></div>
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80" alt="Quality Control demo" className="rounded-2xl aspect-[4/3] object-cover" />
      </div>
    </div>
  )
}
