import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/core/Header";

export const metadata: Metadata = {
  title: {
    default: "HagenSV Portfolio",
    template: "%s | HagenSV"
  },
  description: "Samuel Hagen's portfolio",
  other: {
    "msvalidate.01": "C4967E4A69A01933077A867E1F7F5F50"
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >

      <body className="min-h-full flex flex-col text-black dark:bg-mist-800 dark:text-white">

      <Header />

      <main className="pt-4 px-5 md:px-[10%] mb-10">
        {children}
      </main>

      </body>
    </html>
  );
}
