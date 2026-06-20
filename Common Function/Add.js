function addEmployee(employees) {
    console.log("employees");

    employees.push({
        name: "Test",
        age: 25,
        email: "Hahaha@gmail.com",
        number: 432134
    });
}

module.exports = addEmployee;