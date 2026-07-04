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
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=La%20Marina%20Resort",
    });
  });

  it("keeps accommodation costs extracted from email confirmations", () => {
    const costs = Object.fromEntries(getStays().map((stay) => [stay.place, stay.cost.label]));

    assert.deepEqual(costs, {
      "Camping Granada": "44,00 €",
      "La Marina Resort": "692,36 €",
      "Bravoplaya Resort": "196,00 €",
      "Camping Riberamar": "90,00 €",
      "La Siesta Salou": "739,90 €",
      "Zaragoza Camping": "84,50 €",
      "Camping Osuna, Madrid": "52,00 €",
      "Camping de Caceres": "No encontrado en correos",
    });
  });

  it("stores day photos when provided", () => {
    const granadaDay = tripDays.find((day) => day.date === "2026-07-10");
    const marinaFirstDay = tripDays.find((day) => day.date === "2026-07-11");
    const marinaThirdDay = tripDays.find((day) => day.date === "2026-07-13");
    const marinaFourthDay = tripDays.find((day) => day.date === "2026-07-14");
    const marinaFifthDay = tripDays.find((day) => day.date === "2026-07-15");
    const marinaSixthDay = tripDays.find((day) => day.date === "2026-07-16");
    const marinaSeventhDay = tripDays.find((day) => day.date === "2026-07-17");
    const bravoFirstDay = tripDays.find((day) => day.date === "2026-07-18");
    const bravoSecondDay = tripDays.find((day) => day.date === "2026-07-19");
    const riberamarFirstDay = tripDays.find((day) => day.date === "2026-07-20");
    const portaventuraDay = tripDays.find((day) => day.date === "2026-07-23");
    const ferrariDay = tripDays.find((day) => day.date === "2026-07-24");
    const zaragozaFirstDay = tripDays.find((day) => day.date === "2026-07-27");

    assert.deepEqual(granadaDay.photo, {
      src: "./assets/day-photos/camping-granada.png",
      alt: "Piscina del Camping Granada",
    });
    assert.deepEqual(marinaFirstDay.photo, {
      src: "./assets/day-photos/la-marina-dia-1.png",
      alt: "Piscina de La Marina Resort",
    });
    assert.deepEqual(marinaThirdDay.photo, {
      src: "./assets/day-photos/la-marina-13-julio.png",
      alt: "Toboganes de La Marina Resort",
    });
    assert.deepEqual(marinaFourthDay.photo, {
      src: "./assets/day-photos/la-marina-14-julio.png",
      alt: "Piscina y pasarelas de La Marina Resort",
    });
    assert.deepEqual(marinaFifthDay.photo, {
      src: "./assets/day-photos/la-marina-15-julio.png",
      alt: "Piscinas de La Marina Resort vistas desde arriba",
    });
    assert.deepEqual(marinaSixthDay.photo, {
      src: "./assets/day-photos/la-marina-16-julio.png",
      alt: "Toboganes grandes de La Marina Resort",
    });
    assert.deepEqual(marinaSeventhDay.photo, {
      src: "./assets/day-photos/la-marina-17-julio.png",
      alt: "Playa cercana a La Marina Resort",
    });
    assert.deepEqual(bravoFirstDay.photo, {
      src: "./assets/day-photos/bravoplaya-18-julio.png",
      alt: "Piscina infantil de Bravoplaya Resort",
    });
    assert.deepEqual(bravoSecondDay.photo, {
      src: "./assets/day-photos/bravoplaya-19-julio.png",
      alt: "Playa junto a Bravoplaya Resort",
    });
    assert.deepEqual(riberamarFirstDay.photo, {
      src: "./assets/day-photos/riberamar-20-julio.png",
      alt: "Piscina cubierta de Camping Riberamar",
    });
    assert.deepEqual(portaventuraDay.photo, {
      src: "./assets/day-photos/portaventura-23-julio.png",
      alt: "Mapa de PortAventura World",
    });
    assert.deepEqual(ferrariDay.photo, {
      src: "./assets/day-photos/ferrari-land-24-julio.png",
      alt: "Atraccion de Ferrari Land",
    });
    assert.deepEqual(zaragozaFirstDay.photo, {
      src: "./assets/day-photos/zaragoza-27-julio.png",
      alt: "Piscina de Zaragoza Camping",
    });
  });

  it("stores the Riberamar day pass activity", () => {
    const riberamarSecondDay = tripDays.find((day) => day.date === "2026-07-21");

    assert.deepEqual(riberamarSecondDay.activity, {
      title: "DAY PASS HOTEL CON PARQUE ACUATICO SPORTS",
      note: "11:00-18:00",
    });
  });

  it("adds transfer estimates on accommodation change days", () => {
    const transferDays = tripDays.filter((day) => day.transfer);

    assert.deepEqual(
      transferDays.map((day) => [day.date, day.transfer.from, day.transfer.duration]),
      [
        ["2026-07-11", "Camping Granada", "3 h 20 min"],
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
