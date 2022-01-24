"use strict";

var yourname=prompt("what i your name");
var gender=prompt("what is your gender  male or female");
var age=prompt("what is your age becarful is lees 0 or =0");
var welcome=prompt("do you want to skip the welcome message enter yes or no");
console.log("dddd");
if(welcome=="no"){
   switch(gender){
   case "male":alert("welcome sir"+" :" +yourname);break;
   case "female":alert("welcome lady"+" :" +yourname);break;
   default:
       alert(".......");

    }

}






