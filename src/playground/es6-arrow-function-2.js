// arguments object - no longe bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

// this keyword - no longe bound

const user = {
    name: 'Daniela',
    cities: ['Porto Alegre', 'Blumenau', 'Sao Paulo'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
    }
};
console.log(user.printPlacesLived());

// Challenge
// numbers - array of numbers
// multiplyBy - single number
// multiply - return a new array where the number have been multiplied

const multiplier = {
    numbers: [1, 2, 3], 
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply()); // [1, 2, 3] 2 [2, 4, 6]