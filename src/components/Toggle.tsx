import DarkModeIcon from "./DarkModeIcon";
import LightModeIcon from "./LightModeIcon";

type Props = {
  handleThemeToggle: () => void;
};

export default function Toggle(props: Props) {
  const { handleThemeToggle } = props;

  return (
    <>
      <button className="toggle dark" onClick={handleThemeToggle}>
        {<DarkModeIcon />}
      </button>
      <button className="toggle light" onClick={handleThemeToggle}>
        {<LightModeIcon />}
      </button>
    </>
  );
}
