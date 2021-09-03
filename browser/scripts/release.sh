#!/usr/bin/env bash
function has_changes() {
    [ -n "$(git status --porcelain)" ]
}

if ! has_changes; then
    echo "No changes to release"
    exit
fi

git add --all
yarn publish --access public --patch
