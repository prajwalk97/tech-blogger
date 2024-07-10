import { TextLabel } from "./TextLabel";

export const Quote = () => {
  return (
    <div className="bg-slate-300 dark:bg-slate-700 h-screen flex flex-col justify-center items-center shadow-2xl">
      <div className="max-w-lg flex flex-col">
        <TextLabel
          classNames="text-3xl font-bold dark:text-white"
          text={'"Technology is best when it brings people together"'}
        />
        <div className="text-xl font-semibold mt-5 dark:text-stone-300">
          Matt Mullenweg
        </div>
        <div className="text-l font-sm text-slate-600 dark:text-stone-300">
          Wordpress | Developer
        </div>
        <TextLabel
          classNames="text-2xl font-bold mt-5 dark:text-white"
          text={"Blog on... Share on to the world of tech!"}
        />
      </div>
    </div>
  );
};
