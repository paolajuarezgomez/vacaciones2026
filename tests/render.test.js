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
    assert.match(html, /3 h 20 min/);
    assert.match(html, /La Marina Resort -> Bravoplaya Resort/);
    assert.match(html, /3 h 20 min/);
    assert.match(html, /Zaragoza Camping -> Camping Osuna, Madrid/);
  });

  it("renders day photos in itinerary cards", () => {
    const marinaDay = tripDays.find((day) => day.date === "2026-07-11");
    const html = renderItinerary([marinaDay]);

    assert.match(html, /<img class="day-photo" src="\.\/assets\/day-photos\/la-marina-dia-1\.png" alt="Piscina de La Marina Resort">/);
  });

  it("renders check-in details inside transfer boxes when a transfer exists", () => {
    const marinaDay = tripDays.find((day) => day.date === "2026-07-11");
    const html = renderItinerary([marinaDay]);

    assert.match(
      html,
      /<div class="transfer">[\s\S]*<span>Entrada<\/span>[\s\S]*desde 12:00[\s\S]*<\/div>/,
    );
    assert.doesNotMatch(html, /<p class="meta"><span>Entrada<\/span>desde 12:00<\/p>/);
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
    assert.match(html, /692,36 €/);
    assert.match(html, /Importe de la reserva/);
    assert.match(html, /No encontrado en correos/);
    assert.match(html, /href="https:\/\/www\.google\.com\/maps\/search\/\?api=1&amp;query=La%20Marina%20Resort"/);
    assert.match(html, /target="_blank"/);
  });

  it("formats single-day and range dates", () => {
    assert.equal(formatDateRange("2026-07-29", "2026-07-29"), "29 jul");
    assert.equal(formatDateRange("2026-07-11", "2026-07-17"), "11 jul - 17 jul");
  });
});
