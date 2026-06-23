import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse("google-site-verification: googlef91513d4d4cddbfe.html", {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
