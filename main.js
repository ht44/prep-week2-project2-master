/*
=======================================================
** Week 2 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the results can be displayed into the
HTML page. In some cases, you may want to check
within the console for verification of the array.

console.log();

=======================================================
*/


// 0. Connect the main.js document to the HTML page.
/*    Add to the bottom of the HTML page: <script src="main.js"></script>*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");




// 1. Declare a variable whose value is an empty array.
//    Use any method you choose to add at least 4 items to it.
var array1 = [];
array1.splice(0, 0, "Lightning", "Fire", "Water", "Earth");
document.getElementById("q1").innerHTML = array1;




// 2. Add an additional item to the beginning of your array.
array1.unshift("Ice");
document.getElementById("q2").innerHTML = array1;




// 3. Remove the second and third items in your array.
array1.splice(1, 2);
document.getElementById("q3").innerHTML = array1;




// 4. Add two new items after the second item.
array1.splice(2, 0, "Wind", "Space");
document.getElementById("q4").innerHTML = array1;




// 5. Log to the console: 'The current length of the array is....' using the .length method
console.log("The current length of the array is" + " " + array1.length);






// Use the following Array for questions 6-9:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'
things[2] = 'keyboard';
document.getElementById("q6").innerHTML = things;




// 7. Combine all of the elements of the array into a string.
//    (Hint: check out the 'join' method.)
var stringThings = things.join(" and ");
document.getElementById("q7").innerHTML = stringThings;




// 8. Remove the first item.
var removeThing = things.shift();
document.getElementById("q8a").innerHTML = removeThing;






// 9. Remove all items from the things array.
things = [];
document.getElementById("q9").innerHTML = things;






// Use the following array for question 10:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 10. Arrange the items alphabetically. Store this Array as orderedPeople
var orderedPeople = people.sort();
document.getElementById("q10").innerHTML = orderedPeople;





// 11. Create an array of arrays with the following three arrays:
var arrayA = ["Fido", "Spot", "Rex", "Sparky"]
var arrayB = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var arrayC = ["White", "Black", "Spotted", "Tri-color"]

// Goal:
var arrayD = [arrayA, arrayB, arrayC];
document.getElementById("q11").innerHTML = arrayD;






// 12. Remove "Sparky" and "White" from the above array of arrays.
arrayA.pop();
arrayC.shift();
document.getElementById("q12").innerHTML = arrayD;






// ADVANCED TRACK
// Use the following campingItems array for question 13
var campingItems = ['tent', 'hiking boots', 'picnic table', 'corn on the cob', 'cooler'];

// 13. Declare an array called lastItem using .pop() on the campingItems array.
var lastItem = [campingItems.pop()];
document.getElementById("q13").innerHTML = lastItem;




// 14. Add two new items to lastItem, one at the beginning and one at the end.
lastItem.unshift('drinks');
lastItem.push('ice');
document.getElementById("q14").innerHTML = lastItem;




// 15. Add s'mores to the lastItem array.
lastItem.push('s\'mores');
document.getElementById("q15").innerHTML = lastItem;




// 16. Create a new Array called reversedItems.
//    The items should be the same as lastItem, only in reverse order.
var reversedItems = lastItem.reverse();
document.getElementById("q16").innerHTML = reversedItems;



// 17. Using the Arrays below, create a single Array
//     called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];
var numberPets = [firstArray, secondArray];
document.getElementById("q17").innerHTML = numberPets;




// 18: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300];
// If it doesn't sort as expected, explain why.
var small2large = sortingNumbers.sort(function(a, b) {
  return a - b;
});
document.getElementById("q18").innerHTML = small2large;





/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
