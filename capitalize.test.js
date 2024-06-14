import capitalize from "./capitalize.js";

test("normal string", () => {
    expect(capitalize("hello")).toBe("Hello");
})

test("non alphabet string", () => {
    expect(capitalize("31245")).toBe("31245");
})

test("white space", () => {
    expect(capitalize(" hello")).toBe(" hello");
})

test("null", () => {
    expect(capitalize(null)).toBe("");
})

test("non-string", () => {
    expect(capitalize([1,2])).toBe("");
})