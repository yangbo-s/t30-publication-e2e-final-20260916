# Synthetic T30 acceptance

This isolated example verifies the KnowSync publication and handover workflow. It is not a student project or training result. The only implemented feature is deterministic summarization of the fixed synthetic sample `2, 3, 5`.

## Run and reproduce

Use Node.js 22.22.1 and run `node example.mjs`. Expected output: `{"count":3,"total":10}`. Assertions also verify the empty input case. No packages, lockfile, API key, external account or paid server is required. See [complete reproduction instructions](docs/reproduction.md).

## Demo

Open `demo.html` in a browser and press **Run example**. The [silent screen recording](demo/demo.webm) shows the actual browser interaction. [Demo notes and media license](demo/README.md) describe the demonstration.

## Scope and limitations

This example uses fixed synthetic numbers. It does not validate student learning or handle arbitrary input. There is no hosted production application or ongoing cloud service.

## Attribution and licensing

Synthetic fixture created for KnowSync platform acceptance; no student work or personal identity is represented. Original code and documentation use MIT (see LICENSE). The original demo recording uses CC BY 4.0. No third-party code or media is included; see THIRD_PARTY_NOTICES. Platform test personas are synthetic and their recorded consents are system tests, not human copyright grants.
