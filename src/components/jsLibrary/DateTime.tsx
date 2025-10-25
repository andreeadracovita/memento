import { useState } from "react";

import CardHeader from "../CardHeader";

export default function DateTime() {
	const [toggle, setToggle] = useState(false);
	const code = `let timestamp = Date.now()       // The current time as a timestamp (a number).
let now = new Date()             // The current time as a Date object.
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
// Expected output (varies according to local timezone): Donnerstag, 20. Dezember 2012`;
	
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
				</>
			}
		</div>
	);
}