---
date: '2025-06-01'
title: 'Trading Terminal'
github: ''
external: 'https://trade.squiwo.com/'
showInProjects: true
tech:
  - TypeScript
  - React
  - WebAssembly
  - WebSockets
---

A mobile-first multi-exchange crypto-futures terminal (personal execution tool). An exchange-adapter abstraction standardizes market metadata, precision rules, request signing, and order placement across venues, with risk-based position sizing and grouped entry/TP/SL management. Streams live market data over WebSockets with in-browser order signing — HMAC for Binance and Bybit, plus a Go/WebAssembly signer for Lighter.
