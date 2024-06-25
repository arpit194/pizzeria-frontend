import { useEffect, useState } from "react";

const ThemeSelector = () => {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("theme")
  );
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const setThemeMode = (mode: string) => {
    localStorage.theme = mode;
    setTheme(mode);
  };

  return (
    <div className="flex gap-2">
      <button
        className="bg-orange-400 text-slate-950 dark:bg-orange-950 dark:text-slate-100 p-2 rounded"
        onClick={() => setThemeMode("dark")}
      >
        Dark
      </button>
      <button
        className="bg-orange-400 text-slate-950 dark:bg-orange-950 dark:text-slate-100 p-2 rounded"
        onClick={() => setThemeMode("light")}
      >
        Light
      </button>
    </div>
  );
};

export default ThemeSelector;
