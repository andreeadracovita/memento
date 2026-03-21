import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

// import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function BitManipulation() {
	const [toggle, setToggle] = useState(false);
	const javaCode = `// Java code here`;
	const cppCode = `// C++ code here`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Bit Manipulation"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<div>
						<h2 className="card-section">Java</h2>
						<ul>
							<li></li>
							<li></li>
							<li></li>
						</ul>
						<SyntaxHighlighter language="java">{javaCode}</SyntaxHighlighter>
					</div>
					<hr />
					<div>
						<div>
							<h2 className="card-section">C++</h2>
							<ul>
								<li></li>
								<li></li>
								<li></li>
							</ul>
							<SyntaxHighlighter language="cpp">{cppCode}</SyntaxHighlighter>
						</div>
					</div>
				</>
			}
		</div>
	);
}