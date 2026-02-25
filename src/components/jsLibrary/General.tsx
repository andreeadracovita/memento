import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function General() {
	const [toggle, setToggle] = useState(false);
	const destructuringCode = `let [x,y] = [1,2];
[x,y] = [x+1,y+1];
[x,y] = [y,x];

function toCartesian(r, theta) {
    return [r * Math.cos(theta), r * Math.sin(theta)];
}
let [x,y] = toCartesian(r,theta);

let [first, ...rest] = "Hello"; // first == "H", rest == ["e", "l", "l", "o"]

let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0};
let {r, g, b} = transparent;

let points = [{x: 1, y: 2}, {x: 3, y: 4}];
let [{x: x1, y: y1}, {x: x2, y: y2}] = points;
(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) // => true`;
	const timerCode = `setTimeout(() => { console.log("Ready..."); }, 1000); // log after 1s / 1000ms

let clock = setInterval(() => {
    console.clear();
    console.log(new Date().toLocaleTimeString());
}, 1000);

// After 10 seconds: stop the repeating code above.
setTimeout(() => { clearInterval(clock); }, 10000);`;
	const numberFormatCode = `let euros = Intl.NumberFormat("es", {style: "currency", currency: "EUR"});
euros.format(10)    // => "10,00 €"

let pounds = Intl.NumberFormat("en", {style: "currency", currency: "GBP"});
pounds.format(1000) // => "£1,000.00"

let data = [0.05, .75, 1];
let formatData = Intl.NumberFormat(undefined, {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
}).format;

data.map(formatData)   // => ["5.0%", "75.0%", "100.0%"]`;
	const dateTimeFormatCode = `let d = new Date("2020-01-02T13:14:15Z");  // January 2nd, 2020, 13:14:15 UTC

// With no options, we get a basic numeric date format
Intl.DateTimeFormat("en-US").format(d) // => "1/2/2020"
Intl.DateTimeFormat("fr-FR").format(d) // => "02/01/2020"

// Spelled out weekday and month
let opts = { weekday: "long", month: "long", year: "numeric", day: "numeric" };
Intl.DateTimeFormat("en-US", opts).format(d) // => "Thursday, January 2, 2020"
Intl.DateTimeFormat("es-ES", opts).format(d) // => "jueves, 2 de enero de 2020"

// The time in New York, for a French-speaking Canadian
opts = { hour: "numeric", minute: "2-digit", timeZone: "America/New_York" };
Intl.DateTimeFormat("fr-CA", opts).format(d) // => "8 h 14"`;
	const compareStringCode = `const collator = new Intl.Collator().compare;
["a", "z", "A", "Z"].sort(collator)      // => ["a", "A", "z", "Z"]

// Filenames often include numbers, so we should sort those specially
const filenameOrder = new Intl.Collator(undefined, { numeric: true }).compare;
["page10", "page9"].sort(filenameOrder)  // => ["page9", "page10"]

// Find all strings that loosely match a target string
const fuzzyMatcher = new Intl.Collator(undefined, {
    sensitivity: "base",
    ignorePunctuation: true
}).compare;
let strings = ["food", "fool", "Føø Bar"];
strings.findIndex(s => fuzzyMatcher(s, "foobar") === 0)  // => 2`
	const code = ``;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Misc: iterators, locales, timers & more"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p className="card-section">Destructuring assignment</p>
					<ul>
						<li>ES6 implements a kind of compound <Accent>declaration</Accent> and <Accent>assignment</Accent> syntax known as <Accent>destructuring assignment</Accent>.</li>
					</ul>
					<SyntaxHighlighter language="javascript">{destructuringCode}</SyntaxHighlighter>

					<p className="card-section">Internationalisation API</p>
					<ul>
						<li>Consists of 3 classes: Intl.NumberFormat, Intl.DateTimeFormat, and Intl.Collator - allow to format numbers (including monetary amounts and percentages), dates, and times in locale-appropriate ways and to compare strings in locale-appropriate ways.</li>
						<li>The <Accent>Intl.NumberFormat</Accent> class defines a <Accent>format()</Accent> method that takes all of these formatting possibilities into account. format() has two arguments: <Accent>locale</Accent> (eg. "en-US") and an object for <Accent>details</Accent> (if omitted, then undefined).</li>
						<li>Options:
							<ul>
								<li>style ("decimal", "percent", "currency")</li>
								<li>currency ("USD", "GBP")</li>
								<li>currencyDisplay ("symbol", "code", "name")</li>
								<li>useGrouping</li>
								<li>minimumIntegerDigits</li>
								<li>minimumFractionDigits, maximumFractionDigits</li>
								<li>minimumSignificantDigits, maximumSignificantDigits</li>
							</ul>
						</li>
					</ul>
					<SyntaxHighlighter language="javascript">{numberFormatCode}</SyntaxHighlighter>

					<ul>
						<li>The <Accent>Intl.DateTimeFormat</Accent> class options:
							<ul>
								<li>year ("numeric", "2-digit")</li>
								<li>month ("numeric", "2-digit", "long", "short", "narrow")</li>
								<li>day ("numeric", "2-digit")</li>
								<li>weekday ("long", "short", "narror")</li>
								<li>era ("long", "short", "narror")</li>
								<li>hour, minute, second ("numeric", "2-digit")</li>
								<li>timeZone (example: “America/Los_Angeles”)</li>
								<li>timeZoneName ("long", "short")</li>
								<li>hour12 (boolean)</li>
								<li>hourCycle ("h11", "h12", "h23", "h24")</li>
							</ul>
						</li>
						<li>Only specify properties for date and time fields that you would like to appear in the formatted output.</li>
					</ul>
					<SyntaxHighlighter language="javascript">{dateTimeFormatCode}</SyntaxHighlighter>

					<ul>
						<li>Comparing strings with <Accent>Intl.Collator()</Accent>. Use <Accent>compare()</Accent> method to compare two strings (returns a number lower, equal or higher to 0)</li>
						<li>
							Options:
							<ul>
								<li>usage ("sort", "search")</li>
								<li>sensitivity ("base", "accent", "case", "variant")</li>
								<li>ignorePunctuation (boolean)</li>
								<li>numeric (boolean, if strings contain integers, sort them)</li>
								<li>caseFirst ("upper", "lower")</li>
							</ul>
						</li>
					</ul>
					<SyntaxHighlighter language="javascript">{compareStringCode}</SyntaxHighlighter>

					<p className="card-section">Timers</p>
					<ul>
						<li><Accent>setTimeout()</Accent> and <Accent>setInterval()</Accent> -  allow programs to ask the browser to invoke a function after a specified amount of time has elapsed or to invoke the function repeatedly at a specified interval.</li>
						<li>Both setTimeout() and setInterval() return a value. If you save this value in a variable, you can then use it later to cancel the execution of the function by passing it to <Accent>clearTimeout()</Accent> or <Accent>clearInterval()</Accent>.</li>
					</ul>
					<SyntaxHighlighter language="javascript">{timerCode}</SyntaxHighlighter>

					<p className="card-section">Iterators and Generators</p>
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
				</>
			}
		</div>
	);
}