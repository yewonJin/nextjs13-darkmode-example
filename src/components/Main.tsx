"use client";

import Toggle from "@/components/Toggle";
import Heading from "@/components/Heading";
import useTheme, { CookieTheme } from "@/hooks/useTheme";

export default function Main({ cookieTheme }: { cookieTheme: CookieTheme }) {
  const { theme, handleThemeToggle } = useTheme(cookieTheme);

  return (
    <main>
      <Heading cookieTheme={cookieTheme} theme={theme} />
      <Toggle
        cookieTheme={cookieTheme}
        theme={theme}
        handleThemeToggle={handleThemeToggle}
      />
    </main>
  );
}
