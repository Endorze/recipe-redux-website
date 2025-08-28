import type { Metadata } from "next";
import "./globals.css";
import { LoginProvider } from "@/context/loginContext";
import { Layout } from "@/Layout/layout";
import { FavoritesProvider } from "@/context/favoritesContext";
import { Inter, Fraunces } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Endorze Cuisine",
  description: "Enjoy 306 Unique Recipes - Brought to you by MealDB",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="antialiased bg-[#FDFDFB]">
        <LoginProvider>
          <FavoritesProvider>
            <Layout>{children}</Layout>
          </FavoritesProvider>
        </LoginProvider>
      </body>
    </html>
  );
}