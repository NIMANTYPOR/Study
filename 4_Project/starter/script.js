'use strict';

<<<<<<< HEAD
const arr = [2, 3, 4];
const a = arr [0];
const b = arr[1];

// const [x, y, z] = [2, 3, 4];
// console.log(x, y, z);
=======


>>>>>>> 744c2c2cb52e579d9abfaff8eff038a2c33c28ca

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';





// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
<<<<<<< HEAD
  mainMenu: ['Pizza', 'Pasta', 'Risotto']
};


let  [main ,  , secondary] = restaurant.categories;
console.log(main, secondary);


[main, secondary] = [secondary, main];
console.log(main, secondary);






//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
=======
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(StaterIndex, mainIndex) {
    return [this.starterMenu[StaterIndex], this.mainMenu[mainIndex]]
    }


  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
}

const arr = [2, 3, 4];
const a = arr [0];
const b = arr[1];

const [x, y, z] = [2, 3, 4];
console.log(x, y, z);

let [main, , secondary] =  restaurant.categories;
[main, secondary] = [secondary, main]


console.log(main, secondary);
const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse);
const nested = [2, 4, [5, 6]];
const [i, j ,[k, p]]= nested;

console.log(i, j, k, p);
const [l=1, q=1, r=4] = [8, 9];
console.log(l, q, r);
>>>>>>> 744c2c2cb52e579d9abfaff8eff038a2c33c28ca
