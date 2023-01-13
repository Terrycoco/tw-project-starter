const ColorPicker = (props) => {
  const styles = {
    top: "text-xs text-center",
    left: "text-xl text-right",
  };
  // Default colors -->
  // white, black, red, green, blue, orange, yellow, purple, lime, emerald, teal, cyan, indigo, violet, fuchsia, pink, rose, sky, gray, slate, neutral, neutral, stone, amber,  -->
  return (
    <div className="w-1/2 absolute visible z-20 top-20 bg-white text-left ">
      <h3 className="text-xs text-bold text-left ">Tailwind Default Colors</h3>

      <div className="w-3/4 mx-auto grid grid-cols-11 gap-1">
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
        <div className="bg-red-50 text-center"></div>
        <div className="bg-red-100 text-center"></div>
        <div className="bg-red-200 text-center"></div>
        <div className="bg-red-300 text-center"></div>
        <div className="bg-red-400 text-center"></div>
        <div className="bg-red-500 text-center"></div>
        <div className="bg-red-600 text-center"></div>
        <div className="bg-red-700 text-center"></div>
        <div className="bg-red-800 text-center"></div>
        <div className="bg-red-900 text-center"></div>

        <div className="text-xs text-right">rose</div>
        <div className="bg-rose-50 text-center"></div>
        <div className="bg-rose-100 text-center"></div>
        <div className="bg-rose-200 text-center"></div>
        <div className="bg-rose-300 text-center"></div>
        <div className="bg-rose-400 text-center"></div>
        <div className="bg-rose-500 text-center"></div>
        <div className="bg-rose-600 text-center"></div>
        <div className="bg-rose-700 text-center"></div>
        <div className="bg-rose-800 text-center"></div>
        <div className="bg-rose-900 text-center"></div>

        <div className="text-xs text-right">pink</div>
        <div className="bg-pink-50 text-center"></div>
        <div className="bg-pink-100 text-center"></div>
        <div className="bg-pink-200 text-center"></div>
        <div className="bg-pink-300 text-center"></div>
        <div className="bg-pink-400 text-center"></div>
        <div className="bg-pink-500 text-center"></div>
        <div className="bg-pink-600 text-center"></div>
        <div className="bg-pink-700 text-center"></div>
        <div className="bg-pink-800 text-center"></div>
        <div className="bg-pink-900 text-center"></div>

        <div className="text-xs text-right">fuchsia</div>
        <div className="bg-fuchsia-50 text-center"></div>
        <div className="bg-fuchsia-100 text-center"></div>
        <div className="bg-fuchsia-200 text-center"></div>
        <div className="bg-fuchsia-300 text-center"></div>
        <div className="bg-fuchsia-400 text-center"></div>
        <div className="bg-fuchsia-500 text-center"></div>
        <div className="bg-fuchsia-600 text-center"></div>
        <div className="bg-fuchsia-700 text-center"></div>
        <div className="bg-fuchsia-800 text-center"></div>
        <div className="bg-fuchsia-900 text-center"></div>

        <div className="text-xs text-right">purple</div>
        <div className="bg-purple-50 text-center"></div>
        <div className="bg-purple-100 text-center"></div>
        <div className="bg-purple-200 text-center"></div>
        <div className="bg-purple-300 text-center"></div>
        <div className="bg-purple-400 text-center"></div>
        <div className="bg-purple-500 text-center"></div>
        <div className="bg-purple-600 text-center"></div>
        <div className="bg-purple-700 text-center"></div>
        <div className="bg-purple-800 text-center"></div>
        <div className="bg-purple-900 text-center"></div>

        <div className="text-xs text-right">violet</div>
        <div className="bg-violet-50 text-center"></div>
        <div className="bg-violet-100 text-center"></div>
        <div className="bg-violet-200 text-center"></div>
        <div className="bg-violet-300 text-center"></div>
        <div className="bg-violet-400 text-center"></div>
        <div className="bg-violet-500 text-center"></div>
        <div className="bg-violet-600 text-center"></div>
        <div className="bg-violet-700 text-center"></div>
        <div className="bg-violet-800 text-center"></div>
        <div className="bg-violet-900 text-center"></div>

        <div className="text-xs text-right">indigo</div>
        <div className="bg-indigo-50 text-center"></div>
        <div className="bg-indigo-100 text-center"></div>
        <div className="bg-indigo-200 text-center"></div>
        <div className="bg-indigo-300 text-center"></div>
        <div className="bg-indigo-400 text-center"></div>
        <div className="bg-indigo-500 text-center"></div>
        <div className="bg-indigo-600 text-center"></div>
        <div className="bg-indigo-700 text-center"></div>
        <div className="bg-indigo-800 text-center"></div>
        <div className="bg-indigo-900 text-center"></div>

        <div className="text-xs text-right">blue</div>
        <div className="bg-blue-50 text-center"></div>
        <div className="bg-blue-100 text-center"></div>
        <div className="bg-blue-200 text-center"></div>
        <div className="bg-blue-300 text-center"></div>
        <div className="bg-blue-400 text-center"></div>
        <div className="bg-blue-500 text-center"></div>
        <div className="bg-blue-600 text-center"></div>
        <div className="bg-blue-700 text-center"></div>
        <div className="bg-blue-800 text-center"></div>
        <div className="bg-blue-900 text-center"></div>

        <div className="text-xs text-right">sky</div>
        <div className="bg-sky-50 text-center"></div>
        <div className="bg-sky-100 text-center"></div>
        <div className="bg-sky-200 text-center"></div>
        <div className="bg-sky-300 text-center"></div>
        <div className="bg-sky-400 text-center"></div>
        <div className="bg-sky-500 text-center"></div>
        <div className="bg-sky-600 text-center"></div>
        <div className="bg-sky-700 text-center"></div>
        <div className="bg-sky-800 text-center"></div>
        <div className="bg-sky-900 text-center"></div>

        <div className="text-xs text-right">cyan</div>
        <div className="bg-cyan-50 text-center"></div>
        <div className="bg-cyan-100 text-center"></div>
        <div className="bg-cyan-200 text-center"></div>
        <div className="bg-cyan-300 text-center"></div>
        <div className="bg-cyan-400 text-center"></div>
        <div className="bg-cyan-500 text-center"></div>
        <div className="bg-cyan-600 text-center"></div>
        <div className="bg-cyan-700 text-center"></div>
        <div className="bg-cyan-800 text-center"></div>
        <div className="bg-cyan-900 text-center"></div>

        <div className="text-xs text-right">teal</div>
        <div className="bg-teal-50 text-center"></div>
        <div className="bg-teal-100 text-center"></div>
        <div className="bg-teal-200 text-center"></div>
        <div className="bg-teal-300 text-center"></div>
        <div className="bg-teal-400 text-center"></div>
        <div className="bg-teal-500 text-center"></div>
        <div className="bg-teal-600 text-center"></div>
        <div className="bg-teal-700 text-center"></div>
        <div className="bg-teal-800 text-center"></div>
        <div className="bg-teal-900 text-center"></div>

        <div className="text-xs text-right">emerald</div>
        <div className="bg-emerald-50 text-center"></div>
        <div className="bg-emerald-100 text-center"></div>
        <div className="bg-emerald-200 text-center"></div>
        <div className="bg-emerald-300 text-center"></div>
        <div className="bg-emerald-400 text-center"></div>
        <div className="bg-emerald-500 text-center"></div>
        <div className="bg-emerald-600 text-center"></div>
        <div className="bg-emerald-700 text-center"></div>
        <div className="bg-emerald-800 text-center"></div>
        <div className="bg-emerald-900 text-center"></div>

        <div className="text-xs text-right">green</div>
        <div className="bg-green-50 text-center"></div>
        <div className="bg-green-100 text-center"></div>
        <div className="bg-green-200 text-center"></div>
        <div className="bg-green-300 text-center"></div>
        <div className="bg-green-400 text-center"></div>
        <div className="bg-green-500 text-center"></div>
        <div className="bg-green-600 text-center"></div>
        <div className="bg-green-700 text-center"></div>
        <div className="bg-green-800 text-center"></div>
        <div className="bg-green-900 text-center"></div>

        <div className="text-xs text-right">lime</div>
        <div className="bg-lime-50 text-center"></div>
        <div className="bg-lime-100 text-center"></div>
        <div className="bg-lime-200 text-center"></div>
        <div className="bg-lime-300 text-center"></div>
        <div className="bg-lime-400 text-center"></div>
        <div className="bg-lime-500 text-center"></div>
        <div className="bg-lime-600 text-center"></div>
        <div className="bg-lime-700 text-center"></div>
        <div className="bg-lime-800 text-center"></div>
        <div className="bg-lime-900 text-center"></div>

        <div className="text-xs text-right">yellow</div>
        <div className="bg-yellow-50 text-center"></div>
        <div className="bg-yellow-100 text-center"></div>
        <div className="bg-yellow-200 text-center"></div>
        <div className="bg-yellow-300 text-center"></div>
        <div className="bg-yellow-400 text-center"></div>
        <div className="bg-yellow-500 text-center"></div>
        <div className="bg-yellow-600 text-center"></div>
        <div className="bg-yellow-700 text-center"></div>
        <div className="bg-yellow-800 text-center"></div>
        <div className="bg-yellow-900 text-center"></div>

        <div className="text-xs text-right">amber</div>
        <div className="bg-amber-50 text-center"></div>
        <div className="bg-amber-100 text-center"></div>
        <div className="bg-amber-200 text-center"></div>
        <div className="bg-amber-300 text-center"></div>
        <div className="bg-amber-400 text-center"></div>
        <div className="bg-amber-500 text-center"></div>
        <div className="bg-amber-600 text-center"></div>
        <div className="bg-amber-700 text-center"></div>
        <div className="bg-amber-800 text-center"></div>
        <div className="bg-amber-900 text-center"></div>

        <div className="text-xs text-right">orange</div>
        <div className="bg-orange-50 text-center"></div>
        <div className="bg-orange-100 text-center"></div>
        <div className="bg-orange-200 text-center"></div>
        <div className="bg-orange-300 text-center"></div>
        <div className="bg-orange-400 text-center"></div>
        <div className="bg-orange-500 text-center"></div>
        <div className="bg-orange-600 text-center"></div>
        <div className="bg-orange-700 text-center"></div>
        <div className="bg-orange-800 text-center"></div>
        <div className="bg-orange-900 text-center"></div>

        <div className="text-xs text-right">stone</div>
        <div className="bg-stone-50 text-center"></div>
        <div className="bg-stone-100 text-center"></div>
        <div className="bg-stone-200 text-center"></div>
        <div className="bg-stone-300 text-center"></div>
        <div className="bg-stone-400 text-center"></div>
        <div className="bg-stone-500 text-center"></div>
        <div className="bg-stone-600 text-center"></div>
        <div className="bg-stone-700 text-center"></div>
        <div className="bg-stone-800 text-center"></div>
        <div className="bg-stone-900 text-center"></div>

        <div className="text-xs text-right">neutral</div>
        <div className="bg-neutral-50 text-center"></div>
        <div className="bg-neutral-100 text-center"></div>
        <div className="bg-neutral-200 text-center"></div>
        <div className="bg-neutral-300 text-center"></div>
        <div className="bg-neutral-400 text-center"></div>
        <div className="bg-neutral-500 text-center"></div>
        <div className="bg-neutral-600 text-center"></div>
        <div className="bg-neutral-700 text-center"></div>
        <div className="bg-neutral-800 text-center"></div>
        <div className="bg-neutral-900 text-center"></div>

        <div className="text-xs text-right">zinc</div>
        <div className="bg-zinc-50 text-center"></div>
        <div className="bg-zinc-100 text-center"></div>
        <div className="bg-zinc-200 text-center"></div>
        <div className="bg-zinc-300 text-center"></div>
        <div className="bg-zinc-400 text-center"></div>
        <div className="bg-zinc-500 text-center"></div>
        <div className="bg-zinc-600 text-center"></div>
        <div className="bg-zinc-700 text-center"></div>
        <div className="bg-zinc-800 text-center"></div>
        <div className="bg-zinc-900 text-center"></div>

        <div className="text-xs text-right">gray</div>
        <div className="bg-gray-50 text-center"></div>
        <div className="bg-gray-100 text-center"></div>
        <div className="bg-gray-200 text-center"></div>
        <div className="bg-gray-300 text-center"></div>
        <div className="bg-gray-400 text-center"></div>
        <div className="bg-gray-500 text-center"></div>
        <div className="bg-gray-600 text-center"></div>
        <div className="bg-gray-700 text-center"></div>
        <div className="bg-gray-800 text-center"></div>
        <div className="bg-gray-900 text-center"></div>

        <div className="text-xs text-right">slate</div>
        <div className="bg-slate-50 text-center"></div>
        <div className="bg-slate-100 text-center"></div>
        <div className="bg-slate-200 text-center"></div>
        <div className="bg-slate-300 text-center"></div>
        <div className="bg-slate-400 text-center"></div>
        <div className="bg-slate-500 text-center"></div>
        <div className="bg-slate-600 text-center"></div>
        <div className="bg-slate-700 text-center"></div>
        <div className="bg-slate-800 text-center"></div>
        <div className="bg-slate-900 text-center"></div>

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
