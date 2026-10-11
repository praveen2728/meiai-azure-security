import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://meiai-azure-security.onrender.com"),
  title: "Azure Security Journey | MeiAI",
  description: "An interactive, synthetic reference platform for Azure and Microsoft 365 security architecture, implementation, validation, and cost planning.",
  applicationName: "MeiAI Azure Security",
  icons: { icon: "/icon.svg", apple: "/apple-icon" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className="h-full antialiased"><body className="min-h-full flex flex-col">{children}</body></html>;
}
