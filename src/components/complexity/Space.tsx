import { useState } from "react";

import CardHeader from "../CardHeader";

export default function Space() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Space Complexity"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>An algorithm's space complexity specifies the total amount of space or memory required to execute an algorithm as a function of the size of the input.</p>
				</>
			}
		</div>
	);
}