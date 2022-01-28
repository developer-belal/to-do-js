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
function room(){
    let m="";
    var famly=prompt("do you love family");
    if(famly==="yes" || famly==="no" )
    m+=(famly+",");
    var think=prompt("do you think the reason someone heates you is to miss you?");
    if(think==="yes" || think==="no" )
    m+=think;
    var love=prompt("do you love enginnering?");
    if(love==="yes" || love==="no" )
    m+=(love+" ,");
    if(m==="")
 return   alert("invalid string");
    else
    return m;

}
alert(room());







