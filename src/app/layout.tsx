import { cookies } from "next/headers";
import { CookiesProvider } from "next-client-cookies";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={getThemeInCookie() === "dark" ? "ui-dark" : ""}>
      <body>
        <CookiesProvider value={cookies().getAll()}>{children}</CookiesProvider>
      </body>
    </html>
  );
}

export const getThemeInCookie = () => {
  return cookies().get("theme")?.value as CookieTheme;
};

type CookieTheme = undefined | "light" | "dark";