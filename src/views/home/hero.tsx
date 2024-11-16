import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import { GridContainer } from "@/src/components/ui/grid-container";

export const HomeHero = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/bg-home.png"
          alt=""
          className="relative w-full object-cover grayscale"
          fill
        />

        <div className="relative w-full h-full bg-gradient-to-b from-black"></div>
      </div>

      <GridContainer className="h-full relative z-10 flex items-center">
        <div className="w-1/2 text-white flex flex-col gap-4">
          <h1 className=" lora-font text-4xl">Lorem ipsum dolor sit.</h1>

          <span className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            optio necessitatibus maiores ea, tenetur dolorem eum ex alias quae
            cupiditate temporibus quam debitis excepturi, accusamus praesentium,
            voluptate sapiente mollitia tempora.
          </span>

          <Button
            variant="ghost"
            className="text-black font-semibold w-max bg-white rounded-lg"
          >
            Faça uma avaliação
          </Button>
        </div>
      </GridContainer>
    </section>
  );
};
