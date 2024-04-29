// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

addEmployeesBtn.addEventListener('click', function() {
  // const userFirstName = prompt('Add First Name');
  // const userLastName = prompt('Add Last Name');
  // const userSalary = prompt('Add Salary');
  // console.log('userInput');
});

// Collect employee data
const collectEmployees = function() {
const employees = [];
// I set the variable for the input data equal to an empty array
let continueAdding = true;
// I set a variable to set a while loop to execute the full list of item to be added to the array and set it to strict equality.  
while (continueAdding) {
  let firstName = prompt('Add First Name');
  let lastName = prompt('Add Last Name');
  let employeeSalary = prompt('Add Salary');
// I created a while loop to prompt user input to continue ofr termine the while loop and run the full object cycle.
let salary = 0;

let _tsalary = prompt("Get Salary");

salary = (isNaN(_tsalary) || _tsalary === null) ? 0 : Number(_tsalary);
// I worked with Eric Roys from class to better understand formatting a string to a numerical value.
// I set the variable and arguments to convert the salary string to a number.
  employees.push({
    firstName: firstName,
    lastName: lastName,
    salary: salary
  });
// I created a object with the first name, last name and salary key value pairs to be pushed to the empty array.
  const newLocal = continueAdding = confirm('Do You Want to Add Another Employee?');
  // I set a confirm prompt to revieve user input whether to continue and add another employee or terminate
}

return employees;

  // TODO: Get user input to create and return an array of employee objects
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  // I calculated the total salary range of the entire employee array.
  const averageSalary = totalSalary / employeesArray.length;
  // I set the average salary variable and got the calculation by taking the total salary range and dividing it by the entire array length
  const current = employeesArray.length;
  // I set the current variable to be the array after employees are added and then let that be equal to the total length of the returned array.
console.log(`The average employee salary between our ${current}
 employee(s) is ${averageSalary.toLocaleString("en-US", {style: "currency",
currency: "USD"})}`);
  // TODO: Calculate and display the average salary
  // I worked with Simona Montecchi and Manuel Pena from class to help calculate the average salary function logic.
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
const randomIndex = Math.floor(Math.random() * employeesArray.length);
// I caculated the random index selection from the array using the math.floor(math.random) times the entire length of the array.
const randomEmployee = employeesArray[randomIndex];
// I set the variable for the random employee selection and made it be equal to the returned array and index reference.
console.log(`Congratulations you are the winner ${randomEmployee.firstName}`);
// I set he computer to log the Congratulations Message and then include the object key value pair of array and First Name of the random
//employee
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
