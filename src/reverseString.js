const reverseString = (string) => {
  const splitString = string.split("");
  const reverseStringArray = splitString.reverse();
  const joinStringArray = reverseStringArray.join("");

  return joinStringArray;
};

export default reverseString;
