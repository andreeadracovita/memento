import { useState } from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";

// import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function LifecycleMethods() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Lifecycle Methods"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p className="card-section">componentDidMount</p>
					<p className="card-section">componentWillUnmount</p>
					<p className="card-section">componentDidUpdate</p>
				</>
			}
		</div>
	);
}