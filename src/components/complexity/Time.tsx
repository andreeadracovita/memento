import { useState } from "react";

import CardHeader from "../CardHeader";

export default function Time() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Time Complexity"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>An algorithm's time complexity specifies how long it will take to execute an algorithm as a function of its input size.</p>
				</>
			}
		</div>
	);
}