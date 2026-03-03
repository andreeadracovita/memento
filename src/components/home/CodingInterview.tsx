import { useState } from "react";
import { Link } from "react-router-dom";

import Accent from "components/Accent";
import CardHeader from "components/CardHeader";

export default function CodingInterview() {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="grey-card">
			<CardHeader
				title={"3 Coding Interview"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<p><Accent>Coding Interview (~1h)</Accent>: assess knowledge of the programming language for the job, data structures, algorithms and complexity.</p>
					<ul>
						<li><Link to="/memento/js-library">JavaScript</Link></li>
						<li><Link to="/memento/react">React</Link></li>
						<li><Link to="/memento/java-cpp">Java & C++</Link></li>
						<li><Link to="/memento/data-structures">Data structures</Link></li>
						<li><Link to="/memento/algorithms">Algorithms</Link></li>
						<li><Link to="/memento/problem-solving">Problem Solving</Link></li>
					</ul>
				</>
			}
		</div>
	);
}