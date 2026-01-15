import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function Set() {
	const [toggle, setToggle] = useState(false);
	const code = `TODO`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Set"}
				link={"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>Set = a collection of values, not ordered/indexed, does not allow duplicates</p>
					<pre>{code}</pre>
				</>
			}
		</div>
	);
}