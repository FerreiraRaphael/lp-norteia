# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for Norteia Agente - a Brazilian company that creates custom AI agents for business automation (sales, marketing, customer service). Built with Next.js 16 + Tailwind CSS, configured for static export and Cloudflare Pages deployment.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build static export to /out directory
npm run lint     # Run ESLint
```

## Deployment

Static site hosted on Cloudflare Pages. The `wrangler.json` configures output from `/out` directory. Build output is pure static HTML (SSG).

## Architecture

**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 3.4

**App Router structure:**
- `app/page.tsx` - Main landing page composing all sections
- `app/layout.tsx` - Root layout with SEO metadata (Portuguese/Brazil locale)
- `app/globals.css` - Global styles, custom animations, font imports

**Landing page sections** (in render order):
Header > Hero > MainMessage > Services > TrafficAI > HowItWorks > Benefits > Pricing > ForWhom > CTAFinal > Footer + WhatsAppButton

All section components are in `/components/` as standalone `.tsx` files.

## Brand System

Colors defined in `tailwind.config.ts` under `theme.extend.colors.brand`:
- `dark` (#1A1A1A) - Primary text
- `cream` (#FAF7F2) - Background
- `warmgray`, `purple`, `blue`, `orange`, `pink` - Accent palette

Fonts:
- `Inter` - Body text (Google Fonts)
- `Gliker` - Display/headings (local fonts in `/public/fonts/`)

## Visual Effects

Custom animations in Tailwind config and `globals.css`:
- `animate-blob`, `animate-blob-slow` - Floating gradient blobs
- `animate-float` - Vertical floating
- `animate-fade-in-up` - Entry animations
- `.card-float` - Hover lift effect
- `GradientBlob.tsx` - Client component for animated background gradients

## Key Patterns

- Components use `"use client"` only when needed (GradientBlob for animations)
- WhatsApp CTA button floats on all pages
- All images use `unoptimized: true` for static export compatibility
