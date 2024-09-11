const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const Add = (first_name, last_name) => {
  fs.readFile("prototype.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      let namesArray = [];

      if (data) {
        namesArray = JSON.parse(data);
      }

      let name = {
        id: namesArray.length + 1,
        first_name: first_name,
        last_name: last_name,
      };

      namesArray.push(name);
      const jsonData = JSON.stringify(namesArray, null, 2);

      fs.writeFile("prototype.json", jsonData, (err) => {
        console.log("name added successfully");
        if (err) {
          console.error(err);
        }
      });
    }
  });
};

const Delete = (id) => {
  fs.readFile("prototype.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      let namesArray = [];

      if (data) {
        namesArray = JSON.parse(data);
      }

      if (namesArray[id - 1] == undefined) {
        console.log(`name with id:${id} doesn't exist`);
      } else {
        namesArray.splice(id - 1, 1);
        const jsonData = JSON.stringify(namesArray, null, 2);
        fs.writeFile("prototype.json", jsonData, (err) => {
          console.log(`delete ${id}`);
          if (err) {
            console.error(err);
          }
        });
      }
    }
  });
};

const names_list = async () => {
  const letter = await askQuestion("Enter the letter (a, d): ");
  if (letter == "a") {
    first_name = await askQuestion("Enter the first_name: ");
    last_name = await askQuestion("Enter the last_name: ");
    Add(first_name, last_name);
  } else if (letter == "d") {
    id = await askQuestion("Enter the id: ");
    Delete(id);
  }

  rl.close();
};

names_list();
