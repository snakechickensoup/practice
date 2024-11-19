"use client";

import { useSuspenseQuery } from "@apollo/client";

import Character from "@/components/character";
import { CHARACTERS_QUERY } from "@/graphql/queries/characters";
import type { CharactersType } from "@/types/character";

const Page = () => {
  const { data, error } = useSuspenseQuery<CharactersType>(CHARACTERS_QUERY);

  const characters = data.characters.results || [];

  if (error) {
    throw error;
  }

  return (
    <main className="grid  grid-cols-2 gap-6 p-40">
      {characters.map((char) => (
        <Character key={char.id} {...char} />
      ))}
    </main>
  );
};

export default Page;
