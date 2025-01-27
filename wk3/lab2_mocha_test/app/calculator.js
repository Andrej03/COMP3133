export const addition = (a, b) => a + b;
export const subtraction = (a, b) => a - b;
export const multiplication = (a, b) => a * b;
export const division = (a, b) => {
  if (b === 0) {
    return "Cannot divide by zero";
  } return a / b;
};

