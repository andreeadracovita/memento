import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function General() {
	const [toggle, setToggle] = useState(false);
	const code = ``;

	return (
		<div className="grey-card">
			<CardHeader
				title={"General"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<ul>
						<li>Destructuring</li>
						<li>Operators Table</li>
						<li>In/instanceof</li>
						<li>Statements - for/of, for/in</li>
						<li>Internationalization API</li>
						<li>Timers</li>
						<li>Iterators and Generators</li>
					</ul>
					<pre>{code}</pre>
				</>
			}
		</div>
	);
}