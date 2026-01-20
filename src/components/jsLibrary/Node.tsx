import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function Node() {
	const [toggle, setToggle] = useState(false);
	const code = ``;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Server-Side JS with Node"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<pre>{code}</pre>
				</>
			}
		</div>
	);
}