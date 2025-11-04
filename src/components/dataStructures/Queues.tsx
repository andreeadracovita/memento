import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function Queues() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Queues"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>A queue is a linear data structure that follows a particular order in which the operations are performed - FIFO (First In First Out). Main operations: enqueue, dequeue.</p>
					<img src="graphics/queue.png" className="graphics" />
					<br />
					<p>
						<a href="/memento/js-library#queue">Queue implementation in JavaScript</a>
					</p>
					<p>
						<a href="/memento/java#queue">Queue implementation in Java</a>
					</p>
				</>
			}
		</div>
	);
}