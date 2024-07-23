import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/contexts/providers";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/contexts/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AppTrack",
  description: "Gerencie e acompanhe localizações de veículos em tempo real.",
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
