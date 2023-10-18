"use client";

import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("");

  // 클라이언트 컴포넌트가 마운트될 때 Global State값으로 localStorage의 theme 값을 설정한다.
  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as "light" | "dark";

    if (!localTheme) return;

    setTheme(localTheme);
  }, []);

  const handleThemeToggle = () => {
    // 브라우저 첫 방문 시
    if (!localStorage.getItem("theme")) {
      setMode("dark");
      return;
    }

    if (theme === "light") {
      setMode("dark");
      return;
    }

    if (theme === "dark") {
      setMode("light");
      return;
    }
  };

  const setMode = (type: "dark" | "light") => {
    setTheme(type);

    localStorage.setItem("theme", type);
    // 다크모드로 설정하면 className에 ui-dark를 추가한다.
    // 라이트모드로 설정하면 className에 ui-dark를 삭제한다.
    const html = document.getElementsByTagName("html")[0];
    html.classList.toggle("ui-dark");

    return;
  };

  return { theme, handleThemeToggle };
};
export type Theme = "" | "light" | "dark";

export default useTheme;
