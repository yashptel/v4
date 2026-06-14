---
date: '2024-06-01'
title: 'SERO'
cover: './sero.png'
github: ''
external: 'https://app.squiwo.com/'
cta: 'https://app.squiwo.com/'
tech:
  - Go
  - GraphQL
  - PostgreSQL
  - React
  - BetterAuth
---

Multi-tenant manufacturing-scheduling SaaS (live in production) with a TypeScript/React frontend, Go/GraphQL backend, and PostgreSQL — organization-level RBAC via BetterAuth, onboarding, orders, and subscription billing through Dodo Payments. Its core is a heuristic DAG-based production scheduler (topological ready-queue with in-degree release, critical-path ranking, capacity-aware interval slotting, greedy machine selection, idle-gap backfill) that generates full production plans in minutes instead of hours.
