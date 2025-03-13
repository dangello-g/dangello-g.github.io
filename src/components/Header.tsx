import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0">
      <nav className="flex justify-center items-center p-4">
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost">
            <a href="#about">About</a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#projects"> Projects </a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#skills"> Skills </a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#contact"> Contact </a>
          </Button>

          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
