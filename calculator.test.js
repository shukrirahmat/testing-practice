import calc from "./calculator.js";

test("non number input add", () => {
    expect(() => calc.add("A", "B")).toThrow();
}) 

test("non number input subtract", () => {
    expect(() => calc.subtract("A", 2)).toThrow();
}) 

test("non number input multiply", () => {
    expect(() => calc.multiply(10, [2,3])).toThrow();
}) 

test("non number input divide", () => {
    expect(() => calc.divide(null, 23)).toThrow();
}) 

test("integer add", () => {
    expect(calc.add(8, 16)).toBe(24);
})

test("fraction add", () => {
    expect(calc.add(0.1, 0.2)).toBeCloseTo(0.3);
})

test("integer subtract",() => {
    expect(calc.subtract(5,20)).toBe(-15);
})

test("fraction subtract",() => {
    expect(calc.subtract(0.3, 0.2)).toBeCloseTo(0.1);
})

test("integer multiply",() => {
    expect(calc.multiply(7,8)).toBe(56);
})

test("fraction multiply",() => {
    expect(calc.multiply(0.3, 0.2)).toBeCloseTo(0.06);
})

test("integer divide",() => {
    expect(calc.divide(9,2)).toBe(4.5);
})

test("fraction divide",() => {
    expect(calc.divide(0.3, 0.2)).toBeCloseTo(1.5);
})

test("zero divide", () => {
    expect(() => calc.divide(20, 0)).toThrow();
})