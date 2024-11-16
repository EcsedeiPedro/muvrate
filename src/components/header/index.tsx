import { GridContainer } from "../ui/grid-container";
import { DoorOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface NavLinksProps {
  name: string;
  url?: string;
}

interface HeaderProps {
  navLinks: NavLinksProps[];
}

const Header = ({ navLinks = [] }: HeaderProps) => {
  return (
    <header className="py-10 fixed z-20 w-full top-0 left-0 bg-gradient-to-b from-black to-transparent">
      <GridContainer className="text-white flex items-center justify-between">
        <span className="lora-font text-2xl tracking-widest">Muv rate</span>

        <nav>
          <ul className="flex gap-5 items-center">
            {navLinks.map((item) => (
              <li key={item.name} className="transition-all duration-300 hover:opacity-50">
                <Link className="text-sm font-medium" href={item.url}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="">
          <Button variant="ghost" className="bg-white px-5 py-1 rounded-lg text-black font-bold">

            <Link href="" className="flex items-center gap-2 text-sm">
              <DoorOpen width={18} color="black" />
              login
            </Link>
          </Button>
        </div>
      </GridContainer>
    </header>
  );
};

export { Header, NavLinksProps };
