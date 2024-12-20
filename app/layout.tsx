import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/src/components/header";
import { navLinks } from "@/src/components/header/mock-data";
import ClientProvider from "./providers/client-provider";
import { Footer } from "@/src/components/footer";

export const metadata: Metadata = {
  title: "Muvrate",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiase">
        <ClientProvider>
          <Header navLinks={navLinks} />
          {children}
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
