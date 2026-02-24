import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function PsSection() {
	const [toggle, setToggle] = useState(true);
	const code = `// Code`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Section Sample"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>What really matters is <Accent>solving problems</Accent> through code. Brute force is the first step (POC), then work towards an <Accent>elegant</Accent>, <Accent>efficient</Accent> & <Accent>scalable</Accent> solution.</p>
					<p>This page contains a collection of common problems and proposed solutions, random computer questions & more.</p>
					<hr />
					<p>Problem type</p>
					<p>Solution</p>
					<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
				</>
			}
		</div>
	);
}