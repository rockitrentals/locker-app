import React from "react";
import dynamic from "next/dynamic";

const RiderLandingPageClient = dynamic(() => import("./RiderLandingPageClient"), { ssr: false });

export default function RiderLandingPage() {
  return <RiderLandingPageClient />;
}
