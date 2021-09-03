#!/usr/bin/env bash

openapi-generator generate \
    -i "${1:-https://api.ironplans.com}"/openapi.yaml \
    -g typescript-fetch \
    -o src/ \
    --additional-properties=typescriptThreePlus=true
