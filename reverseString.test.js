import reverseString from "./reverseString.js";

test("basic string", () => {
    expect(reverseString("Hello")).toBe("olleH");
})

test("string with space", () => {
    expect(reverseString("Hello World")).toBe("dlroW olleH");
})

test("non string null", () => {
    expect(reverseString(null)).toBe("");
})

test("non string object", () => {
    expect(reverseString({x: 2})).toBe("");
})