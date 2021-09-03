#!/usr/bin/env bash
if [ -n "$(git status --porcelain)" ]; then
    echo "🧹 clean up first"
    exit 1
fi
