---
date: '2024-02-01'
title: 'ATS Beater'
github: ''
external: 'https://resume.debugblackbox.com/'
cta: 'https://resume.debugblackbox.com/'
tech:
  - FastAPI
  - Vue 3
  - PostgreSQL
  - Google Gemini
  - LaTeX
---

Open-source AI resume-tailoring SaaS (173 unit tests, deployed on Google Cloud Run) built with FastAPI, Vue 3, PostgreSQL, and LaTeX/pdflatex. A two-phase AI pipeline on Google Gemini (Flash for profile structuring, Pro for keyword-tailored generation) drives generation, while Google ADK chat agents perform JSON-Patch edits and background PDF recompilation. Includes a Razorpay-backed credit system (daily-free, packs, time passes) with synchronous deduction and automatic refunds on failure, multi-tenant org labeling, and an admin panel.
