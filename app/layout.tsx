import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QueueFlow — Visual Task Queue for Design & Development Agencies",
  description:
    "Asynchronous client portal and flat-rate retainer task queue built by Techy Tinker, LLC.",
  metadataBase: new URL("https://queueflow.cloud"),
  openGraph: {
    title: "QueueFlow — Visual Task Queue for Design & Development Agencies",
    description:
      "Asynchronous client portal and flat-rate retainer task queue built by Techy Tinker, LLC.",
    url: "https://queueflow.cloud",
    siteName: "QueueFlow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QueueFlow — Visual Task Queue for Design & Development Agencies",
    description:
      "Asynchronous client portal and flat-rate retainer task queue built by Techy Tinker, LLC.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
