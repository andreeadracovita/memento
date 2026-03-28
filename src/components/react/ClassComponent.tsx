import { useState } from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";

// import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function ClassComponent() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Class Component"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p className="card-section">Constructor</p>
					<p className="card-section">State</p>
				</>
			}
		</div>
	);
}