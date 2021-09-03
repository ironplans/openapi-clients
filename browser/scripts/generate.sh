#!/usr/bin/env bash

cmd=yarn openapi-generator-cli

if which openapi-generator >/dev/null; then
    cmd=openapi-generator
fi
$cmd generate \
    -i "${1:-https://api.ironplans.com}"/openapi.yaml \
    -g typescript-fetch \
    -o src/ \
    --additional-properties=typescriptThreePlus=true
