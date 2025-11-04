import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function Sorting() {
	const [toggle, setToggle] = useState(false);
	const mergeSort = `void mergeSort(int[] array) {
	int[] helper = new int[array.length];
	mergeSort(array, helper, 0, array.length - 1);
}

void mergeSort(int[] array, int[] helper, int low, int high) {
	if (low < high) {
		int middle = low + (high - low) / 2; // avoid division problems
		mergeSort(array, helper, low, middle); // sort left
		mergeSort(array, helper, middle + 1, high); // sort right
		merge(array, helper, low, middle, high);
	}
}

void merge(int[] array, int[] helper, int low, int middle, int high) {
	for (int i = low; i < high; i++) {
		helper[i] = array[i];
	}

	// current index in each array: helperLeft, helperRight, array
	int helperLeft = low;
	int helperRight = middle + 1;
	int current = low;

	while (helperLeft <= middle && helperRight <= high) {
		if (helper[helperLeft] <= helper[helperRight]) {
			array[current++] = helper[helperLeft++];
		} else {
			array[current++] = helper[helperRight++];
		}
	}

	// copy the rest of the helperLeft into array (helperRight is already there and does not need copying)
	while (helperLeft <= middle) {
		array[current++] = helper[helperLeft++];
	}
}`;
	const quickSort = `void quickSort(int[] arr, int left, int right) {
	int index = partition(arr, left, right); // index of the pivot
	// Sort left
	if (left < index - 1) {
		quickSort(arr, left, index - 1);
	}
	// Sort right
	if (index < right) {
		quickSort(arr, index, right);
	}
}

int partition(int[] arr, int left, int right) {
	// Pick pivot
	int pivot = arr[left + (right - left) / 2];
	while (left <= right) {
		while (arr[left] < pivot) left++;
		while (arr[right] > pivot) right--;
		if (left <= right) {
			swap(arr, left, right);
			left++;
			right--;
		}
	}
	return left;
}`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Sorting"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p className="card-section">Common Sorting Algorithms</p>
					<p className="bold">Bubble Sort. Time: O(N<sup>2</sup>) average and worst, Space: O(1)</p>
					<p>Start at the beginning, swap 2 by 2 in the correct order.</p>
					<hr />
					<p className="bold">Selection Sort. Time: O(N<sup>2</sup>) average and worst, Space: O(1)</p>
					<p>Find the smallest element using linear search, move it to the front. Find the next, swap. Etc.</p>
					<hr />
					<p className="bold">Merge Sort. Time: O(N log N) average and worst, Space: O(N)</p>
					<p>Divide array in half, sort each half, merge them back together. Apply merge sort on each half (recursive). In the end, merging just 2 arrays of 1 element each (sorted by default).</p>
					<pre>{mergeSort}</pre>
					<hr />
					<p className="bold">Quick Sort. Time: O(N log N) average, O(N<sup>2</sup>) worst, Space: O(log N)</p>
					<p>Pick a random element (pivot), partition the array such that left side contains element smaller or equal to the pivot and the right side contains elements larger than the pivot. In the worst case, we will always choose as pivot the smallest element (or the largest) resulting in O(N<sup>2</sup>) time.</p>
					<pre>{quickSort}</pre>
					<hr />
					<p className="bold">Radix Sort. Time: O(KN)</p>
					<p>Algorithm for integers that takes advantage of the fact that integers have a finite number of bits. Iterate through each digit of the number, grouping by each digit. K is the number of passes of the sorting algorithm.</p>
				</>
			}
		</div>
	);
}