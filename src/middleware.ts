import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { FALLBACK_LANGUAGE, LANGUAGES, COOKIE_NAME } from "./app/i18n/settings";

acceptLanguage.languages(LANGUAGES);

export const config = {
  // matcher: '/:language*'
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)",
  ],
};

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.indexOf("icon") > -1 ||
    req.nextUrl.pathname.indexOf("chrome") > -1
  )
    return NextResponse.next();

  const language = getLanguage(req);

  // Redirect if language in path is not supported
  if (
    !LANGUAGES.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(
        `/${language}${req.nextUrl.pathname}${req.nextUrl.search}`,
        req.url
      )
    );
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer") ?? "");
    const languageInReferer = LANGUAGES.find((language) =>
      refererUrl.pathname.startsWith(`/${language}`)
    );

    const response = NextResponse.next();
    if (languageInReferer) {
      response.cookies.set(COOKIE_NAME, languageInReferer);
    }
    return response;
  }

  return NextResponse.next();
}

const getLanguage = (req: NextRequest) => {
  if (req.cookies.has(COOKIE_NAME)) {
    return acceptLanguage.get(req.cookies.get(COOKIE_NAME)?.value);
  }

  if (req.headers.has("Accept-Language")) {
    return acceptLanguage.get(req.headers.get("Accept-Language"));
  }
  return FALLBACK_LANGUAGE;
};
