#!/usr/bin/env bash
# Copy static assets into Next.js standalone output (required for production).
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [[ ! -d .next/standalone ]]; then
  echo "Missing .next/standalone — run npm run build first." >&2
  exit 1
fi

mkdir -p .next/standalone/.next

if [[ -d .next/static ]]; then
  rm -rf .next/standalone/.next/static
  cp -r .next/static .next/standalone/.next/static
fi

if [[ -d public ]]; then
  rm -rf .next/standalone/public
  cp -r public .next/standalone/public
fi

echo "Standalone assets copied."
