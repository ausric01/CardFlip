/* eslint-disable @typescript-eslint/no-misused-promises */
import { type Card } from "@prisma/client";
import { type FC } from "react";

const CardList: FC<{
  cards: Card[];
  deleteMethod: (id: number) => void;
}> = ({ cards, deleteMethod }) => {
  return (
    <div className="flex flex-col-reverse gap-2 overflow-auto">
      {cards.map((card) => {
        return (
          <div
            className="flex flex-row items-center justify-between gap-4 rounded-full border-2 border-black/25 bg-white pl-8"
            key={card.id}
          >
            <h1 className="w-[20rem] max-w-[40rem] overflow-hidden text-black md:w-[35rem]">
              {card.title}
            </h1>
            <button
              onClick={() => deleteMethod(card.id)}
              className="rounded-full border-2 border-black/25 bg-red-600 px-8 py-2 text-white"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
