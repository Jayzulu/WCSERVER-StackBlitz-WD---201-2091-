const calculate = require('./calculation.js');

console.log('addition 2 + 2 =', calculate.add(2, 2));
console.log('addition 2 + 2 =', calculate.subtract(5, 2));
console.log('addition 2 + 2 =', calculate.multiply(3, 2));
console.log('divide 10 / 2 =', calculate.divide(10, 2));
console.log();

const rate = 300;
const workhours = 4;
const daysinweek = 6;
const grosspayincome = rate * workhours * daysinweek;

console.log('Rate per hour', rate);
console.log('Hours Worked', workhours);
console.log('Days per week', daysinweek);
console.log('Gross Income', grosspayincome);
console.log();

const tax = calculate.multiply(grosspayincome, 0.1);
const sss = 1200;
const pagibig = 300;
const philhealth = 400;
const totaldeductions = tax + sss + pagibig + philhealth;
const netsalary = calculate.subtract(grosspayincome, totaldeductions);

console.log('Tax:', tax);
console.log('SSS:', sss);
console.log('Pag-Ibig Fund:', pagibig);
console.log('PhilHealth:', philhealth);
console.log('Total Deductions:', totaldeductions);
console.log('The Net Salary:', netsalary);
console.log();
