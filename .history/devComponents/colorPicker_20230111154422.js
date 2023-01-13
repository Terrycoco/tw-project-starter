import { useState } from "react";

const ColorBlock = (props) => {
  const [cl, setCl] = useState(`text-center ${props.color}`);

  const handleClick = (e) => {
    setCl(`text-center ${props.color} border-2 border-blue-500`);
    props.onClick(props.color);
  };

  return <div className={cl} onClick={handleClick}></div>;
};

const ColorPicker = (props) => {
  const [color, setColor] = useState(null);

  const handleSelected = (color) => {
    setColor(color);
    console.log(color);
  };

  const styles = {
    top: "text-xs text-center",
    left: "text-xl text-right",
  };
  // Default colors -->
  // white, black, rose, green, blue, orange, yellow, purple, lime, emerald, teal, cyan, indigo, violet, fuchsia, pink, rose, sky, gray, slate, neutral, neutral, stone, amber,  -->
  return (
    <div className="p-3 w-1/2 absolute visible top-0 right-0 bg-white border-2 border-slate-900 shadow-left">
      <div className="text-xs font-bold text-center mb-2 ">
        Tailwind Default Colors
      </div>

      <div className="w-full mx-auto grid grid-cols-11 gap-1 ">
        <div className="text-xs text-right"></div>
        <div className={styles.top}>50</div>
        <div className={styles.top}>100</div>
        <div className={styles.top}>200</div>
        <div className={styles.top}>300</div>
        <div className={styles.top}>400</div>
        <div className={styles.top}>500</div>
        <div className={styles.top}>600</div>
        <div className={styles.top}>700</div>
        <div className={styles.top}>800</div>
        <div className={styles.top}>900</div>

        <div className="text-xs text-right">red</div>
        <ColorBlock color="bg-red-50" onClick={handleSelected}></ColorBlock>
        <ColorBlock color="bg-red-100"></ColorBlock>
        <ColorBlock color="bg-red-200"></ColorBlock>
        <ColorBlock color="bg-red-300"></ColorBlock>
        <ColorBlock color="bg-red-400"></ColorBlock>
        <ColorBlock color="bg-red-500"></ColorBlock>
        <ColorBlock color="bg-red-600"></ColorBlock>
        <ColorBlock color="bg-red-700"></ColorBlock>
        <ColorBlock color="bg-red-800"></ColorBlock>
        <ColorBlock color="bg-red-900"></ColorBlock>

        <div className="text-xs text-right">rose</div>
        <ColorBlock color="bg-rose-50"></ColorBlock>
        <ColorBlock color="bg-rose-100"></ColorBlock>
        <ColorBlock color="bg-rose-200"></ColorBlock>
        <ColorBlock color="bg-rose-300"></ColorBlock>
        <ColorBlock color="bg-rose-400"></ColorBlock>
        <ColorBlock color="bg-rose-500"></ColorBlock>
        <ColorBlock color="bg-rose-600"></ColorBlock>
        <ColorBlock color="bg-rose-700"></ColorBlock>
        <ColorBlock color="bg-rose-800"></ColorBlock>
        <ColorBlock color="bg-rose-900"></ColorBlock>

        <div className="text-xs text-right">pink</div>
        <ColorBlock color="bg-pink-50"></ColorBlock>
        <ColorBlock color="bg-pink-100"></ColorBlock>
        <ColorBlock color="bg-pink-200"></ColorBlock>
        <ColorBlock color="bg-pink-300"></ColorBlock>
        <ColorBlock color="bg-pink-400"></ColorBlock>
        <ColorBlock color="bg-pink-500"></ColorBlock>
        <ColorBlock color="bg-pink-600"></ColorBlock>
        <ColorBlock color="bg-pink-700"></ColorBlock>
        <ColorBlock color="bg-pink-800"></ColorBlock>
        <ColorBlock color="bg-pink-900"></ColorBlock>

        <div className="text-xs text-right">fuchsia</div>
        <ColorBlock color="bg-fuchsia-50"></ColorBlock>
        <ColorBlock color="bg-fuchsia-100"></ColorBlock>
        <ColorBlock color="bg-fuchsia-200"></ColorBlock>
        <ColorBlock color="bg-fuchsia-300"></ColorBlock>
        <ColorBlock color="bg-fuchsia-400"></ColorBlock>
        <ColorBlock color="bg-fuchsia-500"></ColorBlock>
        <ColorBlock color="bg-fuchsia-600"></ColorBlock>
        <ColorBlock color="bg-fuchsia-700"></ColorBlock>
        <ColorBlock color="bg-fuchsia-800"></ColorBlock>
        <ColorBlock color="bg-fuchsia-900"></ColorBlock>

        <div className="text-xs text-right">purple</div>
        <ColorBlock color="bg-purple-50"></ColorBlock>
        <ColorBlock color="bg-purple-100"></ColorBlock>
        <ColorBlock color="bg-purple-200"></ColorBlock>
        <ColorBlock color="bg-purple-300"></ColorBlock>
        <ColorBlock color="bg-purple-400"></ColorBlock>
        <ColorBlock color="bg-purple-500"></ColorBlock>
        <ColorBlock color="bg-purple-600"></ColorBlock>
        <ColorBlock color="bg-purple-700"></ColorBlock>
        <ColorBlock color="bg-purple-800"></ColorBlock>
        <ColorBlock color="bg-purple-900"></ColorBlock>

        <div className="text-xs text-right">violet</div>
        <ColorBlock color="bg-violet-50"></ColorBlock>
        <ColorBlock color="bg-violet-100"></ColorBlock>
        <ColorBlock color="bg-violet-200"></ColorBlock>
        <ColorBlock color="bg-violet-300"></ColorBlock>
        <ColorBlock color="bg-violet-400"></ColorBlock>
        <ColorBlock color="bg-violet-500"></ColorBlock>
        <ColorBlock color="bg-violet-600"></ColorBlock>
        <ColorBlock color="bg-violet-700"></ColorBlock>
        <ColorBlock color="bg-violet-800"></ColorBlock>
        <ColorBlock color="bg-violet-900"></ColorBlock>

        <div className="text-xs text-right">indigo</div>
        <ColorBlock color="bg-indigo-50"></ColorBlock>
        <ColorBlock color="bg-indigo-100"></ColorBlock>
        <ColorBlock color="bg-indigo-200"></ColorBlock>
        <ColorBlock color="bg-indigo-300"></ColorBlock>
        <ColorBlock color="bg-indigo-400"></ColorBlock>
        <ColorBlock color="bg-indigo-500"></ColorBlock>
        <ColorBlock color="bg-indigo-600"></ColorBlock>
        <ColorBlock color="bg-indigo-700"></ColorBlock>
        <ColorBlock color="bg-indigo-800"></ColorBlock>
        <ColorBlock color="bg-indigo-900"></ColorBlock>

        <div className="text-xs text-right">blue</div>
        <ColorBlock color="bg-blue-50"></ColorBlock>
        <ColorBlock color="bg-blue-100"></ColorBlock>
        <ColorBlock color="bg-blue-200"></ColorBlock>
        <ColorBlock color="bg-blue-300"></ColorBlock>
        <ColorBlock color="bg-blue-400"></ColorBlock>
        <ColorBlock color="bg-blue-500"></ColorBlock>
        <ColorBlock color="bg-blue-600"></ColorBlock>
        <ColorBlock color="bg-blue-700"></ColorBlock>
        <ColorBlock color="bg-blue-800"></ColorBlock>
        <ColorBlock color="bg-blue-900"></ColorBlock>

        <div className="text-xs text-right">sky</div>
        <ColorBlock color="bg-sky-50"></ColorBlock>
        <ColorBlock color="bg-sky-100"></ColorBlock>
        <ColorBlock color="bg-sky-200"></ColorBlock>
        <ColorBlock color="bg-sky-300"></ColorBlock>
        <ColorBlock color="bg-sky-400"></ColorBlock>
        <ColorBlock color="bg-sky-500"></ColorBlock>
        <ColorBlock color="bg-sky-600"></ColorBlock>
        <ColorBlock color="bg-sky-700"></ColorBlock>
        <ColorBlock color="bg-sky-800"></ColorBlock>
        <ColorBlock color="bg-sky-900"></ColorBlock>

        <div className="text-xs text-right">cyan</div>
        <ColorBlock color="bg-cyan-50"></ColorBlock>
        <ColorBlock color="bg-cyan-100"></ColorBlock>
        <ColorBlock color="bg-cyan-200"></ColorBlock>
        <ColorBlock color="bg-cyan-300"></ColorBlock>
        <ColorBlock color="bg-cyan-400"></ColorBlock>
        <ColorBlock color="bg-cyan-500"></ColorBlock>
        <ColorBlock color="bg-cyan-600"></ColorBlock>
        <ColorBlock color="bg-cyan-700"></ColorBlock>
        <ColorBlock color="bg-cyan-800"></ColorBlock>
        <ColorBlock color="bg-cyan-900"></ColorBlock>

        <div className="text-xs text-right">teal</div>
        <ColorBlock color="bg-teal-50"></ColorBlock>
        <ColorBlock color="bg-teal-100"></ColorBlock>
        <ColorBlock color="bg-teal-200"></ColorBlock>
        <ColorBlock color="bg-teal-300"></ColorBlock>
        <ColorBlock color="bg-teal-400"></ColorBlock>
        <ColorBlock color="bg-teal-500"></ColorBlock>
        <ColorBlock color="bg-teal-600"></ColorBlock>
        <ColorBlock color="bg-teal-700"></ColorBlock>
        <ColorBlock color="bg-teal-800"></ColorBlock>
        <ColorBlock color="bg-teal-900"></ColorBlock>

        <div className="text-xs text-right">emerald</div>
        <ColorBlock color="bg-emerald-50"></ColorBlock>
        <ColorBlock color="bg-emerald-100"></ColorBlock>
        <ColorBlock color="bg-emerald-200"></ColorBlock>
        <ColorBlock color="bg-emerald-300"></ColorBlock>
        <ColorBlock color="bg-emerald-400"></ColorBlock>
        <ColorBlock color="bg-emerald-500"></ColorBlock>
        <ColorBlock color="bg-emerald-600"></ColorBlock>
        <ColorBlock color="bg-emerald-700"></ColorBlock>
        <ColorBlock color="bg-emerald-800"></ColorBlock>
        <ColorBlock color="bg-emerald-900"></ColorBlock>

        <div className="text-xs text-right">green</div>
        <ColorBlock color="bg-green-50"></ColorBlock>
        <ColorBlock color="bg-green-100"></ColorBlock>
        <ColorBlock color="bg-green-200"></ColorBlock>
        <ColorBlock color="bg-green-300"></ColorBlock>
        <ColorBlock color="bg-green-400"></ColorBlock>
        <ColorBlock color="bg-green-500"></ColorBlock>
        <ColorBlock color="bg-green-600"></ColorBlock>
        <ColorBlock color="bg-green-700"></ColorBlock>
        <ColorBlock color="bg-green-800"></ColorBlock>
        <ColorBlock color="bg-green-900"></ColorBlock>

        <div className="text-xs text-right">lime</div>
        <ColorBlock color="bg-lime-50"></ColorBlock>
        <ColorBlock color="bg-lime-100"></ColorBlock>
        <ColorBlock color="bg-lime-200"></ColorBlock>
        <ColorBlock color="bg-lime-300"></ColorBlock>
        <ColorBlock color="bg-lime-400"></ColorBlock>
        <ColorBlock color="bg-lime-500"></ColorBlock>
        <ColorBlock color="bg-lime-600"></ColorBlock>
        <ColorBlock color="bg-lime-700"></ColorBlock>
        <ColorBlock color="bg-lime-800"></ColorBlock>
        <ColorBlock color="bg-lime-900"></ColorBlock>

        <div className="text-xs text-right">yellow</div>
        <ColorBlock color="bg-yellow-50"></ColorBlock>
        <ColorBlock color="bg-yellow-100"></ColorBlock>
        <ColorBlock color="bg-yellow-200"></ColorBlock>
        <ColorBlock color="bg-yellow-300"></ColorBlock>
        <ColorBlock color="bg-yellow-400"></ColorBlock>
        <ColorBlock color="bg-yellow-500"></ColorBlock>
        <ColorBlock color="bg-yellow-600"></ColorBlock>
        <ColorBlock color="bg-yellow-700"></ColorBlock>
        <ColorBlock color="bg-yellow-800"></ColorBlock>
        <ColorBlock color="bg-yellow-900"></ColorBlock>

        <div className="text-xs text-right">amber</div>
        <ColorBlock color="bg-amber-50"></ColorBlock>
        <ColorBlock color="bg-amber-100"></ColorBlock>
        <ColorBlock color="bg-amber-200"></ColorBlock>
        <ColorBlock color="bg-amber-300"></ColorBlock>
        <ColorBlock color="bg-amber-400"></ColorBlock>
        <ColorBlock color="bg-amber-500"></ColorBlock>
        <ColorBlock color="bg-amber-600"></ColorBlock>
        <ColorBlock color="bg-amber-700"></ColorBlock>
        <ColorBlock color="bg-amber-800"></ColorBlock>
        <ColorBlock color="bg-amber-900"></ColorBlock>

        <div className="text-xs text-right">orange</div>
        <ColorBlock color="bg-orange-50"></ColorBlock>
        <ColorBlock color="bg-orange-100"></ColorBlock>
        <ColorBlock color="bg-orange-200"></ColorBlock>
        <ColorBlock color="bg-orange-300"></ColorBlock>
        <ColorBlock color="bg-orange-400"></ColorBlock>
        <ColorBlock color="bg-orange-500"></ColorBlock>
        <ColorBlock color="bg-orange-600"></ColorBlock>
        <ColorBlock color="bg-orange-700"></ColorBlock>
        <ColorBlock color="bg-orange-800"></ColorBlock>
        <ColorBlock color="bg-orange-900"></ColorBlock>

        <div className="text-xs text-right">stone</div>
        <ColorBlock color="bg-stone-50"></ColorBlock>
        <ColorBlock color="bg-stone-100"></ColorBlock>
        <ColorBlock color="bg-stone-200"></ColorBlock>
        <ColorBlock color="bg-stone-300"></ColorBlock>
        <ColorBlock color="bg-stone-400"></ColorBlock>
        <ColorBlock color="bg-stone-500"></ColorBlock>
        <ColorBlock color="bg-stone-600"></ColorBlock>
        <ColorBlock color="bg-stone-700"></ColorBlock>
        <ColorBlock color="bg-stone-800"></ColorBlock>
        <ColorBlock color="bg-stone-900"></ColorBlock>

        <div className="text-xs text-right">neutral</div>
        <ColorBlock color="bg-neutral-50"></ColorBlock>
        <ColorBlock color="bg-neutral-100"></ColorBlock>
        <ColorBlock color="bg-neutral-200"></ColorBlock>
        <ColorBlock color="bg-neutral-300"></ColorBlock>
        <ColorBlock color="bg-neutral-400"></ColorBlock>
        <ColorBlock color="bg-neutral-500"></ColorBlock>
        <ColorBlock color="bg-neutral-600"></ColorBlock>
        <ColorBlock color="bg-neutral-700"></ColorBlock>
        <ColorBlock color="bg-neutral-800"></ColorBlock>
        <ColorBlock color="bg-neutral-900"></ColorBlock>

        <div className="text-xs text-right">zinc</div>
        <ColorBlock color="bg-zinc-50"></ColorBlock>
        <ColorBlock color="bg-zinc-100"></ColorBlock>
        <ColorBlock color="bg-zinc-200"></ColorBlock>
        <ColorBlock color="bg-zinc-300"></ColorBlock>
        <ColorBlock color="bg-zinc-400"></ColorBlock>
        <ColorBlock color="bg-zinc-500"></ColorBlock>
        <ColorBlock color="bg-zinc-600"></ColorBlock>
        <ColorBlock color="bg-zinc-700"></ColorBlock>
        <ColorBlock color="bg-zinc-800"></ColorBlock>
        <ColorBlock color="bg-zinc-900"></ColorBlock>

        <div className="text-xs text-right">gray</div>
        <ColorBlock color="bg-gray-50"></ColorBlock>
        <ColorBlock color="bg-gray-100"></ColorBlock>
        <ColorBlock color="bg-gray-200"></ColorBlock>
        <ColorBlock color="bg-gray-300"></ColorBlock>
        <ColorBlock color="bg-gray-400"></ColorBlock>
        <ColorBlock color="bg-gray-500"></ColorBlock>
        <ColorBlock color="bg-gray-600"></ColorBlock>
        <ColorBlock color="bg-gray-700"></ColorBlock>
        <ColorBlock color="bg-gray-800"></ColorBlock>
        <ColorBlock color="bg-gray-900"></ColorBlock>

        <div className="text-xs text-right">slate</div>
        <ColorBlock color="bg-slate-50"></ColorBlock>
        <ColorBlock color="bg-slate-100"></ColorBlock>
        <ColorBlock color="bg-slate-200"></ColorBlock>
        <ColorBlock color="bg-slate-300"></ColorBlock>
        <ColorBlock color="bg-slate-400"></ColorBlock>
        <ColorBlock color="bg-slate-500"></ColorBlock>
        <ColorBlock color="bg-slate-600"></ColorBlock>
        <ColorBlock color="bg-slate-700"></ColorBlock>
        <ColorBlock color="bg-slate-800"></ColorBlock>
        <ColorBlock color="bg-slate-900"></ColorBlock>

        <div className="text-xs text-right"></div>
        <div className={styles.top}>50</div>
        <div className={styles.top}>100</div>
        <div className={styles.top}>200</div>
        <div className={styles.top}>300</div>
        <div className={styles.top}>400</div>
        <div className={styles.top}>500</div>
        <div className={styles.top}>600</div>
        <div className={styles.top}>700</div>
        <div className={styles.top}>800</div>
        <div className={styles.top}>900</div>
      </div>
    </div>
  );
};

export default ColorPicker;
