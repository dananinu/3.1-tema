//console.log("Hello world!")

const pi = 3.14;
//console.log(pi);

function surfaceAreaCalculator(radius) {
return 4 * pi * radius * radius;
}

const surfaceAreaCalculator2 = (radius) => {
    return 4 * pi * radius * radius;
}

const areaOfMars = surfaceAreaCalculator2(3390);
const areaOfMercury = surfaceAreaCalculator(2440);

//const areaOfMars = 4 * pi * 3390 * 3390;
//const areaOfMercury = 4 * pi * 2440 * 2440;

//console.log("suprafata Marte:", areaOfMars);
//console.log("suprafata Mercur:", areaOfMercury);

////

const percentageCalculator = (number, total) => {
    return number * total / 100;
}

//const a = percentageCalculator(10, 340);
//console.log(a);

/*const display = (val) => {
    console.log(val)
}

const add = (a, b) => {
    return a + b
}

const substract = (a, b) => {
    return a - b
}

const multiply = (a, b) => {
    return a * b
}

const impart = (a, b) => {
    return a / b
}

const a = add(20, 17);
const b = substract(10, 100);
const c = multiply(15, 4);
const d = impart(15, 4)

display(a);
display(b);
display(c);
display(d)*/

const hasPassedTest = (grade) => {
/*if (grade < 1 || grade > 10) {
    return "nu e nota ok"
}

    if (grade >= 5) {
return "OK"
    }
    else {
        return "NOT OK"
    }*/
    return grade > 4 && grade <= 10 ? ("OK") : "NOT OK"
}

const checkCondition = (a, b) => {
    if (a > 5 || b < 5) {
        return true
    }
    else {
        return false
    }
}

const result = checkCondition(3, 10)
//console.log(result);

const testResult = hasPassedTest(10)
//console.log(!10)

console.log(testResult)





