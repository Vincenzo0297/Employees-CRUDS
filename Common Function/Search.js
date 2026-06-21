function searchStudents(Students, query) {
    try {
        if(Students.length === 0) {
            console.log("Student is not found");
            return;
        } else {
            const foundStudent = Students.find(
                (student) => student.name.toLowerCase().includes(query.toLowerCase())
            );

            if (foundStudent) {
                console.log("\n=== Search Employee ===");
                console.log(`Name: ${foundStudent.name}, Age: ${foundStudent.age}, Email: ${foundStudent.email}, Number: ${foundStudent.number}`);
            } else {
                console.log("Student is not found");
            }
        }
    } catch(error) {
        console.log("Error searching for Student", error);
    }
}

module.exports = searchStudents;