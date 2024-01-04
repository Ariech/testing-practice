/* eslint-disable no-restricted-syntax */
const average = (array) => {
  let sum = 0;
  for (const num of array) {
    sum += num;
  }

  return sum / array.length;
};

const min = (array) => {
  let minVal = array[0];

  for (const num of array) {
    if (minVal > num) {
      minVal = num;
    }
  }

  return minVal;
};

const max = (array) => {
  let maxVal = array[0];

  for (const num of array) {
    if (maxVal < num) {
      maxVal = num;
    }
  }

  return maxVal;
};

const analyzeArray = (array) => ({
  object: {
    average: average(array),
    min: min(array),
    max: max(array),
    length: array.length,
  },
});

export default analyzeArray;
