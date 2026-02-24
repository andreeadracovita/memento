import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

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
					<p>Problem type</p>
					<p>Solution</p>
					<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
				</>
			}
		</div>
	);
}