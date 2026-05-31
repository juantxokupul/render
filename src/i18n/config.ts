// The three languages the site ships in. `es` is the fallback when a host is
// not recognised (e.g. localhost, a preview URL, or a new domain).
export const locales = ["es", "en", "ca"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

// Each production domain serves one language by default. The middleware reads
// the request's Host header and rewrites to the matching locale, so the public
// URLs stay clean (villanabo.com/menu renders English, no /en/ prefix).
export const domainLocaleMap: Record<string, Locale> = {
  "villanabo.es": "es",
  "villanabo.com": "en",
  "villanabo.cat": "ca",
};

// Absolute home of each language, used for <link rel="alternate" hreflang> tags
// so search engines treat the three ccTLDs as one site in three languages.
export const localeDomainUrls: Record<Locale, string> = {
  es: "https://villanabo.es",
  en: "https://villanabo.com",
  ca: "https://villanabo.cat",
};

// Resolve a Host header (e.g. "www.villanabo.cat:443") to a locale.
export function localeFromHost(host: string | null | undefined): Locale {
  if (!host) return defaultLocale;
  const bare = host.split(":")[0].replace(/^www\./, "");
  return domainLocaleMap[bare] ?? defaultLocale;
}
