/*function square (x){
    return x * x;
};

console.log(square(8));

const squareArrow = (x) => {
    return x * x;
};

const squareArrow = (x) => x * x;

console.log(squareArrow(4));
*/

//Challenge

// Regular arrow function
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};
console.log(getFirstName('Daniela Araujo'));

// Arrow function using shorthand syntax
const getFirstName2 = (fullName) => fullName.split(' ')[0];
console.log(getFirstName2('Yan Pereira'));