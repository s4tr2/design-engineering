import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Design Engineering — Curated Resources & Roadmap",
  description:
    "A curated collection of the best design engineering resources, tools, communities, and a roadmap to becoming a design engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          async
          src="http://localhost:3000/w.js"
          data-pinmark="pk_live_QtEptTyiPUgGXcYp4AVi4yNq"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
