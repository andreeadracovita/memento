import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function Classes() {
	const [toggle, setToggle] = useState(false);
	const code = `// Constructor function for initialising new Range objects. Does not return de object.
function Range(from, to) {
    // Noninherited, unique properties
    this.from = from;
    this.to = to;
}

// All Range objects inherit from this object
Range.prototype = {
    includes: function(x) { return this.from <= x && x <= this.to; },

    // Generator function that makes instances of the class iterable
    [Symbol.iterator]: function*() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },

    toString: function() { return "(" + this.from + "..." + this.to + ")"; }
};

let r = new Range(1,3);
r.includes(2)             // => true: 2 is in the range
r.toString()              // => "(1...3)"
[...r]                    // => [1, 2, 3]; convert to an array via iterator

// Checking if an object is instance of a class
r instanceof Range               // => true: r inherits from Range.prototype
range.methods.isPrototypeOf(r);  // range.methods is the prototype object

// Class syntax - works in exactly the same way as function Range defined above
// Just "syntactic sugar"
class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    includes(x) { return this.from <= x && x <= this.to; }

    // A generator function that makes instances of the class iterable.
    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }

    toString() { return \`(\${this.from}...\${this.to})\`; }
}

let r = new Range(1,3);   // Create a Range object
r.includes(2)             // => true: 2 is in the range
r.toString()              // => "(1...3)"
[...r]                    // => [1, 2, 3]; convert to an array via iterator

// Complex class
class Complex {
    constructor(real, imaginary) {
    	this.r = real;
    	this.i = imaginary;
    }

    get real() { return this.r; }
    get imaginary() { return this.i; }
    get magnityde() { return Math.hypot(this.r, this.i); }

    plus(that) { return new Complex(this.r + that.r, this.i + that.i); }

    times(that) {
        return new Complex(this.r * that.r - this.i * that.i,
                           this.r * that.i + this.i * that.r);
    }

    static sum(c, d) { return c.plus(d); }
    static product(c, d) { return c.times(d); }

    toString() { return \`{\${this.r},\${this.i}}\`; }

    equals(that) {
        return that instanceof Complex &&
            this.r === that.r &&
            this.i === that.i;
    }
}

// Adds a method to the prototype of the class
Complex.prototype.conj = function() { return new Complex(this.r, -this.i); };

Complex.ZERO = new Complex(0,0);
Complex.ONE = new Complex(1,0);
Complex.I = new Complex(0,1);

let c = new Complex(2, 3);     // Create a new object with the constructor
let d = new Complex(c.i, c.r); // Use instance fields of c
c.plus(d).toString()           // => "{5,5}"; use instance methods
c.magnitude                    // => Math.hypot(2,3); use a getter function
Complex.product(c, d)          // => new Complex(0, 13); a static method
Complex.ZERO.toString()        // => "{0,0}"; a static property

// Define a method if not already defined
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(s) {
        return this.indexOf(s) === 0;
    };
}

// Subclasses
// Without class or extends keywords

// Constructor function for subclass
function Span(start, span) {
    if (span >= 0) {
        this.from = start;
        this.to = start + span;
    } else {
        this.to = start;
        this.from = start + span;
    }
}

// Span prototype inherits from the Range prototype
Span.prototype = Object.create(Range.prototype);

// New constructor for the subclass
Span.prototype.constructor = Span;

// Override toString() method that it would otherwise inherit from Range.
Span.prototype.toString = function() {
    return \`(\${this.from}... +\${this.to - this.from})\`;
};

// With extends keyword
class Span extends Range {
    constructor(start, length) {
        if (length >= 0) {
            super(start, start + length);
        } else {
            super(start + length, start);
        }
    }
}

// Abstract classes
class AbstractAnimal {
    sound() { throw new Error("Abstract method"); }
}

class Giraffe extends AbstractAnimal {
    constructor(name) {
        super();
        this.name = name;
    }

    // Our implementation of the abstract method we inherited
    sound() { return "Hummm"; }
    toString() { return "I'm a giraffe!"; }
}

class AbstractDog extends AbstractAnimal {
    constructor(name, breed) {
    	super();
    	this.name = name;
    	this.breed = breed;
    }

    get breed() { return this.breed; }
}

class Mastiff extends AbstractDog {
    sound() { return "Wooof!"; }
}

class Chihuahua extends AbstractDog {
    sound() { return "Squeak Squeak!"; }
}`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Classes"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<ul>
						<li><Accent>A class is a set of objects that inherit properties from the same prototype object.</Accent></li>
						<li>A class of objects can be defined to share properties.</li>
						<li>Instances of the class have their own properties to hold or define their state, but they also have methods that define their behavior.</li>
						<li>Classes use <Accent>prototype-based inheritance</Accent>: if two objects inherit properties from the same prototype, then we say that those objects are instances of the same class.</li>
						<li>JavaScript’s classes and prototype-based inheritance mechanism are substantially different from the classes and class-based inheritance mechanism of Java/C++.</li>
						<li>The prototype object is fundamental to the identity of a class: two objects are instances of the same class if and only if they inherit from the same prototype object.</li>
						<li>If o inherits from an object that inherits from an object that inherits from <Accent>C.prototype</Accent>, the expression will still evaluate to true.</li>
						<li>Classes started having their own syntax starting with ES6.</li>
						<li>The keyword <Accent>constructor</Accent> is used to define the constructor function for the class. The class declaration statement defines a new variable Range and assigns the value of this special constructor function to that variable. If no initialization is needed, constructor can be omitted and an empty constructor will be generated.</li>
						<li>Define a <Accent>static</Accent> method within a class body by prefixing the method declaration with the <Accent>static</Accent> keyword. Static methods are defined as properties of the constructor function rather than properties of the prototype object. Class methods vs instance methods.</li>
						<li><Accent>Private fields</Accent>: a class field whose name is prefixed with <Accent>#</Accent> will be invisible and inaccessible (and therefore immutable) to any code outside of the class body. Private fields must be declared using this new field syntax before they can be used (cannot be initialized in constructor).</li>
						<li>When using <Accent>extends</Accent> to create a subclass, the constructor of the subclass must use <Accent>super()</Accent> to invoke the superclass constructor.</li>
						<li>Cannot use this in constructor until after invoking super().</li>
						<li><Accent>Composing classes</Accent>: if we want a class that <Accent>inherts the behavior of multiple other classes</Accent>, it is easier and more flexible to create an instance for each of the other classes inside our desired class and <Accent>delegate</Accent>.</li>
						<li><Accent>Abstract classes</Accent>: classes that do not include a complete implementation. The subclasses, then, only need to define their own unique behavior by implementing the abstract methods defined—but not implemented—by the superclass. JavaScript does not have any formal definition of abstract methods or abstract classes.</li>
					</ul>
					<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
				</>
			}
		</div>
	);
}