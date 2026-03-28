import { useState } from "react";

import CardHeader from "components/CardHeader";

export default function Testing() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Testing"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>The most common approach uses Jest as the test runner and assertion library, combined with React Testing Library for rendering components and querying the DOM in a user-like manner.</p>
				</>
			}
		</div>
	);
}