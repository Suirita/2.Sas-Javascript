const fs = require("fs").promises;

async function app(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

console.log("before");
app("myFile.txt");
console.log("after");
