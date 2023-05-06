//Q1

function smallestNumber (){
    let smallest = array1[0]
    for ( let i=0; i<=array1.length ; i++) {
        if (array1[i]< smallest){
            smallest= array1[i];
        }
    }
    return smallest;
    
}
    let array1 = [30, 45, 60, 7]
    console.log(smallestNumber(array1));

//Q2 
function AlphabeticalOrder(){
    return [...str].sort().join("")
}
str="hello"
console.log(AlphabeticalOrder(str));
//Q3

//Q4
function oddNumber(){
    let i= Number
    if (i%2 !==0){
        return "odd";
    }
    else {
        return "even";
    }
}
console.log(oddNumber(9));

//Q5
let array2 = [1, 2, 3, 4, 5, 6,7,8,9];
function evenArray (){
    let evenmbers =[];
    for(let i=0; i< array2.length ; i++){
        if (array2[i]%2 ===0){
            evenmbers.push(array2[i]);
        
        } 
    } 
    return evenmbers;  
}

console.log(evenArray(array2));

//Q6
let array5= ['Ayham', 3, 7, 'Alaa', 13, 'coding']
function withoutStrings (arr) {
    return arr.filter(element => typeof element !== "string");
  }
  console.log(withoutStrings(array5));

//Q7
function roots(num){
  let sum = 0; 
  for (let i=num; i>=0 ; i--)
  {
    sum += i }
  
  return sum;
}
console.log(roots(6));
//Q8
let array8 = [7, 13, 3, 77, 100];

function minmaxlengthaverage(arr) {
  let lowest = arr[0];
  let highest = arr[0];
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
    }
    if (arr[i] > highest) {
      highest = arr[i];
    }
    sum += arr[i];
  }
  
  const average = sum / arr.length;
  
  return [lowest, highest, array8.length, average ];
}

console.log(minmaxlengthaverage(array8));

//Q9
function romanNumbers(num) {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    
    let result = '';
    
    for (let symbol in romanNumerals) {
      while (num >= romanNumerals[symbol]) {
        result += symbol;
        num -= romanNumerals[symbol];
      }
    }
    
    return result;
  }

  console.log(romanNumbers(1989));

//Q10 
function countWords(str){
    return str.split(' ').length;
}
console.log(countWords('hello from CodingAcademy!'));

//Q11
function MultiplyByLength(arr){
    return arr.map(element => element*arr.length)
}
console.log(MultiplyByLength([4,2,5]));

//Q12
let str1 = "CodingSchool"
let str2 = "Ac"
function checkEnding(str1,str2){
  if (str1.slice(-1) === str2.slice(0,1)){
    return true; 
  }
  else { return false; }
}
console.log(checkEnding(str1,str2));

//Q13
let str5 = 'Coding'
function doubleChar(str5){
  return str5.split('').map(element => element+element).join('')
}
console.log(doubleChar(str5));

//Q14
function findIndex(arr, element) {
  return arr.indexOf(element);
}

console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali')); 



//Q15
let arr7 =[-1, -3, -5, -4, -10, 0]
function getAbsSum(arr7){
  let newArray2 = []
  for (let i=0; i<arr7.length ; i++){
    newArray2.push(Math.abs(arr7[i]))
  }
  return newArray2.reduce((x,y) => (x+y))
}
  console.log(getAbsSum(arr7));

