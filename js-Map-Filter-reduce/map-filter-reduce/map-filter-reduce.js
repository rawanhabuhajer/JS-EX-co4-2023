
//Q1

let cleanNamess = ([" injustice", "  SuperMan", "Batman   ", " flash  "])

let newNames = cleanNamess.map(item => item.trim()) 
console.log(newNames);

//Q2

const miles = [10, 20, 30, 40];
let tokm = miles.map(item => item*1.609)
console.log(tokm);

//Q3

//Q4
const numbers1 = [1, 2, 3, 4, 5];
let plusFourArray = numbers1.map(item => item+4)
console.log(plusFourArray);

//Q5
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNum = numbers2.filter(item => item%2 == 0)
let doubleEven = evenNum.map(item => item*2)
const doubleSum = doubleEven.reduce((accumulator, Value) => accumulator + Value,0);

console.log(doubleSum);

//Q6
const words = ['apple', 'banana', 'cherry', 'date'];
let toUpperCase = words.map( item => item.charAt(0).toUpperCase()+item.slice(1,7))
console.log(toUpperCase);

//7 

const heros = [
    {name: 'Iron Man', power: 'Tech'},
    {name: 'Spider-Man', power: 'Spider abilities'},
    {name: 'Thor', power: 'Godly powers'},
    {name: 'Hulk', power: 'Super strength'}
    ]
    let newHeros = heros.map((hero , index )=> ({ hero: hero['name'], power: hero['power'], id :index} ));
    console.log(newHeros);

//8 

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
function  upSevenDigit (inputWords){
    return inputWords.filter(function(word){
        return word.length >= 7;
    });
}
console.log(upSevenDigit (inputWords));

//9 

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumber = numbers3.filter(item => item%2 !=0)
console.log(oddNumber);

let divisibleBy2or5 = numbers3.filter(item => item%5  ==0 || item%2 ==0)
console.log(divisibleBy2or5);

let x= numbers3.filter(item =>item%3 ==0 )
let divisibleBy3Squared = x.map(item => item**2)
console.log(divisibleBy3Squared);

let divisibleBy5 = numbers3.filter(item => item%5  ==0 )
let SquaredDivisibleBy5 = divisibleBy5.map(item => item ** 2)
console.log(SquaredDivisibleBy5);
let sumSquaredDivisibleBy5 = SquaredDivisibleBy5.reduce ((accumulator, Value) => accumulator + Value,0)
console.log(sumSquaredDivisibleBy5);

