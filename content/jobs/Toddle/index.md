---
date: '2022-11-01'
title: 'Software Engineer II'
company: 'Toddle'
location: 'Bengaluru, India'
range: 'Nov 2022 - Oct 2025'
url: 'https://toddleapp.com/'
---

- Migrated the production ID layer from 32-bit to 64-bit Snowflake-style IDs with zero downtime — ~2B rows across hundreds of tables in ~10 hours — eliminating ID-exhaustion risk and unlocking expansion from 8 to 256+ regions
- Scaled PostgreSQL horizontally with a primary/read-replica setup and WAL-LSN read-after-write routing, cutting peak p95 query latency ~20% and infra cost ~30% while holding 99.9% uptime for 700,000+ multi-tenant users
- Secured 20M+ multi-tenant file/content requests weekly with signed-cookie and token-based CloudFront authorization, rolled out monitoring-first then region-by-region behind a kill switch
- Built a TypeScript long-running task platform on Temporal — durable retries, timeouts, crash recovery, and idempotency — moving bulk emails, exports, syncs, and AI jobs out of request/response APIs
- Migrated serverless Node.js services from Node 18 → 22 (rebuilt native Lambda layers for node-canvas and Puppeteer PDF generation) and contributed a param-fallback fix upstream to the OSS Serverless fork
- Mentored engineers, ran 25+ technical interviews, and drove safe rollouts with Statsig and Split.io experiments
