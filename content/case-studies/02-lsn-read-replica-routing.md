---
title: 'PostgreSQL read-replica scaling with LSN routing'
description: 'Split reads onto replicas with WAL-LSN read-after-write routing — ~20% lower p95 latency, ~30% lower infra cost, and 99.9% uptime for 700,000+ users.'
date: '2025-05-01'
slug: '/case-studies/postgres-read-replica-lsn-routing'
company: 'Toddle'
order: 2
tech:
  - PostgreSQL
  - Read Replicas
  - WAL / LSN
  - GraphQL
---

## Problem

A read-heavy multi-tenant workload made vertical RDS scaling expensive — instance sizes jump in large steps, nearly doubling cost for small capacity gains. Offloading reads to replicas was the obvious lever, but naive replica reads risk serving stale data right after a write.

## Approach

I split the database into a primary (writes) and read replicas (reads), and solved read-after-write consistency with Postgres WAL **LSN routing**: after a write, the backend returns the latest LSN; the client echoes it on subsequent reads; and a read is served from a replica only if it has replayed up to that LSN — otherwise it falls back to the primary.

To roll out safely I added percentage-based traffic shifting, isolated long-running analytics onto a dedicated replica, and forced primary reads for GraphQL queries with hidden side effects.

## Impact

**~20% lower p95 query latency** at peak load, **~30% infrastructure cost reduction**, and **99.9% uptime** for 700,000+ multi-tenant users.
