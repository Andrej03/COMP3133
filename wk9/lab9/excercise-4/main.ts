import { Customer } from "./customer.js";

let customer = new Customer("John", "Smith");
customer.greeter();

let age = customer.GetAge();
console.log(age);