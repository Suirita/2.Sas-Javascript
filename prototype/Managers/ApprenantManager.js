const DataManager = require("../Data/DataManager");
const readData = DataManager.readData;
const writeData = DataManager.writeData;

const Add = async (first_name, last_name) => {
  let ApprenantArray = await readData();

  let Apprenant = {
    id: ApprenantArray.length + 1,
    first_name: first_name,
    last_name: last_name,
  };

  ApprenantArray.push(Apprenant);
  await writeData(ApprenantArray);
};

const View = async () => {
  let data = await readData();
  console.log(data)
};

module.exports = {
  Add,
  View
};
