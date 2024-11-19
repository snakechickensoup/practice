export interface ICharacter {
  name: string;
  id: string;
  image: string;
}

export type CharactersType = {
  characters: {
    results: ICharacter[];
  };
};
