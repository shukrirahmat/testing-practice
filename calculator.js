function Calculator() {

    function isNumber(a, b) {
        return (typeof a === 'number' && typeof b === 'number');
    }

    function add(a, b) {
        if (!isNumber(a, b)) {
            throw new Error("A or B is not a number");
        }
        return a + b;
    }

    function subtract(a, b) {
        if (!isNumber(a, b)) {
            throw new Error("A or B is not a number");
        }
        return a - b;
    }

    function multiply(a, b) {
        if (!isNumber(a, b)) {
            throw new Error("A or B is not a number");
        }
        return a*b;
    }

    function divide(a, b) {
        if (!isNumber(a, b)) {
            throw new Error("A or B is not a number");
        }
        if (b === 0) {
            throw new Error("cannot divide by zero");   
        }
        return a/b;
    }

    return {add, subtract, multiply, divide};
}

const calculator = Calculator();

export default calculator;