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
						<li>
							Destructuring
							<ul>
								<li></li>
								<li></li>
								<li></li>
							</ul>
							<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
						</li>
						<li>
							In/instanceof
							<ul>
								<li></li>
								<li></li>
								<li></li>
							</ul>
							<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
						</li>
						<li>
							Statements - for/of, for/in
							<ul>
								<li></li>
								<li></li>
								<li></li>
							</ul>
							<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
						</li>
						<li>
							Internationalisation API
							<ul>
								<li></li>
								<li></li>
								<li></li>
							</ul>
							<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
						</li>
						<li>
							Timers
							<ul>
								<li></li>
								<li></li>
								<li></li>
							</ul>
							<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
						</li>
						<li>
							Iterators and Generators
							<ul>
								<li></li>
								<li></li>
								<li></li>
							</ul>
							<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
						</li>
					</ul>
					
				</>
			}
		</div>
	);
}