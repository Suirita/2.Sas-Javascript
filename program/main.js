const fs = require("fs").promises;
const readline = require("readline");
const MedicinesManager = require("./Managers/MedicinesManager");
const View_Medicines = MedicinesManager.View_Medicines;
const Add_Medicine = MedicinesManager.Add_Medicine;
const Delete_Medicines = MedicinesManager.Delete_Medicines;

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

const Start_Program = async () => {
  console.clear();
  console.log("Welcome to the Medicines List Manager\n");

  let exitProgram = false;

  while (!exitProgram) {
    console.log("====================================");
    console.log("        Medicines Management        ");
    console.log("====================================\n");
    console.log("Please choose an action:");
    console.log("-----------------------------------");
    console.log(" [v] - View the list of medicines");
    console.log(" [a] - Add a new medicine");
    console.log(" [e] - Edit a medicine");
    console.log(" [d] - delete a medicine");
    console.log(" [exit] - Exit the program");
    console.log("-----------------------------------\n");
    const action = await askQuestion("Your choice: ");

    console.log("\n");

    switch (action.toLowerCase()) {
      case "v":
        console.log("Fetching the medicines list...\n");
        View_Medicines();
        break;

      case "a":
        console.log("Add a new medicine!\n");
        const trade_name = await askQuestion(
          "Enter the trade name of the medicine (or type 'back' to go back): "
        );
        if (trade_name.toLowerCase() === "back") {
          break;
        }
        const active_ingredient = await askQuestion(
          "Enter the active ingredient of the medicine (or type 'back' to go back): "
        );
        if (active_ingredient.toLowerCase() === "back") {
          break;
        }
        const dosage = await askQuestion(
          "Enter the dosage of the medicine (or type 'back' to go back): "
        );
        if (dosage.toLowerCase() === "back") {
          break;
        }

        Add_Medicine(trade_name, active_ingredient, dosage);
        console.log(`\n✅ Medicine "${trade_name}" added successfully! ✅\n`);
        break;

      case "d":
        View_Medicines();
        console.log("Delete a medicine!\n");
        const deletedMedicine = await askQuestion(
          "Enter the 'trade name' or the 'id' of the medicine (or type 'back' to go back): "
        );
        if (medicine.toLowerCase == "back") {
          break;
        }
        Delete_Medicines(deletedMedicine);
        break;

      case "e":
        View_Medicines();
        console.log("Edit a medicine!\n");
        const editedMedicine = await askQuestion(
          "Enter the 'trade name' or the 'id' of the medicine (or type 'back' to go back): "
        );
        if (medicine.toLowerCase == "back") {
          break;
        }

      case "exit":
        console.log("Exiting the program. Goodbye!\n");
        exitProgram = true;
        break;

      default:
        console.log("❌ Invalid option. Please choose a valid action. ❌\n");
        break;
    }
  }

  rl.close();
};

Start_Program();
