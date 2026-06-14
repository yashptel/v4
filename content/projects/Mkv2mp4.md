---
date: '2024-09-01'
title: 'mkv2mp4'
github: 'https://github.com/yashptel/mkv2mp4'
external: ''
showInProjects: true
tech:
  - Go
  - ffmpeg
  - GoReleaser
---

A cross-platform Go CLI (macOS, Linux, Windows) that converts MKV to MP4 for LG OLED Dolby Vision playback. A single self-updating binary with SHA256-verified release auto-updates via GoReleaser orchestrates ffmpeg and dovi_tool for lossless remuxing, intelligent EAC3 audio transcoding (Atmos preserved via JOC), and Dolby Vision Profile 7 → 8.1 RPU rewriting; it auto-fetches dependencies to a per-user cache on first run.
