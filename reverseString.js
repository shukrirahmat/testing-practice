function reverseString(text) {
    if (typeof text !== "string" || text === null) return '';
    return text.split('').reverse().join('');
} 

export default reverseString;