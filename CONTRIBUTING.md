# Contributing to InvoFi Frontend

Thank you for your interest in contributing! This guide covers everything you need to get started.

## Prerequisites

- Node.js 20+
- npm 9+
- A [Supabase](https://supabase.com) project (free tier)
- [Freighter](https://freighter.app) wallet extension

## Local Setup

```bash
git clone https://github.com/Stellar-VaultLink/invofi-frontend.git
cd invofi-frontend
cp .env.local.example .env.local   # fill in your values
npm install
npm run dev
```

## Development Workflow

1. Fork the repo and create a branch: `git checkout -b feat/your-feature`
2. Make your changes
3. Run checks before committing:
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```
4. Commit using conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, `style:`, `refactor:`, `test:`
5. Open a pull request against `master`

## Code Standards

- TypeScript strict mode — no `any` unless unavoidable
- Tailwind CSS for all styling — no inline styles
- shadcn/ui primitives for all new UI components
- React Hook Form + Zod for all forms
- TanStack Query for all data fetching

## Commit Convention

```
feat(scope): add thing
fix(scope): correct thing
chore(scope): update config
docs: update readme
```

## Reporting Bugs

Use the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md).

## License

By contributing you agree your contributions will be licensed under the MIT License.
