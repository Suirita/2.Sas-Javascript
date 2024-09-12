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

// Main function to search for a medicine
const Search_Medicines = (medicine) => {
  let Medicines = readMedicines();

  let filteredMedicines = Medicines.filter((med) => {
    return (
      med.id == medicine ||
      med.trade_name.toLowerCase() == medicine.toLowerCase()
    );
  });

  if (filteredMedicines.length > 0) {
    console.log(`\n ✅ Medicines found: \n`);
    filteredMedicines.forEach((med) => {
      console.log(
        `Medicine: ${med.id}\n Trade Name: ${med.trade_name}\n Active Ingredient: ${med.active_ingredient}\n Dosage: ${med.dosage} \n`
      );
    });
  } else {
    console.log("❌ No medicines found matching the search criteria.");
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

// Main function to edit a medicine
const Edit_Medicines = (
  editedMedicine,
  new_trade_name,
  new_active_ingredient,
  new_dosage
) => {
  let Medicines = readMedicines();

  for (let i = 0; i < Medicines.length; i++) {
    if (
      Medicines[i].id == editedMedicine ||
      Medicines[i].trade_name.toLowerCase() == editedMedicine.toLowerCase()
    ) {
      Medicines[i].trade_name = new_trade_name;
      Medicines[i].active_ingredient = new_active_ingredient;
      Medicines[i].dosage = new_dosage;

      break;
    }
  }

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
    console.log("\n❌ No medicines found matching the search criteria.\n");
  }
};

module.exports = {
  View_Medicines,
  Search_Medicines,
  Add_Medicine,
  Edit_Medicines,
  Delete_Medicines,
};
