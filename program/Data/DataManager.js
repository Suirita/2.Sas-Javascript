const fs = require("fs");
const path = require("path");

// Function to read skills from file
const readMedicines = () => {
  const filePath = path.resolve(__dirname, "../DB/medicines.json");
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data) || [];
};

// Function to write medicines back to the file
const writeMedicines = (medicines) => {
  const updatedData = JSON.stringify(medicines, null, 2);
  const filePath = path.resolve(__dirname, "../DB/medicines.json");
  fs.writeFileSync(filePath, updatedData);
};

module.exports = {
  readMedicines,
  writeMedicines,
};
