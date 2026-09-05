
# EASTBENGAL FOOTWEAR BD LTD - International B2B Website
Frontend Only - Next.js + TypeScript + App Router + Tailwind + Framer Motion + NO 3D - 4K images only as per client requirement

## Branding Used
- Name: EASTBENGAL FOOTWEAR BD LTD (Estd-2026)
- Logo: /public/images/logo.jpg (from your uploaded file)
- Colors: Navy #0B2A4A, Gold #D68C2C, Cream #FDFBF7
- Images: Demo 4K Unsplash footwear/factory images - per your request NO 3D models required, only 4K images. 3D architecture is kept as optional placeholders.

## Required Node.js
- Node.js 18.17+ or 20+ recommended (Next.js 15 requirement)

## Install
```bash
npm install
```

## Development
```bash
npm run dev
# opens http://localhost:3000
```

## Production Build
```bash
npm run build
npm run start
```

## Lint / Typecheck
```bash
npm run lint
npm run typecheck
```

## Where to place images
- Logo: /public/images/logo.jpg (already placed)
- Product images: replace URLs in /data/products.ts with your own files in /public/images/products/ and import via /images/products/xxx.jpg
- Factory images: /public/images/factory/
- All demo images currently are Unsplash CDN - replace with local for best performance via next/image

## Where to place .glb/.gltf 3D models (OPTIONAL - you requested no 3D)
- Hero model: /public/models/hero.glb
- Product models: /public/models/{product-slug}.glb e.g. /public/models/mens-running-sneaker.glb
- If you keep `use3D=false` in components/hero/Hero.tsx, site uses 4K images only (current setting as per your request)

## How to create Spline scene and connect URL/embed
1. Create scene in Spline.design
2. Publish -> copy public URL
3. In /components/3d/Hero3D.tsx replace placeholder with:
   ```tsx
   import Spline from '@splinetool/react-spline'
   export default () => <Spline scene="https://prod.spline.design/XXXX/scene.splinecode" />
   ```
4. Install: npm i @splinetool/react-spline
5. Keep fallback image for SEO/LCP

## How to replace placeholder 3D model
1. Optimize GLB: reduce polygons, compress textures with gltfpack / Blender
2. Put at /public/models/hero.glb
3. In Hero.tsx set use3D=true and in Hero3D.tsx use useGLTF("/models/hero.glb")
4. For product viewer: put at /public/models/{slug}.glb - ProductViewer will auto-load

## How to configure Spline
- Config centralized in /components/3d/Hero3D.tsx - scene URL constant
- Dynamically imported to avoid blocking initial HTML/LCP

## How to replace hero 3D scene
- Edit /components/hero/Hero.tsx - toggle use3D boolean
- Edit /components/3d/Hero3D.tsx

## How to replace product 3D model
- Replace /public/models/{slug}.glb
- No code change needed - viewer reads modelPath prop

## How to disable 3D globally for testing
- Set `const use3D=false` in Hero.tsx
- In products/[slug]/page.tsx comment out <ProductViewer/> - images only
- This is current default as you requested

## How to replace all 3D assets
- Delete /public/models/* and keep image-only mode - site remains fast and premium

## How to replace company/product data
- /data/company.ts - name, address, capacity, stats (EDITABLE markers)
- /data/products.ts - all products, categories, specs (typed)
- /data/services.ts - OEM/ODM/Private Label
- /data/faqs.ts - FAQ
- /data/certifications.ts - certifications (currently placeholders like BSCI, WRAP etc - EDITABLE)

## How to replace catalog PDF
- Place at /public/catalog.pdf
- Link at /catalog page points to /catalog.pdf

## How to deploy to Vercel or any Next.js-compatible platform
- Push to GitHub
- Vercel -> Import Project -> Framework: Next.js -> Deploy
- No env vars needed (frontend only)
- For custom domain: eastbengalfootwear.com -> set in lib/seo.ts siteConfig.url

## SEO Implementation
- Server-rendered content, unique title/meta per page, canonical URLs, Open Graph, semantic HTML, alt text, SEO-friendly slugs /products/mens-running-sneaker, sitemap.xml, robots.txt, breadcrumbs planned, structured data ready for Organization/Product

## Accessibility
- Keyboard navigable, focus states, semantic buttons/links, form labels, color contrast, reduced-motion support, alt text

## Performance Notes (per spec)
- Aim excellent Lighthouse - use next/image (currently <img> for simplicity, switch to next/image for prod), lazy load below fold, dynamic import for heavy 3D, reserve dimensions, optimized fonts
- Currently no 3D loaded at LCP due to your no-3D request - fastest LCP with 4K image

## Important - Demo Placeholder Content
- All company facts marked EDITABLE - do not treat as real until replaced
- No fake certificates claimed - certifications show "Target/In Progress - EDITABLE"
- No backend - RFQ forms show demo success RFQ-DEMO-XXXX frontend only

## File Structure per Spec
app/layout.tsx, app/globals.css, app/about/page.tsx, app/products/page.tsx, app/products/[slug]/page.tsx, app/manufacturing, factory, quality-control, certifications, sustainability, oem, odm, private-label, custom-footwear, materials, export, catalog, blog, faq, request-a-quote, request-a-sample, contact, robots.ts, sitemap.ts, components/layout/navigation/hero/products/forms/3d/motion/sections/ui, data/products.ts company.ts services.ts certifications.ts faqs.ts, public/images/, public/models/, public/icons/

Enjoy!


## UPDATE - NO 3D MODELS (as requested)
- All 3D dependencies removed (three, @react-three/fiber, drei)
- /components/3d/ deleted
- /public/models/ deleted
- Hero uses only 4K image https://images.unsplash.com/photo-1542291026-7eec264c27ff
- Product pages use only 4K images gallery - no ProductViewer
- To keep 4K quality: replace Unsplash URLs with your own high-res JPGs in /public/images/
# Shoe
# Shoe
