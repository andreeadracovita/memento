import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function AsynchronousJS() {
	const [toggle, setToggle] = useState(false);
	const code = ``;

	return (
		<div className="grey-card">
			<CardHeader
				title={"Asynchronous JS"}
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