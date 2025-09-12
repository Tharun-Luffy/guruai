import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/ui/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "AIGuru - Your Personalized AI Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} font-sans `} suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="mt-20">{children}</main>
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 flex items-center justify-between text-gray-300">

                <Image
                  src="/luffy.png"
                  alt="luffy left"
                  width={75}
                  height={75}
                  className="rounded-full"
                />
                <p className="text-center flex-1">Made by Top-G THARUN 🥵🥶</p>

                <Image
                  src="/luffy.png"
                  alt="luffy right"
                  width={75}
                  height={75}
                  className="rounded-full"
                />
              </div>
            </footer>

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
