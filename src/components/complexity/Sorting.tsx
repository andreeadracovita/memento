import { useState } from "react";

import CardHeader from "../CardHeader";

export default function Sorting() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Array Sorting Algorithms"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<table className="table table-bordered table-striped">
					    <tbody><tr>
					      <th>Algorithm</th>
					      <th colSpan={3}>Time Complexity</th>
					      <th>Space Complexity</th>
					    </tr>
					    <tr>
					      <th></th>
					      <th>Best</th>
					      <th>Average</th>
					      <th>Worst</th>
					      <th>Worst</th>
					    </tr>

					    <tr>
					      <td><a href="http://en.wikipedia.org/wiki/Quicksort">Quicksort</a></td>
					      <td><code className="orange">Ω(n log(n))</code></td>
					      <td><code className="orange">Θ(n log(n))</code></td>
					      <td><code className="red">O(n^2)</code></td>
					      <td><code className="yellow-green">O(log(n))</code></td>
					    </tr>
					    <tr>
					      <td><a href="http://en.wikipedia.org/wiki/Merge_sort">Mergesort</a></td>
					      <td><code className="orange">Ω(n log(n))</code></td>
					      <td><code className="orange">Θ(n log(n))</code></td>
					      <td><code className="orange">O(n log(n))</code></td>
					      <td><code className="yellow">O(n)</code></td>
					    </tr>
					    <tr>
					      <td><a href="http://en.wikipedia.org/wiki/Heapsort">Heapsort</a></td>
					      <td><code className="orange">Ω(n log(n))</code></td>
					      <td><code className="orange">Θ(n log(n))</code></td>
					      <td><code className="orange">O(n log(n))</code></td>
					      <td><code className="green">O(1)</code></td>
					    </tr>
					    <tr>
					      <td><a href="http://en.wikipedia.org/wiki/Bubble_sort">Bubble Sort</a></td>
					      <td><code className="yellow">Ω(n)</code></td>
					      <td><code className="red">Θ(n^2)</code></td>
					      <td><code className="red">O(n^2)</code></td>
					      <td><code className="green">O(1)</code></td>
					    </tr>
					    <tr>
					      <td><a href="http://en.wikipedia.org/wiki/Insertion_sort">Insertion Sort</a></td>
					      <td><code className="yellow">Ω(n)</code></td>
					      <td><code className="red">Θ(n^2)</code></td>
					      <td><code className="red">O(n^2)</code></td>
					      <td><code className="green">O(1)</code></td>
					    </tr>
					    <tr>
					      <td><a href="http://en.wikipedia.org/wiki/Selection_sort">Selection Sort</a></td>
					      <td><code className="red">Ω(n^2)</code></td>
					      <td><code className="red">Θ(n^2)</code></td>
					      <td><code className="red">O(n^2)</code></td>
					      <td><code className="green">O(1)</code></td>
					    </tr>
					    <tr>
					      <td><a href="https://en.wikipedia.org/wiki/Tree_sort">Tree Sort</a></td>
					      <td><code className="orange">Ω(n log(n))</code></td>
					      <td><code className="orange">Θ(n log(n))</code></td>
					      <td><code className="red">O(n^2)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					    </tr>
					    <tr>
					      <td><a rel="tooltip" title="Constant number of digits 'k'" href="http://en.wikipedia.org/wiki/Radix_sort">Radix Sort</a></td>
					      <td><code className="green">Ω(nk)</code></td>
					      <td><code className="green">Θ(nk)</code></td>
					      <td><code className="green">O(nk)</code></td>
					      <td><code className="yellow">O(n+k)</code></td>
					    </tr></tbody>
					</table>
				</>
			}
		</div>
	);
}