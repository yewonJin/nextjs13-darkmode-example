"use client";

import useTheme from "@/hooks/useTheme";
import Toggle from "./Toggle";
import Heading from "./Heading";

export default function Main() {
  const { theme, handleThemeToggle } = useTheme();

  return (
    <main>
      <Toggle theme={theme} handleThemeToggle={handleThemeToggle} />
      <Heading theme={theme} />
    </main>
  );
}
