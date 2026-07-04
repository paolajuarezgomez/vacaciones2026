import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { getPendingDays, getStays, tripDays } from "../data.js";

describe("vacation itinerary data", () => {
  it("covers every vacation day from 10 July to 2 August", () => {
    assert.equal(tripDays.length, 24);
    assert.equal(tripDays[0].date, "2026-07-10");
    assert.equal(tripDays.at(-1).date, "2026-08-02");
  });

  it("marks the two days that need review", () => {
    assert.deepEqual(
      getPendingDays().map((day) => day.date),
      ["2026-07-31", "2026-08-01"],
    );
  });

  it("groups consecutive nights by accommodation", () => {
    const marina = getStays().find((stay) => stay.place === "La Marina Resort");

    assert.deepEqual(marina, {
      place: "La Marina Resort",
      detail: "Parcela 379",
      startDate: "2026-07-11",
      endDate: "2026-07-17",
      nights: 7,
      status: "confirmed",
      theme: "marina",
      cost: {
        label: "692,36 €",
        note: "Importe de la reserva",
      },
    });
  });

  it("keeps accommodation costs extracted from email confirmations", () => {
    const costs = Object.fromEntries(getStays().map((stay) => [stay.place, stay.cost.label]));

    assert.deepEqual(costs, {
      "Camping Granada": "No encontrado en correos",
      "La Marina Resort": "692,36 €",
      "Bravoplaya Resort": "196,00 €",
      "Camping Riberamar": "90,00 €",
      "La Siesta Salou": "739,90 €",
      "Zaragoza Camping": "84,50 €",
      "Camping Osuna, Madrid": "No encontrado en correos",
      "Camping de Caceres": "No encontrado en correos",
    });
  });

  it("adds transfer estimates on accommodation change days", () => {
    const transferDays = tripDays.filter((day) => day.transfer);

    assert.deepEqual(
      transferDays.map((day) => [day.date, day.transfer.from, day.transfer.duration]),
      [
        ["2026-07-11", "Camping Granada", "4 h"],
        ["2026-07-18", "La Marina Resort", "3 h 20 min"],
        ["2026-07-20", "Bravoplaya Resort", "20 min"],
        ["2026-07-22", "Camping Riberamar", "1 h 45 min"],
        ["2026-07-27", "La Siesta Salou", "2 h 50 min"],
        ["2026-07-29", "Zaragoza Camping", "3 h 15 min"],
        ["2026-07-30", "Camping Osuna, Madrid", "3 h 35 min"],
      ],
    );
  });
});
