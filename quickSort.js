/*
 *	Quick sort recursively partitions (calculating the pivot) the array
 *	and sort the subarrays left and right or less than and greater than
 *	the pivot (partitionIndex), until each subarray is of length 1 or 0.
 */


var arr = [3, 12, 0, 5, 2, -5, 12, -13, 4, 1, 14, 9, 6];

// function for swapping two elements in an array
function swap(arr, firstIndex, secondIndex) {
	var temp = arr[firstIndex];
	arr[firstIndex] = arr[secondIndex];
	arr[secondIndex] = temp;
}

// function for partitioning array
function partition(arr, start, end) {
	var partitionIndex = start;

	for (var i = start; i < end; i++) {
		if (arr[i] <= arr[end]) {
			swap(arr, i, partitionIndex);
			partitionIndex++;
		}
	}

	swap(arr, end, partitionIndex);

	return partitionIndex;
}

// function quickSort recursively partitions and sorts the partitioned array
function quickSort(arr, start, end) {
	if (start < end) {
		var pivot = partition(arr, start, end);
		quickSort(arr, start, pivot - 1);
		quickSort(arr, pivot + 1, end);
	}

	return arr;
}

quickSort(arr, 0, arr.length - 1);