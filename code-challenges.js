// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// // Expected outcome: "cherry"

// // --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// // Pseudo code: I  would make a if else state that recieves a number and determine if its equal to, less than or greater the fixed number in the temp 1-3 consts.


// const temp1 = 42
// // Expected output: "42 is below boiling point"

// const temp2 = 350
// // Expected output: "350 is above boiling point"

// const temp3 = 212
// // Expected output: "212 is at boiling point"

// // 


//     const boilingPoint = (temp) => {
    //    if the temp is below the bolling put
//         if (temp <= 211) {
//           return "is below boiling point"
//         }
            // if the temp is equal to the bolling point
//         else if (temp  == 212) {
//           return "is at boiling point"
//         }
        // if the temp is above the bolling put
//         else if (temp  >= 213){
//           return "is above boiling point"
//         }
        //  if theres an error thi is the catch all   
//    else {
//             return "error"
//           }
//       }
//       console.log(boilingPoint(213));



// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: i would make a funtion that uses the .concat and bring both arrays together which i wil log as a var, and the log that var.length 

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// // Expected output: 9

// var joinedArrays = (padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))
// console.log(joinedArrays.length);


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:i can just simply do a console.log (currentChort.reverse()) //😂  thats what i thought it would be , but this qestion took me about 2 hours. i had to do a lot of research for this problem.The way you solve it is by using a set of built in methods to change it (.split("").reverse().join("")) and console logging 

// const currentCohort = "Alpha 2023";
 
// function reverseCohort(currentCohort) {
//     return currentCohort.split("").reverse();
//  }

//  let splitCohort = currentCohort.split("");
//  let reverseArray = splitCohort.reverse();
//  let joinedArray = reverseArray.join("");
// console.log(joinedArray);


// Expected output: "3202 ahplA"






// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: Use the already given const Array and console.log the myNumbers array and add on the .lastIndexof and insert the value 


// const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
// // const givenValue1 = 42

// // console.log(myNumbers.lastIndexOf(42))

// // // Expected output: 7

// // const givenValue2 = 10
// console.log(myNumbers.lastIndexOf(10))
// // Expected output: 8




// // --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// // Pseudo code: I can use the built in methods of .sort .reverse to sort them from (.sort )lowest to highest and then reverse (.reverse)the order so the its highest to smallest 



// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// // // Expected output: [82, 80, 79, 77, 76, 73, 72]

// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// // // Expected output: [68, 67, 66, 66, 62, 59, 59]


// console.log(sanDiegoSummerTemperatures.sort().reverse(""))
// console.log(sanDiegoWinterTemperatures.sort().reverse(""))
