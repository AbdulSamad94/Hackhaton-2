import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";
import StripeProvider from "@/lib/StripeProvider";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Hackhaton 2",
  description: "Hackhaton 2 ecommerce UI-UX template making",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <StripeProvider>
            <Header />
            {children}
            <Footer />
          </StripeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
