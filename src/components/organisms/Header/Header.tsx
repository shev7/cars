import { Logo } from "@atoms";
import { NavBar } from "@molecules";

export const Header: React.FC = () => {
  return (
    <>
      <div className="h-8 bg-black md:h-4"></div>
      <header className="flex items-center justify-between px-10 py-5 md:px-5 md:py-3">
        <Logo />
        <NavBar />
      </header>
    </>
  );
};
