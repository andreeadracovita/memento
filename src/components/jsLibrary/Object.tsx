import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function Object() {
	const [toggle, setToggle] = useState(false);
	const createCode = `// Object Literals
let empty = {};                          // An object with no properties
let point = { x: 0, y: 0 };              // Two numeric properties
let p2 = { x: point.x, y: point.y+1 };   // More complex values
let book = {
    "main title": "JavaScript",          // These property names include spaces,
    "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
    for: "all audiences",                // for is reserved, but no quotes.
    author: {                            // The value of this property is
        firstname: "David",              // itself an object.
        surname: "Flanagan"
    }
};

// new keyword
let o = new Object();                     // Create an empty object: same as {}.
let a = new Array();                      // Create an empty array: same as [].
let d = new Date();                       // Create a Date object representing the current time
let r = new Map();                        // Create a Map object for key/value mapping

// Object.create()
let o1 = Object.create({x: 1, y: 2});     // o1 inherits properties x and y.
o1.x + o1.y                               // => 3
let o2 = Object.create(null);             // o2 inherits no props or methods.
let o3 = Object.create(Object.prototype); // o3 is like {} or new Object()

let o = { x: "don't change this value" };
library.function(Object.create(o));       // Guard against accidental modifications`;
	const queryCode = `// Query
let author = book.author;       // Get the "author" property of the book.
let name = author.surname;      // Get the "surname" property of the author.
let title = book["main title"]; // Get the "main title" property of the book.

// Set
book.edition = 7;                   // Create an "edition" property of book.
book["main title"] = "ECMAScript";  // Change the "main title" property.

// Example
function computeValue(portfolio) {
    let total = 0.0;
    for(let stock in portfolio) {       // For each stock in the portfolio:
        let shares = portfolio[stock];  // get the number of shares
        let price = getQuote(stock);    // look up share price
        total += shares * price;        // add stock value to total value
    }
    return total;                       // Return total value.
}

// Inherited properties
let o = {};               // o inherits object methods from Object.prototype
o.x = 1;                  // and it now has an own property x.
let p = Object.create(o); // p inherits properties from o and Object.prototype
p.y = 2;                  // and has an own property y.
let q = Object.create(p); // q inherits properties from p, o, and...
q.z = 3;                  // ...Object.prototype and has an own property z.
let f = q.toString();     // toString is inherited from Object.prototype
q.x + q.y                 // => 3; x and y are inherited from o and p

let unitcircle = { r: 1 };         // An object to inherit from
let c = Object.create(unitcircle); // c inherits the property r
c.x = 1; c.y = 1;                  // c defines two properties of its own
c.r = 2;                           // c overrides its inherited property
unitcircle.r                       // => 1: the prototype is not affected`;
	const deleteCode = `delete book.author;
delete book["main title"];`;
	const testingCode = `let o = { x: 1 };
"x" in o         // => true: o has an own property "x"
"y" in o         // => false: o doesn't have a property "y"
"toString" in o  // => true: o inherits a toString property

o.hasOwnProperty("x")        // => true: o has an own property x
o.hasOwnProperty("y")        // => false: o doesn't have a property y
o.hasOwnProperty("toString") // => false: toString is an inherited property

o.propertyIsEnumerable("x")  // => true: o has an own enumerable property x
o.propertyIsEnumerable("toString")  // => false: not an own property
Object.prototype.propertyIsEnumerable("toString") // => false: not enumerable

// Equivalent, but cannot distinguish between o does not have prop x or has x but is undefined
o.x !== undefined        // => true: o has a property x
o.y !== undefined        // => false: o doesn't have a property y
o.toString !== undefined // => true: o inherits a toString property`;
	const enumerateCode = `let o = {x: 1, y: 2, z: 3};          // Three enumerable own properties
o.propertyIsEnumerable("toString")   // => false: not enumerable
for(let p in o) {                    // Loop through the properties
    console.log(p);                  // Prints x, y, and z, but not toString
}

for(let p in o) {
    if (typeof o[p] === "function") continue; // Skip all methods
}`;
	const extendCode = `let target = {x: 1}, source = {y: 2, z: 3};
for(let key of Object.keys(source)) {
    target[key] = source[key];
}
target  // => {x: 1, y: 2, z: 3}

// Create a new object, copy defaults into it, then override those defaults with the properties in o
o = Object.assign({}, defaults, o);`;
	const serializeCode = `let o = {x: 1, y: {z: [false, null, ""]}}; // Define a test object
let s = JSON.stringify(o);   // s == '{"x":1,"y":{"z":[false,null,""]}}'
let p = JSON.parse(s);       // p == {x: 1, y: {z: [false, null, ""]}}`;
	const replaceCode = `let point = {
	x: 1,
	y: 2,
	toString: function() { return \`(\${this.x}, \${this.y})\`
};
String(point)    // => (1, 2)`;
	const extendedSyntaxCode = `// Spread Operator
let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };
rect.x + rect.y + rect.width + rect.height // 175

let o = { x: 1 };
let p = { x: 0, ...o };
p.x   // 1: value is overridden

let o = Object.create({ x: 1 });
let p = { ...o };
p.x   // undefined, spread operator only spreads own properties, not inherited ones.`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Object"}
				link={"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<ul>
						<li>Objects are JavaScript's most fundamental datatype.</li>
						<li>An object is a composite value: it aggregates multiple values (primitive values or other objects) and allows to store and retrieve those values by name.</li>
						<li>An object is an unordered collection of properties, each with a name and value.</li>
						<li>Property names are usually strings, can also be symbols, works like a map of strings to values: "hash", "hashtable",  "dictionary", "associative array".</li>
						<li>In addition to maintaining its own set of properties, a JS object inherits properties of its "prototype" - "prototypal inheritance".</li>
						<li>JS objects are dynamic - properties can be added and deleted, can also be used to simulate static objects and "structs".</li>
						<li>Any value in JS that is not a string, number, Symbol, true, false, null or undefined is a object.</li>
						<li>Objects are mutable and manipulated by reference rather than by value.</li>
						<li>Most common actions: create, set, query, delete, test, enumerate their properties.</li>
						<li>In addition to name and value, each property has <strong>three property attributes</strong>:
							<ul>
								<li>writable (if property can be set)</li>
								<li>enumerable (if property name can be returned by a for/in loop)</li>
								<li>configurable (if the property cna be deleted and if attributes can be altered)</li>
							</ul>
						</li>
						<li>Many built-in objects have properties that are read-only, non-enumerable, or non-configurable.</li>
					</ul>

					<p className="card-section">Creating Objects</p>
					<ul>
						<li>Objects can be created with object literals, with the <strong>new</strong> keyword and with the <strong>Object.create()</strong> function.</li>
						<li>Prototypes - almost every JS object has a second JS object associated with it (prototype), and the first object inherits properties from the prototype. Can refer to it with Object.prototype. Objects created from literal and with new inherit from prototype. Object.prototype is one of the rare objects that has no prototype. Example: Date.prototype inherits properties from Object.prototype, so a Date object created by new Date() inherits both Date.prototype and Object.prototype (prototype chain).</li>
						<li>Object.create() can be used to guard against unintended modifications of an object by a library function. Pass the object that inherits from it.</li>
					</ul>
					<div className="code"><pre>{createCode}</pre></div>

					<p className="card-section">Querying and Setting Properties</p>
					<ul>
						<li>Using . or []</li>
						<li>Different from C, C++, Java (strongly typed languages), where an object can have only a fixed number of properties defined in advance, in JavaScript (loosely typed language) any number of properties can be created.</li>
						<li>Inherited properties from the prototype object.</li>
						<li>Querying a property that does not exist does not result in an error, but evaluates to undefined. It is an error to attempt to query a property of an object that does not exist: <pre>let len = book.subtitle.length; // TypeError: undefined doesn't have a length</pre></li>
						<li>Safeguard agains such TypeErrors: <pre>let surname = book?.author?.surname</pre> (ES2020)</li>
						<li>
							A property cannot be set in the following situations:
							<ul>
								<li>o has an own property p that is read-only.</li>
								<li>o has an inherited property p that is read-only: cannot hide an inherited read-only property with an own property of the same name.</li>
								<li>o does not have an own property p && o does not inherit a property p with a setter method && o's extensible attribute is false.</li>
							</ul>
						</li>
					</ul>
					<div className="code"><pre>{queryCode}</pre></div>

					<p className="card-section">Deleting Properties</p>
					<ul>
						<li>Use <strong>delete</strong> operator. Only deletes own properties, not inherited ones. To delete inherited properties, must delete it from the prototype object, which affects all objects that inherit from that prototype.</li>
						<li><strong>delete</strong> does not remove properties that have a configurable attribute of false.</li>
					</ul>
					<div className="code"><pre>{deleteCode}</pre></div>

					<p className="card-section">Testing Properties</p>
					<p>Testing membership with <strong>in</strong>, <strong>hasOwnProperty()</strong> and <strong>propertyIsEnumerable()</strong> (is own and enumerable).</p>
					<div className="code"><pre>{testingCode}</pre></div>

					<p className="card-section">Enumerating Properties</p>
					<ul>
						<li>Iterating through all the properties of an object: for/in loop.</li>
						<li>
							Functions used to get an array of property names:
							<ul>
								<li><strong>Object.keys()</strong> returns an array of names of enumerable own properties of an object. Does not include inherited props or symbols.</li>
								<li><strong>Object.getOwnPropertyNames()</strong> returns an array of the names of non-enumerable own properties as well (string names).</li>
								<li><strong>Object.getOwnPropertySymbols()</strong> returns own properties whose names are symbols, enumerable or not.</li>
								<li><strong>Reflect.ownKeys()</strong> returns all own prop names, enumerable or not, string and symbols.</li>
							</ul>
						</li>
					</ul>
					<div className="code"><pre>{enumerateCode}</pre></div>

					<p className="card-section">Extending Objects</p>
					<ul>
						<li>Can copy properties from one object to another with simple code or using <strong>Object.assign()</strong>.</li>
					</ul>
					<div className="code"><pre>{extendCode}</pre></div>

					<p className="card-section">Serializing Objects</p>
					<ul>
						<li>Serialization = the process of converting an object's state to a string from which it can be later restored.</li>
						<li>NaN, Infinity, -Infinity serialized to null.</li>
						<li>Date objects serialized to ISO-formatted date strings, and parse leaves them in string form, does not restore date object.</li>
						<li>Function, RegExp, Error, undefined cannot be serialized or restored. They are omitted from the string at serialization.</li>
					</ul>
					<div className="code"><pre>{serializeCode}</pre></div>

					<p className="card-section">Object Methods</p>
					<ul>
						<li>Replacing prototype methods with other implementation.</li>
					</ul>
					<div className="code"><pre>{replaceCode}</pre></div>

					<p className="card-section">Extended Object Literal Syntax</p>
					<div className="code"><pre>{extendedSyntaxCode}</pre></div>
				</>
			}
		</div>
	);
}