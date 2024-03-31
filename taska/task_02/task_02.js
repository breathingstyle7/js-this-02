// Задача 2: Напишіть програму для обчислення середнього балу студента. Програма має мати можливість вводити інформацію про студента, таку як його ім'я, прізвище та оцінки з різних предметів. Для обчислення середнього балу необхідно використовувати прототипне наслідування.

function Student (firstName, lastName, physics, mathematics, English, French, Ukrainian) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.physics = physics;
    this.mathematics = mathematics;
    this.English = English;
    this.French = French;
    this.Ukrainian = Ukrainian;
};

Student.prototype.findAverageScoreValue = function () {
    const averageValue = (this.physics + this.mathematics + this.English + this.French + this.Ukrainian) / 5;
    return `The ${this.firstName + " " + this.lastName} has the following average value across all of its subjects: ${averageValue} `
};

const student1 = new Student ("Anantoly", "Averagenko", 10, 10, 6, 8, 9);
const student2 = new Student ("Christiano", "Ronaldini", 7, 6, 9, 9, 11);

console.log(student1.findAverageScoreValue());
console.log(student2.findAverageScoreValue());