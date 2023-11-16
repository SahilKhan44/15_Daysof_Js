/*There are  3 types of variable in js Let, Const, Var- this is not using */
let Name = "Sahil";
const Class = 2;
//we cant use var becaz they give issue in block scope orother scope.
var colors = "Pink";

// we can write without using variable but it not suggested
Name = "Khan";

// they give error becaz we cant change const value
//class =3;

gender = "male";
// If we are not giving any value they give undefined

let message;

console.log("Name");

//Infact i we want to print in one time then we print in tables

console.table([Name,Class,colors,gender,message]);