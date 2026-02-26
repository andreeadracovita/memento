import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function IteratorsGenerators() {
	const [toggle, setToggle] = useState(false);
	const iteratorsGeneratorsCode = `let sum = 0;
for(let i of [1,2,3]) {
    sum += i;
}

let chars = [..."abcd"]; // chars == ["a", "b", "c", "d"]
let data = [1, 2, 3, 4, 5];
Math.max(...data)

let m = new Map([["one", 1], ["two", 2]]);
for(let [k,v] of m) console.log(k, v);

[...m]            // => [["one", 1], ["two", 2]]: default iteration
[...m.entries()]  // => [["one", 1], ["two", 2]]: entries() method is the same
[...m.keys()]     // => ["one", "two"]: keys() method iterates just map keys
[...m.values()]   // => [1, 2]: values() method iterates just map values

let iterable = [99];
let iterator = iterable[Symbol.iterator]();
for(let result = iterator.next(); !result.done; result = iterator.next()) {
    console.log(result.value)  // result.value == 99
}

let list = [1,2,3,4,5];
let iter = list[Symbol.iterator]();
let head = iter.next().value;  // head == 1
let tail = [...iter];          // tail == [2,3,4,5]`;
	const iteratorCode = `// New iterable class
class Range {
    constructor (from, to) {
        this.from = from;
        this.to = to;
    }

    has(x) { return typeof x === "number" && this.from <= x && x <= this.to; }

    toString() { return \`{ x | \${this.from} ≤ x ≤ \${this.to} }\`; }

    // Make a Range iterable by returning an iterator object.
    [Symbol.iterator]() {
        // Each iterator instance must iterate the range independently of
        // others. So we need a state variable to track our location in the
        // iteration. We start at the first integer >= from.
        let next = Math.ceil(this.from);
        let last = this.to;
        return {
            // This next() method is what makes this an iterator object.
            // It must return an iterator result object.
            next() {
                return (next <= last)
                    ? { value: next++ }
                    : { done: true };
            },

            // As a convenience, we make the iterator itself iterable.
            [Symbol.iterator]() { return this; }
        };
    }
}

for (let x of new Range(1,10)) console.log(x); // Logs numbers 1 to 10
[...new Range(-2,2)]                          // => [-2, -1, 0, 1, 2]

// Existing class made iterable
function map(iterable, f) {
    let iterator = iterable[Symbol.iterator]();
    return {     // This object is both iterator and iterable
        [Symbol.iterator]() { return this; },
        next() {
            let v = iterator.next();
            if (v.done) {
                return v;
            } else {
                return { value: f(v.value) };
            }
        }
    };
}

[...map(new Range(1,4), x => x * x)]  // => [1, 4, 9, 16]`;
	const lazyIteratorCode = `function words(s) {
    var r = /\\s+|$/g;                     // Match one or more spaces or end
    r.lastIndex = s.match(/[^ ]/).index;  // Start matching at first nonspace
    return {                              // Return an iterable iterator object
        [Symbol.iterator]() {             // This makes us iterable
            return this;
        },
        next() {                          // This makes us an iterator
            let start = r.lastIndex;      // Resume where the last match ended
            if (start < s.length) {       // If we're not done
                let match = r.exec(s);    // Match the next word boundary
                if (match) {              // If we found one, return the word
                    return { value: s.substring(start, match.index) };
                }
            }
            return { done: true };        // Otherwise, say that we're done
        }
    };
}

[...words(" abc def  ghi! ")]  // => ["abc", "def", "ghi!"]`;

	const generatorCode = `function* oneDigitPrimes() {
    yield 2;
    yield 3;
    yield 5;
    yield 7;
}

// When we invoke the generator function, we get a generator
let primes = oneDigitPrimes();

// A generator is an iterator object that iterates the yielded values
primes.next().value          // => 2
primes.next().value          // => 3
primes.next().value          // => 5
primes.next().value          // => 7
primes.next().done           // => true

// Generators have a Symbol.iterator method to make them iterable
primes[Symbol.iterator]()    // => primes

// We can use generators like other iterable types
[...oneDigitPrimes()]        // => [2,3,5,7]
let sum = 0;
for (let prime of oneDigitPrimes()) sum += prime;

// Generator defined in expression form
const seq = function*(from,to) {
    for(let i = from; i <= to; i++) yield i;
};
[...seq(3,5)]

// Shorthand notation - used inside classes and object literals
let o = {
    x: 1, y: 2, z: 3,
    // A generator that yields each of the keys of this object
    *g() {
        for(let key of Object.keys(this)) {
            yield key;
        }
    }
};
[...o.g()] // => ["x", "y", "z", "g"]

// Iterable classes using generator
*[Symbol.iterator]() {
    for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
}`;

	const examples = `// Fibonacci
function* fibonacciSequence() {
    let x = 0, y = 1;
    for(;;) {
        yield y;
        [x, y] = [y, x+y]; // has an infinite loop and yields values forever without returning
    }
}

// Generator used with counting
function* take(n, iterable) {
    let it = iterable[Symbol.iterator]();
    while(n-- > 0) {
        let next = it.next();
        if (next.done)
        	return; // Early return
        else
        	yield next.value;
    }
}

// An array of the first 5 Fibonacci numbers
[...take(5, fibonacciSequence())]  // => [1, 1, 2, 3, 5]

// yield* to yield all items of the iterable object
function* sequence(...iterables) {
    for(let iterable of iterables) {
        yield* iterable;
    }
}

[...sequence("abc",oneDigitPrimes())]  // => ["a","b","c",2,3,5,7]`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Iterators & Generators"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p className="card-section">Iterators</p>
					<ul>
						<li>Iterable objects - can be looped over with <Accent>for/of</Accent> loop.</li>
						<li>Iterators can also be used with the <Accent>... operator</Accent> to expand or “spread” an iterable object into an array initializer or function invocation.</li>
						<li>Iterators can be used with destructuring assignment.
							<SyntaxHighlighter language="javascript">{iteratorsGeneratorsCode}</SyntaxHighlighter>
						</li>
						<li>An iterable object is any object with a special iterator method that returns an iterator object. An iterator is any object with a <Accent>next()</Accent> method that returns an iteration result object. And an iteration result object is an object with properties named <Accent>value</Accent> and <Accent>done</Accent>.
							<SyntaxHighlighter language="javascript">{iteratorCode}</SyntaxHighlighter>
						</li>
						<li>Key feature of iterable objects and iterators is that they are inherently lazy: when computation is required to compute the next value, that computation can be deferred until the value is actually needed.
							<SyntaxHighlighter language="javascript">{lazyIteratorCode}</SyntaxHighlighter>
						</li>
						<li>To account for early exits, iterator objects may implement a <Accent>return()</Accent> method to go along with the <Accent>next()</Accent> method. If iteration stops before next() has returned an iteration result with the done property set to true, then the interpreter will check to see if the iterator object has a return() method. In case of return(), we can close files, release memory, cleanup to prevent memory leaks.</li>
					</ul>

					<p className="card-section">Generators</p>
					<ul>
						<li>Generator functions used to make classes iterable.</li>
						<li>Defined with the keyword <Accent>function*</Accent>.</li>
						<li>Calling its <Accent>next()</Accent> method causes the body of the generator function to run from the start (or current position) until it reaches a <Accent>yield</Accent> statement.</li>
						<li>The value of the yield statement becomes the value returned by the next() call on the iterator.
							<SyntaxHighlighter language="javascript">{generatorCode}</SyntaxHighlighter>
						</li>
					</ul>

					<p className="card-section">Examples</p>
					<SyntaxHighlighter language="javascript">{examples}</SyntaxHighlighter>
				</>
			}
		</div>
	);
}