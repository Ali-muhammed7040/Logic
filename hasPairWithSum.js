// 🧠 Problem: Pair Sum
// Given a sorted array of integers and a target sum, return true if there exists a pair of numbers that add up to the target. Use the two-pointer technique.

// Input: arr = [1, 2, 3, 4, 6], target = 6  
// Output: true  // because 2 + 4 = 6

function hasPairWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return true;
    } else if (sum < target) {
      left++;  // move right to increase the sum
    } else {
      right--; // move left to decrease the sum
    }
  }

  return false; // no pair found
}


function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4)); // 7


function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // "olleh"
