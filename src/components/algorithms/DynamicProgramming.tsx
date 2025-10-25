import { useState } from "react";

import CardHeader from "../CardHeader";

export default function DynamicProgramming() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Dynamic Programming"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
				</>
			}
		</div>
	);
}