# ONUR2009

ONUR2009 is a multilingual corporate website built with Next.js for a group operating across global trade, logistics, retail, distribution, and consulting.

## Overview

The site presents the company's divisions through a modern App Router-based front end with reusable sections, multilingual content, and SEO-friendly metadata.

### Highlights

- English, Turkish, and Bulgarian language support
- Dedicated pages for logistics, fresh produce, fleet service, retail fashion, confectionery distribution, and consulting
- Responsive layouts with shared UI components and content-driven page templates
- SEO helpers, sitemap, robots, and manifest support
- Redux Toolkit-based language state management

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Redux Toolkit
- Tailwind CSS 4
- Lucide React

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the environment example file if you need to override defaults:
   ```bash
   cp .env.example .env.local
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build the production bundle:
   ```bash
   npm run build
   ```
5. Run lint checks:
   ```bash
   npm run lint
   ```

## Environment Variables

The app reads the following public environment variables from `.env.local` or the shell:

- `NEXT_PUBLIC_APP_TITLE`
- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_APP_DESCRIPTION`

Example values are provided in [.env.example](./.env.example).

## Project Structure

- `src/app` App Router routes, metadata, sitemap, robots, and manifest
- `src/views` page-level view composition
- `src/components` shared layout, section, page, and UI components
- `src/lib` content, SEO helpers, and site configuration
- `src/store` Redux store and language state
- `src/hooks` shared React hooks
- `src/types` shared TypeScript types

## Routes

- `/` Home
- `/about` About Us
- `/services` Services overview
- `/gallery` Gallery
- `/contact` Contact
- `/logistics-transport` Logistics & Transport
- `/fresh-produce-trade` Fresh Produce Trade
- `/auto-truck-service` Auto & Truck Service
- `/retail-fashion` Altinyildiz Classics Bulgaria
- `/sobaklava-distribution` SoBaklava Distribution
- `/bulgatex-consulting` Bulgatex Consulting

## Notes

- The default site title, description, and base URL can be changed through the public environment variables above.
- Language selection is stored in Redux and initialized to English by default.
