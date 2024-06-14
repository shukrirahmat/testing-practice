function capitalize(text) {
  const first = text.charAt(0).toUpperCase();
  return first + text.slice(1);
}

export default capitalize;
