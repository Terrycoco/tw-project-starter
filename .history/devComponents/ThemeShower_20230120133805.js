import useStorage from "../utils/useStorage";

//present theme (as yet unsaved to user)
//ability to copy into clipboard

const ThemeShower = () => {
  const theme = useStorage("theme");

  return <div>I am theme</div>;
};

export default ThemeShower;
