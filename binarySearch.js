/* Binary search starts by finding the middle of the list
 * and then comparing the target value to the value
 * with middle index of the list. If target value
 * is bigger left subarray is droped, and right if target
 * is smaller. Loop ends if target is found on middle index
 * or not found at all
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(list, target) {
  var start = 0;
  var end = list.length - 1;
  var middle;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (target === list[middle]) {
      return list[middle];
    } else if (target < list[middle]) {
      end = middle - 1;
    } else if (target > list[middle]) {
      start = middle + 1;
    }
  }

  return 'Not found';
}

binarySearch(arr, 4);
