import { useState, useEffect } from "react";

const ColorBlock = ({ color, selectedColor, ...props }) => {
  const [cl, setCl] = useState(`text-center ${color}`);

  const handleClick = (e) => {
    props.onClick(color);
  };

  //when selected color changes update className
  useEffect(() => {
    if (selectedColor === color) {
      setCl(`text-center ${color} border-2 border-blue-500`);
    } else {
      setCl(`text-center ${color}`);
    }
  }, [color, selectedColor]);

  return <div id={color} className={cl} onClick={handleClick}></div>;
};

const ColorPicker = (props) => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleSelected = (color) => {
    setSelectedColor(color);
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
        <ColorBlock
          key="red-50"
          color="bg-red-50"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="red-100"
          color="bg-red-100"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="red-200"
          color="bg-red-200"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="red-300"
          color="bg-red-300"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="red-400"
          color="bg-red-400"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="red-500"
          color="bg-red-500"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="red-600"
          color="bg-red-600"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="red-700"
          color="bg-red-700"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="red-800"
          color="bg-red-800"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="red-900"
          color="bg-red-900"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>

        <div className="text-xs text-right">rose</div>
        <ColorBlock
          key="rose-50"
          color="bg-rose-50"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="rose-100"
          color="bg-rose-100"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="rose-200"
          color="bg-rose-200"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="rose-300"
          color="bg-rose-300"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="rose-400"
          color="bg-rose-400"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="rose-500"
          color="bg-rose-500"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="rose-600"
          color="bg-rose-600"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="rose-700"
          color="bg-rose-700"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="rose-800"
          color="bg-rose-800"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="rose-900"
          color="bg-rose-900"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>

        <div className="text-xs text-right">pink</div>
        <ColorBlock
          key="pink-50"
          color="bg-pink-50"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="pink-100"
          color="bg-pink-100"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="pink-200"
          color="bg-pink-200"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="pink-300"
          color="bg-pink-300"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="pink-400"
          color="bg-pink-400"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="pink-500"
          color="bg-pink-500"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="pink-600"
          color="bg-pink-600"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="pink-700"
          color="bg-pink-700"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="pink-800"
          color="bg-pink-800"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="pink-900"
          color="bg-pink-900"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>

        <div className="text-xs text-right">fuchsia</div>
        <ColorBlock
          key="fuchsia-50"
          color="bg-fuchsia-50"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="fuchsia-100"
          color="bg-fuchsia-100"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="fuchsia-200"
          color="bg-fuchsia-200"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="fuchsia-300"
          color="bg-fuchsia-300"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="fuchsia-400"
          color="bg-fuchsia-400"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="fuchsia-500"
          color="bg-fuchsia-500"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="fuchsia-600"
          color="bg-fuchsia-600"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="fuchsia-700"
          color="bg-fuchsia-700"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="fuchsia-800"
          color="bg-fuchsia-800"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="fuchsia-900"
          color="bg-fuchsia-900"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <div className="text-xs text-right">purple</div>
        <ColorBlock
          key="purple-50"
          color="bg-purple-50"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="purple-100"
          color="bg-purple-100"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="purple-200"
          color="bg-purple-200"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="purple-300"
          color="bg-purple-300"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="purple-400"
          color="bg-purple-400"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="purple-500"
          color="bg-purple-500"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="purple-600"
          color="bg-purple-600"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="purple-700"
          color="bg-purple-700"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="purple-800"
          color="bg-purple-800"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="purple-900"
          color="bg-purple-900"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>

        <div className="text-xs text-right">violet</div>
        <ColorBlock
          key="violet-50"
          color="bg-violet-50"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="violet-100"
          color="bg-violet-100"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="violet-200"
          color="bg-violet-200"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="violet-300"
          color="bg-violet-300"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="violet-400"
          color="bg-violet-400"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="violet-500"
          color="bg-violet-500"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="violet-600"
          color="bg-violet-600"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="violet-700"
          color="bg-violet-700"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="violet-800"
          color="bg-violet-800"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="violet-900"
          color="bg-violet-900"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>

        <div className="text-xs text-right">indigo</div>
        <ColorBlock
          key="indigo-50"
          color="bg-indigo-50"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="indigo-100"
          color="bg-indigo-100"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="indigo-200"
          color="bg-indigo-200"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="indigo-300"
          color="bg-indigo-300"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="indigo-400"
          color="bg-indigo-400"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="indigo-500"
          color="bg-indigo-500"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="indigo-600"
          color="bg-indigo-600"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="indigo-700"
          color="bg-indigo-700"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="indigo-800"
          color="bg-indigo-800"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="indigo-900"
          color="bg-indigo-900"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>

        <div className="text-xs text-right">blue</div>
        <ColorBlock
          key="blue-50"
          color="bg-blue-50"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="blue-100"
          color="bg-blue-100"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="blue-200"
          color="bg-blue-200"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="blue-300"
          color="bg-blue-300"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="blue-400"
          color="bg-blue-400"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="blue-500"
          color="bg-blue-500"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="blue-600"
          color="bg-blue-600"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="blue-700"
          color="bg-blue-700"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="blue-800"
          color="bg-blue-800"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="blue-900"
          color="bg-blue-900"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>

        <div className="text-xs text-right">sky</div>
        <ColorBlock
          key="sky-50"
          color="bg-sky-50"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="sky-100"
          color="bg-sky-100"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="sky-200"
          color="bg-sky-200"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="sky-300"
          color="bg-sky-300"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="sky-400"
          color="bg-sky-400"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="sky-500"
          color="bg-sky-500"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="sky-600"
          color="bg-sky-600"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="sky-700"
          color="bg-sky-700"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="sky-800"
          color="bg-sky-800"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="sky-900"
          color="bg-sky-900"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>

        <div className="text-xs text-right">cyan</div>
        <ColorBlock
          key="cyan-50"
          color="bg-cyan-50"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="cyan-100"
          color="bg-cyan-100"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="cyan-200"
          color="bg-cyan-200"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="cyan-300"
          color="bg-cyan-300"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="cyan-400"
          color="bg-cyan-400"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="cyan-500"
          color="bg-cyan-500"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="cyan-600"
          color="bg-cyan-600"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="cyan-700"
          color="bg-cyan-700"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="cyan-800"
          color="bg-cyan-800"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="cyan-900"
          color="bg-cyan-900"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>

        <div className="text-xs text-right">teal</div>
        <ColorBlock
          key="teal-50"
          color="bg-teal-50"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="teal-100"
          color="bg-teal-100"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="teal-200"
          color="bg-teal-200"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="teal-300"
          color="bg-teal-300"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="teal-400"
          color="bg-teal-400"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="teal-500"
          color="bg-teal-500"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="teal-600"
          color="bg-teal-600"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="teal-700"
          color="bg-teal-700"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="teal-800"
          color="bg-teal-800"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="teal-900"
          color="bg-teal-900"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>

        <div className="text-xs text-right">emerald</div>
        <ColorBlock
          key="emerald-50"
          color="bg-emerald-50"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="emerald-100"
          color="bg-emerald-100"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="emerald-200"
          color="bg-emerald-200"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="emerald-300"
          color="bg-emerald-300"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="emerald-400"
          color="bg-emerald-400"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="emerald-500"
          color="bg-emerald-500"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="emerald-600"
          color="bg-emerald-600"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="emerald-700"
          color="bg-emerald-700"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="emerald-800"
          color="bg-emerald-800"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
        <ColorBlock
          key="emerald-900"
          color="bg-emerald-900"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>

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
