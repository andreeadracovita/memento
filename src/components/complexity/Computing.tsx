import { useState } from "react";

import CardHeader from "../CardHeader";

export default function Computing() {
	const [toggle, setToggle] = useState(false);
	const addRuntime = `for (int a : arrA) {
	print(a);
}

for (int b : arrB) {
	print(b);
}`;
	const multiplyRuntime = `for (int a : arrA) {
	for (int b : arrB) {
		print(a + "," + b);
	}
}`;
	const recursive = `int f(int n) {
	if (n <= 1) {
		return 1;
	}
	return f(n-1) + f(n-1);
}`

	return (
		<div className="grey-card">
			<CardHeader
				title={"Computing Big O"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>- Drop the Constants</p>
					<p>- Drop the Non-Dominant Terms</p>
					<p>- Multi-Part Algorithms: Add the Runtimes O(A + B)</p>
					<pre>{addRuntime}</pre>

					<p>- Multi-Part Algorithms: Multiply the Runtimes O(A * B)</p>
					<pre>{multiplyRuntime}</pre>

					<p className="mt-3"><strong>Amortized time</strong>: average time taken per operation over a sequence of operations, particularly when some operations are expensive but occur infrequently. It is used to provide a more accurate picture of performance than worst-case analysis alone, especially for data structures where most operations are fast but some are slow, such as dynamic arrays that need to resize.</p>

					<p className="mt-3"><strong>Recursive Runtimes</strong></p>
					<pre>{recursive}</pre>
					<br />
					<img src="graphics/recursivity.png" style={{"width": "400px"}} />
					<br />
					<pre>Number of calls = 2<sup>0</sup> + 2<sup>1</sup> + 2<sup>2</sup> + 2<sup>3</sup> + ... + 2<sup>N-1</sup> = 2<sup>N</sup> - 1</pre>
					<p><strong>Pattern</strong>: O(branches<sup>depth</sup>)</p>
				</>
			}
		</div>
	);
}