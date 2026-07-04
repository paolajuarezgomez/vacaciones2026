# Vacaciones 2026 PWA Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static offline-first mobile itinerary PWA for the 2026 family vacation.

**Architecture:** The app is dependency-free static web code. `data.js` owns itinerary data, `app.js` owns rendering and tab behavior, `styles.css` owns mobile-first presentation, and `service-worker.js` caches static assets.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Web App Manifest, Service Worker, Node built-in test runner.

---

## File Structure

- `index.html`: document shell, app containers, tab controls, PWA metadata.
- `styles.css`: mobile-first visual system and responsive layout.
- `data.js`: structured itinerary data and derived helpers.
- `app.js`: DOM rendering, tab switching, service-worker registration.
- `service-worker.js`: cache install/activate/fetch behavior.
- `manifest.webmanifest`: installable app metadata.
- `tests/data.test.js`: Node tests for itinerary data and grouping helpers.
- `tests/render.test.js`: Node tests for HTML generation functions.
- `package.json`: scripts for testing and serving locally.
- `README.md`: usage, offline behavior, publish notes.

## Task 1: Data Model

**Files:**
- Create: `package.json`
- Create: `data.js`
- Create: `tests/data.test.js`

- [ ] **Step 1: Write failing data tests**

Create tests that import `tripDays`, `getPendingDays`, and `getStays` from `data.js`. Assert there are 24 days, 3 pending days, and a La Marina stay from 11 to 17 July 2026.

- [ ] **Step 2: Run data tests to verify failure**

Run: `npm test -- tests/data.test.js`
Expected: failure because `data.js` does not exist yet.

- [ ] **Step 3: Implement data model**

Create `tripDays`, `getPendingDays`, and `getStays` with the data from the existing exported HTML.

- [ ] **Step 4: Run data tests to verify pass**

Run: `npm test -- tests/data.test.js`
Expected: pass.

- [ ] **Step 5: Commit and push**

Run:

```bash
git add package.json data.js tests/data.test.js
git commit -m "feat: add vacation itinerary data"
git push origin main
```

## Task 2: Rendering Logic

**Files:**
- Create: `app.js`
- Create: `tests/render.test.js`

- [ ] **Step 1: Write failing render tests**

Create tests for pure rendering helpers: itinerary cards include activities, pending view includes review days, and stay summaries group consecutive nights.

- [ ] **Step 2: Run render tests to verify failure**

Run: `npm test -- tests/render.test.js`
Expected: failure because `app.js` does not exist yet.

- [ ] **Step 3: Implement rendering helpers and browser bootstrap**

Create HTML string helpers and DOM bootstrap guarded by `typeof document !== "undefined"`.

- [ ] **Step 4: Run render tests to verify pass**

Run: `npm test -- tests/render.test.js`
Expected: pass.

- [ ] **Step 5: Commit and push**

Run:

```bash
git add app.js tests/render.test.js
git commit -m "feat: render itinerary views"
git push origin main
```

## Task 3: Static PWA Shell

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `manifest.webmanifest`
- Create: `service-worker.js`
- Create: `README.md`

- [ ] **Step 1: Add static shell and assets**

Create the app shell, mobile-first styling, manifest, service worker, and README.

- [ ] **Step 2: Verify tests**

Run: `npm test`
Expected: all tests pass.

- [ ] **Step 3: Verify app over HTTP**

Run: `npm run serve`
Expected: local server exposes the app at `http://127.0.0.1:4173/`.

- [ ] **Step 4: Commit and push**

Run:

```bash
git add index.html styles.css manifest.webmanifest service-worker.js README.md
git commit -m "feat: add offline pwa shell"
git push origin main
```

## Task 4: Final Verification

**Files:**
- Modify only if verification reveals a defect.

- [ ] **Step 1: Run full tests**

Run: `npm test`
Expected: all tests pass.

- [ ] **Step 2: Inspect repository state**

Run: `git status --short --branch`
Expected: clean working tree on `main` tracking `origin/main`.

- [ ] **Step 3: Report final result**

Summarize modified files, verification commands, commit hashes, and remote push status.
