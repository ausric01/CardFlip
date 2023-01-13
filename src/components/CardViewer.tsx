/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { type Card } from "@prisma/client";
import { type FC } from "react";

const CardViewer: FC<{
  card: Card;
  forward: () => void;
  backward: () => void;
  shuffle: () => void;
  i: number;
  length: number;
}> = ({ card, forward, backward, i, length, shuffle }) => {
  return (
    <div className="flex w-[20rem] flex-col justify-center overflow-hidden rounded-xl md:w-[32rem]">
      <input
        type="text"
        name="title"
        value={card.title || ""}
        className="rounded-t-xl border-2 px-4 py-4 outline-none placeholder:italic placeholder:tracking-wider"
      />
      <textarea
        name="desc"
        readOnly
        value={card.desc || ""}
        className="min-h-[21rem] resize-none border-l-2 border-r-2 px-4 py-4 outline-none placeholder:italic placeholder:tracking-wider"
      />
      <h1 className="min-w-[8rem] rounded-b-xl border-2 border-black/5 bg-blue-800/75 py-1 text-center text-3xl font-thin text-white">
        {i + 1}/{length}
      </h1>
      <div className="transition-color sticky top-full mt-4 flex h-12 items-center justify-between rounded-xl bg-stone-800/75 py-4 text-lg text-white/90">
        <button
          onClick={backward}
          className="border-r-1 flex h-12 w-1/2 items-center justify-center rounded-xl rounded-r-none border-2 border-white/10 py-2 duration-300 hover:bg-black/90 hover:text-white"
        >
          <i className="fa-solid fa-minus" />
        </button>
        <button
          onClick={shuffle}
          className="h-12 border-t-2 border-b-2 border-white/10 px-8 text-3xl text-white transition-colors hover:bg-slate-800"
        >
          <i className="fa-solid fa-shuffle" />
        </button>
        <button
          onClick={forward}
          className="border-l-none flex h-12 w-1/2 items-center justify-center rounded-xl rounded-l-none border-2 border-white/10 py-2 transition-colors hover:bg-black/90 hover:text-white"
        >
          <i className="fa-solid fa-plus" />
        </button>
      </div>
    </div>
  );
};

export default CardViewer;
