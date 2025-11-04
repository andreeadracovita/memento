import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function DateTime() {
	const [toggle, setToggle] = useState(false);
	const code = `let timestamp = Date.now()       // The current time as a timestamp (a number).
let now = new Date()             // The current time as a Date object.

// If you pass one numeric argument, the Date() constructor interprets that argument as the number of milliseconds since the 1970 epoch:
let epoch = new Date(0);  // Midnight, January 1st, 1970, GMT

// Midnight in England, January 1, 2100
let century = new Date(Date.UTC(2100, 0, 1));

let ms = now.getTime()           // Convert to a millisecond timestamp.
let iso = now.toISOString()      // Convert to a string in standard format.

let dayOfMonth = now.getDate()
let dayOfWeek = now.getDay()     // Sunday = 0
let monthOfYear = now.getMonth() // January = 0
let fullYear = now.getFullYear()

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(event.toLocaleDateString("de-DE", options));
// Expected output (varies according to local timezone): Donnerstag, 20. Dezember 2012

let d = new Date();               // Start with the current date
d.setFullYear(d.getFullYear() + 1);`;
	const runtime = `let startTime = Date.now();
reticulateSplines(); // Do some time-consuming operation
let endTime = Date.now();
console.log(\`Spline reticulation took \${endTime - startTime}ms.\`);`;
	const arithmetic = `let d = new Date();
d.setMonth(d.getMonth() + 3, d.getDate() + 14);`;
	const formatting = `let d = new Date(2020, 0, 1, 17, 10, 30); // 5:10:30pm on New Year's Day 2020
d.toString()  // => "Wed Jan 01 2020 17:10:30 GMT-0800 (Pacific Standard Time)"
d.toUTCString()         // => "Thu, 02 Jan 2020 01:10:30 GMT"
d.toLocaleDateString()  // => "1/1/2020": 'en-US' locale
d.toLocaleTimeString()  // => "5:10:30 PM": 'en-US' locale
d.toISOString()         // => "2020-01-02T01:10:30.000Z"`;
	
	return (
		<div className="grey-card">
			<CardHeader
				title={"Date and Time"}
				link={"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<pre>{code}</pre>
					<p>Note that when invoked with multiple numbers, the <pre>Date()</pre> constructor interprets them using whatever time zone the local computer is set to. If you want to specify a date and time in UTC (Universal Coordinated Time, aka GMT), then you can use the <pre>Date.UTC()</pre>.</p>
					<p>JavaScript represents dates internally as integers that specify the number of milliseconds since (or before) midnight on January 1, 1970, UTC time.</p>
					<p>These millisecond values are sometimes called timestamps, and it is sometimes useful to work with them directly rather than with Date objects. The static Date.now() method returns the current time as a timestamp and is helpful when you want to measure how long your code takes to run:</p>
					<pre>{runtime}</pre>
					<p className="card-section">Date Arithmetic</p>
					<ul>
						<li>Date objects can be compared with JavaScript’s standard &lt;, &lt;=, &gt;, and &gt;= comparison operators.</li>
						<li>Can subtract one Date object from another to determine the number of milliseconds between the two dates.</li>
						<li>Date setting methods work <strong>correctly even when they overflow</strong>. When we add three months to the current month, we can end up with a value greater than 11 (which represents December). The setMonth() handles this by incrementing the year as needed. Similarly, when we set the day of the month to a value larger than the number of days in the month, the month gets incremented appropriately.</li>
					</ul>
					<pre>{arithmetic}</pre>
					<p className="card-section">Formatting and Parsing Date String</p>
					<pre>{formatting}</pre>
				</>
			}
		</div>
	);
}