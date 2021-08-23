// arrow function with no param

const logMessage = (msg) => console.log(msg);
logMessage("Logging this message");

// arrow function with default param

const defaultValues = (a = 2, b = 4) => a * b;
console.log(defaultValues());