import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function JSWebBrowsers() {
	const [toggle, setToggle] = useState(false);
	const code = ``;

	return (
		<div className="grey-card">
			<CardHeader
				title={"JS in Web Browsers"}
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