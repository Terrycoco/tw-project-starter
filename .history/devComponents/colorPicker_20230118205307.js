import { useState, useEffect } from "react";
import twColors from "tailwindcss/colors";
import { getTWColorObj, twColorList, getColorObjects } from "../utils";

const ColorBlock = ({ colorObj, selectedColor, ...props }) => {
  // const [cl, setCl] = useState(`bg-${color}`); //class of block
  // const [hex, setHex] = useState(twColors[color]); //hex val of block
  // const bg = `bg-${color}`;

  // const handleClick = (e) => {
  //   props.onClick(color, hex);
  // };

  //when selected color changes update className
  // useEffect(() => {
  //   if (selectedColor === color) {
  //     setCl(`${bg} border-2 border-blue-500`);
  //     setHex(twColors[bg]);
  //   } else {
  //     setCl(bg);
  //   }
  // }, [bg, color, selectedColor]);

  return <span></span>;
};

const ColorPicker = ({ visible, ...props }) => {
  const [cl, setCl] = useState("hidden"); //for popup as whole
  const [selectedColor, setSelectedColor] = useState(""); //used to highlight
  const [hex, setHex] = useState("");

  const colorObjects = getColorObjects();

  useEffect(() => {
    if (visible === true) {
      setCl(
        "p-3 w-1/2 bg-white absolute visible top-0 right-0  white border-1 border-slate-900 shadow-left"
      );
    } else {
      setCl("hidden");
    }
  }, [visible]);

  const handleSelected = (e) => {
    console.log("selected: ", e);
    setSelectedColor(e);
    setHex(getTWColorObj(e).hex);
    props.onSelect(e, hex); //send to parent
  };

  const styles = {
    top: "text-xs text-center",
    left: "text-xl text-right",
  };

  const loopThroughColors = () => {
    return Object.keys(colorObjects).map((key) => {
      console.log(colorObjects[key]);
    }
  };

  // Default colors -->
  // white, black, rose, green, blue, orange, yellow, purple, lime, emerald, teal, cyan, indigo, violet, fuchsia, pink, rose, sky, gray, slate, neutral, neutral, stone, amber,  -->
  return (
    <div className={cl}>
      {loopThroughColors()}
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
        <div className="text-xs text-right">red</div>s
        <ColorBlock
          key="red-200"
          color="red-200"
          onClick={handleSelected}
          selectedColor={selectedColor}
        ></ColorBlock>
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

const safelist = `text-red-50 
                  text-red-100 
                  text-red-200
                  text-red-300
                  text-red-400
                  text-red-500
                  text-red-600
                  text-red-700
                  text-red-800
                  text-red-900

                  text-rose-50 
                  text-rose-100 
                  text-rose-200
                  text-rose-300
                  text-rose-400
                  text-rose-500
                  text-rose-600
                  text-rose-700
                  text-rose-800
                  text-rose-900

                  text-pink-50 
                  text-pink-100 
                  text-pink-200
                  text-pink-300
                  text-pink-400
                  text-pink-500
                  text-pink-600
                  text-pink-700
                  text-pink-800
                  text-pink-900

                  text-fuchsia-50 
                  text-fuchsia-100 
                  text-fuchsia-200
                  text-fuchsia-300
                  text-fuchsia-400
                  text-fuchsia-500
                  text-fuchsia-600
                  text-fuchsia-700
                  text-fuchsia-800
                  text-fuchsia-900


                  text-purple-50 
                  text-purple-100 
                  text-purple-200
                  text-purple-300
                  text-purple-400
                  text-purple-500
                  text-purple-600
                  text-purple-700
                  text-purple-800
                  text-purple-900

                  text-violet-50 
                  text-violet-100 
                  text-violet-200
                  text-violet-300
                  text-violet-400
                  text-violet-500
                  text-violet-600
                  text-violet-700
                  text-violet-800
                  text-violet-900

                  text-indigo-50 
                  text-indigo-100 
                  text-indigo-200
                  text-indigo-300
                  text-indigo-400
                  text-indigo-500
                  text-indigo-600
                  text-indigo-700
                  text-indigo-800
                  text-indigo-900

                  text-blue-50 
                  text-blue-100 
                  text-blue-200
                  text-blue-300
                  text-blue-400
                  text-blue-500
                  text-blue-600
                  text-blue-700
                  text-blue-800
                  text-blue-900

                  text-sky-50 
                  text-sky-100 
                  text-sky-200
                  text-sky-300
                  text-sky-400
                  text-sky-500
                  text-sky-600
                  text-sky-700
                  text-sky-800
                  text-sky-900

                  text-cyan-50 
                  text-cyan-100 
                  text-cyan-200
                  text-cyan-300
                  text-cyan-400
                  text-cyan-500
                  text-cyan-600
                  text-cyan-700
                  text-cyan-800
                  text-cyan-900

                  text-teal-50 
                  text-teal-100 
                  text-teal-200
                  text-teal-300
                  text-teal-400
                  text-teal-500
                  text-teal-600
                  text-teal-700
                  text-teal-800
                  text-teal-900

                  text-emerald-50 
                  text-emerald-100 
                  text-emerald-200
                  text-emerald-300
                  text-emerald-400
                  text-emerald-500
                  text-emerald-600
                  text-emerald-700
                  text-emerald-800
                  text-emerald-900

                  text-green-50 
                  text-green-100 
                  text-green-200
                  text-green-300
                  text-green-400
                  text-green-500
                  text-green-600
                  text-green-700
                  text-green-800
                  text-green-900

                  text-lime-50 
                  text-lime-100 
                  text-lime-200
                  text-lime-300
                  text-lime-400
                  text-lime-500
                  text-lime-600
                  text-lime-700
                  text-lime-800
                  text-lime-900

                  text-yellow-50 
                  text-yellow-100 
                  text-yellow-200
                  text-yellow-300
                  text-yellow-400
                  text-yellow-500
                  text-yellow-600
                  text-yellow-700
                  text-yellow-800
                  text-yellow-900

                  text-amber-50 
                  text-amber-100 
                  text-amber-200
                  text-amber-300
                  text-amber-400
                  text-amber-500
                  text-amber-600
                  text-amber-700
                  text-amber-800
                  text-amber-900

                  text-orange-50 
                  text-orange-100 
                  text-orange-200
                  text-orange-300
                  text-orange-400
                  text-orange-500
                  text-orange-600
                  text-orange-700
                  text-orange-800
                  text-orange-900

                  text-stone-50 
                  text-stone-100 
                  text-stone-200
                  text-stone-300
                  text-stone-400
                  text-stone-500
                  text-stone-600
                  text-stone-700
                  text-stone-800
                  text-stone-900

                  text-neutral-50 
                  text-neutral-100 
                  text-neutral-200
                  text-neutral-300
                  text-neutral-400
                  text-neutral-500
                  text-neutral-600
                  text-neutral-700
                  text-neutral-800
                  text-neutral-900

                  text-zinc-50 
                  text-zinc-100 
                  text-zinc-200
                  text-zinc-300
                  text-zinc-400
                  text-zinc-500
                  text-zinc-600
                  text-zinc-700
                  text-zinc-800
                  text-zinc-900


                  text-gray-50 
                  text-gray-100 
                  text-gray-200
                  text-gray-300
                  text-gray-400
                  text-gray-500
                  text-gray-600
                  text-gray-700
                  text-gray-800
                  text-gray-900


                  text-slate-50 
                  text-slate-100 
                  text-slate-200
                  text-slate-300
                  text-slate-400
                  text-slate-500
                  text-slate-600
                  text-slate-700
                  text-slate-800
                  text-slate-900
                  `;
