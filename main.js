const fs = require("fs").promises;
const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Helper function to ask questions using promises
const askQuestion = (query) => {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
};

// Function to read skills from file
const readMedicines = async () => {
  try {
    const data = await fs.readFile("medicines.json", "utf8");
    return JSON.parse(data).medicines || [];
  } catch (err) {
    if (err.code === "ENOENT") {
      return [];
    } else {
      throw new Error("Error reading the file.");
    }
  }
};

// Function to write medicines back to the file
const writeMedicines = async (medicines) => {
  const updatedData = JSON.stringify({ medicines }, null, 2);
  try {
    await fs.writeFile("medicines.json", updatedData, "utf8");
    console.log("Skill has been added successfully.");
  } catch (err) {
    console.error("Error writing to the file:", err);
  }
};

// Main function to view medicines list
const View_skills = async () => {
  let medicines = await readMedicines();
  console.log(`Medicine List: \n`);
  medicines.forEach((medicine) => {
    console.log(` Medicine ${medicines.indexOf(medicine) + 1}:`);
    console.log(
      `   trade_name: ${medicine.trade_name} \n   active_ingredient:${medicine.active_ingredient}\n   dosage:${medicine.dosage}`
    );
  });
};

// Main function to add a medicine
const Add_skill = async () => {
  try {
    let skills = await readSkills();

    const name = await askQuestion("The name of the skill?: ");
    if (name === "exit") return rl.close();

    const description = await askQuestion("The description of the skill?: ");
    if (description === "exit") return rl.close();

    const skill = {
      index: skills.length ? skills[skills.length - 1].index + 1 : 0,
      name,
      description,
    };

    skills.push(skill);
    await writeSkills(skills);
  } catch (err) {
    console.error(err.message);
  } finally {
    rl.close();
  }
};

// View_skills();
Add_skill();
