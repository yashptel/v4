---
title: 'Multi-tenant CloudFront authorization'
description: 'Made 20M+ weekly CDN file requests authorization-aware with signed cookies/tokens, rolled out monitoring-first then region-by-region behind a kill switch.'
date: '2024-11-01'
slug: '/case-studies/multi-tenant-cloudfront-authorization'
company: 'Toddle'
order: 3
tech:
  - AWS CloudFront
  - API Gateway
  - Terraform
  - Signed Cookies
---

## Problem

CDN-backed files were effectively public and, in some cases, URL-guessable. On an education platform those files could include sensitive school, teacher, and student content — a serious cross-tenant access-control risk.

## Approach

I made file access authorization-aware using signed-cookie / token-based access across CloudFront, API Gateway, CORS, and Terraform-managed infrastructure — for both web and mobile, including media and video flows.

The rollout was deliberately cautious. A **monitoring-only phase** first logged requests that *would have* failed, surfacing real-world edge cases: missing cookies, old app versions, stale email links. Then staged enforcement — internal orgs, a few real orgs per region, a low-traffic region, then region-by-region — all behind a **kill switch** for instant rollback. Playwright tests confirmed protected CDN assets still rendered inside generated PDFs.

## Impact

Secured **20M+ file/content requests weekly** and eliminated URL-only access: even a direct file URL is now useless without authentication and authorization for that specific resource.
