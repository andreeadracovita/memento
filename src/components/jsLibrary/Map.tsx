import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function Map() {
	const [toggle, setToggle] = useState(false);
	const code = `let m = new Map();
let n = new Map([
	["one", 1],
	["two", 2]
]);

let copy = new Map(n);
let o = { x: 1, y: 2 };
let p = new Map(Object.entries(o));

let m = new Map();
m.size
m.set("one", 1);
m.get("one");
m.set("one", true);
m.has("two");    // false
m.delete("one"); // true
m.delete("two"); // false
m.clear();

// Misc
let m = new Map();
m.set({}, 1); // map one empty object to 1
m.set({}, 2); // map another empty object to 2
m.get({});    // undefined, not a key
m.set(m, undefined); // map itself to value undefined
m.has(m);     // true
m.get(m);     // undefined

let m = new Map([["x", 1], ["y", 2]]);
[...m]

for(let [key, value] of m) { ... }

[...m.keys()]
[...m.values()]
[...m.entries()]

m.forEach((value, key) => { ... });`;

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
					<ul>
						<li>Map = a set of values - <strong>keys</strong> - with <strong>values</strong> they are associated with.</li>
						<li>Maps use arbitrary values as "indexes".</li>
						<li>Looking up the value of a key will be fast no matter how large the map.</li>
						<li>The optional argument to Map() constructor needs to be iterable, each element needs to be formatted as [key, value].</li>
						<li>Map objects are iterable, each iterated value is a 2-element array: first is the key, second is the value. Iteration in insertion order.</li>
						<li>WeakMap - variant of Map, does not prevent its key from being garbage collected. Does not allow primitive values as members. A regular map holds "strong" references to its key values. The WeakMap holds "weak" references so that they are not reachable through WeakMap, their presence in the map does not prevent their memory from being reclaimed. WeakMap is not iterable, does not define keys(), values() and forEach(). Intended use: allows association of values with objects without causing memory leaks. Used for implementing cache.</li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<pre>{code}</pre>
				</>
			}
		</div>
	);
}