const ColorPicker = (props) => {
  // Default colors -->
  // white, black, red, green, blue, orange, yellow, purple, lime, emerald, teal, cyan, indigo, violet, fuchsia, pink, rose, sky, gray, slate, neutral, neutral, stone, amber,  -->
  return (
    <div className="absolute visible z-20 top-20 bg-white ">
      <h3 class="text-xs text-bold text-center p-10 ">
        Tailwind Default Colors
      </h3>
      <div class="w-1/2 mx-auto grid grid-cols-11 gap-1">
        <p class="text-md text-right"></p>
        <p class="text-center">50</p>
        <p class="text-center">100</p>
        <p class="text-center">200</p>
        <p class="text-center">300</p>
        <p class="text-center">400</p>
        <p class="text-center">500</p>
        <p class="text-center">600</p>
        <p class="text-center">700</p>
        <p class="text-center">800</p>
        <p class="text-center">900</p>

        <p class="text-md text-right">red</p>
        <p class="bg-red-50 text-center"></p>
        <p class="bg-red-100 text-center"></p>
        <p class="bg-red-200 text-center"></p>
        <p class="bg-red-300 text-center"></p>
        <p class="bg-red-400 text-center"></p>
        <p class="bg-red-500 text-center"></p>
        <p class="bg-red-600 text-center"></p>
        <p class="bg-red-700 text-center"></p>
        <p class="bg-red-800 text-center"></p>
        <p class="bg-red-900 text-center"></p>

        <p class="text-md text-right">rose</p>
        <p class="bg-rose-50 text-center"></p>
        <p class="bg-rose-100 text-center"></p>
        <p class="bg-rose-200 text-center"></p>
        <p class="bg-rose-300 text-center"></p>
        <p class="bg-rose-400 text-center"></p>
        <p class="bg-rose-500 text-center"></p>
        <p class="bg-rose-600 text-center"></p>
        <p class="bg-rose-700 text-center"></p>
        <p class="bg-rose-800 text-center"></p>
        <p class="bg-rose-900 text-center"></p>

        <p class="text-md text-right">pink</p>
        <p class="bg-pink-50 text-center"></p>
        <p class="bg-pink-100 text-center"></p>
        <p class="bg-pink-200 text-center"></p>
        <p class="bg-pink-300 text-center"></p>
        <p class="bg-pink-400 text-center"></p>
        <p class="bg-pink-500 text-center"></p>
        <p class="bg-pink-600 text-center"></p>
        <p class="bg-pink-700 text-center"></p>
        <p class="bg-pink-800 text-center"></p>
        <p class="bg-pink-900 text-center"></p>

        <p class="text-md text-right">fuchsia</p>
        <p class="bg-fuchsia-50 text-center"></p>
        <p class="bg-fuchsia-100 text-center"></p>
        <p class="bg-fuchsia-200 text-center"></p>
        <p class="bg-fuchsia-300 text-center"></p>
        <p class="bg-fuchsia-400 text-center"></p>
        <p class="bg-fuchsia-500 text-center"></p>
        <p class="bg-fuchsia-600 text-center"></p>
        <p class="bg-fuchsia-700 text-center"></p>
        <p class="bg-fuchsia-800 text-center"></p>
        <p class="bg-fuchsia-900 text-center"></p>

        <p class="text-md text-right">purple</p>
        <p class="bg-purple-50 text-center"></p>
        <p class="bg-purple-100 text-center"></p>
        <p class="bg-purple-200 text-center"></p>
        <p class="bg-purple-300 text-center"></p>
        <p class="bg-purple-400 text-center"></p>
        <p class="bg-purple-500 text-center"></p>
        <p class="bg-purple-600 text-center"></p>
        <p class="bg-purple-700 text-center"></p>
        <p class="bg-purple-800 text-center"></p>
        <p class="bg-purple-900 text-center"></p>

        <p class="text-md text-right">violet</p>
        <p class="bg-violet-50 text-center"></p>
        <p class="bg-violet-100 text-center"></p>
        <p class="bg-violet-200 text-center"></p>
        <p class="bg-violet-300 text-center"></p>
        <p class="bg-violet-400 text-center"></p>
        <p class="bg-violet-500 text-center"></p>
        <p class="bg-violet-600 text-center"></p>
        <p class="bg-violet-700 text-center"></p>
        <p class="bg-violet-800 text-center"></p>
        <p class="bg-violet-900 text-center"></p>

        <p class="text-md text-right">indigo</p>
        <p class="bg-indigo-50 text-center"></p>
        <p class="bg-indigo-100 text-center"></p>
        <p class="bg-indigo-200 text-center"></p>
        <p class="bg-indigo-300 text-center"></p>
        <p class="bg-indigo-400 text-center"></p>
        <p class="bg-indigo-500 text-center"></p>
        <p class="bg-indigo-600 text-center"></p>
        <p class="bg-indigo-700 text-center"></p>
        <p class="bg-indigo-800 text-center"></p>
        <p class="bg-indigo-900 text-center"></p>

        <p class="text-md text-right">blue</p>
        <p class="bg-blue-50 text-center"></p>
        <p class="bg-blue-100 text-center"></p>
        <p class="bg-blue-200 text-center"></p>
        <p class="bg-blue-300 text-center"></p>
        <p class="bg-blue-400 text-center"></p>
        <p class="bg-blue-500 text-center"></p>
        <p class="bg-blue-600 text-center"></p>
        <p class="bg-blue-700 text-center"></p>
        <p class="bg-blue-800 text-center"></p>
        <p class="bg-blue-900 text-center"></p>

        <p class="text-md text-right">sky</p>
        <p class="bg-sky-50 text-center"></p>
        <p class="bg-sky-100 text-center"></p>
        <p class="bg-sky-200 text-center"></p>
        <p class="bg-sky-300 text-center"></p>
        <p class="bg-sky-400 text-center"></p>
        <p class="bg-sky-500 text-center"></p>
        <p class="bg-sky-600 text-center"></p>
        <p class="bg-sky-700 text-center"></p>
        <p class="bg-sky-800 text-center"></p>
        <p class="bg-sky-900 text-center"></p>

        <p class="text-md text-right">cyan</p>
        <p class="bg-cyan-50 text-center"></p>
        <p class="bg-cyan-100 text-center"></p>
        <p class="bg-cyan-200 text-center"></p>
        <p class="bg-cyan-300 text-center"></p>
        <p class="bg-cyan-400 text-center"></p>
        <p class="bg-cyan-500 text-center"></p>
        <p class="bg-cyan-600 text-center"></p>
        <p class="bg-cyan-700 text-center"></p>
        <p class="bg-cyan-800 text-center"></p>
        <p class="bg-cyan-900 text-center"></p>

        <p class="text-md text-right">teal</p>
        <p class="bg-teal-50 text-center"></p>
        <p class="bg-teal-100 text-center"></p>
        <p class="bg-teal-200 text-center"></p>
        <p class="bg-teal-300 text-center"></p>
        <p class="bg-teal-400 text-center"></p>
        <p class="bg-teal-500 text-center"></p>
        <p class="bg-teal-600 text-center"></p>
        <p class="bg-teal-700 text-center"></p>
        <p class="bg-teal-800 text-center"></p>
        <p class="bg-teal-900 text-center"></p>

        <p class="text-md text-right">emerald</p>
        <p class="bg-emerald-50 text-center"></p>
        <p class="bg-emerald-100 text-center"></p>
        <p class="bg-emerald-200 text-center"></p>
        <p class="bg-emerald-300 text-center"></p>
        <p class="bg-emerald-400 text-center"></p>
        <p class="bg-emerald-500 text-center"></p>
        <p class="bg-emerald-600 text-center"></p>
        <p class="bg-emerald-700 text-center"></p>
        <p class="bg-emerald-800 text-center"></p>
        <p class="bg-emerald-900 text-center"></p>

        <p class="text-md text-right">green</p>
        <p class="bg-green-50 text-center"></p>
        <p class="bg-green-100 text-center"></p>
        <p class="bg-green-200 text-center"></p>
        <p class="bg-green-300 text-center"></p>
        <p class="bg-green-400 text-center"></p>
        <p class="bg-green-500 text-center"></p>
        <p class="bg-green-600 text-center"></p>
        <p class="bg-green-700 text-center"></p>
        <p class="bg-green-800 text-center"></p>
        <p class="bg-green-900 text-center"></p>

        <p class="text-md text-right">lime</p>
        <p class="bg-lime-50 text-center"></p>
        <p class="bg-lime-100 text-center"></p>
        <p class="bg-lime-200 text-center"></p>
        <p class="bg-lime-300 text-center"></p>
        <p class="bg-lime-400 text-center"></p>
        <p class="bg-lime-500 text-center"></p>
        <p class="bg-lime-600 text-center"></p>
        <p class="bg-lime-700 text-center"></p>
        <p class="bg-lime-800 text-center"></p>
        <p class="bg-lime-900 text-center"></p>

        <p class="text-md text-right">yellow</p>
        <p class="bg-yellow-50 text-center"></p>
        <p class="bg-yellow-100 text-center"></p>
        <p class="bg-yellow-200 text-center"></p>
        <p class="bg-yellow-300 text-center"></p>
        <p class="bg-yellow-400 text-center"></p>
        <p class="bg-yellow-500 text-center"></p>
        <p class="bg-yellow-600 text-center"></p>
        <p class="bg-yellow-700 text-center"></p>
        <p class="bg-yellow-800 text-center"></p>
        <p class="bg-yellow-900 text-center"></p>

        <p class="text-md text-right">amber</p>
        <p class="bg-amber-50 text-center"></p>
        <p class="bg-amber-100 text-center"></p>
        <p class="bg-amber-200 text-center"></p>
        <p class="bg-amber-300 text-center"></p>
        <p class="bg-amber-400 text-center"></p>
        <p class="bg-amber-500 text-center"></p>
        <p class="bg-amber-600 text-center"></p>
        <p class="bg-amber-700 text-center"></p>
        <p class="bg-amber-800 text-center"></p>
        <p class="bg-amber-900 text-center"></p>

        <p class="text-md text-right">orange</p>
        <p class="bg-orange-50 text-center"></p>
        <p class="bg-orange-100 text-center"></p>
        <p class="bg-orange-200 text-center"></p>
        <p class="bg-orange-300 text-center"></p>
        <p class="bg-orange-400 text-center"></p>
        <p class="bg-orange-500 text-center"></p>
        <p class="bg-orange-600 text-center"></p>
        <p class="bg-orange-700 text-center"></p>
        <p class="bg-orange-800 text-center"></p>
        <p class="bg-orange-900 text-center"></p>

        <p class="text-md text-right">stone</p>
        <p class="bg-stone-50 text-center"></p>
        <p class="bg-stone-100 text-center"></p>
        <p class="bg-stone-200 text-center"></p>
        <p class="bg-stone-300 text-center"></p>
        <p class="bg-stone-400 text-center"></p>
        <p class="bg-stone-500 text-center"></p>
        <p class="bg-stone-600 text-center"></p>
        <p class="bg-stone-700 text-center"></p>
        <p class="bg-stone-800 text-center"></p>
        <p class="bg-stone-900 text-center"></p>

        <p class="text-md text-right">neutral</p>
        <p class="bg-neutral-50 text-center"></p>
        <p class="bg-neutral-100 text-center"></p>
        <p class="bg-neutral-200 text-center"></p>
        <p class="bg-neutral-300 text-center"></p>
        <p class="bg-neutral-400 text-center"></p>
        <p class="bg-neutral-500 text-center"></p>
        <p class="bg-neutral-600 text-center"></p>
        <p class="bg-neutral-700 text-center"></p>
        <p class="bg-neutral-800 text-center"></p>
        <p class="bg-neutral-900 text-center"></p>

        <p class="text-md text-right">zinc</p>
        <p class="bg-zinc-50 text-center"></p>
        <p class="bg-zinc-100 text-center"></p>
        <p class="bg-zinc-200 text-center"></p>
        <p class="bg-zinc-300 text-center"></p>
        <p class="bg-zinc-400 text-center"></p>
        <p class="bg-zinc-500 text-center"></p>
        <p class="bg-zinc-600 text-center"></p>
        <p class="bg-zinc-700 text-center"></p>
        <p class="bg-zinc-800 text-center"></p>
        <p class="bg-zinc-900 text-center"></p>

        <p class="text-md text-right">gray</p>
        <p class="bg-gray-50 text-center"></p>
        <p class="bg-gray-100 text-center"></p>
        <p class="bg-gray-200 text-center"></p>
        <p class="bg-gray-300 text-center"></p>
        <p class="bg-gray-400 text-center"></p>
        <p class="bg-gray-500 text-center"></p>
        <p class="bg-gray-600 text-center"></p>
        <p class="bg-gray-700 text-center"></p>
        <p class="bg-gray-800 text-center"></p>
        <p class="bg-gray-900 text-center"></p>

        <p class="text-md text-right">slate</p>
        <p class="bg-slate-50 text-center"></p>
        <p class="bg-slate-100 text-center"></p>
        <p class="bg-slate-200 text-center"></p>
        <p class="bg-slate-300 text-center"></p>
        <p class="bg-slate-400 text-center"></p>
        <p class="bg-slate-500 text-center"></p>
        <p class="bg-slate-600 text-center"></p>
        <p class="bg-slate-700 text-center"></p>
        <p class="bg-slate-800 text-center"></p>
        <p class="bg-slate-900 text-center"></p>

        <p class="text-md text-right"></p>
        <p class="text-center">50</p>
        <p class="text-center">100</p>
        <p class="text-center">200</p>
        <p class="text-center">300</p>
        <p class="text-center">400</p>
        <p class="text-center">500</p>
        <p class="text-center">600</p>
        <p class="text-center">700</p>
        <p class="text-center">800</p>
        <p class="text-center">900</p>
      </div>
    </div>
  );
};

export default ColorPicker;
