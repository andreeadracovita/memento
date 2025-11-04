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
					<p>The Set object lets you store unique values of any type, whether primitive values or object references.</p>
					<pre>{code}</pre>
				</>
			}
		</div>
	);
}