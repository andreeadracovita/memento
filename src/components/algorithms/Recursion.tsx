import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function Recursion() {
	const [toggle, setToggle] = useState(false);
	const code = `int fibonacci(int i) {
	if (i == 0) return 0;
	if (i == 1) return 1;
	return fibonacci(i - 1) + fibonacci(i - 2);
}`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Recursion"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>Hint: a problem can build off of subproblems.</p>
					<ul>
						<li><strong>Bottom-Up Approach</strong>: start with knowing how to solve for simple case, figure how to solve for more building upon the smaller cases.</li>
						<li><strong>Top-Down Approach</strong>: divide the big problem for case N into subproblems. Careful of overlap.</li>
						<li><strong>Half-and-Half Approach</strong>: binary search - figure out which half, recurse, etc.</li>
					</ul>
					<p>Recursive algorithms can be very space inefficient. Each recursive call affs a new layer to the stack. If the algorithms recurses to depth of N, it uses at least O(N) memory.</p>
					<p>It is often better to implement a recursive algorithms iteratively and consider tradeoffs.</p>
					<pre>{code}</pre>
				</>
			}
		</div>
	);
}