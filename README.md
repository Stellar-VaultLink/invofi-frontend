# InvoFi — Frontend

[![CI](https://github.com/Stellar-VaultLink/invofi-frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/Stellar-VaultLink/invofi-frontend/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

Next.js 14 frontend for [InvoFi](https://invofi-five.vercel.app) — a decentralized invoice financing protocol on Stellar Soroban.

**Live demo:** [invofi-five.vercel.app](https://invofi-five.vercel.app)
**Smart contracts:** [invofi-contracts](https://github.com/Stellar-VaultLink/invofi-contracts)

---

## What it does

- Businesses register invoices on-chain and receive financing offers from investors
- Investors browse a marketplace of verified invoices and submit competing offers
- All state transitions (finance, repay, default) are enforced by Soroban smart contracts
- Supports both email/password (Supabase) and Stellar wallet (Freighter) auth

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5.5 (strict) |
| Styling | Tailwind CSS + shadcn/ui |
| Auth | Supabase |
| Wallet | Freighter browser extension |
| Blockchain | Stellar Soroban via `@stellar/stellar-sdk` |
| Data Fetching | TanStack Query v5 |
| Forms | React Hook Form + Zod |

---

## Quick Start

```bash
git clone https://github.com/Stellar-VaultLink/invofi-frontend.git
cd invofi-frontend
cp .env.local.example .env.local
npm install
npm run dev
# → http://localhost:3000
```

Fill in `.env.local` with your Supabase URL, anon key, and contract ID.

## Available Scripts

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
npm run type-check   # TypeScript check (no emit)
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Yes | Supabase anon key |
| `NEXT_PUBLIC_CONTRACT_ID` | Yes | Deployed Soroban contract address |
| `NEXT_PUBLIC_STELLAR_NETWORK` | Yes | `testnet` or `mainnet` |
| `NEXT_PUBLIC_RPC_URL` | Yes | Soroban RPC endpoint |
| `NEXT_PUBLIC_HORIZON_URL` | Yes | Stellar Horizon endpoint |

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── auth/         # Login and register pages
│   ├── dashboard/    # Business invoice dashboard
│   ├── invoices/     # Invoice create and detail pages
│   ├── marketplace/  # Lender marketplace
│   └── portfolio/    # Lender investment tracker
├── components/
│   ├── auth/         # AuthGuard, WalletButton, WalletProvider
│   ├── invoices/     # InvoiceCard, InvoiceForm, OfferList
│   ├── layout/       # Navbar, Providers
│   ├── marketplace/  # MarketplaceCard
│   └── ui/           # shadcn/ui base components
├── lib/              # Supabase, Freighter, Horizon, contract helpers
├── types/            # Shared TypeScript types
└── utils/            # Supabase SSR utilities
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT © 2026 InvoFi Contributors
