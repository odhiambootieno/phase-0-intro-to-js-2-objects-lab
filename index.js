// Initialize the employee object
var employee = {
    name: 'Sam',
    streetAddress: '123 Main St' // You can assign any initial value
};

// Function to update employee with a new key and value without mutating the original
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, // Spread the original employee object
        [key]: value // Add the new key-value pair
    };
}

// Function to destructively update employee with a new key and value
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Mutate the original employee object
    return employee; // Return the updated employee object
}

// Function to delete a key from employee without mutating the original
function deleteFromEmployeeByKey(employee, key) {
    const { [key]: deletedKey, ...newEmployee } = employee; // Destructure to omit the key
    return newEmployee; // Return the new object without the specified key
}

// Function to destructively delete a key from employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Mutate the original employee object
    return employee; // Return the updated employee object
}
