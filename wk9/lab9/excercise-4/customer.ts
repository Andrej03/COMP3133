export class Customer {
    private firstName: string;
    private lastName: string;
    private age: number;

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    public GetAge(): number {
        this.age = 22;
        return this.age;
    }

    constructor(firstName: string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
