// map
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map(item => `<li>${item}</li>`);

const values = [1, 2, 3, 4, 5];
const cubes = values.map(val => val ** 3);


// filter
const values2 = [1, 2, 3, 4, 5];
const evens = values2.filter(val => val % 2 === 0);

const groceries2 = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries2.filter(item => item.includes("o"));

// reduce
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

console.log(sumWithInitial);
// Expected output: 10