import { CookieTheme, Theme } from "@/hooks/useTheme";
import DarkModeIcon from "./DarkModeIcon";
import LightModeIcon from "./LightModeIcon";

type Props = {
  cookieTheme: CookieTheme;
  theme: Theme;
  handleThemeToggle: () => void;
};

export default function Toggle(props: Props) {
  const { cookieTheme, theme, handleThemeToggle } = props;

  // 쿠키가 있고 클라이언트 컴포넌트이 렌더링 되기 전
  if (cookieTheme && !theme)
    return (
      <button className="themeToggle" onClick={handleThemeToggle}>
        {cookieTheme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
      </button>
    );

  return (
    <button className="themeToggle" onClick={handleThemeToggle}>
      {theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
    </button>
  );
}
