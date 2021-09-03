#!/usr/bin/env bash
if [ -z "$(git status --porcelain)" ]; then
    exit 1
fi
