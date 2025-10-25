import { useState } from "react";

import CardHeader from "../CardHeader";

export default function Recursion() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Recursion"}
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