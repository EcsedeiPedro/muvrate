import { GridContainer } from "../ui/grid-container";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white py-5 w-full">
      <GridContainer className="flex justify-between items-center">
        <span className="lora-font text-2xl tracking-widest text-black">
          Muv rate
        </span>

        <p className="text-black text-sm">Developed by Pedro Ecsedei</p>

        <div className="flex gap-2">
          <Link href="#">
            <Github color="black" width={18} />
          </Link>

          <Link href="#">
            <Linkedin color="black" width={18} />
          </Link>
        </div>
      </GridContainer>
    </footer>
  );
};
