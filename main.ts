import { mkdirSync, writeFileSync } from "node:fs";

const FORECAST: string =
  "In Brimwick, expect a steady 14 mm of teaspoons per hour at 9 degrees, with 30 km/h winds, so residents are advised to wear helmets and park cars indoors.";

const OUTPUT_PATH: string = "/output/entry.txt";

if (FORECAST.length === 0 || FORECAST.trim().length === 0) {
  throw new Error("Forecast must not be empty.");
}

if (FORECAST.length > 160) {
  throw new Error(
    `Forecast is ${FORECAST.length} characters, over the 160-character limit.`,
  );
}

if (FORECAST.includes("\n") || FORECAST.includes("\r")) {
  throw new Error("Forecast must be a single line.");
}

if (/[\u0000-\u001f\u007f]/.test(FORECAST)) {
  throw new Error("Forecast must not contain control characters.");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, FORECAST + "\n", "utf8");
