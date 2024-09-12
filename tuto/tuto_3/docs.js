// const myPromise = new Promise((resolve, reject) => {
//   // asynchronous code
//   setTimeout(() => {
//     resolve("the promise is resolved !");
//   }, 2000);

//   // reject("an error happened");
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data retrieved");
//     }, 1000);
//   });
// }

// function processData(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Data processed : ${data}`);
//     }, 500);
//   });
// }

// getData()
//   .then((data) => processData(data))
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// fetch("https://api.example.com/data")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error during query :", error));

// async function fetchData() {
//   const response = await fetch("https://api.example.com/data");
//   const data = await response.json();
//   return data;
// }

// fetchData()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// async function getData() {
//   try {
//     const response = await fetch("https://api.example.com/data");
//     if (!response.ok) {
//       throw new Error("Error during query");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error :", error);
//     throw error;
//   }
// }

// async function main() {
//   try {
//     const data = await getData();
//     console.log(data);
//   } catch (error) {
//     console.error("Error in main function :", error);
//   }
// }

// main();
