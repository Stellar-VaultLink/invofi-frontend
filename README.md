```
 ██╗███╗   ██╗██╗   ██╗ ██████╗ ███████╗██╗
 ██║████╗  ██║██║   ██║██╔═══██╗██╔════╝██║
 ██║██╔██╗ ██║██║   ██║██║   ██║█████╗  ██║
 ██║██║╚██╗██║╚██╗ ██╔╝██║   ██║██╔══╝  ██║
 ██║██║ ╚████║ ╚████╔╝ ╚██████╔╝██║     ██║
 ╚═╝╚═╝  ╚═══╝  ╚═══╝   ╚═════╝ ╚═╝     ╚═╝
```

<div align="center">

**Next.js 14 frontend for the InvoFi decentralised invoice financing protocol**

[![CI](https://github.com/Stellar-VaultLink/invofi-frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/Stellar-VaultLink/invofi-frontend/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

**Live demo:** [invofi-five.vercel.app](https://invofi-five.vercel.app) · **Smart contracts:** [invofi-contracts](https://github.com/Stellar-VaultLink/invofi-contracts) · **Monorepo:** [invofi](https://github.com/Stellar-VaultLink/invofi)

</div>

---

## This repo vs. the monorepo

This is where **frontend contributions happen** — fork it and open PRs here for anything touching the Next.js app. It has its own CI and issue queue scoped to the frontend.

Production deploys from **[Stellar-VaultLink/invofi](https://github.com/Stellar-VaultLink/invofi)**, the integration monorepo, which is what Vercel actually builds. Merged PRs here are periodically pulled into that repo. If you want the full project (roadmap, deployed demo, both stacks), start there.

---

## What it does

- Businesses register invoices on-chain and receive competing financing offers from investors
- Investors browse a live marketplace of verified invoices and submit offers at custom rates
- Full and **partial repayment** flow tracked on-chain via Soroban contract
- Dark mode, keyboard-accessible navbar, sortable invoice table, KPI stats grid
- Dual auth: email/password (Supabase) and Stellar wallet (Freighter v6)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5.5 (strict mode) |
| Styling | Tailwind CSS 3.4 + shadcn/ui |
| Auth | Supabase |
| Wallet | Freighter v6 (`@stellar/freighter-api`) |
| Blockchain | Stellar Soroban via `@stellar/stellar-sdk` v16 |
| Data Fetching | TanStack Query v5 |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |

---

## Quick Start

```bash
git clone https://github.com/Stellar-VaultLink/invofi-frontend.git
cd invofi-frontend
cp .env.local.example .env.local   # fill in Supabase + contract values
npm install
npm run dev
# → http://localhost:3000
```

Install [Freighter](https://freighter.app) and switch it to **Testnet** before testing wallet features.

### Available Scripts

```bash
npm run dev          # dev server with hot reload
npm run build        # production build
npm run start        # serve production build
npm run lint         # Next.js ESLint
npm run type-check   # tsc --noEmit (strict)
```

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Supabase public anon key |
| `NEXT_PUBLIC_CONTRACT_ID` | Yes | Deployed Soroban contract address |
| `NEXT_PUBLIC_STELLAR_NETWORK` | Yes | `testnet` or `mainnet` |
| `NEXT_PUBLIC_RPC_URL` | Yes | Soroban RPC endpoint (`https://soroban-testnet.stellar.org`) |
| `NEXT_PUBLIC_HORIZON_URL` | Yes | Stellar Horizon endpoint (`https://horizon-testnet.stellar.org`) |
| `NEXT_PUBLIC_USDC_ISSUER` | No | USDC issuer address on the configured network |

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page — hero, stats, features, how-it-works, CTA |
| `/auth/login` | Email login or Freighter wallet connect |
| `/auth/register` | New account (business or lender role) |
| `/dashboard` | Business dashboard — invoice list + KPI stats |
| `/invoices/new` | Create a new on-chain invoice |
| `/invoices/[id]` | Invoice detail — offers, status timeline |
| `/marketplace` | Lender view — browse all Pending invoices |
| `/portfolio` | Lender portfolio — active + completed investments |
| `/profile` | Edit display name, view wallet address |
| `/settings` | Account settings |

---

## Project Structure

```
src/
├── app/                   Next.js App Router
│   ├── auth/              login + register
│   ├── dashboard/         business dashboard
│   ├── invoices/          create + detail pages
│   ├── marketplace/       lender invoice browser
│   ├── portfolio/         lender investment tracker
│   ├── profile/           user profile (display name, wallet)
│   ├── settings/          account settings
│   ├── error.tsx          global error boundary
│   ├── loading.tsx        global loading skeleton
│   └── not-found.tsx      custom 404
├── components/
│   ├── auth/
│   │   ├── AuthGuard.tsx          redirect unauthenticated users
│   │   ├── WalletButton.tsx       connect / disconnect Freighter
│   │   └── WalletProvider.tsx     wallet context (publicKey, connect, disconnect)
│   ├── common/
│   │   ├── ConfirmDialog.tsx      reusable confirmation modal (default + destructive variants)
│   │   ├── EmptyState.tsx         empty list placeholder
│   │   ├── LoadingSkeleton.tsx    shimmer loading placeholder
│   │   ├── PageHeader.tsx         page title + optional action slot
│   │   ├── StatsCard.tsx          KPI tile with trend indicator
│   │   ├── StatsGrid.tsx          responsive 1→2→4 column grid for StatsCards
│   │   └── StatusBadge.tsx        coloured status pill (Pending, Financed, Repaid…)
│   ├── invoices/
│   │   ├── InvoiceCard.tsx        invoice summary card
│   │   ├── InvoiceForm.tsx        create invoice form (React Hook Form + Zod)
│   │   ├── InvoiceTable.tsx       sortable table (amount, due date, status, id)
│   │   └── OfferList.tsx          list of financing offers with accept/reject actions
│   ├── layout/
│   │   ├── Navbar.tsx             sticky nav with dark-mode toggle + aria-labels
│   │   ├── Footer.tsx             links to GitHub repos and docs
│   │   └── Providers.tsx          QueryClientProvider + WalletProvider + Toaster
│   ├── marketplace/
│   │   └── MarketplaceCard.tsx    lender-facing invoice card with offer CTA
│   └── ui/                        shadcn/ui primitives
│       ├── alert.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── separator.tsx
│       ├── skeleton.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       └── use-toast.ts
├── hooks/
│   ├── useDebounce.ts
│   ├── useInvoices.ts        TanStack Query — fetch + mutate invoices
│   ├── useLocalStorage.ts    type-safe localStorage hook with SSR guard
│   ├── useMarketplace.ts     fetch Pending invoices for lenders
│   ├── useMediaQuery.ts      responsive breakpoint hook
│   └── useOffers.ts          fetch + mutate financing offers
├── lib/
│   ├── constants.ts          network config, risk tiers, currency list
│   ├── contract.ts           Soroban contract invocation helpers
│   ├── csv.ts                CSV export (dashboard + portfolio)
│   ├── formatters.ts         formatAmount, formatDate, formatWalletAddress
│   ├── freighter.ts          Freighter v6 wrappers (connect, sign, network check)
│   ├── horizon.ts            Stellar Horizon balance + history queries
│   ├── supabase.ts           Supabase client + auth helpers
│   └── utils.ts              cn(), formatAddress()
└── types/
    └── index.ts              Invoice, FinancingOffer, UserProfile, WalletState types
```

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Open issues and PRs in this repo for anything frontend-scoped.

## License

MIT © 2026 InvoFi Contributors
