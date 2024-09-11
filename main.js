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
const readSkills = async () => {
  try {
    const data = await fs.readFile("skills.json", "utf8");
    return JSON.parse(data).skills || [];
  } catch (err) {
    if (err.code === "ENOENT") {
      // File doesn't exist, return an empty array
      return [];
    } else {
      throw new Error("Error reading the file.");
    }
  }
};

const View_skills = async () => {
  let skills = await readSkills();
  console.log(`Skills List: \n`);
  skills.forEach((skill) => {
    console.log(` Skill ${skill.index + 1}:`);
    console.log(`  name: ${skill.name} \n  description:${skill.description}\n`);
  });
};

// Function to write skills back to the file
const writeSkills = async (skills) => {
  const updatedData = JSON.stringify({ skills }, null, 2);
  try {
    await fs.writeFile("skills.json", updatedData, "utf8");
    console.log("Skill has been added successfully.");
  } catch (err) {
    console.error("Error writing to the file:", err);
  }
};

// Main function to add a skill
const Add_skill = async () => {
  try {
    let skills = await readSkills();

    const name = await askQuestion("The name of the skill?: ");
    if (name === "exit") return rl.close();

    const description = await askQuestion("The description of the skill?: ");
    if (description === "exit") return rl.close();

    // Create new skill object with index
    const skill = {
      index: skills.length ? skills[skills.length - 1].index + 1 : 0,
      name,
      description,
    };

    // Add the new skill to the array and write back to the file
    skills.push(skill);
    await writeSkills(skills);
  } catch (err) {
    console.error(err.message);
  } finally {
    rl.close();
  }
};

View_skills();
// Add_skill();
