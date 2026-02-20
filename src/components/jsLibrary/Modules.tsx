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
							<li>Unlike web browsers, which have to read files of JavaScript over a relatively slow network connection, there is no need or benefit to bundling a Node program into a single JavaScript file.</li>
							<li>In Node, each file is an independent module with a private namespace.</li>
							<li>Node modules import other modules with the require() function and export their public API by setting properties of the Exports object or by replacing the module.exportsobject entirely.</li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
						<li>ES6 modules using <Accent>export</Accent>, <Accent>import</Accent>, and <Accent>import()</Accent>.</li>
					</ul>
					
				</>
			}
		</div>
	);
}