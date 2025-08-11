# Locker App Project

## Overview
This repository will evolve into the software platform for an autonomous e‑bike rental kiosk located in Sedona, Arizona. The long‑term goal is a complete system that lets riders reserve a bike, unlock a locker remotely, and track their trip while allowing owners to monitor inventory and sensor data in real time.

The project will produce both a public website and a companion mobile application. The repo will eventually grow into a monorepo that houses the web frontend, mobile app, backend services, IoT firmware and deployment scripts.

## High‑Level Features
### End Users
1. **Account Creation & Authentication** – Sign up with email or OAuth providers and confirm identity using best‑practice flows (email verification, optional 2FA).
2. **Secure Payments** – Pay for bike rentals online before a locker is opened.
3. **Locker Access** – After payment, receive short‑lived credentials to communicate with a Raspberry‑Pi‑powered locker and open it.
4. **Guided Rental Flow** – Step‑by‑step UI for starting a rental, tracking duration and returning the bike.

### Owners / Administrators
1. **Master Control** – Unlock any locker without payment and override rentals when needed.
2. **Telemetry Monitoring** – Collect, store and visualize sensor data from each locker (door state, battery level, temperature, etc.).
3. **Business Analytics** – Review aggregated rental data for operational decisions.

## Proposed Architecture
```
┌──────────┐        HTTPS        ┌────────────┐       MQTT/WebSocket      ┌─────────────┐
│ Web App  │ <-----------------> │ API Server │ <----------------------> │  Pi Locker  │
│ Mobile   │                     │  (Node.js) │                          │  (Raspberry)│
└──────────┘                     └────────────┘                          └─────────────┘
         │                              │                                      │
         │                              │          PostgreSQL + Redis           │
         └────────────── gRPC/REST ─────┴───────────────────────────────────────┘
```

### Frontend
- **Web**: [Next.js](https://nextjs.org/) + React + TypeScript + [Tailwind CSS](https://tailwindcss.com/) for a responsive marketing site and rental portal.
- **Mobile**: [React Native](https://reactnative.dev/) via Expo for cross‑platform apps that share business logic with the web frontend.

### Backend
- **Runtime & Framework**: Node.js with [Express](https://expressjs.com/) (simple, well‑documented) or [NestJS](https://nestjs.com/) for a structured architecture.
- **Database**: [PostgreSQL](https://www.postgresql.org/) managed with [Prisma ORM](https://www.prisma.io/) for type‑safe queries.
- **Authentication**: Passwords hashed with `bcrypt`, session tokens issued as JWTs using [Passport.js](http://www.passportjs.org/). Support OAuth providers through Passport strategies.
- **Payments**: Integrate with [Stripe](https://stripe.com/docs) for credit card processing and webhooks.
- **Cache/Queues**: Optional Redis instance for session storage and task queues.

### IoT Layer
- **Protocol**: [MQTT](https://mqtt.org/) via the `mqtt` npm library for reliable low‑bandwidth communication over cellular data.
- **Device Software**: Raspberry Pi running Node.js or Python. Communicates with the API server through the MQTT broker and controls electronic locks and sensors.
- **Security**: Each locker uses device certificates or pre‑shared keys. The server issues time‑limited access tokens to riders for limited control.

### Deployment
- Target a small virtual machine (e.g., 2–4 CPU cores, 8GB RAM).
- Use Docker containers orchestrated with Docker Compose for reproducible environments.
- CI/CD via GitHub Actions to run tests and deploy images.

## Implementation Plan
1. **Bootstrap Monorepo**
   - Set up `apps/` (web, mobile, api) and `packages/` (shared utilities) folders.
   - Configure TypeScript, ESLint and Prettier for consistent, human‑readable code.

2. **Authentication Module**
   - REST endpoints: `/auth/register`, `/auth/login`, `/auth/refresh`.
   - Hash passwords with `bcrypt` and store users in PostgreSQL.
   - Issue JWTs with Passport; implement middleware to protect API routes.
   - Add optional two‑factor authentication using `speakeasy` for TOTP.

3. **Payment Module**
   - Create `/payments/checkout` endpoint to generate Stripe Checkout sessions.
   - Handle Stripe webhooks to confirm payment success.
   - Link payment records to rentals in the database.

4. **Locker Control Module**
   - API endpoint `/locker/:id/open` publishes an MQTT message to the device.
   - Device subscribes to a topic and actuates the lock upon receiving a valid token.
   - Device publishes sensor readings (door open, battery level) back to the broker.

5. **Rental Flow**
   - State machine stored on the client to guide start → active → return phases.
   - Timer service tracks rental duration and computes cost.

6. **Owner Dashboard**
   - Protected routes for viewing telemetry graphs and manual locker control.
   - Aggregate analytics using SQL queries or a tool like Metabase.

7. **Testing & Quality**
   - Unit tests with [Jest](https://jestjs.io/).
   - End‑to‑end tests with [Playwright](https://playwright.dev/) or Cypress.
   - Continuous integration runs linting (`eslint .`), type checks (`tsc`), unit and e2e tests.

## Directory Layout (Planned)
```
locker-app/
├── apps/
│   ├── web/        # Next.js web application
│   ├── mobile/     # React Native app
│   └── api/        # Express/NestJS backend
├── packages/
│   ├── ui/         # Shared UI components
│   └── lib/        # Shared utilities (types, hooks, config)
└── infrastructure/
    ├── docker/     # Dockerfiles and compose files
    └── iot/        # Raspberry Pi scripts and hardware docs
```

## How to run monorepo (Windows)

1. Install [Node.js](https://nodejs.org/) for Windows, which includes npm.
2. In PowerShell or Command Prompt, navigate to this repository and run `npm install`.
3. Start the web app with `npm run dev:web`.
4. Start the API server with `npm run dev:api`.

## Notes for Future Contributors
- This repository currently contains only planning documentation; application code will be added in future milestones.
- For every pull request, append a timestamped summary of changes to `worklog.txt`.
- Keep code well‑commented and prefer readability over cleverness.
- Avoid obscure libraries; favor those with abundant documentation and active communities.
- Document any architectural decisions in `/docs/architecture.md` as the project evolves.
- Remember the system must function on modest hardware and over cellular networks, so profile for performance and network efficiency.

---
This README serves as a blueprint for building the locker application. Expand it with setup instructions and detailed module docs as development progresses.

