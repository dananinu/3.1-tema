

function dayRate(ratePerHour) {
    return ratePerHour * 8;
}
 
function daysInBudget(budget, ratePerHour) {
    const a = budget / ratePerHour / 8;
    return Math.floor(a);
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    if (numDays > 22) {
        const numMonths = Math.trunc(numDays / 22);
        console.log(numMonths);
        const numMounthPrice = numMonths * 22 * 8 * ratePerHour * discount;
        console.log(numMounthPrice); 
        const numDaysNoDiscount = numDays - (numMonths * 22);
        console.log(numDaysNoDiscount);
        //const numNoDiscount = Math.
        return Math.ceil(numMounthPrice) + Math.ceil(numDaysNoDiscount * 8 * ratePerHour);
    } 
    else {
        const a = ratePerHour * 8 * numDays;
        return Math.round(a);
    }
}


//console.log(daysInBudget(2000, 89));
console.log(priceWithMonthlyDiscount(89, 20, 0.58));
