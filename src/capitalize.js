const capitalize = (string) => {
  const firstLetter = string.slice(0, 1);
  const restOfTheString = string.slice(1);

  return firstLetter.toUpperCase() + restOfTheString;
};

export default capitalize;
