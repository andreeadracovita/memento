import { useState } from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";

// import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function Hooks() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Hooks"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p className="card-section">useState</p>
					<p className="card-section">useEffect</p>
					<p className="card-section">useLayoutEffect</p>
					<p className="card-section">useRef</p>
					<p className="card-section">useCallback</p>
					<p className="card-section">useMemo</p>
					<p className="card-section">useContext</p>
				</>
			}
		</div>
	);
}