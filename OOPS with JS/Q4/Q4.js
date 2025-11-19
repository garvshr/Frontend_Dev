class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    work() {
        return `${this.name} is working in ${this.department}.`;
    }
}
class Manager extends Employee {
    work() {
        return `${this.name} is managing ${this.department}.`;
    }
}
const emp = new Employee('John', 'IT');
const mgr = new Manager('Jane', 'HR');
console.log(emp.work());
console.log(mgr.work());