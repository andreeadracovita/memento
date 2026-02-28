import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

// import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function Functions() {
	const [toggle, setToggle] = useState(true);
	const code = `// Java code here`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Content"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<ul>
						<li>2 column side-by-side comparison and implementation of Java and C++</li>
						<li>Memory management</li>
						<li>Threading, concurrency, etc.</li>
						<li>Boiler plate</li>
						<li>Classes</li>
						<li>Data structures: std library and personal implementation</li>
						<li>Algorithms</li>
						<li>Bit manipulation</li>
						<li>Spring Framework</li>
					</ul>
					<SyntaxHighlighter language="java">{code}</SyntaxHighlighter>
				</>
			}
		</div>
	);
}