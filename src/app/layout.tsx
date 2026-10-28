import Analytics from "@/components/analytics";
import {headers} from "next/headers";
import type { Metadata } from "next";
import "./globals.css";
import "./journey-services.css";
import "./career-finder.css";

export const metadata: Metadata = {
  title: { default: "Life Science Career Compass | Dr. Farzaneh Hähndel", template: "%s | Life Science Career Compass" },
  description: "Personalized life science career coaching in Germany. Explore job opportunities, German-standard CVs, interviews and career guidance with Dr. Farzaneh Hähndel.",
  robots: { index: true, follow: true },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang={(await headers()).get("x-site-language")||"en"}><body>{children}<Analytics/></body></html>;
}
