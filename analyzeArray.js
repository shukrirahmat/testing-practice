function analyzeArray(array) {
    if (array === null) return null;
    
    array = array.filter((element) => typeof element === "number");

    if (array.length === 0) return null;

    const length = array.length;    
    const total = array.reduce((acc, value) => acc + value, 0);
    const average = total/length;
    const max = Math.max(...array);
    const min = Math.min(...array);

    return {average, max, min, length};
}

export default analyzeArray;