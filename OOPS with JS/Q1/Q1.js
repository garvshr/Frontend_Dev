class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    calculateAverage() {
        return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
    }
    getGrade() {
        const avg = this.calculateAverage();
        if (avg >= 90) return 'A';
        if (avg >= 80) return 'B';
        if (avg >= 70) return 'C';
        return 'F';
    }
}
const student1 = new Student('Alice', [85, 92, 78]);
const student2 = new Student('Bob', [95, 88, 91]);
const student3 = new Student('Charlie', [65, 72, 58]);
console.log(`${student1.name}: ${student1.getGrade()}`);
console.log(`${student2.name}: ${student2.getGrade()}`);
console.log(`${student3.name}: ${student3.getGrade()}`);