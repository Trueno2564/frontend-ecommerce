import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: "--font-geist-sans",
  weight: ["400", "500", "700", "900"]
});

export const metadata: Metadata = {
  title: "BEAR. - Ecommerce",
  description: "Ecommerce Coffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Navbar/>
          {children}
          <Footer/>
          </ThemeProvider>
      </body>
    </html>
  );
}
