function caesarCipher(text, shiftFactor) {
  const newText = [];

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    let char;

    if (code > 96 && code < 123) {
      char = shiftLowerCase(code, shiftFactor);
    } else if (code > 64 && code < 91) {
      char = shiftUpperCase(code, shiftFactor);
    } else {
      char = text.charAt(i);
    }
    newText.push(char);
  }

  return newText.join("");
}

function shiftUpperCase(code, shiftFactor) {
    let shifted = code + shiftFactor;
    if (shifted > 90) {
      shifted = (shifted % 90) + 64;
    }
    return String.fromCharCode(shifted);
}

function shiftLowerCase(code, shiftFactor) {
  let shifted = code + shiftFactor;
  if (shifted > 122) {
    shifted = (shifted % 122) + 96;
  }
  return String.fromCharCode(shifted);
}

export default caesarCipher;
