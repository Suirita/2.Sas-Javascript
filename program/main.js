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
const View_Medicines = async () => {
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
const Add_Medicine = async () => {
  try {
    let Medicines = await readMedicines();

    const trade_name = await askQuestion("The trade name of the Medicine?: ");
    if (trade_name === "exit") return rl.close();

    const active_ingredient = await askQuestion(
      "The active ingredient of the skill?: "
    );
    if (active_ingredient === "exit") return rl.close();

    const dosage = await askQuestion("The dosage of the skill?: ");
    if (dosage === "exit") return rl.close();

    const Medicine = {
      id: Medicines.length + 1,
      trade_name,
      active_ingredient,
      dosage,
    };

    Medicines.push(Medicine);
    await writeMedicines(Medicines);
  } catch (err) {
    console.error(err.message);
  } finally {
    rl.close();
  }
};

const Start_Program = async () => {
  console.log("====================================");
  console.log("   Welcome to the Medicines List   ");
  console.log("====================================\n");

  let exitProgram = false;

  while (!exitProgram) {
    const action = await askQuestion(
      "Please choose an action:\n" +
        "-----------------------------------\n" +
        " [v] - View the list of medicines\n" +
        " [a] - Add a new medicine\n" +
        " [exit] - Exit the program\n" +
        "-----------------------------------\n" +
        "Your choice: "
    );

    console.log("\n"); // Add a new line for better readability

    switch (action.toLowerCase()) {
      case "v":
        console.log("Loading the medicines list...\n");
        View_Medicines();
        break;

      case "a":
        console.log("Preparing to add a new medicine...\n");
        await Add_Medicine(); // Add awaits for async if needed
        console.log("Medicine added successfully!\n");
        break;

      case "exit":
        console.log("Exiting the program. Goodbye!\n");
        exitProgram = true;
        rl.close();
        break;

      default:
        console.log("Invalid option. Please choose a valid action.\n");
        break;
    }
  }
};

Start_Program();
