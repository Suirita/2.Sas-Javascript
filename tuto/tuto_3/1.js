const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("The promise is resolved");
  }, 2000);
});

console.log("before the execution of promise");
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

console.log("after the execution of promise");

console.log("before the execution of promise");
console.log("The promise is resolved");
console.log("after the execution of promise");
