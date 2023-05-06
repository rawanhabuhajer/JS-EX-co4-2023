//Q1
let myArray= [1, 2, 3, 4, 5]
myArray.forEach(element => console.log(element));

//Q2
const arr = [1, 2, 3, 4, 5]
console.log(arr.map(element=> element**2));

//Q3
const arr1 = [1, 2, 3, 4, 5]
console.log(arr1.filter(element => element%2 ==0 ));

//Q4
const arr2 = [1, 2, 3, 4, 5]
console.log(arr2.reduce((x, y) => x + y));

//Q5
 let arr3 = ["apple",  "cherry" ,"banana"];
 console.log(arr3.sort());

 //Q6
 let arr4 = ["apple", "banana" ,"cherry" ,];
 console.log(arr4.reverse());

 //Q7
 let arr5 = [1, 2, 3]
 let arr6 = [4, 5, 6]
 console.log(arr5.concat(arr6));

 //Q8
 let arr7 =[1, 2, 3, 4, 5, 6]; 2, 4;
 let arr8 = arr7.slice(0,2)
 let arr9 = arr7.slice(4,6)
 console.log(arr8.concat(arr9));

 //Q9 
let arr10= [1, 2, 3, 4, 5]; 3;
console.log(arr10.splice(1,1));

//Q10
let arr11= [1, 2, 3, 4, 5];
console.log(arr11.indexOf(3));

//Q11
let arr12= [1, 2, 3, 4, 5];
console.log(arr12.join());

//Q12
let str = "1, 2, 3, 4, 5";
console.log(str.split(0,4));

//Q13
let arr13 = [1, 2, 3, 4, 5];
console.log(arr13.length);

//Q14
let arr14= [1, 2, 3, 4, 5];
for (i=1; i<= arr14.length ; i++){
    console.log(i);
}
//Q15
let arr19= [1, 2, 3, 4, 5];
for (i=0; i<= arr19.length ; i++){
    console.log(arr19.indexOf());
}

//Q16
let arr15= [1, 2, 3, 4, 5];
console.log(Array.isArray(arr15));

//Q17
 let object1 = {0: "a", 1: "b", 2: "c", length: 3};
   console.log(Array.from(object1));

//Q18 
  console.log(Array.of(1, 2, 3));

//Q19
let arr16 = [1, 2, 3, 4, 5]; 0, 3;
console.log(arr16.fill(0,0,3));

//Q20
let arr17 = [1, 2, 3, 4, 5]; 1, 3;
console.log(arr17.copyWithin(1,0,2));

