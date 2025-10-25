import { useState } from "react";

import CardHeader from "../CardHeader";

export default function DataStructures() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Common Data Structures Operations"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<table className="table table-bordered table-striped">
					    <tbody><tr>
					      <th>Data Structure</th>
					      <th colSpan={8}>Time Complexity</th>
					      <th>Space Complexity</th>
					    </tr>
					    <tr>
					      <th></th>
					      <th colSpan={4}>Average</th>
					      <th colSpan={4}>Worst</th>
					      <th>Worst</th>
					    </tr>
					    <tr>
					      <th></th>
					      <th>Access</th>
					      <th>Search</th>
					      <th>Insertion</th>
					      <th>Deletion</th>
					      <th>Access</th>
					      <th>Search</th>
					      <th>Insertion</th>
					      <th>Deletion</th>
					      <th></th>
					    </tr>

					    <tr>
					      <td><a href="http://en.wikipedia.org/wiki/Array_data_structure">Array</a></td>
					      <td><code className="green">Θ(1)</code></td>
					      <td><code className="yellow">Θ(n)</code></td>
					      <td><code className="yellow">Θ(n)</code></td>
					      <td><code className="yellow">Θ(n)</code></td>
					      <td><code className="green">O(1)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					    </tr>
					    <tr>
					      <td><a href="http://en.wikipedia.org/wiki/Stack_(abstract_data_type)">Stack</a></td>
					      <td><code className="yellow">Θ(n)</code></td>
					      <td><code className="yellow">Θ(n)</code></td>
					      <td><code className="green">Θ(1)</code></td>
					      <td><code className="green">Θ(1)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					      <td><code className="green">O(1)</code></td>
					      <td><code className="green">O(1)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					    </tr>
					    <tr>
					      <td><a href="http://en.wikipedia.org/wiki/Queue_(abstract_data_type)">Queue</a></td>
					      <td><code className="yellow">Θ(n)</code></td>
					      <td><code className="yellow">Θ(n)</code></td>
					      <td><code className="green">Θ(1)</code></td>
					      <td><code className="green">Θ(1)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					      <td><code className="green">O(1)</code></td>
					      <td><code className="green">O(1)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					    </tr>
					    <tr>
					      <td><a href="http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists">Singly-Linked List</a></td>
					      <td><code className="yellow">Θ(n)</code></td>
					      <td><code className="yellow">Θ(n)</code></td>
					      <td><code className="green">Θ(1)</code></td>
					      <td><code className="green">Θ(1)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					      <td><code className="green">O(1)</code></td>
					      <td><code className="green">O(1)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					    </tr>
					    <tr>
					      <td><a href="http://en.wikipedia.org/wiki/Doubly_linked_list">Doubly-Linked List</a></td>
					      <td><code className="yellow">Θ(n)</code></td>
					      <td><code className="yellow">Θ(n)</code></td>
					      <td><code className="green">Θ(1)</code></td>
					      <td><code className="green">Θ(1)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					      <td><code className="green">O(1)</code></td>
					      <td><code className="green">O(1)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					    </tr>
					    <tr>
					      <td><a href="http://en.wikipedia.org/wiki/Hash_table">Hash Table</a></td>
					      <td><code className="gray">N/A</code></td>
					      <td><code className="green">Θ(1)</code></td>
					      <td><code className="green">Θ(1)</code></td>
					      <td><code className="green">Θ(1)</code></td>
					      <td><code className="gray">N/A</code></td>
					      <td><code className="yellow">O(n)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					    </tr>
					    <tr>
					      <td><a href="http://en.wikipedia.org/wiki/Binary_search_tree">Binary Search Tree</a></td>
					      <td><code className="yellow-green">Θ(log(n))</code></td>
					      <td><code className="yellow-green">Θ(log(n))</code></td>
					      <td><code className="yellow-green">Θ(log(n))</code></td>
					      <td><code className="yellow-green">Θ(log(n))</code></td>
					      <td><code className="yellow">O(n)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					      <td><code className="yellow">O(n)</code></td>
					    </tr>
					    <tr>
					      <td><a href="http://en.wikipedia.org/wiki/Red-black_tree">Red-Black Tree</a></td>
					      <td><code className="yellow-green">Θ(log(n))</code></td>
					      <td><code className="yellow-green">Θ(log(n))</code></td>
					      <td><code className="yellow-green">Θ(log(n))</code></td>
					      <td><code className="yellow-green">Θ(log(n))</code></td>
					      <td><code className="yellow-green">O(log(n))</code></td>
					      <td><code className="yellow-green">O(log(n))</code></td>
					      <td><code className="yellow-green">O(log(n))</code></td>
					      <td><code className="yellow-green">O(log(n))</code></td>
					      <td><code className="yellow">O(n)</code></td>
					    </tr>
					    <tr>
					      <td><a href="http://en.wikipedia.org/wiki/AVL_tree">AVL Tree</a></td>
					      <td><code className="yellow-green">Θ(log(n))</code></td>
					      <td><code className="yellow-green">Θ(log(n))</code></td>
					      <td><code className="yellow-green">Θ(log(n))</code></td>
					      <td><code className="yellow-green">Θ(log(n))</code></td>
					      <td><code className="yellow-green">O(log(n))</code></td>
					      <td><code className="yellow-green">O(log(n))</code></td>
					      <td><code className="yellow-green">O(log(n))</code></td>
					      <td><code className="yellow-green">O(log(n))</code></td>
					      <td><code className="yellow">O(n)</code></td>
					    </tr>
						</tbody>
					</table>
				</>
			}
		</div>
	);
}