import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import CardHeader from "components/CardHeader";

export default function General() {
	const [toggle, setToggle] = useState(false);
	const code = ``;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Misc: iterators, generators, timers & more"}
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
						<li>Internationalisation API</li>
						<li>Timers</li>
						<li>Iterators and Generators</li>
					</ul>
					<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
				</>
			}
		</div>
	);
}