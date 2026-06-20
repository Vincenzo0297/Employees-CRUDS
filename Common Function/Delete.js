function deleteEmployees(employees, query) {
    try {
        if (employees.length === 0) {
            console.log("Employee is not found");
            return;
        }

        const index = employees.findIndex((employee) =>
            employee.id === Number(query) || employee.name.toLowerCase().includes(query.toLowerCase()
        ));

        if (index !== -1) {
            const removed = employees.splice(index, 1);
            console.log("\n=== Employee Deleted ===");
            console.log(`Name: ${removed[0].name}, Age: ${removed[0].age}, Email: ${removed[0].email}, Number: ${removed[0].number}`);
        } else {
            console.log("Employee not found");
        }

    } catch (error) {
        console.log("Error deleting employees:", error);
    }
}

module.exports = deleteEmployees;

//findIndex: get position -> delete/update
//splice: remove/change -> delete