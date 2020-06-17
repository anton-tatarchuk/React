/* ==============================Rest param ====================================*/
function max(a, b, ...nums) {
  console.log(nums);
}

/*============================= Spread operator =============================*/
const arr = [1, 2, 3];
const arr2 = [1, 6, 4];

const res1 = Math.max.apply(Math, arr);

const resSpread = Math.max(...arr, 10, ...arr2, 7);

const shallowCopy = [...arr, ...arr2, 41];


/*============================= Destructuring  ==================================*/
const person = {
  // firstName: 'Peter',
  // lastName : 'Smith',
  name: {
    first: "Peter",
    last: "Smith",
  },
  age: 27,
};

// const firstName = person.firstName;
// const lastName = person.lastName;

// const { firstName, lastName } = person;
const { name: {first: firstName, last: lastName} } = person;

const { permissions : { role = 'user'} = {} } = person; // default value
// если нет обьекта permissions по умолчанию пустой {}, role = 'user'

function connnect({
    host = 'localhost',
    port = 1241,
    user = 'guest'} = {}) { // установка обьекта по умолчанию
        console.log(`user: ${user}; port: ${port}; host: ${host}`);
}
// connnect({ port: 1111 });
//connnect(); // ошибка если нет обьекта по умолчанию

const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak'
}

const {duck, ...otherAnimals} = dict;
console.log(duck) // quack
console.log(otherAnimals) // {dog: "wuff", mouse: "squeak"}


