/*	
 *	Selection sort marks first item of every iteration
 *	as the Minimal and then compares every item
 *	to the Minimal. If any item is smaller than the
 *	Minimal, it becomes Minimal, and in the and of
 *	iteration Minimal and the first items swap positions,
 *	thus moving the smallest numbers to the beginning of the list
 *	on every iteration.
*/

var arr = [3, 12, 5, 2, 12, 4, 1, 14, 9, 0];

function selectionSort(arr) {
  var len = arr.length;
  var minIndex;
  var temp;

  for (var i = 0; i < len; i++) {
    minIndex = i;
  	for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

selectionSort(arr);