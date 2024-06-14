function capitalize(text) {
  if (typeof text !== "string" || text === null) return "";
  const first = text.charAt(0).toUpperCase();
  return first + text.slice(1);
}

export default capitalize;
