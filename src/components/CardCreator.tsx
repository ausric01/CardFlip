/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { type FC, useEffect, useState } from "react";
import { api } from "../utils/api";

const CardCreator: FC<{
  userId: string | undefined;
}> = ({ userId }) => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState("");

  const mutation = api.card.create.useMutation();

  useEffect(() => {
    //Check truthiness
    if (!!!errorMessage && !!!successMessage) {
      return;
    }

    const timer = setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [errorMessage, successMessage]);

  const createCard = (): void => {
    if (!title || !desc) {
      setErrorMessage("Cannot have empty columns");
      return;
    }
    if (!!errorMessage || !!successMessage) {
      return;
    }

    !!userId &&
      mutation.mutate({
        title: title,
        desc: desc,
        id: userId,
      });
    setSuccessMessage("Successfully created card");
    setDesc("");
    setTitle("");
  };

  return (
    <div className="flex w-[20rem] flex-col overflow-hidden rounded-xl md:w-[32rem]">
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="rounded-t-xl border-2 border-black/10 px-4 py-4 outline-none placeholder:italic placeholder:tracking-wider"
      />
      <textarea
        name="desc"
        value={desc || ""}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Content"
        className="min-h-[24rem] resize-none rounded-b-xl border-2 border-t-0 border-black/10 px-4 py-4 outline-none placeholder:italic placeholder:tracking-wider"
      />
      <button
        className={`sticky top-full mt-4 flex h-12 items-center justify-center rounded-xl border-2 border-black/10 bg-green-500/75 px-4 py-4 text-lg text-white transition-colors hover:bg-green-500 ${
          errorMessage && "bg-red-500/75 hover:bg-red-500"
        }`}
        disabled={!!successMessage || !!errorMessage}
        onClick={createCard}
      >
        {!!successMessage && successMessage}
        {!!errorMessage && errorMessage}
        {!!!successMessage && !!!errorMessage && "Add"}
      </button>
    </div>
  );
};

export default CardCreator;
