const fs = require("fs").promises;
const path = require("path");

// Function to read data from file
const readData = async () => {
  try {
    const filePath = path.resolve(__dirname, "../DB/prototype.json");
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data) || [];
  } catch (err) {
    console.error("Error reading the file:", err);
    return [];
  }
};

// Function to write data back to the file
const writeData = async (data) => {
  try {
    const filePath = path.resolve(__dirname, "../DB/prototype.json");
    const updatedData = JSON.stringify(data, null, 2);
    await fs.writeFile(filePath, updatedData);
    console.log("Data has been added successfully.");
  } catch (err) {
    console.error("Error writing to the file:", err);
  }
};

module.exports = {
  readData,
  writeData,
};
