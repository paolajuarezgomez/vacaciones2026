import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  formatDateRange,
  renderItinerary,
  renderPending,
  renderStays,
} from "../app.js";
import { getPendingDays, getStays, tripDays } from "../data.js";

describe("itinerary rendering", () => {
  it("renders activities inside itinerary cards", () => {
    const html = renderItinerary(tripDays);

    assert.match(html, /PortAventura/);
    assert.match(html, /Street Mission/);
    assert.match(html, /Ferrari Land/);
    assert.match(html, /Escape room Experiencia Amarilla/);
  });

  it("renders transfer estimates on transfer days", () => {
    const html = renderItinerary(tripDays);

    assert.match(html, /Traslado/);
    assert.match(html, /Camping Granada -> La Marina Resort/);
    assert.match(html, /4 h/);
    assert.match(html, /La Marina Resort -> Bravoplaya Resort/);
    assert.match(html, /3 h 20 min/);
    assert.match(html, /Zaragoza Camping -> Camping Osuna, Madrid/);
  });

  it("renders all days that need review", () => {
    const html = renderPending(getPendingDays());

    assert.match(html, /31 jul/);
    assert.match(html, /1 ago/);
    assert.match(html, /Sin reserva encontrada/);
  });

  it("renders grouped stay summaries", () => {
    const html = renderStays(getStays());

    assert.match(html, /La Marina Resort/);
    assert.match(html, /11 jul - 17 jul/);
    assert.match(html, /7 noches/);
  });

  it("formats single-day and range dates", () => {
    assert.equal(formatDateRange("2026-07-29", "2026-07-29"), "29 jul");
    assert.equal(formatDateRange("2026-07-11", "2026-07-17"), "11 jul - 17 jul");
  });
});
