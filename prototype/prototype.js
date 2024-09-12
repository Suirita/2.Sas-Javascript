const readline = require("readline");
const ApprenantManager = require("./Managers/ApprenantManager");
const Add = ApprenantManager.Add;
const View = ApprenantManager.View;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const names_list = async () => {
  const letter = await askQuestion("Enter the letter (a, v): ");
  if (letter == "a") {
    first_name = await askQuestion("Enter the first_name: ");
    last_name = await askQuestion("Enter the last_name: ");
    Add(first_name, last_name);
  } else if (letter == "v") {
    View();
  } else {
    console.log(" Invalid option. Please choose a valid action.");
  }

  rl.close();
};

names_list();
