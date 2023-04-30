//Q1

for (let i = 1; i <= 10; i++) {
    console.log(i); 
  };
//Q2 
let x1 =1  
while ( x1 <= 10 ){
   console.log(x1); 
   x1++;
};
//Q3
let numbers4 = [1,2,3,4,5]
for (let a = 0; a < 5; a++) {
  console.log(numbers4[a]);
};
//Q4
for (let y=0 ; y <=10 ; y+=2) {
  console.log(y);
};
//Q5
let sum=0
for (let z = 1; z <= 10; z++) {
  sum=sum+z ;}
  console.log(sum);
//Q6
let array1 = [1, 2, 3, 4, 5];
let largest = array1[0];
function largestNum() {
   for (let i = 1; i < array1.length; i++) {
      if (array1[i] > largest)
      largest = array1[i];
   }
   console.log(largest);
}
largestNum();
//Q7
let array2 = [1, 2, 3, 4, 5];
let lower = array2[0];
function lowerNum () {
   for (let i = 1; i < array2.length; i++) {
      if (array2[i] < lower)
      lower = array2[i];
   }
   console.log(lower);
}
lowerNum();
//Q11
let arr5 = [1, 2, 3, 4, 5];
var sum2 = 0;
for (var i = 0; i < arr5.length; i++) {
    sum2 += arr5[i];
}
average = sum /arr5.length;
console.log(average);


//Q12
const number = 10;
let n1 = 0, n2 = 1, nextNum;

console.log(n1); 
console.log(n2); 

nextNum = n1 + n2;

while (nextNum <= number) {
    console.log(nextNum);
    n1 = n2;
    n2 = nextNum;
    nextNum= n1 + n2;
};
//Q:13
let arr4 = [1, 2, 3, 4, 5];
var  factorial = 1;
for (var i = 1; i < arr4.length; i++) {
    factorial *= arr4[i];
}
console.log(factorial);

//Q14

function Primes(max) {
  for (let i = 2; i <= max; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}

//Q15
let num =5 
for(let i=1 ; i<=10 ; i++){
  let result = i * num;
  console.log(`${num} * ${i} = ${result}`);
}
//Q16
let arr = [[1,2,3,], [4,5,6,],[7,8,9,]]
for (let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}


//Q17
let arr1 = [1, 2, 3, 4, 5]; 2 , 4;
for (let i = 0; i < 3; i++){
  
    console.log(arr1[2+i]);
  }
//Q18
let arr2 = [1, 2, 3, 4, 5]; 2;
for (let i = 0; i < 5; i++){
  if (i %2 == 0) {
    console.log(arr2[i]);
  }
}

//Q19
let numbers = [1,2,3,4,5]
for (let a = 4; a >= 0; a--) {
  console.log(numbers[a]);
};
//Q20
let x = [1, 2, 3, 4, 5]; 4;
 for (let i = 0; i < x.length; i++){
  if ( x = Array) {
    console.log(true);
  }
  else {console.log(false);}
 }
//Q21
let array = [1, 2, 1, 3, 2, 1]; 1;

let numberToFind = 1;
let frequency = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] === numberToFind) {
    frequency++;
  }
}

console.log(frequency);
 