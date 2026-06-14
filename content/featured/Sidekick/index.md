---
date: '2025-09-01'
title: 'Sidekick'
github: ''
external: 'https://sidekick.squiwo.com/'
cta: 'https://sidekick.squiwo.com/'
tech:
  - TypeScript
  - Local Whisper STT
  - RAG
  - pgvector / Qdrant
  - OpenAI · Anthropic · Gemini
---

An always-on AI desktop overlay — live in production, with paying customers — that captures screen and audio context to debug code, assist in live meetings, and dictate Wispr-style, triggered from anywhere by a shortcut to cut tool-switching. It runs a local Whisper-style STT pipeline with ~500ms–1.5s partial-transcription latency and a RAG layer over pgvector/Qdrant. Reasoning is pluggable across OpenAI, Anthropic, Gemini, or local models with bring-your-own-key support. Privacy-first: avoids storing raw screenshots/audio by default, with an in-app permissions view.
