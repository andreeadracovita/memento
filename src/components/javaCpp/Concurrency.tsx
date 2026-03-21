import { useState } from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function Concurrency() {
	const [toggle, setToggle] = useState(false);
	// const code = `// Java code here`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Concurrency"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<div className="row">
					<div className="col-6">
						<h2 className="card-section">Java</h2>
						<ul>
							<li></li>
								<li></li>
								<li></li>
						</ul>
					</div>
					<div className="col-6 d-flex">
						<div className="vr h-100 me-2"></div>
						<div>
							<h2 className="card-section">C++</h2>
							<ul>
								<li></li>
								<li></li>
								<li></li>
							</ul>
						</div>
					</div>
					{/*<SyntaxHighlighter language="java">{code}</SyntaxHighlighter>*/}
				</div>
			}
		</div>
	);
}