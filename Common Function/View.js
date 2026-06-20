function viewAllEmployees(employees) {
    try {
        if (employees.length === 0) {
            console.log("No employee is found");
            return;
        } else {
           console.log("\n=== View All Employees ===");
           employees.forEach((employee, index) => {
                console.log(`${index + 1}. Name: ${employee.name}, Age: ${employee.age},  Email: ${employee.email}, Number: ${employee.number}`);
           });
        }
    } catch (error) {
        console.log("Error viewing the employees", error);
    }
}

module.exports = viewAllEmployees;

//length: count item -> check empty
//forEach: loop item -> print all
            
        

     