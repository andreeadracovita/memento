import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function Modules() {
	const [toggle, setToggle] = useState(false);
	const code = `// Separate modules
// How code-bundling tools (such as webpack and Parcel) for web browsers work
const modules = {};
function require(moduleName) { return modules[moduleName]; }

modules["sets.js"] = (function() {
    const exports = {};

    // The contents of the sets.js file go here:
    exports.BitSet = class BitSet { ... };

    return exports;
}());

modules["stats.js"] = (function() {
    const exports = {};

    // The contents of the stats.js file go here:
    const sum = (x, y) => x + y;
    const square = x = > x * x;
    exports.mean = function(data) { ... };
    exports.stddev = function(data) { ... };

    return exports;
}());

// Using the modules in a separate file
const stats = require("stats.js");
const BitSet = require("sets.js").BitSet;

let s = new BitSet(100);
s.insert(10);
s.insert(20);
s.insert(30);
let average = stats.mean([...s]);`;
	const codeNodeExport = `// Export multiple values
const sum = (x, y) => x + y;
const square = x => x * x;

exports.mean = data => data.reduce(sum)/data.length;
exports.stddev = function(d) {
    let m = exports.mean(d);
    return Math.sqrt(d.map(x => x - m).map(square).reduce(sum)/(d.length-1));
};

// * OR *
// Define all the functions, public and private
const sum = (x, y) => x + y;
const square = x => x * x;
const mean = data => data.reduce(sum)/data.length;
const stddev = d => {
    let m = mean(d);
    return Math.sqrt(d.map(x => x - m).map(square).reduce(sum)/(d.length-1));
};

// Now export only the public ones
module.exports = { mean, stddev };

// * OR *
// Module that exports single functions or class
module.exports = class BitSet extends AbstractWritableSet {
    // ...
};`;
	const codeNodeImport = `const fs = require("fs");            // built into Node
const http = require("http"); 
const express = require("express");  // downloaded and imported
const stats = require('./stats.js'); // local modules
const BitSet = require('./utils/bitset');

// Import the entire stats object, with all of its functions
const stats = require('./stats.js');

// We've got more functions than we need, but they're neatly
// organized into a convenient "stats" namespace.
let average = stats.mean(data);

// Use destructuring assignment to import exactly the functions we want directly into the local namespace:
const { stddev } = require('./stats.js');

// This is nice and succinct, though we lose a bit of context
// without the 'stats' prefix as a namspace for the stddev() function.
let sd = stddev(data);`;
	const codeES6Modules = `// -- Export ------------------------------
export const PI = Math.PI;

export function degreesToRadians(d) { return d * PI / 180; }

export class Circle {
    constructor(r) { this.r = r; }
    area() { return PI * this.r * this.r; }
}

// * OR *
export { Circle, degreesToRadians, PI };

// * OR *
// Export only one class
export default class BitSet {
    // ...
}

// -- Import -------------------------------
import BitSet from './bitset.js';
import { mean, stddev } from "./stats.js";
import * as stats from "./stats.js";
import Histogram, { mean, stddev } from "./histogram-stats.js";  // Default and non-defaults
import "./analytics.js";  // This module runs the first time when it is imported and only once
import { render as renderUI } from "./ui.js"; // Rename
import { default as Histogram, mean, stddev } from "./histogram-stats.js";

// -- Re-export, bundling -------------------
import { mean } from "./stats/mean.js";
import { stddev } from "./stats/stddev.js";
export { mean, stdev };

// * OR *
export { mean } from "./stats/mean.js";
export { stddev } from "./stats/stddev.js";

export * from "./stats/mean.js";
export * from "./stats/stddev.js";

export { default as mean } from "./stats/mean.js";
export { default as stddev } from "./stats/stddev.js";

export { default } from "./stats/mean.js"`;
	const codeDynamicImport = `import("./stats.js").then(stats => {
    let average = stats.mean(data);
})

async analyzeData(data) {
    let stats = await import("./stats.js");
    return {
        average: stats.mean(data),
        stddev: stats.stddev(data)
    };
}`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Modules"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<ul>
						<li>Goal: allow large programs to be assembled using modules of code from different authors and sources.</li>
						<li>Properties: encapsulation (hiding private implementation details and keeping the global namespace tidy).</li>
						<li>JavaScript modularity still depends on code-bundling tools.</li>
						<li><Accent>Modules with Classes, Objects, and Closures</Accent></li>
						<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
						<li><Accent>Node modules using require()</Accent></li>
						<ul>
							<li>In Node, each file is an independent module with a private namespace.</li>
							<li>Node modules import other modules with the require() function and export their public API by setting properties of the <Accent>exports</Accent> object or by replacing the <Accent>module.exports</Accent> object entirely.</li>
							<li>Node defines a global <Accent>exports</Accent> object that is always defined. exports is the same as module.exports.</li>
							<SyntaxHighlighter language="javascript">{codeNodeExport}</SyntaxHighlighter>
							<li>Import a module using the <Accent>require()</Accent> function.</li>
							<SyntaxHighlighter language="javascript">{codeNodeImport}</SyntaxHighlighter>
						</ul>
						<li>ES6 modules using <Accent>export</Accent>, <Accent>import</Accent>, and <Accent>import()</Accent>.</li>
						<SyntaxHighlighter language="javascript">{codeES6Modules}</SyntaxHighlighter>
						<li><Accent>Dynamic imports</Accent>: <Accent>import()</Accent> introduced in ES2020: pass a module specifier to import() and it returns a <Accent>Promise</Accent> object that represents the asynchronous process of loading and running the specified module.</li>
						<SyntaxHighlighter language="javascript">{codeDynamicImport}</SyntaxHighlighter>
						<li>By strategically using dynamic import() calls, however, you can <Accent>break that one monolithic bundle up</Accent> into a set of smaller bundles that can be loaded on demand.</li>
						<li><Accent>import.meta</Accent> refers to an object that contains metadata about the currently executing module and url property is the URL of the module that was loaded. Primary use case for <Accent>import.meta.url</Accent>: refer to images, data files and other resources.</li>
					</ul>
					
				</>
			}
		</div>
	);
}