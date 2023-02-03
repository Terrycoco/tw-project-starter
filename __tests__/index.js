import useColorChanger from "../hooks/useColorChanger";

import theme from "../themes/theme";
import { initVariants, getCustomVariants } from "../devUtils/twColorUtils";

const testClass = "bg-brand text-accent";
const testVars = "bg-brand-100 text-accent-900";
const testHex = "bg-[#0f766e] text-[#ffffff]";
const testHover = "bg-brand hover:text-brand-200";

const hexBrand = "#0f766e";
const lightTeal = "#f0fdfa";

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

describe("useColorChangerWithVariants----", function () {
  test("returns object", () => {
    expect(typeof useColorChanger(testVars, initTheme)).toBe("object");
  });
  test("has background property", () => {
    let result = useColorChanger(testVars, initTheme);
    expect(result.hasOwnProperty("backgroundColor")).toBe(true);
  });
  test("has value", () => {
    let result = useColorChanger(testVars, initTheme);
    console.log("result:", result);
    expect(result.backgroundColor).toBe(initTheme.variants.brand[100].hex);
  });
  test("has color property", () => {
    let result = useColorChanger(testVars, initTheme);
    expect(result.hasOwnProperty("color")).toBe(true);
  });
  test("has color value", () => {
    let result = useColorChanger(testVars, initTheme);
    console.log(result);
    expect(result.color).toBe(initTheme.variants.accent[900].hex);
  });
});

describe("useColorChangerWithHex----", function () {
  test("returns object", () => {
    expect(typeof useColorChanger(testHex, initTheme)).toBe("object");
  });
  test("has background property", () => {
    let result = useColorChanger(testHex, initTheme);
    expect(result.hasOwnProperty("backgroundColor")).toBe(true);
  });
  test("has value", () => {
    let result = useColorChanger(testHex, initTheme);
    console.log("result:", result);
    expect(result.backgroundColor).toBe(hexBrand);
  });
  test("has color property", () => {
    let result = useColorChanger(testHex, initTheme);
    expect(result.hasOwnProperty("color")).toBe(true);
  });
  test("has color value", () => {
    let result = useColorChanger(testHex, initTheme);
    console.log(result);
    expect(result.color).toBe("#ffffff");
  });
});

describe("useColorChanger hover  ----", function () {
  test("returns object", () => {
    expect(typeof useColorChanger(testHover, initTheme)).toBe("object");
  });
  test("has background property", () => {
    let result = useColorChanger(testHover, initTheme);
    expect(result.hasOwnProperty("backgroundColor")).toBe(true);
  });
  test("has value", () => {
    let result = useColorChanger(testHover, initTheme);
    console.log("result:", result);
    expect(result.backgroundColor).toBe(hexBrand);
  });
  test("has color property", () => {
    let result = useColorChanger(testHover, initTheme);
    expect(result.hasOwnProperty("color")).toBe(true);
  });
  test("has color value", () => {
    let result = useColorChanger(testHover, initTheme);
    console.log(result);
    expect(result.color).toBe("#ffffff");
  });
});

describe.only("calculate shade values------", function () {
  test("returns object", () => {
    expect(typeof getCustomVariants(lightTeal)).toBe("object");
  });
  test("returns object with lightest shade at 50", () => {
    expect(getCustomVariants(lightTeal).hasOwnProperty("50")).toBe(true);
  });
  test("lightest shade is not white", () => {
    expect(getCustomVariants(lightTeal["50"])).not.toBe("#ffffff");
  });
  test("darkest shade is not black", () => {
    expect(getCustomVariants(hexBrand["900"])).not.toBe("#000000");
  });
});
