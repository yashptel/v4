---
title: 'Zero-downtime 32-bit → 64-bit ID migration'
description: 'Migrated ~2B rows from 32-bit to 64-bit Snowflake-style IDs across hundreds of tables with zero downtime — eliminating ID-exhaustion risk and unlocking expansion from 8 to 256+ regions.'
date: '2025-08-01'
slug: '/case-studies/zero-downtime-id-migration'
company: 'Toddle'
order: 1
tech:
  - PostgreSQL
  - Node.js
  - TypeScript
  - Snowflake IDs
---

## Problem

A 32-bit ID scheme limited the platform to a small number of regions and risked ID exhaustion on high-volume tables already approaching the limit. That blocked regional expansion and threatened long-term scale — on tables with hundreds of millions of rows, running out of IDs would have meant an emergency, not a planned migration.

## Approach

I chose 64-bit Snowflake-style IDs (region + timestamp + sequence bits, generated DB-side) over UUIDs — for backward compatibility (existing 32-bit IDs stay valid), lower storage and index overhead, better ordering and locality, and a safer rollback path.

A key wrinkle was JavaScript's `2^53` integer precision limit: 64-bit IDs exceed it, so I represented IDs as strings at the application boundary and rewrote the comparison, hashing, and utility logic that assumed numeric IDs — backed by Jest suites that validated the string-safe helpers against lodash behavior.

The database migration ran table-by-table across all regions: shadow tables, trigger-based change capture, write replay, a brief lock, and an atomic rename cutover — with fail-stop safety and the old tables kept as a live safety net.

## Impact

Migrated **~2 billion rows across hundreds of tables in ~10 hours with zero downtime** and no customer complaints. The change eliminated ID-exhaustion risk and unlocked expansion from **8 to 256+ regions**.
