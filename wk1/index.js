console.log("week01");

let b1 = new Buffer("hello");
console.log(b1);

console.log(b1.toString("utf8"));
console.log(b1[0]);
console.log(b1.toString("ascii"));
console.log(b1.toString("base64"));
console.log(b1.toString("hex"));
console.log(b1.toString("ucs-2"));
console.log(b1.includes("he"));

let b2 = Buffer.alloc(10);
console.log(b2);
b2[10] = 66;
console.log(b2[10]);
console.log(b2.length);

let b3 = Buffer.allocUnsafe(10);
console.log(b3);
b3.fill('B');
console.log(b3);
console.log(b3.toString());

let b4 = Buffer.from("hello");
console.log(b4);
console.log(b4.toString());
console.log(b4[0]);

let b5 = Buffer.concat([b3, b4]);
console.log(b5);
console.log(b5.toString());

let b6 = b5.slice(10, 20);
console.log(b6.toString());

let b7 = Buffer.alloc(10);
b7.write("BUFFER", 2);
console.log(b7);
console.log(b7.toString());

