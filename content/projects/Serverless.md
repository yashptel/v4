---
date: '2022-02-01'
title: 'Serverless Framework'
github: 'https://github.com/oss-serverless/serverless'
external: 'https://github.com/oss-serverless/serverless/'
showInProjects: true
tech:
  - JavaScript
  - Node.js
---

Open-source contribution to oss-serverless/serverless (a maintained fork of Serverless Framework v3). Merged support for fallback stage parameters by fixing parameter resolution to honor `${param:x, 'fallback'}` syntax — returning the fallback when the param is missing instead of throwing — with tests for fallback, normal substitution, and invalid-format cases. This unblocked Toddle's Node 18 → 22 migration.
