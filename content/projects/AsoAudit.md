---
date: '2025-03-01'
title: 'ASO Audit'
github: ''
external: 'https://aso.squiwo.com/'
showInProjects: true
tech:
  - TypeScript
  - XState
  - Vercel AI SDK
  - Zod
---

An AI App Store Optimization tool: paste an Apple App Store URL, confirm the resolved listing, and get a structured audit from public Apple data (iTunes Lookup, search comparables, reviews RSS) plus optional screenshot vision analysis. An XState flow (resolve → confirm → audit → report) drives it while the backend streams progress over SSE. An evidence-only trust boundary with Zod-validated structured output scores 10 ASO dimensions, and provider portability via the Vercel AI SDK lets you swap Google/OpenAI by env var.
