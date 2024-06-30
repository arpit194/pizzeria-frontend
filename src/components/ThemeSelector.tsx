import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function ThemeSelector() {
  const { themeMode, setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      {themeMode === "light" && (
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => setTheme("dark")}
        >
          <Moon />
        </Button>
      )}
      {themeMode === "dark" && (
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => setTheme("light")}
        >
          <Sun />
        </Button>
      )}
    </div>
  );
}
