
import { MetadataRoute } from "next"
import { products } from "@/data/products"
export default function sitemap(): MetadataRoute.Sitemap{
  const base = "https://eastbengalfootwear.com"
  const staticPages = ["","/about","/products","/manufacturing","/factory","/quality-control","/certifications","/sustainability","/oem","/odm","/private-label","/custom-footwear","/materials","/export","/catalog","/blog","/faq","/request-a-quote","/request-a-sample","/contact"]
  const prodPages = products.map(p=>`/products/${p.slug}`)
  return [...staticPages, ...prodPages].map(p=>({ url: base+p, lastModified: new Date() }))
}
