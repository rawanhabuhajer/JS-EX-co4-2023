//Q1
let object1 = { name: "Adam", age: 25, gender: "male" };
console.log(object1.name , object1.age , object1.gender);

//Q2
let object2 = { name: "Adam", age: 25 };
object2.gender = "male";
console.log(object2);

//Q3
let object3 = { name: "Adam", age: 25 };
object3["gender"]= "male"
console.log(object3);

//Q4
let object4 = { name: "Adam", age: 25, gender: "male" };
console.log(object4.name);

//Q5 
let object5 = { name: "Adam", age: 25, gender: "male" };
console.log(object5["name"]);

//Q6
let object6 = { name: "Adam", age: 25, gender: "male" };
for (const property in object6){
    console.log(`${property}: ${object6[property]}`);
}

//Q7
let object8 = { name: "Adam", age: 25, gender: "male" };
console.log(Object.keys(object8));

//Q8
let object9 = { name: "Adam", age: 25, gender: "male" };
console.log(Object.values(object9));

//Q9
let object10 = { name: "Adam", age: 25};
console.log(Object.entries(object10));

//Q10 
let object11 = { name: "Adam", age: 25 } 
let object12= { gender: "male" };
console.log(Object.assign(object11,object12));

//Q11 
let object13 = { name: "Adam", age: 25 };
console.log(Object.freeze(object13));

//Q12
let object14 = { name: "Adam", age: 25 };
console.log(Object.seal(object14));

