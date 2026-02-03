import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import CardHeader from "components/CardHeader";

export default function Functions() {
	const [toggle, setToggle] = useState(false);
	const code = `// Function declaration
function factorial(x) {
	if (x <= 1) return 1;
	return x * factorial(x-1);
}

// Function expressions - declares a variable and assigns a function object to it
const square = function (x) { return x*x; }

// Function expression defined and then invoked
let tensquared = (function(x) { return x*x; }(10));

// Arrow functions
const sum = (x, y) => { return x+y; };
const sum = (x, y) => x+y;
const polynomial = x => x*x+2*x+3;
let squares = [1,2,3,4].map(x => x*x);

// Invoke a function only if it is defined (ES2020)
f?.(x)

// Method invocation
o.m(x,y);
o["m"](x,y);
a[0](z);  // assuming a[0] is a method

// Vararg function
function max(first=-Infinity, ...rest) {...} // rest is an array, never undefined, rest parameter, not spread operator

function drawCircle({x, y, radius, color: [r, g, b]}) {...} // destructuring

// Lexical scoping
let scope = "global scope";          // A global variable
function checkscope() {
    let scope = "local scope";       // A local variable
    function f() { return scope; }   // Return the value in scope here
    return f();
}
checkscope()                         // => "local scope"

// Practical example of lexical scoping
let uniqueInteger = (function() {  // Define and invoke
    let counter = 0;               // Private state of function below
    return function() { return counter++; };
}());                              // The return value of the function is assigned to uniqueInteger
uniqueInteger()  // => 0
uniqueInteger()  // => 1

// Lexical scoping with 2 functions sharing the same private state
function counter() {
    let n = 0;
    return {
        count: function() { return n++; },
        reset: function() { n = 0; }
    };
}

let c = counter(), d = counter();   // Create two counters
c.count()                           // => 0
d.count()                           // => 0: they count independently
c.reset();                          // reset() and count() methods share state
c.count()                           // => 0: because we reset c
d.count()                           // => 1: d was not reset

// ! Functional programming
// Computing standard deviation
const sum = (x,y) => x+y;
const square = x => x*x;

let data = [1,1,3,5,5];
let mean = data.reduce(sum)/data.length;  // mean == 3
let deviations = data.map(x => x-mean);
let stddev = Math.sqrt(deviations.map(square).reduce(sum)/(data.length-1));
stddev  // => 2

// Memoization
function memoize(f) {
    const cache = new Map();  // Value cache stored in the closure.

    return function(...args) {
        // Create a string version of the arguments to use as a cache key.
        let key = args.length + args.join("+");
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            let result = f.apply(this, args);
            cache.set(key, result);
            return result;
        }
    };
}

const factorial = memoize(function(n) {
    return (n <= 1) ? 1 : n * factorial(n-1);
});
factorial(5)      // => 120: also caches values for 4, 3, 2 and 1.
`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Functions"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<ul>
						<li>Function = block of JS code that is defined once but may be executed any number of times.</li>
						<li>If a function is assigned as a property of an object, it is called <strong>method</strong>.</li>
						<li>Constructors = functions for initializing a newly created object.</li>
						<li>JS can assign functions to variables and pass them to other functions.</li>
						<li>Difference between f() (declaration form) and assigning a function to variable f: in declaration form, function objects are created before the code that contains them starts to run, function objects are created before the code that contains them starts to run - these functions do not exist until the expression that defines them are actually evaluated.</li>
						<li>Lexical scoping - functions are executed using the variable scope that was in effect when they were defined, not the variable scope that is in effect when they are invoked. This combination of a function object and a scope (a set of variable bindings) in which the function’s variables are resolved is called a <strong>closure</strong> in the computer science literature.</li>
						<li><strong>Functional programming</strong> - manipulate functions as objects.</li>
						<li>Higher-order function - function that works on functions, taking one or more functions as arguments and returning a function.</li>
					</ul>
					<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
				</>
			}
		</div>
	);
}