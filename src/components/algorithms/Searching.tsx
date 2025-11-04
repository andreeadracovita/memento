import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function Searching() {
	const [toggle, setToggle] = useState(false);
	const code = `int binarySearch(int[] arr, int x) {
	int low = 0;
	int high = arr.length - 1;
	int mid;

	while (low <= high) {
		mid = low + (high - low) / 2;
		if (arr[mid] > x) {
			high = mid - 1;
		} else if (arr[mid] < x) {
			low = mid + 1;
		} else {
			return mid;
		}
	}
	// Not found
	return -1;
}`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Searching"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>Generally binary search: searching an element in a sorted array. Compare first to the midpoint. If smaller than midpoint, recursively search left, otherwise search right of the midpoint.</p>
					<pre>{code}</pre>
					<p>Beyond binary search: binary tree, hash table, etc.</p>
				</>
			}
		</div>
	);
}