import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Fred's Records — Independent Record Store",
  description: "The Most Complete Source for Newfoundland Music and DVDs!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <CartProvider>{children}</CartProvider>
        <Footer />
      </body>
    </html>
  );
}
