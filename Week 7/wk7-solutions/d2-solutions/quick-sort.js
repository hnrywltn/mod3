function quickSort(array) {
  // if the length of the array is 0 or 1, return the array
  // set the pivot to the first element of the array
  // remove the first element of the array
  // put all values less than the pivot value into an array called left
  // put all values greater than the pivot value into an array called right
  // call quick sort on left and assign the return value to leftSorted
  // call quick sort on right and assign the return value to rightSorted
  // return the concatenation of leftSorted, the pivot value, and rightSorted
}

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array.shift();
  let leftArray = [];
  let rightArray = [];

  array.forEach((element) => {
    if (element <= pivot) {
      leftArray.push(element);
    } else {
      rightArray.push(element);
    }
  });

  let leftSorted = quickSort(leftArray);
  let rightSorted = quickSort(rightArray);

  return [...leftSorted, pivot, ...rightSorted];
}
