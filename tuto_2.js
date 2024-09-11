const fs = require("fs");

// Écriture dans le fichier
const monTableau = ["pomme", "banane", "orange", 42];

const data = JSON.stringify(monTableau);

fs.writeFile("monTableau.json", data, (err) => {
  if (err) {
    console.error(err);
  }
});

// Lecture du fichier
fs.readFile("monTableau.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    const tableauLu = JSON.parse(data);
    console.log(tableauLu);
  }
});
