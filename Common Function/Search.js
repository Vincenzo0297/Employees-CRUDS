function searchEmployee(employees, query) {
    try {
        if(employees.length === 0) {
            console.log("No employee is found");
            return;
        } else {
            const foundEmployee = employees.find(
                (employee) => employee.name.toLowerCase().includes(query.toLowerCase())
            );

            if (foundEmployee) {
                console.log("\n=== Search Employee ===");
                console.log(`Name: ${foundEmployee.name}, Age: ${foundEmployee.age}, Email: ${foundEmployee.email}, Number: ${foundEmployee.number}`);
            }
        }
    } catch(error) {
        console.log("Error searching for employees", error);
    }
}

module.exports = searchEmployee;

//find: Returns the value
//include: check text -> partial search