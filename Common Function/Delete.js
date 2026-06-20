function deleteEmployees(employees, query) {
    try {
        if (employees.length === 0) {
            console.log("Employee is not found");
            return;
        } else {
            const foundEmployee = employees.findIndex((employee) =>
                employee.id === Number(query) || employee.name.toLowerCase().includes(query.toLowerCase()
            ));

            if (foundEmployee !== -1) {
                const removed = employees.splice(index, 1);
                console.log("\n=== Employee Deleted ===");
                console.log(`Name: ${removed[0].name}, Age: ${removed[0].age}, Email: ${removed[0].email}, Number: ${removed[0].number}`);
            }
        }
    } catch (error) {
        console.log("Error deleting employees:", error);
    }
}

module.exports = deleteEmployees;

//findIndex: Returns the index (position)
//splice: Used to add, remove, or replace elements in an array — and it changes the original array.