import { useState } from "react";

import CardHeader from "../CardHeader";

export default function Queue() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Queue"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>JavaScript does not have a built-in queue data structure in its standard library.</p>
					<p>However, queues can be implemented using arrays by utilizing the push() method to add elements to the end (enqueue) and the shift() method to remove elements from the front (dequeue).</p>
					<p>This approach simulates the First In, First Out (FIFO) behavior of a queue, where the first element added is the first one to be removed.</p>
					<p>While this array-based implementation is simple, it can be inefficient for large datasets or frequent operations due to the need to shift all elements when using shift().</p>
					<p>For better performance, especially with larger queues, dedicated queue implementations or other data structures like objects with head and tail pointers are recommended.</p>
				</>
			}
		</div>
	);
}