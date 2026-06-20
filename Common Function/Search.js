function searchEmployee(employees, query) {
    try {
        if(employees.length === 0) {
            console.log("No employee is found");
            return;
        }

        const foundEmployee = employees.find(
                (employee) => employee.name.toLowerCase().includes(query.toLowerCase())
        );

        if (foundEmployee) {
            console.log("\n=== Search Employee ===");
            console.log(`Name: ${foundEmployee.name}, Age: ${foundEmployee.age}, Email: ${foundEmployee.email}, Number: ${foundEmployee.number}`);
        } else {
            console.log("Employee not found");
        }
    } catch(error) {
        console.log("Error searching for employees", error);
    }
}

module.exports = searchEmployee;

//find: get 1 item -> search
//include: check text -> partial search