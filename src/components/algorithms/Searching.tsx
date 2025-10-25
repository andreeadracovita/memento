import { useState } from "react";

import CardHeader from "../CardHeader";

export default function Searching() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Searching"}
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