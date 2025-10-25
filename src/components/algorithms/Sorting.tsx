import { useState } from "react";

import CardHeader from "../CardHeader";

export default function Sorting() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Sorting"}
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