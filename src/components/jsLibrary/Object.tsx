import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function Object() {
	const [toggle, setToggle] = useState(false);
	const code = `TODO`;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Object"}
				link={"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<pre>{code}</pre>
				</>
			}
		</div>
	);
}