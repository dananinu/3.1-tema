const totalInOven = 40;

function remainingMinutesInOven(actualMinutesInOven) {
  return totalInOven - actualMinutesInOven;
}

function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * 2;
}

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return remainingMinutesInOven(actualMinutesInOven) + preparationTimeInMinutes(numberOfLayers);
}

//const raspuns = totalTimeInMinutes(3, 20);
console.log(totalTimeInMinutes(3, 20));