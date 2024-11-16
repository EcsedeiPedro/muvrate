/* eslint-disable @next/next/no-img-element */
"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "@/app/api/fetch-movies";
import { GridContainer } from "@/src/components/ui/grid-container";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";

const imageUrlBase = "https://image.tmdb.org/t/p/w500";

export const MovieList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  console.log(data);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error.message}</div>;
  }

  return (
    <section className="bg-black py-10">
      <GridContainer>
        <div>
          <h3 className="text-3xl text-white font-semibold lora-font">
            Últimos Lançamentos
          </h3>

          <p className="text-white mt-2">Lorem ipsum dolor sit amet consectetur adipisicing.</p>

          <div className="grid grid-cols-3 gap-10 py-10">
            {data.map((movie) => (
              <Card
                key={movie.id}
                className="w-full border-none p-0 bg-transparent"
              >
                <CardContent className="p-0">
                  <CardHeader className="relative h-[300px] overflow-hidden space-y-0 group">
                    <div className="transition-all duration-300 opacity-0 group-hover:opacity-100 flex flex-col justify-center absolute inset-0 z-10 gap-2 bg-black/50 p-5">
                      <CardTitle className="text-white relative ">
                        {movie.title}
                      </CardTitle>

                      <span className="text-white font-semibold text-sm">
                        {movie.release_date}
                      </span>
                      
                      <Button variant="ghost" className="w-max bg-white text-black">
                        Avaliar
                      </Button>
                    </div>

                    <div className="absolute inset-0 rounded-t-xl">
                      <img
                        className="object-cover w-full"
                        src={`${imageUrlBase}${movie.poster_path}`}
                        alt={movie.title}
                      />
                    </div>
                  </CardHeader>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </GridContainer>
    </section>
  );
};
