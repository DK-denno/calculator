$(document).ready(function(){

var add=function(number1, number2){
  return number1 + number2;
};
  var number1=parseInt(prompt("enter a number:"));
  var number2=parseInt(prompt("enter another number:"));
  alert(add(number1, number2));
};
var minus=function(number1,number2){
  return number1-number2;
};
var divide=function(number1,number2){
  return number1/number2;
};
var multiply=function(number1,number2){
  return number1*number2;
};
  $("button#green").click(function() {
  $("body").addClass("green-background");
});
  $("button#yellow").click(function() {
  $("body").addClass("yellow-background");
});
 $("button#red").click(function() {
$("body").addClass("red-background");
});
});
};
