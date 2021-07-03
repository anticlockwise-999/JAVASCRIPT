
//Recursion

//Use Recursion to Create a Countup / Countdown

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countup(n-1);
    arr.push(n); //To add new items at the end of an array, using the push() method.
    return arr;
  }
}
console.log(countup(5)); //prints [1, 2, 3, 4, 5]


function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n); //The unshift() method adds new items to the beginning of an array, and returns the new length.
    return arr;
  }
}
console.log(countdown(5)); //prints [5,4,3,2,1]


//Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeOfNumbers(2, 6)) //prints [2, 3, 4, 5, 6]