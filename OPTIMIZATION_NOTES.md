# Portfolio Optimization Pass

## Mobile responsiveness
- Reworked hero spacing and sizing for 820px, 560px, and 380px breakpoints.
- Reduced mobile portrait/ring dimensions and repositioned floating chips/score card.
- Improved navbar/mobile menu sizing, scrolling, and touch targets.
- Improved About stats, laptop/code visual, Skills orbit, service cards, project cards, process steps, footer/contact area, and e-commerce demo on small screens.
- Reduced expensive mobile blur/shadow work while keeping the same visual style.

## Performance
- Removed the render-blocking CSS `@import` for Google Fonts and switched to asynchronous font loading.
- Added responsive WebP hero images (320/480/720) and preloaded the LCP portrait.
- Kept the hero visible on first paint while preserving entrance motion, avoiding an opacity-delayed LCP.
- Replaced navbar section scanning on every scroll with `IntersectionObserver`.
- Cached hero bounds so mouse parallax no longer calls `getBoundingClientRect()` on every mouse move.
- Converted repeating floating-chip motion to compositor-friendly CSS animations.
- Lazy-loaded the separate `/ecommerce` route.
- Added `content-visibility` for below-the-fold sections and reduced mobile `backdrop-filter` cost.
- Removed unused multi-megabyte profile PNG and unrelated torrent from the project source.

## Deployment/SEO reliability
- Added Netlify SPA `_redirects` so `/ecommerce` works on direct refresh.
- Added `robots.txt`, `sitemap.xml`, and Person structured data.
- Restored `public/AHMED.pdf` so the Download CV button has a real target.

## Validation completed
- JS/JSX syntax parsed successfully.
- CSS parsed successfully with no top-level syntax errors.
- Final Lighthouse numbers should be checked after deployment because Lighthouse varies by device/network/run.
