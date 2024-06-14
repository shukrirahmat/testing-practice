import capitalize from "./capitalize.js";

test("capitalize normal string", () => {
    expect(capitalize("hello")).toBe("Hello");
})