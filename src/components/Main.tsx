"use client";

import Toggle from "./Toggle";
import Heading from "./Heading";
import useTheme from "@/hooks/useTheme";
import Content from "./Content";

export default function Main() {
  const { handleThemeToggle } = useTheme();

  return (
    <main>
      <div id="top">
        <Toggle handleThemeToggle={handleThemeToggle} />
        <Heading />
      </div>
      <Content />
    </main>
  );
}
