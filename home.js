/*Task 1. Write a function which receives an array and a number as arguments and returns a new array from the elements of the given array which are larger than the given number

function newArrayWithLargerElements(arr, number) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      newArr.push(arr[i])
    }
  } if (newArr.length > 0) {
    return newArr
  } else {
    return '"Such values do not exist"';
  }
}

var array = [10, 25, 16, -5, 30, 15, 24];
var number = 16;
var newArray = [1, 1, 2, -3, 0, 8, 4, 0];
var newNumber = 9;
console.log(newArrayWithLargerElements(array, number));
console.log(newArrayWithLargerElements(newArray, newNumber));
*/

/*Task 2. Write a function, which receives two numbers as arguments and finds all numbers between them such that each digit of the number is even. 
The numbers obtained should be printed in a comma-separated sequence on a single line.

var firstN = +prompt();
var secondN = +prompt();

function getEvenDigitNumbers(firstN, secondN){
	let arr = [];
	if( firstN % 2 !== 0){
		firstN += 1
	}
	for (let i = firstN; i <= secondN; i += 2){
		let isEven = true;
		let j = i;
		while (j){
			if (j % 2 === 0){
				j = Math.floor(j/10)
			} else {
				isEven = false;
				break
			}
			
		}
		if (isEven) arr.push(i);
	}
  return arr;
}

var output = getEvenDigitNumbers(firstN,secondN);
console.log(output);

*/


/*Task 3. Write a recursive function to determine whether all digits of the number are odd or not.

function getOddIfAllOddDiggits (num){
	if (num % 2 !== 0) {
		return getOddIfAllOddDiggits(Math.floor(num/10));
	} else if (num === 0){
		return true;
	} else {
		return false;
	}
}
var num = 123456;
var output = getOddIfAllOddDiggits(num);
console.log(output);

//other solution (Not recursive)

function checkOddDigits(num) {
  var n = String(num);
  var result;
  for (var i = 0; i < n.length; i++) {
    if (Number(n[i]) % 2 === 0) {
      result = false;
      break;
    } else {
      result = true
    }
  }
  return result;
}
var number = 7791;
console.log(checkOddDigits(number))
*/


/* Task 4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)

function minimalPositiveElement(arr, num = arr[0]){

	if (arr[1] === undefined){
		if (num >= 0){
			return num;
		} else {
			return -1;
		}
  } else if (num < 0){
    arr.shift();
    return minimalPositiveElement(arr);
  } else {
    if (num < arr[1])  {
      arr.shift();
      return  minimalPositiveElement(arr, num);
    } else if (num > arr[1] && arr[1] > 0 ){    
      arr.shift();
      return minimalPositiveElement(arr, arr[0]);
    } else { 
      arr.shift();
      return  minimalPositiveElement(arr, num);
    }
  }
}

var arr = [56, -9, 87, -23, 0, -105, 55, 1];
var output = minimalPositiveElement(arr);
console.log(output);

*/

/* Task 5. Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting order is violated.

function checkSortOfArrayElements(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1])
      return i;
  }
  return -1;
}
var array = [-9, -4, -4, 3, 12, 4, 5];
console.log(checkSortOfArrayElements(array));
var nArray = [2, 12, 15, 48, 64];
console.log(checkSortOfArrayElements(nArray));

*/