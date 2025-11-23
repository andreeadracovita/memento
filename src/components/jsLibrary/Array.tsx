import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function Array() {
	const [toggle, setToggle] = useState(false);
	const createArray = `// Array literals
let empty = [];                 // An array with no elements
let primes = [2, 3, 5, 7, 11];  // An array with 5 numeric elements
let misc = [ 1.1, true, "a", ]; // 3 elements of various types + trailing comma
let b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];
let count = [1,,3]; // Elements at indexes 0 and 2. No element at index 1
let undefs = [,,];  // An array with no elements but a length of 2

// Spread operator on an iterable object
let a = [1, 2, 3];
let b = [0, ...a, 4];  // b == [0, 1, 2, 3, 4]

let original = [1,2,3];
let copy = [...original];
copy[0] = 0;  // Modifying the copy does not change the original
original[0]   // => 1

let digits = [..."0123456789ABCDEF"];
digits // => ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

// Array() constructor
let a = new Array(); // []
let a = new Array(10);
let a = new Array(5, 4, 3, 2, 1, "testing, testing");

// Array.of() and Array.from() factory methods
Array.of()        // => []; returns empty array with no arguments
Array.of(10)      // => [10]; can create arrays with a single numeric argument
Array.of(1,2,3)   // => [1, 2, 3]

let copy = Array.from(original);`;
	const addDelete = `let a = [];      // Start with an empty array.
a[0] = "zero";   // And add elements to it.
a[1] = "one";

let a = [];           // Start with an empty array
a.push("zero");       // Add a value at the end.  a = ["zero"]
a.push("one", "two"); // Add two more values.  a = ["zero", "one", "two"]

let a = [1,2,3];
delete a[2];   // a now has no element at index 2
2 in a         // => false: no array index 2 is defined
a.length       // => 3: delete does not affect array length`;
	const iterate = `// for/of
let letters = [..."Hello world"];  // An array of letters
let string = "";
for(let letter of letters) {
    string += letter;
}
string  // => "Hello world"; we reassembled the original text

let everyother = "";
for(let [index, letter] of letters.entries()) {
    if (index % 2 === 0) everyother += letter;  // letters at even indexes
}
everyother  // => "Hlowrd"

// forEach()
let uppercase = "";
letters.forEach(letter => {  // Note arrow function syntax here
    uppercase += letter.toUpperCase();
});
uppercase  // => "HELLO WORLD"`;
	const forEachCode = `let data = [1,2,3,4,5], sum = 0;
// Compute the sum of the elements of the array
data.forEach(value => { sum += value; });          // sum == 15

// Now increment each array element
data.forEach(function(v, i, a) { a[i] = v + 1; }); // data == [2,3,4,5,6]`;
	const mapCode = `let a = [1, 2, 3];
a.map(x => x*x)   // => [1, 4, 9]: the function takes input x and returns x*x`;
	const filterCode = `let a = [5, 4, 3, 2, 1];
a.filter(x => x < 3)         // => [2, 1]; values less than 3
a.filter((x,i) => i%2 === 0) // => [5, 3, 1]; every other value

// close the gaps
let dense = sparse.filter(() => true);

// close the gaps and remove undefined and nulls
a = a.filter(x => x !== undefined && x !== null);`;
	const findFindIndexCode = `let a = [1,2,3,4,5];
a.findIndex(x => x === 3)  // => 2; the value 3 appears at index 2
a.findIndex(x => x < 0)    // => -1; no negative numbers in the array
a.find(x => x % 5 === 0)   // => 5: this is a multiple of 5
a.find(x => x % 7 === 0)   // => undefined: no multiples of 7 in the array`;
	const everyCode = `let a = [1,2,3,4,5];
a.every(x => x < 10)      // => true: all values are < 10.
a.every(x => x % 2 === 0) // => false: not all values are even.
`;
	const someCode = `let a = [1,2,3,4,5];
a.some(x => x%2===0)  // => true; a has some even numbers.
a.some(isNaN)         // => false; a has no non-numbers.`;
	const reduceCode = `let a = [1,2,3,4,5];
a.reduce((x,y) => x+y, 0)          // => 15; the sum of the values
a.reduce((x,y) => x*y, 1)          // => 120; the product of the values
a.reduce((x,y) => (x > y) ? x : y) // => 5; the largest of the values`;
	const reduceRightCode = `// Compute 2^(3^4).  Exponentiation has right-to-left precedence
let a = [2, 3, 4];
a.reduceRight((acc,val) => Math.pow(val,acc)) // => 2.4178516392292583e+24`;
	const flatCode = `// flat() called with no arguments
[1, [2, 3]].flat()    // => [1, 2, 3]
[1, [2, [3]]].flat()  // => [1, 2, [3]]

// the argument is used to flatten more levels
let a = [1, [2, [3, [4]]]];
a.flat(1)   // => [1, 2, [3, [4]]]
a.flat(2)   // => [1, 2, 3, [4]]
a.flat(3)   // => [1, 2, 3, 4]
a.flat(4)   // => [1, 2, 3, 4]`;
	const flatMapCode = `let phrases = ["hello world", "the definitive guide"];
let words = phrases.flatMap(phrase => phrase.split(" "));
words // => ["hello", "world", "the", "definitive", "guide"];

// Map non-negative numbers to their square roots
[-2, -1, 1, 2].flatMap(x => x < 0 ? [] : Math.sqrt(x)) // => [1, 2**0.5]`;
	const concatCode = `let a = [1,2,3];
a.concat(4, 5)          // => [1,2,3,4,5]
a.concat([4,5],[6,7])   // => [1,2,3,4,5,6,7]; arrays are flattened
a.concat(4, [5,[6,7]])  // => [1,2,3,4,5,[6,7]]; but not nested arrays
a                       // => [1,2,3]; the original array is unmodified`;
	const pushPopCode = `let stack = [];       // stack == []
stack.push(1,2);      // stack == [1,2];
stack.pop();          // stack == [1]; returns 2
stack.push(3);        // stack == [1,3]
stack.pop();          // stack == [1]; returns 3
stack.push([4,5]);    // stack == [1,[4,5]]
stack.pop()           // stack == [1]; returns [4,5]
stack.pop();          // stack == []; returns 1

// To flatten values
a.push(...values);`;
	const shiftCode = `let q = [];            // q == []
q.push(1,2);           // q == [1,2]
q.shift();             // q == [2]; returns 1
q.push(3)              // q == [2, 3]
q.shift()              // q == [3]; returns 2
q.shift()              // q == []; returns 3`;
	const unshiftCode = `let a = [];            // a == []
a.unshift(1)           // a == [1]
a.unshift(2)           // a == [2, 1]
a = [];                // a == []
a.unshift(1,2)         // a == [1, 2]`;
	const sliceCode = `let a = [1,2,3,4,5];
a.slice(0,3);    // Returns [1,2,3]
a.slice(3);      // Returns [4,5]
a.slice(1,-1);   // Returns [2,3,4]
a.slice(-3,-2);  // Returns [3]`;
	const spliceCode = `let a = [1,2,3,4,5,6,7,8];
a.splice(4)    // => [5,6,7,8]; a is now [1,2,3,4]
a.splice(1,2)  // => [2,3]; a is now [1,4]
a.splice(1,1)  // => [4]; a is now [1]

let a = [1,2,3,4,5];
a.splice(2,0,"a","b")  // => []; a is now [1,2,"a","b",3,4,5]
a.splice(2,2,[1,2],3)  // => ["a","b"]; a is now [1,2,[1,2],3,3,4,5]`;
	const fillCode = `let a = new Array(5);   // Start with no elements and length 5
a.fill(0)               // => [0,0,0,0,0]; fill the array with zeros
a.fill(9, 1)            // => [0,9,9,9,9]; fill with 9 starting at index 1
a.fill(8, 2, -1)        // => [0,9,8,8,9]; fill with 8 at indexes 2, 3`;
	const copyWithinCode = `let a = [1,2,3,4,5];
a.copyWithin(1)       // => [1,1,2,3,4]: copy array elements up one
a.copyWithin(2, 3, 5) // => [1,1,3,4,4]: copy last 2 elements to index 2
a.copyWithin(0, -2)   // => [4,4,3,4,4]: negative offsets work, too`;
	const indexLastIndexOfCode = `let a = [0,1,2,1,0];
a.indexOf(1)       // => 1: a[1] is 1
a.lastIndexOf(1)   // => 3: a[3] is 1
a.indexOf(3)       // => -1: no element has value 3`;
	const includesCode = `let a = [1,true,3,NaN];
a.includes(true)            // => true
a.includes(2)               // => false
a.includes(NaN)             // => true
a.indexOf(NaN)              // => -1; indexOf can't find NaN`;
	const sortCode = `let a = ["banana", "cherry", "apple"];
a.sort(); // a == ["apple", "banana", "cherry"]

let a = [33, 4, 1111, 222];
a.sort();               // a == [1111, 222, 33, 4]; alphabetical order
a.sort(function(a,b) {  // Pass a comparator function
    return a-b;         // Returns < 0, 0, or > 0, depending on order
});                     // a == [4, 33, 222, 1111]; numerical order
a.sort((a,b) => b-a);   // a == [1111, 222, 33, 4]; reverse numerical order`;
	const reverseCode = `let a = [1,2,3];
a.reverse();   // a == [3,2,1]`;
	const joinCode = `let a = [1, 2, 3];
a.join()               // => "1,2,3"
a.join(" ")            // => "1 2 3"
a.join("")             // => "123"
let b = new Array(10); // An array of length 10 with no elements
b.join("-")            // => "---------": a string of 9 hyphens`;
	const toStringCode = `[1,2,3].toString()          // => "1,2,3"
["a", "b", "c"].toString()  // => "a,b,c"
[1, [2,"c"]].toString()     // => "1,2,c"`;
	const arrayLikeObjectsCode = `let a = {};  // Start with a regular empty object

// Add properties to make it "array-like"
let i = 0;
while(i < 10) {
    a[i] = i * i;
    i++;
}
a.length = i;

// Now iterate through it as if it were a real array
let total = 0;
for(let j = 0; j < a.length; j++) {
    total += a[j];
}`;
	const stringsCode = `let s = "test";
s.charAt(0)    // => "t"
s[1]           // => "e"`;

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
					<p>An array is an ordered collection of values. Each value is called an element, and each element has a numeric position in the array, known as its index.</p>
					<p className="card-section">Characteristics</p>
					<ul>
						<li>JavaScript arrays are <strong>resizable</strong> and can contain a <strong>mix of different data types</strong>. (When those characteristics are undesirable, use <strong>typed arrays</strong> instead.)</li>
						<li>JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using non-negative integers (or their respective string form) as indexes.</li>
						<li>JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.</li>
						<li>JavaScript array-copy operations create <strong>shallow copies</strong>. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).</li>
					</ul>
					<p className="card-section">Creating Arrays</p>
					<div className="code"><pre>{createArray}</pre></div>

					<p className="card-section">Adding and Deleting Array Elements</p>
					<div className="code"><pre>{addDelete}</pre></div>

					<p className="card-section">Iterating Arrays</p>
					<div className="code"><pre>{iterate}</pre></div>

					<p className="card-section">Array Methods</p>
					<ul>
						<li>
							<strong>Array Iterator Methods</strong> - all accept a function as first argument and invoke that function for each element of the array (for sparse arrays, function is not invoked for nonexistent elements). None of those methods modify the array, unless explicitly doing so.
							<ul>
								<li>
									<p><strong>forEach()</strong></p>
									<div className="code"><pre>{forEachCode}</pre></div>
								</li>
								<li>
									<p><strong>map()</strong></p>
									<div className="code"><pre>{mapCode}</pre></div>
								</li>
								<li>
									<p><strong>filter()</strong></p>
									<div className="code"><pre>{filterCode}</pre></div>
								</li>
								<li>
									<p><strong>find() and findIndex()</strong> - if not found, find returns undefined, and findIndex -1</p>
									<div className="code"><pre>{findFindIndexCode}</pre></div>
								</li>
								<li>
									<p><strong>every() and some()</strong> - return true or false</p>
									<div className="code"><pre>{everyCode}</pre></div>
									<div className="code"><pre>{someCode}</pre></div>
								</li>
								<li>
									<p><strong>reduce() and reduceRight()</strong> - inject and fold, reduceRight is like reduce but right-to-left for associativity purposes</p>
									<div className="code"><pre>{reduceCode}</pre></div>
									<div className="code"><pre>{reduceRightCode}</pre></div>
								</li>
							</ul>
						</li>
						<li>
							<strong>Flattening arrays with flat() and flatMap()</strong> - creates and returns a new array that contains the same elements as the array it is called on, except that the elements that are themselves arrays are "flattened" into the returned array.
							<ul>
								<li>
									<p><strong>flat()</strong></p>
									<div className="code"><pre>{flatCode}</pre></div>
								</li>
								<li>
									<p><strong>flatMap()</strong></p>
									<div className="code"><pre>{flatMapCode}</pre></div>
								</li>
							</ul>
						</li>
						<li>
							<strong>Adding arrays with concat()</strong> - creates and returns a new array that contains the elements of the original array on which concat() was invoked. If the purpose of concat() is <pre>a = a.concat(x)</pre>, then <pre>push()</pre> or <pre>splice()</pre> should be used.
							<div className="code"><pre>{concatCode}</pre></div>
						</li>
						<li>
							<strong>Stacks and Queues with push(), pop(), shift(), and unshift()</strong> - methods that allow work with arrays as if they were stacks or queues. For <strong>stack</strong> - use push() and pop(). For <strong>queue</strong> - use push() and shift().
							<ul>
								<li>
									<p><strong>push()</strong> - method appends one or more new elements to the end of an array and returns the new length of the array</p>
								</li>
								<li>
									<p><strong>pop()</strong> - deletes the last element of an array, decrements the array length, and returns the value that it removed</p>
									<div className="code"><pre>{pushPopCode}</pre></div>
								</li>
								<li>
									<p><strong>shift()</strong> - removes and returns the first element of the array, shifting all subsequent elements down one place to occupy the newly vacant space at the start of the array</p>
									<div className="code"><pre>{shiftCode}</pre></div>
								</li>
								<li>
									<p><strong>unshift()</strong> - adds an element or elements to the beginning of the array, shifts the existing array elements up to higher indexes to make room, and returns the new length of the array</p>
									<div className="code"><pre>{unshiftCode}</pre></div>
								</li>
							</ul>
						</li>
						<li>
							<strong>Subarrays with slice(), splice(), fill(), and copyWithin()</strong> - methods that work on contiguous regions, or subarrays or “slices” of an array (extracting, replacing, filling, and copying slices).
							<ul>
								<li>
									<p><strong>slice()</strong> - returns a slice, or subarray, of the specified array. Its two arguments specify the start and end of the slice to be returned. If only one argument is specified, the returned array contains all elements from the start position to the end of the array. If either argument is negative, it specifies an array element relative to the length of the array. Does not modify the array.</p>
									<div className="code"><pre>{sliceCode}</pre></div>
								</li>
								<li>
									<p><strong>splice()</strong> - general-purpose method for inserting or removing elements from an array. Modifies the array. The first argument to splice() specifies the array position at which the insertion and/or deletion is to begin. The second argument specifies the number of elements that should be deleted from (spliced out of) the array. If this second argument is omitted, all array elements from the start element to the end of the array are removed.</p>
									<div className="code"><pre>{spliceCode}</pre></div>
								</li>
								<li>
									<p><strong>fill()</strong> - sets the elements of an array, or a slice of an array, to a specified value. It mutates the array it is called on, and also returns the modified array. The first argument to fill() is the value to set array elements to. The optional second argument specifies the starting index. If omitted, filling starts at index 0. The optional third argument specifies the ending index—array elements up to, but not including, this index will be filled. If this argument is omitted, then the array is filled from the start index to the end.</p>
									<div className="code"><pre>{fillCode}</pre></div>
								</li>
								<li>
									<p><strong>copyWithin()</strong> - copies a slice of an array to a new position within the array. It modifies the array in place and returns the modified array, but it will not change the length of the array. The first argument specifies the destination index to which the first element will be copied. The second argument specifies the index of the first element to be copied. If this second argument is omitted, 0 is used. The third argument specifies the end of the slice of elements to be copied. If omitted, the length of the array is used. Elements from the start index up to, but not including, the end index will be copied. intended as a <strong>high-performance method</strong> that is particularly useful with typed arrays.</p>
									<div className="code"><pre>{copyWithinCode}</pre></div>
								</li>
							</ul>
						</li>
						<li>
							<strong>Array Searching and Sorting Methods</strong>
							<ul>
								<li>
									<p><strong>indexOf() and lastIndexOf()</strong> - search an array for an element with a specified value and return the index of the first such element found, or -1 if none is found. Can take a second parameter - from what index to start the search.</p>
									<div className="code"><pre>{indexLastIndexOfCode}</pre></div>
								</li>
								<li>
									<p><strong>includes()</strong> - method takes a single argument and returns true if the array contains that value or false otherwise.</p>
									<div className="code"><pre>{includesCode}</pre></div>
								</li>
								<li>
									<p><strong>sort()</strong> - sorts the elements of an array in place and returns the sorted array. To sort an array into some order other than alphabetical, you must pass a comparison function as an argument to sort().</p>
									<div className="code"><pre>{sortCode}</pre></div>
								</li>
								<li>
									<p><strong>reverse()</strong></p>
									<div className="code"><pre>{reverseCode}</pre></div>
								</li>
							</ul>
						</li>
						<li>
							<strong>Array to String Conversions</strong>
							<ul>
								<li>
									<p><strong>join()</strong> - method converts all the elements of an array to strings and concatenates them, returning the resulting string. You can specify an optional string that separates the elements in the resulting string. If no separator string is specified, a comma is used.</p>
									<div className="code"><pre>{joinCode}</pre></div>
								</li>
								<li>
									<p><strong>toString()</strong></p>
									<div className="code"><pre>{toStringCode}</pre></div>
								</li>
								<li>
									<p><strong>toLocaleString()</strong> - the localized version of toString(). It converts each array element to a string by calling the toLocaleString() method of the element, and then it concatenates the resulting strings using a locale-specific (and implementation-defined) separator string.</p>
								</li>
							</ul>
						</li>
						<li>
							<strong>Static Array Functions</strong> - 
							<ul>
								<li><strong>Array.of()</strong> and <strong>Array.from()</strong> are factory methods for creating new arrays.</li>
								<li><strong>Array.isArray()</strong></li>
							</ul>
						</li>
					</ul>

					<p className="card-section">Array-Like Objects</p>
					<ul>
						<li>The length property is automatically updated as new elements are added to the list.</li>
						<li>Setting length to a smaller value truncates the array.</li>
						<li>Arrays inherit useful methods from Array.prototype.</li>
						<li>Array.isArray() returns true for arrays.</li>
					</ul>
					<div className="code"><pre>{arrayLikeObjectsCode}</pre></div>

					<p className="card-section">Strings as Arrays</p>
					<p>JavaScript strings behave like read-only arrays of UTF-16 Unicode characters. Instead of accessing individual characters with the charAt() method, you can use square brackets:</p>
					<div className="code"><pre>{stringsCode}</pre></div>
					<p>The fact that strings behave like arrays also means, however, that we can apply generic array methods to them.</p>
				</>
			}
		</div>
	);
}