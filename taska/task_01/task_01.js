// Задача 1: Створення простого калькулятора з можливістю обчислення простих математичних операцій, таких як додавання, віднімання, множення та ділення, за допомогою прототипів та прототипного наслідування.


// function Operands (x, y, z) {
//     this.x = x;
//     this.y = y;
//     this.z = z;
// };

// Operands.prototype.findTheAmount = function () {
//     const sumOfTwoNum = this.x + this.y;
//     return `The sum of x & y is: ${sumOfTwoNum} `
// };
// Operands.prototype.findTheDifference = function () {
//     const differenceBetweenTwoNum = this.y - this.x;
//     return `The difference between y & x is: ${differenceBetweenTwoNum} `
// };
// Operands.prototype.divideTwoNumbers = function () {
//     const dividingByTwoNum = this.x / this.z;
//     return `Dividing x by z is equal to: ${dividingByTwoNum} `
// };
// Operands.prototype.multiplyTwoNumbers = function () {
//     const multiplyingByTwoNum = this.x * this.z;
//     return `Multiplying x by z is equal to: ${multiplyingByTwoNum} `
// };

// const amount = new Operands (10, 20, 5)
// const difference = new Operands (10, 20, 5)
// const dividing = new Operands (10, 20, 5)
// const multiplying = new Operands (10, 20, 5)

// console.log(amount.findTheAmount());
// console.log(difference.findTheDifference());
// console.log(dividing.divideTwoNumbers());
// console.log(multiplying.multiplyTwoNumbers());

function Operands(x, y) {
    this.x = x;
    this.y = y;
};

Operands.prototype.findTheAmount = function () {
    const sumOfTwoNum = this.x + this.y;
    return `The sum of ${this.x} & ${this.y} is: ${sumOfTwoNum}`;
};
Operands.prototype.findTheDifference = function () {
    const differenceBetweenTwoNum = this.y - this.x;
    return `The difference between ${this.y} & ${this.x} is: ${differenceBetweenTwoNum}`;
};
Operands.prototype.divideBy = function (z) {
    const dividingByNum = this.x / z;
    return `Dividing ${this.x} by ${z} is equal to: ${dividingByNum}`;
};
Operands.prototype.multiplyBy = function (z) {
    const multiplyingByNum = this.x * z;
    return `Multiplying ${this.x} by ${z} is equal to: ${multiplyingByNum}`;
};

const operands = new Operands(10, 20);

console.log(operands.findTheAmount());
console.log(operands.findTheDifference());
console.log(operands.divideBy(5));
console.log(operands.multiplyBy(5));
