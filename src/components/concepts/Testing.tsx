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
					<p><strong>Motto</strong>: Expect abuse and plan for it.</p>
					<p>Approach the problem in a structured manner, not just list everything.</p>
					<ul>
						<li>Manual vs. Automated Testing</li>
						<li>Black Box Testing vs. White Box Testing - degree of access we have into the software. Black box - we are given the software as-is and need to test it. With white box testing, we have additional programming access to test individual functions.</li>
					</ul>
					<p className="card-section">Approach to testing a software</p>
					<ul>
						<li>Black Box or White Box?</li>
						<li>Who will use it? And why?</li>
						<li>What are the use cases?</li>
						<li>What are the bounds of use?</li>
						<li>What are the stress conditions / failure conditions?</li>
						<li>What are the test cases? How would you perform the testing?</li>
					</ul>
				</>
			}
		</div>
	);
}