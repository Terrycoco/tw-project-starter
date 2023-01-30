import useColorChanger from "../hooks/useColorChanger";
import theme from "../themes/theme";
import { initVariants } from "../devUtils/twColorUtils";

const testClass = "bg-brand text-accent";
const hexBrand = "#0f766e";
const varBrand = "#0f766e";

const initTheme = initVariants(theme);

test("Sanity check", () => {
  expect(true).toBe(true);
});

describe("useColorChanger tests", function () {
  test("returns object", () => {
    expect(typeof useColorChanger(testClass, initTheme)).toBe("object");
  });
  test("has background property", () => {
    let result = useColorChanger(testClass, initTheme);
    expect(result.hasOwnProperty("backgroundColor")).toBe(true);
  });
  test("has value", () => {
    let result = useColorChanger(testClass, initTheme);
    console.log("result:", result);
    expect(result.backgroundColor).toBe(hexBrand);
  });
  test("has color property", () => {
    let result = useColorChanger(testClass, initTheme);
    expect(result.hasOwnProperty("color")).toBe(true);
  });
  test("has color value", () => {
    let result = useColorChanger(testClass, initTheme);
    console.log(result);
    expect(result.color).toBe(initTheme.colors.accent);
  });
});
