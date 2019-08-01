var nameVar = 'Yan';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Dani';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

var fullName = 'Yan Pereira';
let firstName;

if (fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);