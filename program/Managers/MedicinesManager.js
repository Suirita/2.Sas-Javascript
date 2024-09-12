const DataManager = require("../Data/DataManager");
const readMedicines = DataManager.readMedicines;
const writeMedicines = DataManager.writeMedicines;

// Main function to view medicines list
const View_Medicines = () => {
  let medicines = readMedicines();
  console.log(`Medicine List: \n`);
  if (medicines.length != 0) {
    medicines.forEach((medicine) => {
      console.log(` Medicine ${medicine.id}:`);
      console.log(
        `   trade_name: ${medicine.trade_name} \n   active_ingredient:${medicine.active_ingredient}\n   dosage:${medicine.dosage}\n `
      );
    });
  } else {
    console.log("no medicine exist");
  }
};

// Main function to add a medicine
const Add_Medicine = (trade_name, active_ingredient, dosage) => {
  let Medicines = readMedicines();

  let newId;
  if (Medicines.length > 0) {
    newId = Medicines[Medicines.length - 1].id + 1;
  } else {
    newId = 1;
  }

  const Medicine = {
    id: newId,
    trade_name,
    active_ingredient,
    dosage,
  };

  Medicines.push(Medicine);
  writeMedicines(Medicines);
};

// Main function to delete a medicine
const Delete_Medicines = (medicine) => {
  let Medicines = readMedicines();
  let initialLength = Medicines.length;

  Medicines = Medicines.filter((Medicine) => {
    return !(
      Medicine.id == medicine ||
      Medicine.trade_name.toLowerCase() == medicine.toLowerCase()
    );
  });

  if (Medicines.length < initialLength) {
    writeMedicines(Medicines);
    console.log("\n✅ Medicine deleted successfully.\n");
  } else {
    console.log("\n❌ No medicine with this 'trade name' or 'id' exists.\n");
  }
};

module.exports = {
  View_Medicines,
  Add_Medicine,
  Delete_Medicines,
};
