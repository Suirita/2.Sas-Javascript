async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Error during query");
    } 
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error :", error);
    throw error;
  }
}

async function main() {
  try {
    console.log("before");
    const data = await getData();
    console.log(data.length);
    console.log("after");
  } catch (error) {
    console.error("Error in the main function :", error);
  }
}

main();
