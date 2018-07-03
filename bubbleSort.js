/*	
 *	Bubble sort compares pairs of items inside a list
 *	starting from the beginning and moves the bigger one
 *	to the right, so in every iteration biggest numbers
 *	are push to the end of the list.
*/

var arr = [3, 12, 5, 2, 12, 4, 1, 14, 9, 0];

function bubbleSort(arr) {
	var len = arr.length;
	var temp;
  var str;

	for (var i = len - 1; i >= 0; i--) {
		for (var j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
	}

  return arr;
}

bubbleSort(arr);