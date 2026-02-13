import { useState } from "react";

import CardHeader from "components/CardHeader";
import Accent from "components/Accent";

export default function BigO() {
	const [toggle, setToggle] = useState(true);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Big O Notation"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p>What is algorithmical time complexity?</p>
					<p>The estimated amount of time required for a program to finish its job with regards to big input size.</p>
					<p>3 different notations:</p>
					<ul>
						<li><Accent>O(n)</Accent>: Big O, worst case, the most commonly known and used by devs to assess theoretical performance</li>
						<li><Accent>θ(n)</Accent>: Big Theta, average case, interchanged with O(n) to assess theoretical performance</li>
						<li><Accent>Ω(n)</Accent>: Big Omega, best case, niche, can be powerful for heuristics</li>
					</ul>
				</>
			}
		</div>
	);
}