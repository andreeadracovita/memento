import { useState } from "react";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function SalaryDiscussion() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"5 Salary Discussion"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p><Accent>To each their own ☻</Accent></p>
				</>
			}
		</div>
	);
}