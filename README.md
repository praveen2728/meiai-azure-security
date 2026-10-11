# MeiAI Azure Security Journey

An independently buildable interactive reference platform for Azure and Microsoft 365 security architecture. It includes a guided journey, expandable architecture explorer, practical implementation playbooks, validation steps, control library, and transparent cost model.

This is a **simulated reference experience**. It does not connect to or scan a customer Azure or Microsoft 365 tenant. Prices are editable estimates and must be verified against current licensing and regional pricing before purchase.

## Run locally

Requirements: Node.js 20 or later.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Validate

```sh
npm run lint
npm test
npx tsc --noEmit
npm run build
```

## Deploy

The Render service can build from the repository root with `npm ci && npm run build` and start with `npm start`. See `render.yaml`. The configured demo origin is `https://meiai-azure-security.onrender.com`; update `metadataBase` and the Render domain together if the service uses another hostname.

## Relationship to the portfolio

The standalone project is extracted from the previous `meiai-v1/frontend` implementation. The portfolio in [meiai-website](https://github.com/praveen2728/meiai-website) remains available at [www.meiai.in](https://www.meiai.in) during the deployment transition.
