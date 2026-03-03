import { useState } from "react";
import { Link } from "react-router-dom";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function TechnicalScreening() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"2 Technical Screening"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p><Accent>Technical Screening (~45 min)</Accent>: assess technical expertise</p>
					<ul>
						<li><Link to="/memento/concepts">Concepts: memory management, threads, complexity, binary</Link></li>
						<li><Link to="/memento/data-structures">Data structures</Link></li>
						<li><Link to="/memento/algorithms">Algorithms</Link></li>
					</ul>
				</>
			}
		</div>
	);
}