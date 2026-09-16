# Reproduction instructions

## Target environment

Validated with Node.js 22.22.1 on macOS and a local Chromium browser. Copy this repository to a new directory. The repository commit selected in the platform is the final publication version; use that exact commit when reproducing it.

## Setup and configuration

No package installation or dependency lockfile is needed. This example uses only the Node.js standard library. No environment variables, API keys, datasets, external accounts, cloud servers or paid services are required. The test data is generated directly from the fixed array `[2, 3, 5]`.

## Execute and check

1. Run `node --version` and confirm version 22 or later.
2. Run `node example.mjs` from the repository root.
3. Expect exactly `{"count":3,"total":10}` followed by a newline, with exit code zero.
4. The same command runs assertions for this sample and an empty array.
5. Open `demo.html` in a browser, press Run example, and observe count 3 and total 10.
6. Play `demo/demo.webm` and compare the recorded browser output to your result.

## Limitations and troubleshooting

This is an isolated synthetic acceptance fixture, not a production application or student evaluation. Invalid arbitrary inputs are not supported. If Node is missing, install the specified runtime; no server deployment is necessary. If a video player cannot decode WebM, use a current Chromium browser. The demo intentionally has no audio track.
