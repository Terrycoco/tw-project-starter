import twColors from "tailwindcss/colors";

export const twColorList = [
  "red",
  "pink",
  "rose",
  "fuchsia",
  "purple",
  "violet",
  "indigo",
  "blue",
  "sky",
  "cyan",
  "teal",
  "emerald",
  "green",
  "lime",
  "yellow",
  "amber",
  "orange",
  "stone",
  "neutral",
  "zinc",
  "gray",
  "slate",
];

const makeColorObj = (name, color, value, hex) => {
  return {
    name: name,
    color: color,
    value: value,
    hex: hex,
  };
};

export const getColorObjects = () => {
  let result = [];

  let color;
  for (let i = 0; i < twColorList.length; i++) {
    color = twColorList[i];
    let array = [];
    let name = `${color}-50`;
    const obj = {
      name: name,
      color: color,
      value: 50,
      hex: twColors[color][50],
    };
    array.push(obj);

    //inner loop
    for (let v = 100; v < 1000; v = v + 100) {
      let newname = `${color}-${v}`;
      let ob = makeColorObj(newname, color, v, twColors[color][v]);
      array.push(ob);
    }
    result.push(array);
  }
  //console.log("twColors:", twColors);
  return result;
};

export const createHexList = () => {
  let result = {};
  let hex;
  for (let color in twColors) {
    if (typeof twColors[color] == "object") {
      //loop through object
      for (let colorVal in twColors[color]) {
        hex = twColors[color][colorVal];
        let name = `${color}-${colorVal}`;
        result[hex] = makeColorObj(name, color, colorVal, hex);
      }
    } else {
      hex = twColors[color];
      result[hex] = makeColorObj(color, color, null, hex);
    }
  }
  console.log(result);
  return result;
};

//color objects in array form in correct order
export const twColorObjArray = [
  [
    { name: "red-50", color: "red", value: 50, hex: "#fef2f2" },
    { name: "red-100", color: "red", value: 100, hex: "#fee2e2" },
    { name: "red-200", color: "red", value: 200, hex: "#fecaca" },
    { name: "red-300", color: "red", value: 300, hex: "#fca5a5" },
    { name: "red-400", color: "red", value: 400, hex: "#f87171" },
    { name: "red-500", color: "red", value: 500, hex: "#ef4444" },
    { name: "red-600", color: "red", value: 600, hex: "#dc2626" },
    { name: "red-700", color: "red", value: 700, hex: "#b91c1c" },
    { name: "red-800", color: "red", value: 800, hex: "#991b1b" },
    { name: "red-900", color: "red", value: 900, hex: "#7f1d1d" },
  ],
  [
    { name: "pink-50", color: "pink", value: 50, hex: "#fdf2f8" },
    { name: "pink-100", color: "pink", value: 100, hex: "#fce7f3" },
    { name: "pink-200", color: "pink", value: 200, hex: "#fbcfe8" },
    { name: "pink-300", color: "pink", value: 300, hex: "#f9a8d4" },
    { name: "pink-400", color: "pink", value: 400, hex: "#f472b6" },
    { name: "pink-500", color: "pink", value: 500, hex: "#ec4899" },
    { name: "pink-600", color: "pink", value: 600, hex: "#db2777" },
    { name: "pink-700", color: "pink", value: 700, hex: "#be185d" },
    { name: "pink-800", color: "pink", value: 800, hex: "#9d174d" },
    { name: "pink-900", color: "pink", value: 900, hex: "#831843" },
  ],
  [
    { name: "rose-50", color: "rose", value: 50, hex: "#fff1f2" },
    { name: "rose-100", color: "rose", value: 100, hex: "#ffe4e6" },
    { name: "rose-200", color: "rose", value: 200, hex: "#fecdd3" },
    { name: "rose-300", color: "rose", value: 300, hex: "#fda4af" },
    { name: "rose-400", color: "rose", value: 400, hex: "#fb7185" },
    { name: "rose-500", color: "rose", value: 500, hex: "#f43f5e" },
    { name: "rose-600", color: "rose", value: 600, hex: "#e11d48" },
    { name: "rose-700", color: "rose", value: 700, hex: "#be123c" },
    { name: "rose-800", color: "rose", value: 800, hex: "#9f1239" },
    { name: "rose-900", color: "rose", value: 900, hex: "#881337" },
  ],
  [
    { name: "fuchsia-50", color: "fuchsia", value: 50, hex: "#fdf4ff" },
    {
      name: "fuchsia-100",
      color: "fuchsia",
      value: 100,
      hex: "#fae8ff",
    },
    {
      name: "fuchsia-200",
      color: "fuchsia",
      value: 200,
      hex: "#f5d0fe",
    },
    {
      name: "fuchsia-300",
      color: "fuchsia",
      value: 300,
      hex: "#f0abfc",
    },
    {
      name: "fuchsia-400",
      color: "fuchsia",
      value: 400,
      hex: "#e879f9",
    },
    {
      name: "fuchsia-500",
      color: "fuchsia",
      value: 500,
      hex: "#d946ef",
    },
    {
      name: "fuchsia-600",
      color: "fuchsia",
      value: 600,
      hex: "#c026d3",
    },
    {
      name: "fuchsia-700",
      color: "fuchsia",
      value: 700,
      hex: "#a21caf",
    },
    {
      name: "fuchsia-800",
      color: "fuchsia",
      value: 800,
      hex: "#86198f",
    },
    {
      name: "fuchsia-900",
      color: "fuchsia",
      value: 900,
      hex: "#701a75",
    },
  ],
  [
    { name: "purple-50", color: "purple", value: 50, hex: "#faf5ff" },
    { name: "purple-100", color: "purple", value: 100, hex: "#f3e8ff" },
    { name: "purple-200", color: "purple", value: 200, hex: "#e9d5ff" },
    { name: "purple-300", color: "purple", value: 300, hex: "#d8b4fe" },
    { name: "purple-400", color: "purple", value: 400, hex: "#c084fc" },
    { name: "purple-500", color: "purple", value: 500, hex: "#a855f7" },
    { name: "purple-600", color: "purple", value: 600, hex: "#9333ea" },
    { name: "purple-700", color: "purple", value: 700, hex: "#7e22ce" },
    { name: "purple-800", color: "purple", value: 800, hex: "#6b21a8" },
    { name: "purple-900", color: "purple", value: 900, hex: "#581c87" },
  ],
  [
    { name: "violet-50", color: "violet", value: 50, hex: "#f5f3ff" },
    { name: "violet-100", color: "violet", value: 100, hex: "#ede9fe" },
    { name: "violet-200", color: "violet", value: 200, hex: "#ddd6fe" },
    { name: "violet-300", color: "violet", value: 300, hex: "#c4b5fd" },
    { name: "violet-400", color: "violet", value: 400, hex: "#a78bfa" },
    { name: "violet-500", color: "violet", value: 500, hex: "#8b5cf6" },
    { name: "violet-600", color: "violet", value: 600, hex: "#7c3aed" },
    { name: "violet-700", color: "violet", value: 700, hex: "#6d28d9" },
    { name: "violet-800", color: "violet", value: 800, hex: "#5b21b6" },
    { name: "violet-900", color: "violet", value: 900, hex: "#4c1d95" },
  ],
  [
    { name: "indigo-50", color: "indigo", value: 50, hex: "#eef2ff" },
    { name: "indigo-100", color: "indigo", value: 100, hex: "#e0e7ff" },
    { name: "indigo-200", color: "indigo", value: 200, hex: "#c7d2fe" },
    { name: "indigo-300", color: "indigo", value: 300, hex: "#a5b4fc" },
    { name: "indigo-400", color: "indigo", value: 400, hex: "#818cf8" },
    { name: "indigo-500", color: "indigo", value: 500, hex: "#6366f1" },
    { name: "indigo-600", color: "indigo", value: 600, hex: "#4f46e5" },
    { name: "indigo-700", color: "indigo", value: 700, hex: "#4338ca" },
    { name: "indigo-800", color: "indigo", value: 800, hex: "#3730a3" },
    { name: "indigo-900", color: "indigo", value: 900, hex: "#312e81" },
  ],
  [
    { name: "blue-50", color: "blue", value: 50, hex: "#eff6ff" },
    { name: "blue-100", color: "blue", value: 100, hex: "#dbeafe" },
    { name: "blue-200", color: "blue", value: 200, hex: "#bfdbfe" },
    { name: "blue-300", color: "blue", value: 300, hex: "#93c5fd" },
    { name: "blue-400", color: "blue", value: 400, hex: "#60a5fa" },
    { name: "blue-500", color: "blue", value: 500, hex: "#3b82f6" },
    { name: "blue-600", color: "blue", value: 600, hex: "#2563eb" },
    { name: "blue-700", color: "blue", value: 700, hex: "#1d4ed8" },
    { name: "blue-800", color: "blue", value: 800, hex: "#1e40af" },
    { name: "blue-900", color: "blue", value: 900, hex: "#1e3a8a" },
  ],
  [
    { name: "sky-50", color: "sky", value: 50, hex: "#f0f9ff" },
    { name: "sky-100", color: "sky", value: 100, hex: "#e0f2fe" },
    { name: "sky-200", color: "sky", value: 200, hex: "#bae6fd" },
    { name: "sky-300", color: "sky", value: 300, hex: "#7dd3fc" },
    { name: "sky-400", color: "sky", value: 400, hex: "#38bdf8" },
    { name: "sky-500", color: "sky", value: 500, hex: "#0ea5e9" },
    { name: "sky-600", color: "sky", value: 600, hex: "#0284c7" },
    { name: "sky-700", color: "sky", value: 700, hex: "#0369a1" },
    { name: "sky-800", color: "sky", value: 800, hex: "#075985" },
    { name: "sky-900", color: "sky", value: 900, hex: "#0c4a6e" },
  ],
  [
    { name: "cyan-50", color: "cyan", value: 50, hex: "#ecfeff" },
    { name: "cyan-100", color: "cyan", value: 100, hex: "#cffafe" },
    { name: "cyan-200", color: "cyan", value: 200, hex: "#a5f3fc" },
    { name: "cyan-300", color: "cyan", value: 300, hex: "#67e8f9" },
    { name: "cyan-400", color: "cyan", value: 400, hex: "#22d3ee" },
    { name: "cyan-500", color: "cyan", value: 500, hex: "#06b6d4" },
    { name: "cyan-600", color: "cyan", value: 600, hex: "#0891b2" },
    { name: "cyan-700", color: "cyan", value: 700, hex: "#0e7490" },
    { name: "cyan-800", color: "cyan", value: 800, hex: "#155e75" },
    { name: "cyan-900", color: "cyan", value: 900, hex: "#164e63" },
  ],
  [
    { name: "teal-50", color: "teal", value: 50, hex: "#f0fdfa" },
    { name: "teal-100", color: "teal", value: 100, hex: "#ccfbf1" },
    { name: "teal-200", color: "teal", value: 200, hex: "#99f6e4" },
    { name: "teal-300", color: "teal", value: 300, hex: "#5eead4" },
    { name: "teal-400", color: "teal", value: 400, hex: "#2dd4bf" },
    { name: "teal-500", color: "teal", value: 500, hex: "#14b8a6" },
    { name: "teal-600", color: "teal", value: 600, hex: "#0d9488" },
    { name: "teal-700", color: "teal", value: 700, hex: "#0f766e" },
    { name: "teal-800", color: "teal", value: 800, hex: "#115e59" },
    { name: "teal-900", color: "teal", value: 900, hex: "#134e4a" },
  ],
  [
    { name: "emerald-50", color: "emerald", value: 50, hex: "#ecfdf5" },
    {
      name: "emerald-100",
      color: "emerald",
      value: 100,
      hex: "#d1fae5",
    },
    {
      name: "emerald-200",
      color: "emerald",
      value: 200,
      hex: "#a7f3d0",
    },
    {
      name: "emerald-300",
      color: "emerald",
      value: 300,
      hex: "#6ee7b7",
    },
    {
      name: "emerald-400",
      color: "emerald",
      value: 400,
      hex: "#34d399",
    },
    {
      name: "emerald-500",
      color: "emerald",
      value: 500,
      hex: "#10b981",
    },
    {
      name: "emerald-600",
      color: "emerald",
      value: 600,
      hex: "#059669",
    },
    {
      name: "emerald-700",
      color: "emerald",
      value: 700,
      hex: "#047857",
    },
    {
      name: "emerald-800",
      color: "emerald",
      value: 800,
      hex: "#065f46",
    },
    {
      name: "emerald-900",
      color: "emerald",
      value: 900,
      hex: "#064e3b",
    },
  ],
  [
    { name: "green-50", color: "green", value: 50, hex: "#f0fdf4" },
    { name: "green-100", color: "green", value: 100, hex: "#dcfce7" },
    { name: "green-200", color: "green", value: 200, hex: "#bbf7d0" },
    { name: "green-300", color: "green", value: 300, hex: "#86efac" },
    { name: "green-400", color: "green", value: 400, hex: "#4ade80" },
    { name: "green-500", color: "green", value: 500, hex: "#22c55e" },
    { name: "green-600", color: "green", value: 600, hex: "#16a34a" },
    { name: "green-700", color: "green", value: 700, hex: "#15803d" },
    { name: "green-800", color: "green", value: 800, hex: "#166534" },
    { name: "green-900", color: "green", value: 900, hex: "#14532d" },
  ],
  [
    { name: "lime-50", color: "lime", value: 50, hex: "#f7fee7" },
    { name: "lime-100", color: "lime", value: 100, hex: "#ecfccb" },
    { name: "lime-200", color: "lime", value: 200, hex: "#d9f99d" },
    { name: "lime-300", color: "lime", value: 300, hex: "#bef264" },
    { name: "lime-400", color: "lime", value: 400, hex: "#a3e635" },
    { name: "lime-500", color: "lime", value: 500, hex: "#84cc16" },
    { name: "lime-600", color: "lime", value: 600, hex: "#65a30d" },
    { name: "lime-700", color: "lime", value: 700, hex: "#4d7c0f" },
    { name: "lime-800", color: "lime", value: 800, hex: "#3f6212" },
    { name: "lime-900", color: "lime", value: 900, hex: "#365314" },
  ],
  [
    { name: "yellow-50", color: "yellow", value: 50, hex: "#fefce8" },
    { name: "yellow-100", color: "yellow", value: 100, hex: "#fef9c3" },
    { name: "yellow-200", color: "yellow", value: 200, hex: "#fef08a" },
    { name: "yellow-300", color: "yellow", value: 300, hex: "#fde047" },
    { name: "yellow-400", color: "yellow", value: 400, hex: "#facc15" },
    { name: "yellow-500", color: "yellow", value: 500, hex: "#eab308" },
    { name: "yellow-600", color: "yellow", value: 600, hex: "#ca8a04" },
    { name: "yellow-700", color: "yellow", value: 700, hex: "#a16207" },
    { name: "yellow-800", color: "yellow", value: 800, hex: "#854d0e" },
    { name: "yellow-900", color: "yellow", value: 900, hex: "#713f12" },
  ],
  [
    { name: "amber-50", color: "amber", value: 50, hex: "#fffbeb" },
    { name: "amber-100", color: "amber", value: 100, hex: "#fef3c7" },
    { name: "amber-200", color: "amber", value: 200, hex: "#fde68a" },
    { name: "amber-300", color: "amber", value: 300, hex: "#fcd34d" },
    { name: "amber-400", color: "amber", value: 400, hex: "#fbbf24" },
    { name: "amber-500", color: "amber", value: 500, hex: "#f59e0b" },
    { name: "amber-600", color: "amber", value: 600, hex: "#d97706" },
    { name: "amber-700", color: "amber", value: 700, hex: "#b45309" },
    { name: "amber-800", color: "amber", value: 800, hex: "#92400e" },
    { name: "amber-900", color: "amber", value: 900, hex: "#78350f" },
  ],
  [
    { name: "orange-50", color: "orange", value: 50, hex: "#fff7ed" },
    { name: "orange-100", color: "orange", value: 100, hex: "#ffedd5" },
    { name: "orange-200", color: "orange", value: 200, hex: "#fed7aa" },
    { name: "orange-300", color: "orange", value: 300, hex: "#fdba74" },
    { name: "orange-400", color: "orange", value: 400, hex: "#fb923c" },
    { name: "orange-500", color: "orange", value: 500, hex: "#f97316" },
    { name: "orange-600", color: "orange", value: 600, hex: "#ea580c" },
    { name: "orange-700", color: "orange", value: 700, hex: "#c2410c" },
    { name: "orange-800", color: "orange", value: 800, hex: "#9a3412" },
    { name: "orange-900", color: "orange", value: 900, hex: "#7c2d12" },
  ],
  [
    { name: "stone-50", color: "stone", value: 50, hex: "#fafaf9" },
    { name: "stone-100", color: "stone", value: 100, hex: "#f5f5f4" },
    { name: "stone-200", color: "stone", value: 200, hex: "#e7e5e4" },
    { name: "stone-300", color: "stone", value: 300, hex: "#d6d3d1" },
    { name: "stone-400", color: "stone", value: 400, hex: "#a8a29e" },
    { name: "stone-500", color: "stone", value: 500, hex: "#78716c" },
    { name: "stone-600", color: "stone", value: 600, hex: "#57534e" },
    { name: "stone-700", color: "stone", value: 700, hex: "#44403c" },
    { name: "stone-800", color: "stone", value: 800, hex: "#292524" },
    { name: "stone-900", color: "stone", value: 900, hex: "#1c1917" },
  ],
  [
    { name: "neutral-50", color: "neutral", value: 50, hex: "#fafafa" },
    {
      name: "neutral-100",
      color: "neutral",
      value: 100,
      hex: "#f5f5f5",
    },
    {
      name: "neutral-200",
      color: "neutral",
      value: 200,
      hex: "#e5e5e5",
    },
    {
      name: "neutral-300",
      color: "neutral",
      value: 300,
      hex: "#d4d4d4",
    },
    {
      name: "neutral-400",
      color: "neutral",
      value: 400,
      hex: "#a3a3a3",
    },
    {
      name: "neutral-500",
      color: "neutral",
      value: 500,
      hex: "#737373",
    },
    {
      name: "neutral-600",
      color: "neutral",
      value: 600,
      hex: "#525252",
    },
    {
      name: "neutral-700",
      color: "neutral",
      value: 700,
      hex: "#404040",
    },
    {
      name: "neutral-800",
      color: "neutral",
      value: 800,
      hex: "#262626",
    },
    {
      name: "neutral-900",
      color: "neutral",
      value: 900,
      hex: "#171717",
    },
  ],
  [
    { name: "zinc-50", color: "zinc", value: 50, hex: "#fafafa" },
    { name: "zinc-100", color: "zinc", value: 100, hex: "#f4f4f5" },
    { name: "zinc-200", color: "zinc", value: 200, hex: "#e4e4e7" },
    { name: "zinc-300", color: "zinc", value: 300, hex: "#d4d4d8" },
    { name: "zinc-400", color: "zinc", value: 400, hex: "#a1a1aa" },
    { name: "zinc-500", color: "zinc", value: 500, hex: "#71717a" },
    { name: "zinc-600", color: "zinc", value: 600, hex: "#52525b" },
    { name: "zinc-700", color: "zinc", value: 700, hex: "#3f3f46" },
    { name: "zinc-800", color: "zinc", value: 800, hex: "#27272a" },
    { name: "zinc-900", color: "zinc", value: 900, hex: "#18181b" },
  ],
  [
    { name: "gray-50", color: "gray", value: 50, hex: "#f9fafb" },
    { name: "gray-100", color: "gray", value: 100, hex: "#f3f4f6" },
    { name: "gray-200", color: "gray", value: 200, hex: "#e5e7eb" },
    { name: "gray-300", color: "gray", value: 300, hex: "#d1d5db" },
    { name: "gray-400", color: "gray", value: 400, hex: "#9ca3af" },
    { name: "gray-500", color: "gray", value: 500, hex: "#6b7280" },
    { name: "gray-600", color: "gray", value: 600, hex: "#4b5563" },
    { name: "gray-700", color: "gray", value: 700, hex: "#374151" },
    { name: "gray-800", color: "gray", value: 800, hex: "#1f2937" },
    { name: "gray-900", color: "gray", value: 900, hex: "#111827" },
  ],
  [
    { name: "slate-50", color: "slate", value: 50, hex: "#f8fafc" },
    { name: "slate-100", color: "slate", value: 100, hex: "#f1f5f9" },
    { name: "slate-200", color: "slate", value: 200, hex: "#e2e8f0" },
    { name: "slate-300", color: "slate", value: 300, hex: "#cbd5e1" },
    { name: "slate-400", color: "slate", value: 400, hex: "#94a3b8" },
    { name: "slate-500", color: "slate", value: 500, hex: "#64748b" },
    { name: "slate-600", color: "slate", value: 600, hex: "#475569" },
    { name: "slate-700", color: "slate", value: 700, hex: "#334155" },
    { name: "slate-800", color: "slate", value: 800, hex: "#1e293b" },
    { name: "slate-900", color: "slate", value: 900, hex: "#0f172a" },
  ],
];

//for lookups by hex
export const twHexList = {
  "#000000": "black",
  "#ffffff": "white",
  "#000": "black",
  "#fff": "white",
  "#f8fafc": "slate-50",
  "#f1f5f9": "slate-100",
  "#e2e8f0": "slate-200",
  "#cbd5e1": "slate-300",
  "#94a3b8": "slate-400",
  "#64748b": "slate-500",
  "#475569": "slate-600",
  "#334155": "slate-700",
  "#1e293b": "slate-800",
  "#0f172a": "slate-900",
  "#f9fafb": "gray-50",
  "#f3f4f6": "gray-100",
  "#e5e7eb": "gray-200",
  "#d1d5db": "gray-300",
  "#9ca3af": "gray-400",
  "#6b7280": "gray-500",
  "#4b5563": "gray-600",
  "#374151": "gray-700",
  "#1f2937": "gray-800",
  "#111827": "gray-900",
  "#fafafa": "neutral-50",
  "#f4f4f5": "zinc-100",
  "#e4e4e7": "zinc-200",
  "#d4d4d8": "zinc-300",
  "#a1a1aa": "zinc-400",
  "#71717a": "zinc-500",
  "#52525b": "zinc-600",
  "#3f3f46": "zinc-700",
  "#27272a": "zinc-800",
  "#18181b": "zinc-900",
  "#f5f5f5": "neutral-100",
  "#e5e5e5": "neutral-200",
  "#d4d4d4": "neutral-300",
  "#a3a3a3": "neutral-400",
  "#737373": "neutral-500",
  "#525252": "neutral-600",
  "#404040": "neutral-700",
  "#262626": "neutral-800",
  "#171717": "neutral-900",
  "#fafaf9": "stone-50",
  "#f5f5f4": "stone-100",
  "#e7e5e4": "stone-200",
  "#d6d3d1": "stone-300",
  "#a8a29e": "stone-400",
  "#78716c": "stone-500",
  "#57534e": "stone-600",
  "#44403c": "stone-700",
  "#292524": "stone-800",
  "#1c1917": "stone-900",
  "#fef2f2": "red-50",
  "#fee2e2": "red-100",
  "#fecaca": "red-200",
  "#fca5a5": "red-300",
  "#f87171": "red-400",
  "#ef4444": "red-500",
  "#dc2626": "red-600",
  "#b91c1c": "red-700",
  "#991b1b": "red-800",
  "#7f1d1d": "red-900",
  "#fff7ed": "orange-50",
  "#ffedd5": "orange-100",
  "#fed7aa": "orange-200",
  "#fdba74": "orange-300",
  "#fb923c": "orange-400",
  "#f97316": "orange-500",
  "#ea580c": "orange-600",
  "#c2410c": "orange-700",
  "#9a3412": "orange-800",
  "#7c2d12": "orange-900",
  "#fffbeb": "amber-50",
  "#fef3c7": "amber-100",
  "#fde68a": "amber-200",
  "#fcd34d": "amber-300",
  "#fbbf24": "amber-400",
  "#f59e0b": "amber-500",
  "#d97706": "amber-600",
  "#b45309": "amber-700",
  "#92400e": "amber-800",
  "#78350f": "amber-900",
  "#fefce8": "yellow-50",
  "#fef9c3": "yellow-100",
  "#fef08a": "yellow-200",
  "#fde047": "yellow-300",
  "#facc15": "yellow-400",
  "#eab308": "yellow-500",
  "#ca8a04": "yellow-600",
  "#a16207": "yellow-700",
  "#854d0e": "yellow-800",
  "#713f12": "yellow-900",
  "#f7fee7": "lime-50",
  "#ecfccb": "lime-100",
  "#d9f99d": "lime-200",
  "#bef264": "lime-300",
  "#a3e635": "lime-400",
  "#84cc16": "lime-500",
  "#65a30d": "lime-600",
  "#4d7c0f": "lime-700",
  "#3f6212": "lime-800",
  "#365314": "lime-900",
  "#f0fdf4": "green-50",
  "#dcfce7": "green-100",
  "#bbf7d0": "green-200",
  "#86efac": "green-300",
  "#4ade80": "green-400",
  "#22c55e": "green-500",
  "#16a34a": "green-600",
  "#15803d": "green-700",
  "#166534": "green-800",
  "#14532d": "green-900",
  "#ecfdf5": "emerald-50",
  "#d1fae5": "emerald-100",
  "#a7f3d0": "emerald-200",
  "#6ee7b7": "emerald-300",
  "#34d399": "emerald-400",
  "#10b981": "emerald-500",
  "#059669": "emerald-600",
  "#047857": "emerald-700",
  "#065f46": "emerald-800",
  "#064e3b": "emerald-900",
  "#f0fdfa": "teal-50",
  "#ccfbf1": "teal-100",
  "#99f6e4": "teal-200",
  "#5eead4": "teal-300",
  "#2dd4bf": "teal-400",
  "#14b8a6": "teal-500",
  "#0d9488": "teal-600",
  "#0f766e": "teal-700",
  "#115e59": "teal-800",
  "#134e4a": "teal-900",
  "#ecfeff": "cyan-50",
  "#cffafe": "cyan-100",
  "#a5f3fc": "cyan-200",
  "#67e8f9": "cyan-300",
  "#22d3ee": "cyan-400",
  "#06b6d4": "cyan-500",
  "#0891b2": "cyan-600",
  "#0e7490": "cyan-700",
  "#155e75": "cyan-800",
  "#164e63": "cyan-900",
  "#f0f9ff": "sky-50",
  "#e0f2fe": "sky-100",
  "#bae6fd": "sky-200",
  "#7dd3fc": "sky-300",
  "#38bdf8": "sky-400",
  "#0ea5e9": "sky-500",
  "#0284c7": "sky-600",
  "#0369a1": "sky-700",
  "#075985": "sky-800",
  "#0c4a6e": "sky-900",
  "#eff6ff": "blue-50",
  "#dbeafe": "blue-100",
  "#bfdbfe": "blue-200",
  "#93c5fd": "blue-300",
  "#60a5fa": "blue-400",
  "#3b82f6": "blue-500",
  "#2563eb": "blue-600",
  "#1d4ed8": "blue-700",
  "#1e40af": "blue-800",
  "#1e3a8a": "blue-900",
  "#eef2ff": "indigo-50",
  "#e0e7ff": "indigo-100",
  "#c7d2fe": "indigo-200",
  "#a5b4fc": "indigo-300",
  "#818cf8": "indigo-400",
  "#6366f1": "indigo-500",
  "#4f46e5": "indigo-600",
  "#4338ca": "indigo-700",
  "#3730a3": "indigo-800",
  "#312e81": "indigo-900",
  "#f5f3ff": "violet-50",
  "#ede9fe": "violet-100",
  "#ddd6fe": "violet-200",
  "#c4b5fd": "violet-300",
  "#a78bfa": "violet-400",
  "#8b5cf6": "violet-500",
  "#7c3aed": "violet-600",
  "#6d28d9": "violet-700",
  "#5b21b6": "violet-800",
  "#4c1d95": "violet-900",
  "#faf5ff": "purple-50",
  "#f3e8ff": "purple-100",
  "#e9d5ff": "purple-200",
  "#d8b4fe": "purple-300",
  "#c084fc": "purple-400",
  "#a855f7": "purple-500",
  "#9333ea": "purple-600",
  "#7e22ce": "purple-700",
  "#6b21a8": "purple-800",
  "#581c87": "purple-900",
  "#fdf4ff": "fuchsia-50",
  "#fae8ff": "fuchsia-100",
  "#f5d0fe": "fuchsia-200",
  "#f0abfc": "fuchsia-300",
  "#e879f9": "fuchsia-400",
  "#d946ef": "fuchsia-500",
  "#c026d3": "fuchsia-600",
  "#a21caf": "fuchsia-700",
  "#86198f": "fuchsia-800",
  "#701a75": "fuchsia-900",
  "#fdf2f8": "pink-50",
  "#fce7f3": "pink-100",
  "#fbcfe8": "pink-200",
  "#f9a8d4": "pink-300",
  "#f472b6": "pink-400",
  "#ec4899": "pink-500",
  "#db2777": "pink-600",
  "#be185d": "pink-700",
  "#9d174d": "pink-800",
  "#831843": "pink-900",
  "#fff1f2": "rose-50",
  "#ffe4e6": "rose-100",
  "#fecdd3": "rose-200",
  "#fda4af": "rose-300",
  "#fb7185": "rose-400",
  "#f43f5e": "rose-500",
  "#e11d48": "rose-600",
  "#be123c": "rose-700",
  "#9f1239": "rose-800",
  "#881337": "rose-900",
};
