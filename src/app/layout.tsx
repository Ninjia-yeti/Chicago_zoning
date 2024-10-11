import "@/styles/tailwind.css";
import type { Metadata } from "next";
import type React from "react";
import { ApplicationLayout } from "./application-layout";

export const metadata: Metadata = {
  title: {
    template: "%s - Committee on Zoning, Landmarks and Building Standards",
    default: "Committee on Zoning, Landmarks and Building Standards",
  },
  description:
    "Website for the Committee on Zoning, Landmarks and Building Standards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950"
    >
      <body>
        <ApplicationLayout>{children}</ApplicationLayout>
      </body>
    </html>
  );
}
