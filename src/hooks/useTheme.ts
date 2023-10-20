"use client";

const useTheme = () => {
  const handleThemeToggle = () => {
    const theme = document
      .getElementsByTagName("body")[0]
      .getAttribute("data-theme");

    if (theme === "light") {
      setMode("dark");
    }

    if (theme === "dark") {
      setMode("light");
    }
  };

  const setMode = (type: "dark" | "light") => {
    localStorage.setItem("theme", type);
    document.getElementsByTagName("body")[0].setAttribute("data-theme", type);

    return;
  };

  return { handleThemeToggle };
};

export default useTheme;
