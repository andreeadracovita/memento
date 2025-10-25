import { useState } from "react";

import CardHeader from "../CardHeader";

export default function PerformanceChart() {
	const [toggle, setToggle] = useState(true);

	return (
		<div className="grey-card">
			<CardHeader
				title={"Performance Chart"}
				toggle={toggle}
				handleToggle={() => setToggle(!toggle)}
			/>
			{
				toggle &&
				<>
					<div className="d-flex justify-content-center mb-2">
						<span>
							<code style={{ background: "#ff8989", color: "black" }}>Horrible</code>
						</span>
						<span className="ms-2">
							<code style={{ background: "#FFC543", color: "black" }}>Bad</code>
						</span>
						<span className="ms-2">
							<code style={{ background: "yellow", color: "black" }}>Fair</code>
						</span>
						<span className="ms-2">
							<code style={{ background: "#C8EA00", color: "black" }}>Good</code>
						</span>
						<span className="ms-2">
							<code style={{ background: "#53d000", color: "black" }}>Excellent</code>
						</span>
					</div>
					<div className="d-flex justify-content-center">
						<img src="time-chart.svg" />
					</div>
				</>
			}
		</div>
	);
}