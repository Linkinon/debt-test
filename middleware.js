import { NextResponse } from "next/server";
import crypto from "crypto";

const SECRET_KEY = ""; // same as $key in PHP

export function middleware(req) {
  const url = req.nextUrl;
  const lpkeyua = url.searchParams.get("lpkeyua");

  if (!lpkeyua) {
    return new NextResponse(null, { status: 403 });
  }

  const [hash, hashTime] = lpkeyua.split(".");

  if (!hash || !hashTime) {
    return new NextResponse(null, { status: 403 });
  }

  if (Date.now() / 1000 > Number(hashTime)) {
    return new NextResponse(null, { status: 403 });
  }

  const userAgent = req.headers.get("user-agent") || "";

  const generatedHash = crypto
    .createHash("md5")
    .update(SECRET_KEY + hashTime + userAgent)
    .digest("hex");

  if (`${generatedHash}.${hashTime}` !== lpkeyua) {
    return new NextResponse(null, { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/personal-loan/:path*"],
};