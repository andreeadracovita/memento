import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function LinkedLists() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Linked Lists"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>A linked list is a <strong>linear collection of data elements</strong> whose order is not given by their physical placement in memory. In its most basic form, each node contains <strong>data and a reference to the next node</strong> in the sequence.</p>
					<p className="card-section">Benefits</p>
					<p>Efficient insertion or removal of elements from any position in the sequence during iteration. More complex variants add <strong>additional links</strong>, allowing <strong>more efficient insertion or removal of nodes</strong> at arbitrary positions.</p>
					<p className="card-section">Drawbacks</p>
					<p>Data access time is linear in respect to the number of nodes in the list</p>
					<p>Faster access, such as random access, is not feasible. Arrays have better cache locality compared to linked lists.</p>

					<p className="card-section">Singly-linked List</p>
					<p>Each node points to the next node in the linked list.</p>
					<img src="graphics/singly-linked-list.png" className="graphics" />
					<p className="card-section">Doubly-linked List</p>
					<p>Each node points to the previous and the next node in the linked list.</p>
					<img src="graphics/doubly-linked-list.png" className="graphics" />
				</>
			}
		</div>
	);
}