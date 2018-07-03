/*	
 *	Insertion sort starts at key (index 1 or i) of the array
 *	and compares it to the sorted subarray on the left
 *	(index 0 at first loop). As long as the key is smaller
 *	than element in the subarray (index j), index j moves
 *	one place to the right. When loop reaches index j that is not
 *	bigger than the key, loops ends and key is inserted in place
 *	of the previous index j (index j + 1).
*/

var arr = [3, 12, 5, 2, 12, 4, 1, 14, 9, 0];

function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
      var key = arr[i];

      for (var j = i - 1; j >= 0 && arr[j] > key; j--) {
        arr[j + 1] = arr[j];
      }

      arr[j + 1] = key;
    }

    return arr;
};

insertionSort(arr);