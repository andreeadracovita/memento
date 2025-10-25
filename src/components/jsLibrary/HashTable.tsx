import { useState } from "react";

import CardHeader from "../CardHeader";

export default function HashTable() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Hash Table"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>JavaScript does not have a native "HashTable" data structure, but it provides two primary built-in mechanisms that implement the functionality of a hash table: plain objects ({}) and the Map object.</p>
					<p>While objects are commonly used for key-value storage and internally use a hash map-like structure for efficient lookups, they are limited to string keys and can have issues with prototype properties and the length property.</p>
					<p>The Map object, introduced in ES6, is a more versatile and recommended alternative, as it supports keys of any data type, maintains insertion order, and offers built-in methods like .set(), .get(), and .delete() for efficient manipulation.</p>
					<p>Although Map is not a traditional hash table in the strictest sense, it serves the same purpose and is often preferred for its flexibility and performance.</p>
				</>
			}
		</div>
	);
}