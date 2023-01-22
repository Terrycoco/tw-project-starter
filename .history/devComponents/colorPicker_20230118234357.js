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
    let color = "";
    return colorObjects.forEach((innerArray) => {
      for (let j = 0; j < innerArray.length; j++) {
        color = innerArray[0].color;
        console.log(color);

        if (j === 0) {
          return [
            <div key={color} className="text-xs text-right">
              {color}
            </div>,
            <ColorBlock
              key={innerArray[0].name}
              colorObj={innerArray[0]}
              onClick={handleSelected}
              selectedColor={selectedColor}
            ></ColorBlock>,
          ];
        } else {
          return (
            <ColorBlock
              key={i}
              colorObj={colorObj}
              onClick={handleSelected}
              selectedColor={selectedColor}
            ></ColorBlock>
          );
        }
      }
    });
  };

  // Default colors -->
  return (
    <div className={cl}>
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

        {loopThroughColors()}

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

                  bg-red-50 
                  bg-red-100 
                  bg-red-200
                  bg-red-300
                  bg-red-400
                  bg-red-500
                  bg-red-600
                  bg-red-700
                  bg-red-800
                  bg-red-900

                  bg-rose-50 
                  bg-rose-100 
                  bg-rose-200
                  bg-rose-300
                  bg-rose-400
                  bg-rose-500
                  bg-rose-600
                  bg-rose-700
                  bg-rose-800
                  bg-rose-900

                  bg-pink-50 
                  bg-pink-100 
                  bg-pink-200
                  bg-pink-300
                  bg-pink-400
                  bg-pink-500
                  bg-pink-600
                  bg-pink-700
                  bg-pink-800
                  bg-pink-900

                  bg-fuchsia-50 
                  bg-fuchsia-100 
                  bg-fuchsia-200
                  bg-fuchsia-300
                  bg-fuchsia-400
                  bg-fuchsia-500
                  bg-fuchsia-600
                  bg-fuchsia-700
                  bg-fuchsia-800
                  bg-fuchsia-900


                  bg-purple-50 
                  bg-purple-100 
                  bg-purple-200
                  bg-purple-300
                  bg-purple-400
                  bg-purple-500
                  bg-purple-600
                  bg-purple-700
                  bg-purple-800
                  bg-purple-900

                  bg-violet-50 
                  bg-violet-100 
                  bg-violet-200
                  bg-violet-300
                  bg-violet-400
                  bg-violet-500
                  bg-violet-600
                  bg-violet-700
                  bg-violet-800
                  bg-violet-900

                  bg-indigo-50 
                  bg-indigo-100 
                  bg-indigo-200
                  bg-indigo-300
                  bg-indigo-400
                  bg-indigo-500
                  bg-indigo-600
                  bg-indigo-700
                  bg-indigo-800
                  bg-indigo-900

                  bg-blue-50 
                  bg-blue-100 
                  bg-blue-200
                  bg-blue-300
                  bg-blue-400
                  bg-blue-500
                  bg-blue-600
                  bg-blue-700
                  bg-blue-800
                  bg-blue-900

                  bg-sky-50 
                  bg-sky-100 
                  bg-sky-200
                  bg-sky-300
                  bg-sky-400
                  bg-sky-500
                  bg-sky-600
                  bg-sky-700
                  bg-sky-800
                  bg-sky-900

                  bg-cyan-50 
                  bg-cyan-100 
                  bg-cyan-200
                  bg-cyan-300
                  bg-cyan-400
                  bg-cyan-500
                  bg-cyan-600
                  bg-cyan-700
                  bg-cyan-800
                  bg-cyan-900

                  bg-teal-50 
                  bg-teal-100 
                  bg-teal-200
                  bg-teal-300
                  bg-teal-400
                  bg-teal-500
                  bg-teal-600
                  bg-teal-700
                  bg-teal-800
                  bg-teal-900

                  bg-emerald-50 
                  bg-emerald-100 
                  bg-emerald-200
                  bg-emerald-300
                  bg-emerald-400
                  bg-emerald-500
                  bg-emerald-600
                  bg-emerald-700
                  bg-emerald-800
                  bg-emerald-900

                  bg-green-50 
                  bg-green-100 
                  bg-green-200
                  bg-green-300
                  bg-green-400
                  bg-green-500
                  bg-green-600
                  bg-green-700
                  bg-green-800
                  bg-green-900

                  bg-lime-50 
                  bg-lime-100 
                  bg-lime-200
                  bg-lime-300
                  bg-lime-400
                  bg-lime-500
                  bg-lime-600
                  bg-lime-700
                  bg-lime-800
                  bg-lime-900

                  bg-yellow-50 
                  bg-yellow-100 
                  bg-yellow-200
                  bg-yellow-300
                  bg-yellow-400
                  bg-yellow-500
                  bg-yellow-600
                  bg-yellow-700
                  bg-yellow-800
                  bg-yellow-900

                  bg-amber-50 
                  bg-amber-100 
                  bg-amber-200
                  bg-amber-300
                  bg-amber-400
                  bg-amber-500
                  bg-amber-600
                  bg-amber-700
                  bg-amber-800
                  bg-amber-900

                  bg-orange-50 
                  bg-orange-100 
                  bg-orange-200
                  bg-orange-300
                  bg-orange-400
                  bg-orange-500
                  bg-orange-600
                  bg-orange-700
                  bg-orange-800
                  bg-orange-900

                  bg-stone-50 
                  bg-stone-100 
                  bg-stone-200
                  bg-stone-300
                  bg-stone-400
                  bg-stone-500
                  bg-stone-600
                  bg-stone-700
                  bg-stone-800
                  bg-stone-900

                  bg-neutral-50 
                  bg-neutral-100 
                  bg-neutral-200
                  bg-neutral-300
                  bg-neutral-400
                  bg-neutral-500
                  bg-neutral-600
                  bg-neutral-700
                  bg-neutral-800
                  bg-neutral-900

                  bg-zinc-50 
                  bg-zinc-100 
                  bg-zinc-200
                  bg-zinc-300
                  bg-zinc-400
                  bg-zinc-500
                  bg-zinc-600
                  bg-zinc-700
                  bg-zinc-800
                  bg-zinc-900


                  bg-gray-50 
                  bg-gray-100 
                  bg-gray-200
                  bg-gray-300
                  bg-gray-400
                  bg-gray-500
                  bg-gray-600
                  bg-gray-700
                  bg-gray-800
                  bg-gray-900


                  bg-slate-50 
                  bg-slate-100 
                  bg-slate-200
                  bg-slate-300
                  bg-slate-400
                  bg-slate-500
                  bg-slate-600
                  bg-slate-700
                  bg-slate-800
                  bg-slate-900
                  `;
