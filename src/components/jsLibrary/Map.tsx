import { useState } from "react";

import CardHeader from "../CardHeader";

export default function Map() {
	const [toggle, setToggle] = useState(false);
	const code = `const emptyMap = new Map()
const map = new Map([
    ['key', 'value']
])
TODO
`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Map"}
				link={"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p className="mb-2">The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.</p>
					<pre>{code}</pre>
					<p className="card-section mt-3">Facts</p>
					<ul>
						<li>Map and Object both store key-value pairs, but Map offers significant advantages in specific scenarios. A <strong>Map can use any data type as a key</strong>, including objects, functions, and primitives, whereas an Object only accepts strings or symbols as keys, automatically converting other types to strings, which can lead to unintended collisions. This makes Map ideal for cases where keys need to be objects or other non-string types, such as associating metadata with DOM elements or other objects without modifying them directly.</li>
						<li><strong>Performance-wise</strong>, Map is <strong>optimized for frequent additions and removals of key-value pairs</strong>, making it faster than Object in such scenarios due to how JavaScript engines optimize Map's internal structure. In contrast, Object performance can degrade with frequent delete operations due to its shape assumption by the JavaScript Virtual Machine. Map also <strong>provides a size property</strong> to directly retrieve the number of entries, while counting keys in an Object requires using Object.keys().length, which is less efficient.</li>
					</ul>
				</>
			}
		</div>
	);
}