import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function DynamicProgramming() {
	const [toggle, setToggle] = useState(false);
	const code = `// Memoization
int fibonacci(int n) {
	return fibonacci(n, new int[n + 1]);
}

int fibonacci(int n, int[] memo) {
	if (i == 0 || i == 1) return i;

	if (memo[i] == 0) {
		memo[i] = fibonacci(i - 1, memo) + fibonacci(i - 2, memo);
	}
	return memo[i];
}`;

const iterative = `int fibonacci(int n) {
	if (n == 0 || n == 1) return n;
	int a = 0;
	int b = 1;
	for (i = 2; i < n; i++) {
		int c = a + b;
		a = b;
		b = c;
	}
	return a + b;
}`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Dynamic Programming"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>Take a recursive problem and find the overlapping subproblems. Then cache the results for future recursive calls.</p>
					<pre>{code}</pre>
					<p>By going bottom-up, we realize that only the last 2 values need to be saved, so no more array is needed for memoization. Space: O(1), Time: O(N)</p>
					<pre>{iterative}</pre>
				</>
			}
		</div>
	);
}