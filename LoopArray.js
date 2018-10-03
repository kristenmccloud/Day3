# Day3
a = [.1, .2, .3, .4, .5]

// Create function that finds the highest number
// Hint: create a variable called max and assign it a reasonable start value
var max = 0
a.forEach (function(el, i, arr) {
//If an element is higher than max, change max

  if (el > max) {
    max = el

  }
})

//console.log(max)

var min = 1
a.forEach (function(el, i, arr) {
  if (el < min) {
    min = el
  }
})

//console.log(min)

var smallNum = 0

 //a.forEach (function(el, i, arr) {


//console.log(smallNum)
/* var sum = 0
a.forEach (function(el, i , arr) {
    sum += el
})
//console.log(sum) */

/*for (var i = 0; i < 16; i++) {
  var element = a[i] + a[i + 1];
  console.log(element);
}*/

var sum = 0

a.forEach(function(el, i, arr) {
// mean = sum of all numbers in array divided by amount of numbers in array
  sum += el
  mean = sum / a.length
})

//console.log(mean)


var max = 0
a.forEach (function(el, i , arr) {
  if (el > max) {
    highNum = a.indexOf(el)

  }
})
//console.log(highNum)

var siblings = ["thomas", "courtney"];
var parents = [ "renee","tom"];

siblings.sort();

//console.log(parents.sort().reverse());

var allNames = siblings.concat(parents);

//console.log(allNames.sort().reverse());
