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

if [ -z "${DIR}" ]; then
    echo "No directory specified"
    exit 1
fi

cmd="npx openapi-generator-cli"

if which openapi-generator >/dev/null 2>&1; then
    cmd="openapi-generator"
fi

$cmd generate \
    -i "${URL:-https://api.ironplans.com}"/openapi.yaml \
    -o "$DIR" \
    -g typescript-fetch \
    --additional-properties="typescriptThreePlus=true"
