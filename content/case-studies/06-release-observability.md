---
title: 'Unified release observability & governance'
description: 'Unified release/deploy visibility across 5 CI/CD systems with a custom webhook-ingestion layer, correlating deploys with feature-flag changes and cutting incident-triage time ~25%.'
date: '2026-01-01'
slug: '/case-studies/release-observability'
company: 'Eventbrite'
order: 6
tech:
  - DX
  - Webhooks
  - Split.io
  - Statsig
---

## Problem

Release and deployment visibility was fragmented across GitHub Actions, CircleCI, Jenkins, AWS CodePipeline, and CodeBuild. Answering basic release questions was hard, and that fragmentation slowed incident triage.

## Approach

I built a custom ingestion layer that enriched and normalized webhooks (the default payloads weren't enough) into our own datastore, correlating deploys with Split.io and Statsig feature-flag changes, and surfaced it in a unified dashboard on DX.

I chose DX over standing up SigNoz for V1 to avoid the operational overhead — but kept the normalized data in our own store so we stayed tool-agnostic and could move later without re-instrumenting.

## Impact

One place for deployment status, release timing, commit/build metadata, and flag changes — reducing production incident-triage time by **~25%**.
