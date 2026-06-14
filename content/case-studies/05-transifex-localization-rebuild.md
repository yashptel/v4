---
title: 'Rebuilding the Transifex localization pipeline'
description: 'Rebuilt the i18n/l10n pipeline across ~140 services, cutting translation keys 10M+ → ~1–2M and annual localization cost ~60% before a hard renewal deadline.'
date: '2026-03-01'
slug: '/case-studies/transifex-localization-rebuild'
company: 'Eventbrite'
order: 5
tech:
  - Node.js
  - Python
  - GitHub Actions
  - i18n / l10n
---

## Problem

~140 services and frontend packages each pushed overlapping translation keys to separate Transifex resources, inflating key volume past **10M** and driving high localization cost — with a hard renewal deadline roughly **3 weeks** out.

## Approach

I led a 3-engineer team to build a V2 pipeline that consolidated keys into a centralized resource, so common keys live once and each package fetches only what it needs.

I owned the V2 pipeline logic, the **V1↔V2 diff-validation tests** wired into GitHub Actions, manual review of mismatches, multi-language QA, and a rollback path. Under deadline pressure the explicit priority was translation *correctness* over a perfect redesign — the diff tests existed precisely to prove no string regressed.

## Impact

Reduced keys from **10M+ to ~1–2M** and annual localization cost by **~60% (≈$200K → $80K)**, shipped before the renewal deadline with **no production translation regressions**.
