import { useState } from "react";

import CardHeader from "../CardHeader";

export default function Regex() {
	const [toggle, setToggle] = useState(false);
	const code = `/^HTML/;             // Match the letters H T M L at the start of a string
/[1-9][0-9]*/;       // Match a nonzero digit, followed by any # of digits
/\\bjavascript\\b/i;   // Match "javascript" as a word, case-insensitive

let text = "testing: 1, 2, 3";   // Sample text
let pattern = /\\d+/g;            // Matches all instances of one or more digits
pattern.test(text)               // => true: a match exists
text.search(pattern)             // => 9: position of first match
text.match(pattern)              // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#")       // => "testing: #, #, #"
text.split(/\\D+/)                // => ["","1","2","3"]: split on nondigits

TODO JavaScript the definitive edition, ch 11.3 Pattern Matching with Regular Expressions`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Regular Expression"}
				link={"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>Data type for describing and matching patterns in strings of text.</p>
					<pre>{code}</pre>
				</>
			}
		</div>
	);
}