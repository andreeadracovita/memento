import { useState } from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";

// import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function ErrorBoundaries() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Error Boundaries"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p className="card-section">getDerivedStateFromError</p>
					<p className="card-section">componentDidCatch</p>
				</>
			}
		</div>
	);
}