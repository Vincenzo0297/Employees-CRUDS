function updateEmployee(employees) {
    try{
        if(employees === 0) {
            console.log("Employee is not found");
            return;
        }

        
    } catch(error) {
        console.log("Error updating employee", error);
    }
}

module.exports = updateEmployee;