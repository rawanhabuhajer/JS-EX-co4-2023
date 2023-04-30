  //Q1:

for (let i = 2; i <= 50; i++){
    if (i %2 == 0) 
      console.log(i);
      
    } 
  
  let j = 2;
  while (j <= 50) {
    if (j %2 == 0)
    console.log(j);
    j++;
  }



  //Q2:

for (let i = 2; i <= 50; i += 2) {
  if (i <= 50) {
    console.log(i);
  }
  let j=i;
  console.log(j); 
}

  //Q3:

for (let i = 2; i <= 50; i++){
    if (i %2 == 0) 
      console.log(i);
      
    } 
   
  let j1 = 2;
  while (j1 <= 50) {
    if (j1 %2 != 0)
    console.log(j1);
    j1++;
  }

  //Q4:

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
 
//Q5
  let str = "CodingAcademy";
  let arr = [7, 500, "KH404", "black", 36];
   for (let i = 0; i < arr.length; i++)
   {
    console.log(arr[i]);
   }
   for(let i = 12; i >= 0; i--){
    console.log(str[i]);
   }

//Q6
  function FizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  FizzBuzz();
  
 //Q7
  function convertToBanknotes(num, denominations) {
    let banknotes = [];
    for (let i = 0; i < denominations.length; i++) {
      while (num >= denominations[i]) {
        banknotes.push(denominations[i]);
        num -= denominations[i];
      }
    }
    return banknotes;
  }
  let result = convertToBanknotes(57, [25, 10, 5, 1]);
  console.log(result); 

//Q8

  function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i).toLowerCase() === char.toLowerCase()) {
        count++;
      }
    }
    return count;
  }
  let result2 = countOccurrences("Coding Academy by Orange", "o" );
  console.log(result2); 
  
  //Q9
  for (let i = 0; i <= 20; i++) {
    console.log(i);
  }
  for (let i = 3; i <= 29; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  for (let i = 12; i >= -14; i--) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }

 //Q10
let str1 = 'CodingAcademy';
let arr1 = [7, 500, 'KH404', 'black', 36];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

for (let i = str1.length - 1; i >= 0; i--) {
  console.log(str1[i]);
}
 
//Q11
let arr2 = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let evens = [];
let odds = [];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 === 0) {
    evens.push(arr2[i]);
  } else {
    odds.push(arr2[i]);
  }
}

console.log("Evens: " + evens);
console.log("Odds: " + odds);

//Q12
const proteinOptions = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
const grainOptions = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
const vegetableOptions = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
const beverageOptions = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
const dessertOptions = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

function generateMeal() {

  const protein = proteinOptions[Math.floor(Math.random() * proteinOptions.length)];
  const grain = grainOptions[Math.floor(Math.random() * grainOptions.length)];
  const vegetable = vegetableOptions[Math.floor(Math.random() * vegetableOptions.length)];
  const beverage = beverageOptions[Math.floor(Math.random() * beverageOptions.length)];
  const dessert = dessertOptions[Math.floor(Math.random() * dessertOptions.length)];

  return {
    protein,
    grain,
    vegetable,
    beverage,
    dessert
  };
}

function generateMeals(numMeals) {

  const meals = [];
  
  for (let i = 0; i < numMeals; i++) {
    let meal = generateMeal();
    
    
    while (meals.some(m => JSON.stringify(m) === JSON.stringify(meal))) {
      meal = generateMeal();
    }
    meals.push(meal);
  }
  return meals;
}
const meals = generateMeals(5);
meals.forEach((meal, index) => {
  console.log(`Meal ${index + 1}:`);
  console.log(`  Protein: ${meal.protein}`);
  console.log(`  Grain: ${meal.grain}`);
  console.log(`  Vegetable: ${meal.vegetable}`);
  console.log(`  Beverage: ${meal.beverage}`);
  console.log(`  Dessert: ${meal.dessert}`);
});
