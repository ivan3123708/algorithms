/*
 *  Merge sort is divide and conquer algorithm which breaks
 *  the array into smaller parts until every part only has
 *  one item, then merge all parts together by comparing them.
*/


var arr = [3, 12, 5, 2, 12, 4, 1, 14, 9, 0];

function merge(left, right) {
  var result = [];
	var leftLen = left.length;
  var rightLen = right.length;
  var i = 0;
  var j = 0;

  while (i < leftLen && j < rightLen) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i).concat(right.slice(j)));
};


function mergeSort(arr) {
  var len = arr.length;

	if (len < 2) {
    return arr;
  }

  var mid = Math.floor(len / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

mergeSort(arr, 0, arr.length - 1);