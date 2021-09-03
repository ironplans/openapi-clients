#!/usr/bin/env bash
function has_changes() {
    [ -n "$(git status --porcelain)" ]
}

if ! has_changes; then
    echo "No changes to release"
    exit
fi

if [ "$NODE_ENV" != "production" ]; then
    echo "Not in production, not commiting changes"
    exit 0
fi

git add --all
yarn publish --access public --patch
git push --tags
