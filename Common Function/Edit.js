






















// function updateEmployee(employees, query, newName, newAge, newEmail, newNumber) {
//     try {
//         if (employees.length === 0) {
//             console.log("Employee is not found");
//             return;
//         }

//         const employee = employees.find(
//             (employee) => employee.name.toLowerCase() === query.toLowerCase()
//         );

//         if (!employee) {
//             console.log("Employee is not found");
//             return;
//         }

//         if (newName) employee.setName(newName);
//         if (newAge) employee.setAge(newAge);
//         if (newEmail) employee.setEmail(newEmail);
//         if (newNumber) employee.setNumber(newNumber);

//         console.log("\n=== Employee Updated ===");
//         employee.printInfo();
//     } catch(error) {
//         console.log("Error updating employee", error);
//     }
// }

// module.exports = updateEmployee;