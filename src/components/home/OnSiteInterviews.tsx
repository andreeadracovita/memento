import { useState } from "react";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function OnSiteInterviews() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"4 On-Site Interviews"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p><Accent>On-Site Interviews (~3h)</Accent>: meet the team, technical discussions, job relevant coding interviews.</p>
				</>
			}
		</div>
	);
}