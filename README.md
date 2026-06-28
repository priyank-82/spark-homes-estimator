# Spark Homes Repair Estimator

A mobile-first PWA for Spark Homes' acquisition team to estimate repair costs during property walkthroughs. Works fully offline.

## Features

- **108 repair line items** across 5 sections and 21+ collapsible groups
- **Multi-room support**: Add/remove Bathroom, Bedroom, Kitchen, Living/Common room instances
- **Photo capture**: Take photos of serial numbers, damage, or items needing attention. Serial number auto-detection from filenames
- **Export**: ZIP containing Excel spreadsheet + photos (works offline via inline fallback generators)
- **Price overrides**: Per-project and global pricing
- **Deal Analyzer**: Full cost basis with ARV, closing costs, holding costs, selling costs, ROI, margin
- **CSV import**: Bulk-update prices from Pricing List.csv
- **Project duplicate**: Clone estimates for similar properties
- **Cost breakdown**: Per-section cost summary
- **PWA**: Installable on Android/iOS, service worker with resilient caching

## How to Run

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080` on your phone or desktop. A real HTTP server is required for service worker registration (PWA features).

## Libraries (CDN)

- [Tailwind CSS](https://cdn.tailwindcss.com) — utility CSS
- [JSZip](https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js) — ZIP generation (with inline fallback)
- [SheetJS](https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js) — Excel generation (with inline fallback)

All data is stored client-side in localStorage + IndexedDB (photos). No backend required.

## Build

Single HTML file, no build tools, no Node.js server, no frameworks. Vanilla JavaScript, HTML, and CSS.

## Submission

Built for the Spark Homes Developer Contest. Submitted by Priyank Mandal.
