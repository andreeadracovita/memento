import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
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
						<li><Accent>Bottom-Up Approach</Accent>: start with knowing how to solve for simple case, figure how to solve for more building upon the smaller cases.</li>
						<li><Accent>Top-Down Approach</Accent>: divide the big problem for case N into subproblems. Careful of overlap.</li>
						<li><Accent>Half-and-Half Approach</Accent>: binary search - figure out which half, recurse, etc.</li>
					</ul>
					<p>Recursive algorithms can be very space inefficient. Each recursive call affs a new layer to the stack. If the algorithms recurses to depth of N, it uses at least O(N) memory.</p>
					<p>It is often better to implement a recursive algorithms iteratively and consider tradeoffs.</p>
					<SyntaxHighlighter language="java">{code}</SyntaxHighlighter>
				</>
			}
		</div>
	);
}