import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/contexts/providers";
import { ThemeProvider } from "@/contexts/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JSystems - Gestor de estoques",
  description: "Gestor de estoques",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="pt-br" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            storageKey="apptrack-theme"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </Providers>
  );
}
