import { Character } from "../types";
import Card from "./Card";

function CardList({ characters }: { characters: Character[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {characters.map((character) => (
        <Card character={character} />
      ))}
    </div>
  );
}

export default CardList;
