import { useState } from "react";

import Accent from "components/Accent";
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
					<p>A linked list is a <Accent>linear collection of data elements</Accent> whose order is not given by their physical placement in memory. In its most basic form, each node contains <Accent>data and a reference to the next node</Accent> in the sequence.</p>
					<p className="card-section">Benefits</p>
					<p>Efficient insertion or removal of elements from any position in the sequence during iteration. More complex variants add <Accent>additional links</Accent>, allowing <Accent>more efficient insertion or removal of nodes</Accent> at arbitrary positions.</p>
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