// declarativ 
const applyFunctionDeclarative = (numbers, func) => numbers.map(func);
// imperative
const applyFunctionImperative = (numbers, func) => {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    newArray.push(func(numbers[i]));
  }
  return newArray;
};
