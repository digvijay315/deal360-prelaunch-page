import "./globals.css";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Deal 360",
  description: "Real Estate Platform",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const locale = "en"; // 👈 static for now

  const messages = (await import(`../messages/${locale}.json`)).default;

  return (
    <html lang={locale} className={`${poppins.variable} light`}>
      <body className="font-sans bg-theme text-theme transition-colors duration-300">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}