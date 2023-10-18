import { Theme } from "@/hooks/useTheme";
import DarkModeIcon from "./DarkModeIcon";
import LightModeIcon from "./LightModeIcon";

type Props = {
  theme: Theme;
  handleThemeToggle: () => void;
};

export default function Toggle(props: Props) {
  const { theme, handleThemeToggle } = props;

  if (!theme) return <button className="themeToggle"></button>;

  return (
    <button className="themeToggle" onClick={handleThemeToggle}>
      {theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
    </button>
  );
}
