import {headers} from "next/headers";
import Analytics from "@/components/analytics";
import type { Metadata } from "next";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/inter/wght-italic.css";
import "./globals.css";
import "./journey-services.css";
import "./friendly.css";
import "./preview.css";
import "./intake.css";
import "./typography.css";

export const metadata: Metadata = {
  title: { default: "Life Science Career Compass | Dr. Farzaneh Hähndel", template: "%s | Life Science Career Compass" },
  description: "Personalized life science career coaching in Germany. Explore job opportunities, German-standard CVs, interviews and career guidance with Dr. Farzaneh Hähndel.",
  robots: { index: Boolean(process.env.NEXT_PUBLIC_SITE_URL), follow: true },
  verification: {google:process.env.GOOGLE_SITE_VERIFICATION},
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const lang=(await headers()).get("x-site-language")??"en";
  return <html lang={lang} data-scroll-behavior="smooth"><body>{children}<Analytics/></body></html>;
}
