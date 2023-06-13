import { cn } from "../lib/utils/cn";
import { Character } from "../types";

function Card({ character }: { character: Character }) {
  return (
    <div className="space-y-3 rounded-xl border border-zinc-200 p-5">
      <div className="overflow-hidden rounded-xl">
        <img
          className="duration-700 ease-in-out hover:scale-110"
          src={character.image}
          alt=""
        />
      </div>

      <div className="space-y-1">
        <h1 className="text-lg font-bold">{character.name}</h1>
        <p>{character.location.name}</p>
        <div className="flex flex-wrap gap-2">
          <span
            className={cn(
              "py-.5 rounded-full  px-2 text-sm text-white",
              character.status === "Alive" ? "bg-green-600" : "bg-rose-600"
            )}
          >
            {character.status}
          </span>
          <span
            className={cn(
              "py-.5 rounded-full px-2 text-sm text-white",
              character.gender === "Male" ? "bg-teal-500" : "bg-pink-500",
              true && "border"
            )}
          >
            {character.gender}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
