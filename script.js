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

/*============================= Destructuring  Ojb==================================*/
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

const {
  name: { first: firstName, last: lastName },
} = person;

const { permissions: { role = "user" } = {} } = person; // default value

// если нет обьекта permissions по умолчанию пустой {}, role = 'user'

function connnect({ host = "localhost", port = 1241, user = "guest" } = {}) {
  // установка обьекта по умолчанию
  console.log(`user: ${user}; port: ${port}; host: ${host}`);
}
// connnect({ port: 1111 });
//connnect(); // ошибка если нет обьекта по умолчанию

const dict = {
  duck: "quack",
  dog: "wuff",
  mouse: "squeak",
  hamster: "squeak",
};

/* const {duck, ...otherAnimals} = dict;
console.log(duck) // quack
console.log(otherAnimals) // {dog: "wuff", mouse: "squeak"} */

/*============================= Destructuring  Arrays==================================*/

const fib = [1, 2, 6, 3, 5, 8, 13];
// const [, a, b] = fib;
// console.log(a,b) // 2 6

const line = [
  [10, 17],
  [14, 7],
];
const [[p1x, p1y], [p2x, p2y]] = line;
// console.log(p1x, p1y, p2x, p2y);

const people = ["chris", "sandra"];

const [a, ...others] = people;

// console.log(a, others);

const distRes = Object.entries(dict)
  .filter(([, value]) => value === "squeak")
  .map(([key]) => key);
// console.log(res)

const shape = {
  type: "segment",
  coordinates: {
    start: [10, 15],
    end: [17, 15],
  },
};

const {
  coordinates: {
    start: [startX, startY],
    end: [endX, endY],
  },
} = shape;

// console.log(startX, startY, endX, endY)

/* ================= Template Literals (Шаблонные строки) ================ */

const html = `
  <ul>
    <li>One ${startX}</li>
    <li>Two ${endY}</li>
  </ul>
`;

/* ============================== Objects =============================== */

const x = 10;
const y = 30;

const p = {
  x,
  y,
  draw(ctx) {
    //
  },
};

const prefix = "_bla_";

const data = {
  [`${prefix}name`]: "Bob",
};

const defaults = {
  host: "localhost",
  dbName: "blog",
  user: "admin",
};

const opts = {
  user: "john",
  password: "utopia",
};

// Object.assign(defaults, opts); // Rewrite defaults
const result = Object.assign({}, defaults, opts);

const person1 = {
  name: "Bob",
  friends: ["Mark", "Jacob"],
};

const shallowCopyPers1 = Object.assign({}, person1);
person1.friends.push("Jora");

// console.log(shallowCopyPers1);

/* ======================= Spread Operator for objects ======================= */
const port = "8080";

const spreadOpts = {
  ...defaults,
  ...opts,
  port,
  connect() {
    //
  },
};

/* ================================== Prototypes ============================ */

const animal = {
  say: function () {
    console.log(`${this.name} goes ${this.voice}`);
  },
};

// const dog = {
//   name: 'dog',
//   voice: 'woof'
// }

// const cat = {
//   name: 'cat',
//   voice: 'meow'
// }

// Object.setPrototypeOf(dog, animal)
// Object.setPrototypeOf(cat, animal)

// Object.setPrototypeOf Сильно влияет на быстродействие

function createAnimal(name, voice) {
  // Фактически ф-ция конструктор
  const result = Object.create(animal);

  result.name = name;
  result.voice = voice;
  return result;
}

// const dog = createAnimal("dog", "woof");
// const cat = createAnimal("cat", "meow");

function Animal(name, voice) {
  // ф-ция конструктор
  this.name = name;
  this.voice = voice;
}

Animal.prototype.say = function () {
  console.log(`${this.name} goes ${this.voice}`);
};

const dog = new Animal("dog", "woof");
const cat = new Animal("cat", "wtf");

// dog.say();
// cat.say();

/* =============== Classes ====================== */

class AnimalClass {
  constructor(name, vocie) {
    this.name = name;
    this.voice = vocie;
  }

  say() {
    console.log(`${this.name} goes ${this.voice}`);
  }
}

// duck -> Bird.prototype -> AnimalClass.prototype -> Object.prototype -> null

// Если мы наследуем класс, нужно обязательно вызвать конструктор до того, как мы используем this
class Bird extends AnimalClass {
  constructor(name, voice, canFly) {
    super(name, voice);
    super.say();
    this.canFly = canFly;
  }

  say() {
    console.log("Birds dont like to talk");
  }
}

const Duck = new Bird("Duck", "quack");

Duck.say();
