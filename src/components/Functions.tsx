import { FaLink } from "react-icons/fa";

export default function Functions() {

	const dateTimeData = `let timestamp = Date.now();  // The current time as a timestamp (a number).
let now = new Date();        // The current time as a Date object.
let ms = now.getTime();      // Convert to a millisecond timestamp.
let iso = now.toISOString(); // Convert to a string in standard format.`;

	const arrayData = `The primary data structure for storing ordered collections of data.`;

	const stringData =  `let s = "Hello, world"; // Start with some text.

// Obtaining portions of a string
s.substring(1,4)        // "ell": the 2nd, 3rd, and 4th characters.
s.slice(1,4)            // "ell": same thing
s.slice(-3)             // "rld": last 3 characters
s.split(", ")           // ["Hello", "world"]: split at delimiter string

// Searching a string
s.indexOf("l")          // 2: position of first letter l
s.indexOf("l", 3)       // 3: position of first "l" at or after 3
s.indexOf("zz")         // -1: s does not include the substring "zz"
s.lastIndexOf("l")      // 10: position of last letter l

// Boolean searching functions in ES6 and later
s.startsWith("Hell")    // true: the string starts with these
s.endsWith("!")         // false: s does not end with that
s.includes("or")        // true: s includes substring "or"

// Creating modified versions of a string
s.replace("llo", "ya")  // "Heya, world"
s.toLowerCase()         // "hello, world"
s.toUpperCase()         // "HELLO, WORLD"
s.normalize()           // Unicode NFC normalization: ES6
s.normalize("NFD")      // NFD normalization. Also "NFKC", "NFKD"

// Inspecting individual (16-bit) characters of a string
s.charAt(0)             // "H": the first character
s.charAt(s.length-1)    // "d": the last character
s.charCodeAt(0)         // 72: 16-bit number at the specified position
s.codePointAt(0)        // 72: ES6, works for codepoints &gt; 16 bits

// String padding functions in ES2017
"x".padStart(3)         // "  x": add spaces on the left to a length of 3
"x".padEnd(3)           // "x  ": add spaces on the right to a length of 3
"x".padStart(3, "*")    // "**x": add stars on the left to a length of 3
"x".padEnd(3, "-")      // "x--": add dashes on the right to a length of 3

// Space trimming functions. trim() is ES5; others ES2019
" test ".trim()         // "test": remove spaces at start and end
" test ".trimStart()    // "test ": remove spaces on left. Also trimLeft
" test ".trimEnd()      // " test": remove spaces at right. Also trimRight

// Miscellaneous string methods
s.concat("!")           // "Hello, world!": just use + operator instead
"a".repeat(5)           // "a": concatenate n copies. ES6`;

	const objectData = ``;
	const mapData = `The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const emptyMap = new Map()
const map = new Map([
    ['key', 'value']
])

Curiosities:
- In JavaScript, Map and Object both store key-value pairs, but Map offers significant advantages in specific scenarios. A Map can use any data type as a key, including objects, functions, and primitives, whereas an Object only accepts strings or symbols as keys, automatically converting other types to strings, which can lead to unintended collisions. This makes Map ideal for cases where keys need to be objects or other non-string types, such as associating metadata with DOM elements or other objects without modifying them directly.
- Performance-wise, Map is optimized for frequent additions and removals of key-value pairs, making it faster than Object in such scenarios due to how JavaScript engines optimize Map's internal structure. In contrast, Object performance can degrade with frequent delete operations due to its shape assumption by the JavaScript Virtual Machine. Map also provides a size property to directly retrieve the number of entries, while counting keys in an Object requires using Object.keys().length, which is less efficient.
`;
	const setData = `The Set object lets you store unique values of any type, whether primitive values or object references.
`;
	const listData = `Arrays are used when a list is necessary.`;
	const stackData = `JavaScript does not have a built-in stack data structure as a distinct type, but it provides the necessary tools to implement one effectively using arrays.

The Array object in JavaScript includes methods like push() and pop(), which correspond directly to the fundamental operations of a stack: adding an element to the top (push) and removing the top element (pop).
This allows developers to use an array to simulate a stack, adhering to the Last-In, First-Out (LIFO) principle where the last element added is the first one removed.`;
	const queueData = `JavaScript does not have a built-in queue data structure in its standard library.

However, queues can be implemented using arrays by utilizing the push() method to add elements to the end (enqueue) and the shift() method to remove elements from the front (dequeue).
This approach simulates the First In, First Out (FIFO) behavior of a queue, where the first element added is the first one to be removed.
While this array-based implementation is simple, it can be inefficient for large datasets or frequent operations due to the need to shift all elements when using shift().
For better performance, especially with larger queues, dedicated queue implementations or other data structures like objects with head and tail pointers are recommended.`;
	const hashData = ``;
	
	return (
		<>
			<h1 className="archivo-black-regular">JS Library</h1>

			<div className="grey-card">
				<p className="card-title">
					<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date" target="_blank" className="title-anchor">
						Date and Time <span className="suprascript"><FaLink /></span>
					</a>
				</p>
				<pre>{dateTimeData}</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">Array</p>
				<pre>{arrayData}</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">String</p>
				<pre>{stringData}</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">Object</p>
				<pre>{objectData}</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">
					<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" target="_blank" className="title-anchor">
						Map <span className="suprascript"><FaLink /></span>
					</a>
				</p>
				<pre>{mapData}</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">
					<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set" target="_blank" className="title-anchor">
						Set <span className="suprascript"><FaLink /></span>
					</a>
				</p>
				<pre>{setData}</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">List</p>
				<pre>{listData}</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">Stack</p>
				<pre>{stackData}</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">Queue</p>
				<pre>{queueData}</pre>
			</div>

			<div className="grey-card">
				<p className="card-title">Hash Table</p>
				<pre>{hashData}</pre>
			</div>
		</>
	);
}