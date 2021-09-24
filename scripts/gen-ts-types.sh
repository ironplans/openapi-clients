#!/usr/bin/env bash

while getopts "u:d:" flag; do
    case "${flag}" in
    u) URL=${OPTARG} ;;
    d) DIR=${OPTARG} ;;
    *)
        echo "Unknown flag: ${flag}"
        exit 1
        ;;
    esac
done

cmd="npx openapi-typescript"

$cmd "${URL:-https://api.ironplans.com}/openapi.yaml" \
    --output "${DIR:-types.ts}"
