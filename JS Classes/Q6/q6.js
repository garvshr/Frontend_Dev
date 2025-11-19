"use strict";

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    const bonus = (this.salary * percent) / 100;
    this.salary += bonus;
  }
}

const employees = [
  new Employee(1, "Rohan", "IT", 50000),
  new Employee(2, "Maya", "HR", 42000),
  new Employee(3, "Kunal", "Finance", 60000),
  new Employee(4, "Sara", "Marketing", 38000),
  new Employee(5, "Vivek", "IT", 55000)
];

employees[0].applyBonus(10);
employees[3].applyBonus(5);

const container6 = document.getElementById("employees");
const totalPayoutDiv = document.getElementById("totalPayout");

employees.forEach(emp => {
  const annual = emp.getAnnualSalary();
  const div = document.createElement("div");
  div.className = "emp-item";
  div.textContent = `${emp.name} (${emp.department}) - Monthly: ₹${emp.salary.toFixed(
    2
  )}, Annual: ₹${annual.toFixed(2)}`;
  container6.appendChild(div);
});

const totalAnnualPayout = employees.reduce(
  (sum, emp) => sum + emp.getAnnualSalary(),
  0
);

totalPayoutDiv.textContent = `Total Annual Payout: ₹${totalAnnualPayout.toFixed(2)}`;
