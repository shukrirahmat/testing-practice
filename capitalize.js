function capitalize(text) {
  if (text === null) return null;
  if (typeof text !== "string") return "";
  const first = text.charAt(0).toUpperCase();
  return first + text.slice(1);
}

export default capitalize;
