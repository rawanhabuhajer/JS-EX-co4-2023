//  -------------------------------- forEach ------------------------------------
let numbers = [1,2,3,4,5]
let sum = 0;
numbers.forEach((item,index,arr) =>{
    sum += item;
    console.log(sum);
}
);

let letters = ['a', 'b' , 'c' ,'d' , 'a', 'c', 'a']
let count = {};
letters.forEach(item =>{
    if(count[item]){
        count[item]++;
    }
    else { count[item]=1;
    }
    console.log(count);
}
);
//  -------------------------------- MAP ------------------------------------

let num1 = [1,2,3,4,5,6]
let doublemap = num1.map(double);
function double (value,index,arr){
    return value*2
}
console.log(num1);
console.log(doublemap);

let phones = [{
    name : "y9 2019",
    price : 200,
    count : 5
},
{
    name : "iphone",
    price : 700,
    count : 4
}
,{
    name : "samsung",
    price : 500,
    count : 6
}
]

let totalprice = phones.map(item => item.price*item.count);
    console.log(totalprice);

//  -------------------------------- filter ------------------------------------

let Ages = [
    {
    name : "ahmed",
    age : 20,

},
    {
    name : "rawan",
    age : 25,

},
    {
    name : "dania",
    age : 16,

},

]
let adults = Ages.filter(item => item.age >= 18 );
console.log(adults);

let newArray = [ 1,2,3,4,5,6,7,8,9];

let even = newArray.filter(item => item%2 ==0);
console.log(even);

//------------------------------------------------------------------------------------------------
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

