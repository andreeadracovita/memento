import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function HashTables() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Hash Tables"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<ul>
						<li>A data structure that maps keys to values for highly efficient lookup.</li>
						<li>Simple implementation: an array of linked lists and a hash code function. Linked lists are used to manage collisions.</li>
						<li>
							To insert a key:
							<ol>
								<li>Compute key's hash code. Two different keys could have the same hash code.</li>
								<li>Map the hash code to an index in the array (something like <pre>hash(key) % array_length</pre>).</li>
								<li>At this index, add the pair (key, value) to the linked list.</li>
							</ol>
						</li>
						<li>To retrieve a value pair by its key, repeat the process.</li>
						<li>Worst case runtime is O(N) if the number of collisions is very high.</li>
						<li>A good implementation keeps the number of collisions at a minimum.</li>
						<li>Alternative: lookup system with a balanced binary search tree. (O(log N) lookup time)</li>
					</ul>
					<img src="graphics/hash-table.png" className="graphics" />
				</>
			}
		</div>
	);
}