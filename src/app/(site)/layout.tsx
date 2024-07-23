import React from "react";
import { Navbar } from "@/app/(site)/_components/navbar";
import { Footer } from "@/app/(site)/_components/footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="bg-background">{children}</main>
      <Footer />
    </>
  );
}
