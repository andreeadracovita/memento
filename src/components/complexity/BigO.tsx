import { useState } from "react";

import CardHeader from "../CardHeader";

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
					<p>Big O Notation is a metric for determining the <strong>efficiency</strong> of an algorithm. It allows you to estimate how long your code will run on different sets of inputs and measure <strong>how effectively your code scales</strong> as the size of your input increases.</p>
					<p>Big O, also known as Big O notation, represents an algorithm's <strong>worst-case</strong> complexity.</p>
				</>
			}
		</div>
	);
}