"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_js_1 = require("./customer.js");
var customer = new customer_js_1.Customer("John", "Smith");
customer.greeter();
var age = customer.GetAge();
console.log(age);
