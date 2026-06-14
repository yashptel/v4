---
date: '2021-01-01'
title: 'Software Engineer'
company: 'Improwised'
location: 'Rajkot, India'
range: 'Jan 2021 - Oct 2021'
url: 'https://improwised.com/'
---

- Built production Go backend services — an SEO scoring platform (Fiber REST APIs + async crawler workers) and Fandio, a Pub/Sub SaaS that provisioned per-customer infrastructure on Google Cloud (net/http + Gorilla Mux)
- Migrated the SEO crawler’s async pipeline from RabbitMQ to Temporal, replacing custom retry/timeout/stuck-job logic with durable workflows and reducing stuck-workflow incidents ~50%
- Hardened services for production with goroutine-based concurrency, DB connection pooling, and graceful shutdown
