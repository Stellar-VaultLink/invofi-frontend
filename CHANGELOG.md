# Changelog

All notable changes to the InvoFi frontend are documented here.

## [Unreleased]

### Added
- Landing page with hero, stats, features, and CTA sections
- Business and lender registration with role selection
- Email and Freighter wallet authentication via Supabase
- Business dashboard with invoice portfolio view
- Invoice creation form with Zod validation
- Invoice detail page with offer management
- Lender marketplace for browsing available invoices
- Lender portfolio page with active investments tracker
- Soroban contract client for register, offer, accept, and repay flows
- Stellar Horizon API helpers for balance and transaction history
- shadcn/ui component library: Button, Input, Card, Badge, Toast
- TanStack Query for server state and caching
- Freighter wallet provider with global wallet context
- AuthGuard component for protecting authenticated routes
- Supabase SSR session middleware
- GitHub Actions CI for lint, type-check, and build
- Vercel deployment configuration

## [0.1.0] - 2026-06-20

- Initial project setup with Next.js 14 App Router
- Tailwind CSS + shadcn/ui foundation
- Supabase authentication wired up
- Core invoice and financing types defined
