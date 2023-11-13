function promisesDelayResolve(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`print: ${value}`);
      resolve(value);
    }, delay);
  });
}
// simple call 
promisesDelayResolve(1, 2000)
  .then(() => promisesDelayResolve(2, 1000))
  .then(() => promisesDelayResolve(3, 3000))
  .then(() => promisesDelayResolve(4, 500));


//   depden on event loop this the correct out 
// Output:
// print: 2 (after 1 second)
// print: 4 (after 500 milliseconds)
// print: 1 (after 2 seconds)
// print: 3 (after 3 seconds)
