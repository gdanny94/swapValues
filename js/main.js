// /Instructions:

// I would like to be able to pass an array with two elements to my swapValues function to swap the values.
// However it appears that the values aren't changing.

// Can you figure out what's wrong here?

// function swapValues() {
//     var args = Array.prototype.slice.call(arguments);
//     var temp = args[0];
//     args[0] = args[1];
//     args[1] = temp;
// }

function swapValues(arr) {
  if (arr.length === 2) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }
}

// In this code:

//1. You pass an array myArray with two elements [1, 2] to the swapValues function.
//2. The function checks if the array has exactly two elements and swaps the values using a temporary variable temp.
//3. After calling swapValues, the original array myArray is modified, and its values are swapped.
