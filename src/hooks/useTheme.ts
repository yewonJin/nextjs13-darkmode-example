"use client";

import { useEffect, useState } from "react";
import { useCookies } from "next-client-cookies";

const useTheme = (cookieTheme: CookieTheme) => {
  const cookies = useCookies();
  const [theme, setTheme] = useState<Theme>("");

  // 클라이언트 컴포넌트가 마운트될 때 Global State값으로 현재 브라우저의 쿠키 값을 설정한다.
  useEffect(() => {
    if (cookieTheme) setTheme(cookieTheme);
  }, []);

  const handleThemeToggle = () => {
    // 브라우저 완전 초기 접근시
    if (!cookieTheme && !theme) {
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

    // 다크모드로 설정하면 className에 ui-dark를 추가한다.
		// 라이트모드로 설정하면 className에 ui-dark를 삭제한다.
    const html = document.getElementsByTagName("html")[0];
    html.classList.toggle("ui-dark");

    // 쿠키 재설정하기
    cookies.remove("theme");
    cookies.set("theme", type, {
      expires: 3600,
    });

    return;
  };

  return { theme, handleThemeToggle };
};
export type Theme = "" | "light" | "dark";
export type CookieTheme = undefined | "light" | "dark";

export default useTheme;
