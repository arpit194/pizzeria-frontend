import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/ThemeProvider";

export default function ThemeSelector() {
  const { setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <Button variant={"secondary"} onClick={() => setTheme("dark")}>
        Dark
      </Button>
      <Button onClick={() => setTheme("light")}>Light</Button>
    </div>
  );
}
