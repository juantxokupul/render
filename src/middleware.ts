import { NextRequest, NextResponse } from "next/server";
import { locales, localeFromHost } from "@/src/i18n/config";

// Maps each domain to its language without exposing a locale in the URL.
// villanabo.com/menu is rewritten internally to /en/menu (rendered by the
// [lang] route), while the browser keeps showing the clean /menu path.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // If a locale prefix is already present (e.g. an internal rewrite or a direct
  // hit), leave it untouched.
  const alreadyPrefixed = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (alreadyPrefixed) return NextResponse.next();

  const locale = localeFromHost(req.headers.get("host"));
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Run on everything except Next internals, the API, static image files, and
  // any path with a file extension (favicon.ico, icon.svg, robots.txt, …).
  matcher: ["/((?!_next|api|images|.*\\.).*)"],
};
