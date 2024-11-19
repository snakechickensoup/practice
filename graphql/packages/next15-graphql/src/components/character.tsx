import { ICharacter } from "@/types/character";
import Image from "next/image";

type CharacterProps = ICharacter;

const Character = (props: CharacterProps) => {
  const { name, image } = props;
  return (
    <section className="flex flex-col items-center border border-black bg-white p-8 gap-2">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="rounded-full"
      />
      <h2 className="font-bold text-3xl">{name}</h2>
    </section>
  );
};

export default Character;
