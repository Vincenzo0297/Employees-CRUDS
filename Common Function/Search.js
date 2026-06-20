function searchEmployee(employees, query) {
    try {
        if(employees.length === 0) {
            console.log("Employee is not found");
            return;
        } else {
            const foundEmployee = employees.find(
                (employee) => employee.name.toLowerCase().includes(query.toLowerCase())
            );

            if (foundEmployee) {
                console.log("\n=== Search Employee ===");
                console.log(`Name: ${foundEmployee.name}, Age: ${foundEmployee.age}, Email: ${foundEmployee.email}, Number: ${foundEmployee.number}`);
            } else {
                console.log("Employee is not found");
            }
        }
    } catch(error) {
        console.log("Error searching for employees", error);
    }
}

module.exports = searchEmployee;

//find: Returns the value
//include: check text -> partial search