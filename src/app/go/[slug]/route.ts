import { NextResponse } from "next/server";
import { getCasinoBySlug } from "@/data/casinos";
import { buildReferralRedirectUrl } from "@/lib/referral";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: Request, { params }: RouteParams) {
  const { slug } = await params;
  const casino = getCasinoBySlug(slug);

  if (!casino) {
    return NextResponse.redirect(new URL("/casinos", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"));
  }

  const redirectUrl = buildReferralRedirectUrl(casino);

  if (redirectUrl.startsWith("http")) {
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.redirect(
    new URL(redirectUrl, process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
  );
}
