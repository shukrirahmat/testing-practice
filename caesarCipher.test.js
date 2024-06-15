import caesarCipher from "./caesarCipher.js";

test("lower case string", () => {
    expect(caesarCipher("abc", 5)).toBe("fgh");
})

test("overflowing lower case", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
})

test("upper case string", () => {
    expect(caesarCipher("DEF", 3)).toBe("GHI");
})

test("overflowing upper case", () => {
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
})

test("mixed letters", () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test("non letters", () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test("non string", () => {
    expect(caesarCipher({name: "fake object"})).toBe("");
})