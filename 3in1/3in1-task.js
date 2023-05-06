// - Array - Q1 
let array = ["Coding", "Academy", "By", "Orange"];

//a 
array.push("jordan")
console.log(array);

//b
console.log(array.slice(1,3));

//c

array.splice(0,0,'welcome') 
array.splice(1,0,'to')
console.log(array);

//d
console.log(array.slice(3,6));

//e
console.log(array.join(" "));

//f
array.splice(6) 
array.splice(0,2) 
console.log(array);
//h
array.splice(1,2) 
console.log(array);

//Q2
let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//a
vegetables.splice(-1)
console.log(vegetables);
//b
fruit.splice(0,1)
console.log(fruit);
//c
console.log(fruit.indexOf("orange"));

//d
fruit.push("1");
console.log(fruit);

//e
console.log(vegetables.length);

//f
vegetables.push("3");
console.log(vegetables);

//g
let food = fruit.concat(vegetables)
console.log(food);
//h
food.splice(4,2)
console.log(food);
//i
console.log(food.reverse());
//j
console.log(food.toString());


//FUNCTION Q1 
let str = "Orange Jordan";
function toArray (str){
   let arr = str.split(' ')
    return arr
}
console.log(toArray (str));

//Q2
function mobileNumber (num){
  let x =  num.substring(0,7);
   let y = "*".repeat(7);
    let z = num.substring(7);
    return y+z;
}
console.log(mobileNumber("0776807777"));
  
//Q3
 function emailConvert(mail){
    let x= mail.slice(0,6)
    let y = ".".repeat(3);
    let z = mail.slice(14,30)
    return  x+y+z
 } 
 console.log(emailConvert("orange_academy@orange.jo"));

 //Q4
 function toUpperCase(str1){
   let x = str1.split(' ')
    return x
    }
   

console.log(toUpperCase("coding academy by orange"));

//Q5

function toUpperCase(str){
   let x = str.split(' ')
   for(let i=0 ; i< x.length; i++ )
    {  
       x[i] =x[i].charAt(0).toUpperCase()+ x[i].slice(1);
  
    }
    return x.join(" ")
}
console.log(toUpperCase("coding academy by orange"));

//Q6

function flip(num){
   let x= num.toString().split(' ');
   for(let i=0 ; i< x.length; i++ ){
      x[i]= x[i].split('').reverse().join('')
   }
   return x.join(' ')
}
console.log(flip(92485));

//Q7 
let x=3;
let y = 4;
function swap(a,b){
  
   [a,b]=[b,a]
   console.log(`a=${x},b=${y}`);
}
swap(x,y)

//Q8 
function removeChar (str){
  return str.slice(0,3)+str.slice(4,6)
}
console.log(removeChar("Orange"));

//Q9

function merage (str1, str2){
   let x= str1.split(' ')
   let y = str2.split(' ')
   return str1.slice(1,4)+str2.slice(1,4)

}
console.log(merage("iora","lnge"));
//Q10

function checkChar(char, str) {
   return str.charAt(0) === char ;
 }
 
 console.log(checkChar('o', 'orange')); 
 console.log(checkChar('z', 'orange')); 
 
 //Q11
 function convertToArray (str){
   let newArray = str.split(' ')
   return newArray
 }
 console.log(convertToArray("Coding Academy by Orange"));

Q12
function alphabetically (str){
   let newArray = str.split('')
   for(let i=0 ; i< newArray.length; i++ ){
      newArray[i]= newArray[i].slice(1,5).join('')
   }
   return newArray.join('')
}
console.log(alphabetically("Orange"));

Objects 
Q1
let object1 = {
   name : "yasmeen",
   age : 20,
   favColor :"blue"
}
function objToArray(object) {
   return Object.entries(object); 
 }

 console.log(objToArray(object1));

Q2
let object2 = {
   name : "yasmeen",
   age : 20,
   favColor :"blue"
}
function propertyNumber (obj){
   return Object.keys(obj).length
}
console.log(propertyNumber (object2));

//Q3
let object3 = {
   name : "yasmeen",
   age : 20,
   favColor :"blue"
}
let object4 = {
   address : "amman",
   edu : "engineering",
   nationallty :"jordanian"
}
function twoObjects (obj1,obj2){
   return Object.assign(obj1, obj2)
}
console.log(twoObjects (object3,object4));

//O4

const Obj5 = {
   name: "yasmeen",
   age: 20,
   favColor :"blue"
 };

 function convertObjectToUppercase(obj) {
   const newObj = {};
 
   for (let prop in obj) {
     if (obj.hasOwnProperty(prop)) { 
       newObj[prop.toUpperCase()] = String(obj[prop]).toUpperCase(); 
     }
   }
 
   return newObj; 
 }
 
 console.log(convertObjectToUppercase(Obj5));

//Q5
let object8 = {
   name: "yasmeen",
   age: null,
   favColor :"blue"
 };
 
function noNull (obj) {
   const result = {};

   for (const key in obj) {
     if (obj[key] !== null) {
       result[key] = obj[key];
     }
   }
 
   return result;
 }

console.log(noNull(object8));
;

//Q6
let object6 = {
   name : "yasmeen",
   age : 20,
   favColor :"blue"
}
function toAlpha (obj){
   return Object.keys(obj).sort()

}
console.log(toAlpha(object6));