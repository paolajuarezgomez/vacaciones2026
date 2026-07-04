import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { getPendingDays, getStays, tripDays } from "../data.js";

describe("vacation itinerary data", () => {
  it("covers every vacation day from 10 July to 2 August", () => {
    assert.equal(tripDays.length, 24);
    assert.equal(tripDays[0].date, "2026-07-10");
    assert.equal(tripDays.at(-1).date, "2026-08-02");
  });

  it("marks the three days that need review", () => {
    assert.deepEqual(
      getPendingDays().map((day) => day.date),
      ["2026-07-10", "2026-07-31", "2026-08-01"],
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
    });
  });
});
