

function canExecuteFastAttack(knightIsAwake) {
    return knightIsAwake === true ? ("Don't attack!") : "Attack!";
}
console.log(canExecuteFastAttack(true));

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    return knightIsAwake === false || archerIsAwake === true && prisonerIsAwake === false ? ("Go spy!") : "Don't spy!"
}

console.log(canSpy(false, false, false));

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    return archerIsAwake === false && prisonerIsAwake === true ? ("Signal Prisoner") : ("Shhhhhh")
}

console.log(canSignalPrisoner(false, false))

function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
    return knightIsAwake === false && archerIsAwake === true && prisonerIsAwake === true && petDogIsPresent === false ? ("Free Prison") : "Wait please";
}
console.log(canFreePrisoner(false, true, true, false));