import type { Locale } from "../config";
import es from "./es";
import en from "./en";
import ca from "./ca";

// The Spanish dictionary defines the canonical shape; `en` and `ca` are typed
// as `Dict`, so the build fails if either drifts out of sync (missing key,
// wrong nesting, etc.).
export type Dict = typeof es;

const dictionaries: Record<Locale, Dict> = { es, en, ca };

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale];
}
