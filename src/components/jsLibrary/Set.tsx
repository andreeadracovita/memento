import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function Set() {
	const [toggle, setToggle] = useState(false);
	const code = `// Create a Set
let s = new Set();         // empty set
let t = new Set([1, s]);   // new set with 2 members
let u = new Set(s);        // new set that copies the elements of s
let v = new Set("Apples"); // 5 elements: "A", "p", "l", "e", "s"
v.size                     // 5

let mySet = new Set();
s.size // 0
s.add(1);
s.add(true);
s.add([1,2,3]);
s.delete(1);
s.delete("test"); // false
s.clear();

let primes = new Set([2,3,5,7]);
primes.has(2) // true
primes.has(8) // false

let sum = 0;
for(let p of primes) {
    sum += p;
}

[...primes]
Math.max(...primes)

let product = 1;
primes.forEach(n => { product *= n; });
`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Set"}
				link={"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<ul>
						<li>Set = a collection of values, unordered/indexed, does not allow duplicates.</li>
						<li>★ Sets are optimized for membership testing, no matter how many members it has. Using an array as a set will perform much slower than a real set.</li>
						<li><strong>add()</strong> method takes a single argument. If passing an array, the array itself is added to the set, not each individual element. It returns the set it is invoked on.</li>
						<li><strong>delete()</strong> deletes a single set element. Returns a boolean (true if the value was in the set before deletion, false otherwise).</li>
						<li>Performs string equality check ===. mySet.add([1,2]); mySet.delete([1,2]) returns false.</li>
						<li>The Set class is iterable, can use for/of loop to enumerate all the elements in a set. Can also convert them to arrays and argument list using ... spread operator.</li>
						<li>A JS set remembers the order in which the elements were inserted in, uses this order when iterating.</li>
						<li>WeakSet - a set of objects that does not prevent those objects from garbage collection. Does not allow primitive values as members. Only has add(), has(), delete(). Does not have size().</li>
					</ul>
					<pre>{code}</pre>
				</>
			}
		</div>
	);
}