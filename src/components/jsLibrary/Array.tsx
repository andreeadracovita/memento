import { useState } from "react";

import CardHeader from "../CardHeader";

export default function Array() {
	const [toggle, setToggle] = useState(false);
	const code = `const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined

fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2

const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(index, item);
});
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']

concat(), copyWithin(), every(), filter(), flat(), flatMap(), forEach(), indexOf(), lastIndexOf(), map(), reduce(), reduceRight(), reverse(), slice(), some(), sort(), and splice()

entries(), fill(), find(), findIndex(), findLast(), findLastIndex(), includes(), join(), keys(), toLocaleString(), toReversed(), toSorted(), toSpliced(), values(), and with()`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Array"}
				link={"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>The primary data structure for storing ordered collections of data.</p>
					<p>Characteristics:</p>
					<ul>
						<li>JavaScript arrays are <strong>resizable</strong> and can contain a <strong>mix of different data types</strong>. (When those characteristics are undesirable, use <strong>typed arrays</strong> instead.)</li>
						<li>JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using non-negative integers (or their respective string form) as indexes.</li>
						<li>JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.</li>
						<li>JavaScript array-copy operations create <strong>shallow copies</strong>. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).</li>
					</ul>
					<pre>{code}</pre>
				</>
			}
		</div>
	);
}