import Hero from "@/components/hero/Hero";
import ProductCard from "@/components/products/ProductCard";
import { products, categories } from "@/data/products";
import Link from "next/link";
import { companyData } from "@/data/company";
import ManufacturingProcess from "./manufacturing/ManufacturingProcess";
import CategoriesStrip from "@/components/CategoriesStrip";
import ServicesStrip from "@/components/ServicesStrip";
import BrandTestimonials from "@/components/BrandTestimonials";
export default function Home() {
  return (
    <div>
      <Hero />
      <CategoriesStrip />
      <section className="mx-auto max-w-[1400px] px-6 py-10">
        <div className="flex justify-between items-end">
          <h2 className="text-3xl font-bold">
          </h2>
          <Link href="/products" className="text-sm underline">
            View All
          </Link>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            .filter((p) => p.featured)
            .map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
        </div>
      </section>
      <ServicesStrip />
      <ManufacturingProcess />
      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="bg-navy text-white rounded-[32px] p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div>
            <h2 className="text-4xl font-bold">
              Ready to manufacture your next collection?
            </h2>
            <p className="mt-3 text-white/60 max-w-[520px]">
              OEM, ODM & Private Label for global brands. Bangladesh-based,
              export-focused. Get wholesale pricing within 24h.
            </p>
          </div>
          <Link
            href="/request-a-quote"
            className="bg-white text-navy px-8 py-4 rounded-full text-sm font-medium"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <BrandTestimonials />
    </div>
  );
}
