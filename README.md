# Fred's Records

A custom ecommerce website for Fred's Records - an independent Newfoundland Music, DVD, and record store.

## Stack

- Next.js / React / TypeScript
- Tailwind CSS
- Motion for UI animation
- Drizzle ORM
- PostgreSQL
- Stripe-ready architecture

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Database

Copy `.env.example` to `.env.local` and set `DATABASE_URL`.

If you add Drizzle Kit:

```bash
npm install -D drizzle-kit dotenv
npx drizzle-kit generate
npx drizzle-kit migrate
```

## Suggested next steps

1. Replace the demo records in `lib/records.ts` with database queries.
2. Add real album artwork using object storage.
3. Build the cart as a persistent client/server cart.
4. Add Stripe Checkout or Payment Element.
5. Add customer authentication.
6. Build `/admin` for inventory and orders.
7. Add search/filtering.
8. Add email confirmations.
9. Add product variants such as Vinyl / CD / Cassette and condition.
10. Add GSAP + ScrollTrigger for a few signature landing-page interactions.

The demo intentionally avoids external image dependencies so it works immediately after `npm install`.
