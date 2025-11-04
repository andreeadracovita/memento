import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function Memory() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Memory (Stack vs Heap)"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p><strong>Heap memory</strong> is a region of a computer's memory used for dynamic memory allocation, allowing programs to request and release memory blocks during runtime as needed. Unlike <strong>stack memory</strong>, which has a fixed size and follows a last-in, first-out (LIFO) order, heap memory provides greater flexibility for allocating data whose size is unknown at compile time or may change during execution, such as <strong>dynamically sized arrays, linked lists, or objects in object-oriented programming</strong>.</p>
					<p>Memory on the heap is typically managed manually using functions like <strong>malloc</strong> or <strong>new</strong> in C/C++, or automatically via <strong>garbage collection</strong> in languages like Java and Python.</p>
					<p>This flexibility comes with responsibility, as failure to explicitly deallocate memory can lead to <strong>memory leaks</strong>, where allocated memory is not freed and eventually exhausts available resources.</p>
				</>
			}
		</div>
	);
}