import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function List() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"List"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>Arrays are used when a list is necessary.</p>
				</>
			}
		</div>
	);
}