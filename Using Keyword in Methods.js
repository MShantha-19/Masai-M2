/*Q: 11
Using the this Keyword in Methods
Create an object employee with the following properties:

firstName (string)
lastName (string)
hourlyWage (number)
hoursWorked (number)
Add the following method to the object:

calculateSalary - Calculates the salary based on the hourlyWage and hoursWorked properties. Use the this keyword to access the object's properties.
Write a program to:

Display the employee's full name in the format firstName lastName.
Call calculateSalary to calculate and display the employee's salary.*/
let employee = {
  firstName: "John",
  lastName: "Smith",
  hourlyWage: 20,
  hoursWorked: 40,
  calculateSalary: function() {
    return this.hourlyWage * this.hoursWorked;
  }
};
console.log("Employee's full name:", employee.firstName + " " + employee.lastName);
console.log("Employee's salary:", employee.calculateSalary());
