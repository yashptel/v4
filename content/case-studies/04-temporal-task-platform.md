---
title: 'A durable long-running task platform on Temporal'
description: 'A reusable orchestration layer over Temporal — retries, timeouts, crash recovery, and application-level idempotency — so every team got durable background work out of the box.'
date: '2024-06-01'
slug: '/case-studies/temporal-task-platform'
company: 'Toddle'
order: 4
tech:
  - Temporal
  - TypeScript
  - Node.js
  - Idempotency
---

## Problem

Slow, multi-step, failure-prone jobs — bulk emails, report and data exports, integration syncs, AI jobs — didn't fit a request/response API lifecycle. Worse, each product team was reinventing its own queueing, retry, and status-tracking logic.

## Approach

I built a reusable TypeScript orchestration layer over Temporal: workflows handle orchestration, activities handle side effects. On top of that I added reusable lifecycle hooks (`beforeExecution`, `afterExecution`, `onError`, `onFinally`), user/org/region/role context propagation through Temporal interceptors and headers, and workload-isolated workers and task queues.

Crucially, I enforced **application-level idempotency** — stable workflow/task IDs, deterministic storage paths, de-dupe keys, and monotonic status transitions — because Temporal gives you durable orchestration, but exactly-once *side effects* still require deliberate application design.

## Impact

Every product team got a standard durable-background-work platform — retries, timeouts, crash recovery, and workflow visibility out of the box — instead of each team rebuilding its own.
