function updateStudents(Students, searchName, updateAge, updateEmail, updateNumber) {
    try {
        let isValid = true;

        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(searchName)) {
            console.log("Invalid name");
            isValid = false;
        }

        const ageRegex = /^(?:1[01][0-9]|120|[1-9]?[0-9])$/;
        if (updateAge && !ageRegex.test(String(updateAge))) {
            console.log("Invalid age");
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (updateEmail && !emailPattern.test(updateEmail)) {
            console.log("Invalid email");
            isValid = false;
        }

        const phonePattern = /^[0-9]{8}$/;
        if (updateNumber && !phonePattern.test(updateNumber)) {
            console.log("Invalid number");
            isValid = false;
        }

        if (!isValid) return;

        if (Students.length === 0) {
            console.log("Student is not found");
            return;
        } else {
            const foundStudent = Students.find(
                (student) => student.name.toLowerCase().includes(searchName.toLowerCase())
            );

            if (foundStudent) {
                if (updateAge) foundStudent.age = updateAge;
                if (updateEmail) foundStudent.email = updateEmail;
                if (updateNumber) foundStudent.number = updateNumber;

                console.log("\n=== Student Updated ===");
                console.log(
                    `Name: ${foundStudent.name}, Age: ${foundStudent.age}, Email: ${foundStudent.email}, Number: ${foundStudent.number}`
                );
            } else {
                console.log("Student is not found");
            }
        }
    } catch (error) {
        console.log("Error updating student", error);
    }
}

module.exports = updateStudents;