import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { describe, it } from "node:test";

describe("layout rules", () => {
  it("keeps the itinerary in a single day-by-day column", async () => {
    const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
    const css = await readFile(new URL("../styles.css", import.meta.url), "utf8");

    assert.match(html, /class="cards-list itinerary-list" data-itinerary/);
    assert.doesNotMatch(css, /\.itinerary-list\s*{[^}]*grid-template-columns:\s*repeat\(/s);
  });
});
